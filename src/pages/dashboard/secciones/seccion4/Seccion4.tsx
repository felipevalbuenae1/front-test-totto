import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

type Resultado = {
  activos: number;
  totto: number;
  b2b: number;
  ambos: number;
  porDepartamento: Record<string, number>;
  activosConStock: number;
  discrepanciasSEO: string[];
};

export default function VtexDiagnostic() {
  const [resultados, setResultados] = useState<Resultado | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Cargar archivo por defecto al iniciar el componente
  useEffect(() => {
    const cargarArchivoPorDefecto = async () => {
      try {
        setLoading(true);
        setSuccessMessage(null); // Limpiar mensaje de éxito
        const response = await fetch('/assets/default.xlsx'); // Cambia esta ruta según la ubicación del archivo
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo por defecto.');
        }
        const blob = await response.blob();
        const file = new File([blob], 'default.xlsx', { type: blob.type });
        await procesarArchivo(file);
        setSuccessMessage('El archivo por defecto se cargó exitosamente.');
      } catch (err: any) {
        setError(err.message || 'Error al cargar el archivo por defecto.');
      } finally {
        setLoading(false);
      }
    };

    cargarArchivoPorDefecto();
  }, []);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSuccessMessage(null); // Limpiar mensaje de éxito al cargar un nuevo archivo
    await procesarArchivo(file);
  };

  const procesarArchivo = async (file: File) => {
    setLoading(true);
    setError(null);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'buffer' });

      const catalogoSheet = workbook.Sheets['Catálogo VTEX'];
      const stockSheet = workbook.Sheets['Stock'];

      if (!catalogoSheet || !stockSheet) {
        throw new Error('El archivo debe contener las hojas "Catálogo VTEX" y "Stock".');
      }

      const catalogo = XLSX.utils.sheet_to_json<Record<string, any>>(catalogoSheet);
      const stock = XLSX.utils.sheet_to_json<Record<string, any>>(stockSheet);

      const resultados = procesarDatos(catalogo, stock);
      setResultados(resultados);
    } catch (err: any) {
      setError(err.message || 'Error al procesar el archivo.');
    } finally {
      setLoading(false);
    }
  };

  const procesarDatos = (
    catalogo: Record<string, any>[],
    stock: Record<string, any>[]
  ): Resultado => {
    // Productos activos
    const activos = catalogo.filter(
      (p) =>
        p['_ActivateSkuIfPossible'] === 'YES' &&
        p['_SkuIsActive (Not changeable)'] === 'YES' &&
        p['_ProductIsActive (Not changeable)'] === 'YES' &&
        p['_ShowOnSite'] === 'YES'
    );

    // Totto, B2B y ambos
    const tottoRefs = new Set<string>();
    const b2bRefs = new Set<string>();
    const ambasRefs = new Set<string>();

    activos.forEach((p) => {
      const stores = String(p['_Stores'] || '').split(',');
      const sku = p['_SKUReferenceCode'] || p['_SkuId (Not changeable)'];
      const isTotto = stores.includes('1');
      const isB2B = stores.includes('3');

      if (isTotto) tottoRefs.add(sku);
      if (isB2B) b2bRefs.add(sku);
      if (isTotto && isB2B) ambasRefs.add(sku);
    });

    // SKUs por departamento
    const porDepartamento: Record<string, Set<string>> = {};
    activos.forEach((p) => {
      const dep = p['Departamento'] || 'Sin Departamento';
      const sku = p['_SkuId (Not changeable)'];
      if (!porDepartamento[dep]) porDepartamento[dep] = new Set();
      porDepartamento[dep].add(sku);
    });

    const resumenPorDep: Record<string, number> = {};
    for (const dep in porDepartamento) {
      resumenPorDep[dep] = porDepartamento[dep].size;
    }

    // Productos activos con stock
    const stockMap = new Map(stock.map((p) => [p['_SkuId'], p['stock'] || 0]));
    const activosConStock = activos.filter((p) => {
      const stockVal = stockMap.get(p['_SkuId (Not changeable)']);
      return stockVal && stockVal > 0;
    }).length;

    // Discrepancias SEO vs Género
    const discrepanciasSEO: string[] = activos
      .filter((p) => {
        const genero = (p['Género'] || '').toLowerCase();
        const seo = (p['Nombre SEO'] || '').toLowerCase();
        return (
          (genero.includes('niña') && seo.includes('niño')) ||
          (genero.includes('niño') && seo.includes('niña'))
        );
      })
      .map((p) => p['Nombre SEO']);

    return {
      activos: activos.length,
      totto: tottoRefs.size,
      b2b: b2bRefs.size,
      ambos: ambasRefs.size,
      porDepartamento: resumenPorDep,
      activosConStock,
      discrepanciasSEO,
    };
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Diagnóstico Catálogo VTEX</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFile} className="mb-4" />

      {loading && <p className="text-blue-500">Procesando archivo...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      {resultados && (
        <div className="space-y-4">
          <div className="bg-green-100 p-4 rounded shadow">
            <strong>1. Productos activos:</strong> {resultados.activos}
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <strong>2. Totto.com:</strong> {resultados.totto} |{' '}
            <strong>B2B:</strong> {resultados.b2b} |{' '}
            <strong>Ambos:</strong> {resultados.ambos}
          </div>
          <div className="bg-purple-100 p-4 rounded shadow">
            <strong>3. SKUs por departamento:</strong>
            <ul className="list-disc pl-5">
              {Object.entries(resultados.porDepartamento).map(([dep, count]) => (
                <li key={dep}>
                  {dep}: {count}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow">
            <strong>4. Activos con stock:</strong> {resultados.activosConStock}
          </div>
          <div className="bg-red-100 p-4 rounded shadow">
            <strong>5. Discrepancias SEO/Género:</strong>
            <ul className="list-disc pl-5">
              {resultados.discrepanciasSEO.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}