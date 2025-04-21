import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const TottoFooter = () => {
  return (
    <footer className="totto-footer">
      {/* Sección de Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-text">
          <h3>Regístrate y obtén 20% de descuento en tu próxima compra.</h3>
          <p>Además celebramos contigo, en el mes de tu cumpleaños disfruta del 25% de descuento.</p>
        </div>
        <div className="newsletter-button">
          <a href="/registro-datos" className="subscribe-btn">Suscríbete</a>
        </div>
        <div className="disclaimer">
          <p>*Los descuentos de registro no son acumulables. Aplican términos y condiciones, consúltalos en: <a href="https://co.totto.com/promociones-vigentes">https://co.totto.com/promociones-vigentes</a></p>
        </div>
      </div>

      {/* Columnas del menú */}
      <div className="footer-columns">
        {/* Columna 1 */}
        <div className="footer-col">
          <h4>SERVICIO AL CLIENTE</h4>
          <ul>
            <li><a href="/envios-y-entregas">Envíos y entregas</a></li>
            <li><a href="/faq">Servicio al cliente</a></li>
            <li><a href="/cambios-y-devoluciones">Cambios y devoluciones</a></li>
            <li><a href="/sucursales">Encuentra tu tienda</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=573022200200">Escríbenos por whatsapp</a></li>
            <li><a href="https://www.keypago.com/">Crédito Keypago</a></li>
            <li><a href="/legales/politica-y-aviso-de-privacidad">Aviso de privacidad</a></li>
            <li><a href="/promociones-vigentes">Promociones vigentes</a></li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div className="footer-col">
          <h4>SÉ PARTE DE TOTTO</h4>
          <ul>
            <li><a href="/talento-totto">Colaboradores</a></li>
            <li><a href="https://ventascorporativas.totto.com/">Negocios empresariales</a></li>
            <li><a href="https://concursototto.com/">Concurso Totto</a></li>
            <li><a href="https://tottoxelmundo.com/">Totto X el mundo</a></li>
            <li><a href="https://totto.evaluar.com/">Trabaja con nosotros</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-col">
          <h4>NOSOTROS</h4>
          <ul>
            <li><a href="/quienes-somos">Quiénes somos</a></li>
            <li><a href="/linea-etica">Línea ética</a></li>
            <li><a href="/sostenibilidad">Sostenibilidad</a></li>
            <li><a href="/prensa">Prensa</a></li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div className="footer-col">
          <h4>CATEGORÍAS</h4>
          <ul>
            <li><a href="/morrales">Morrales</a></li>
            <li><a href="/mujer">Mujer</a></li>
            <li><a href="/hombre">Hombre</a></li>
            <li><a href="/ninos">Niño</a></li>
            <li><a href="/nina">Niña</a></li>
            <li><a href="/mascotas">Mascotas</a></li>
            <li><a href="/personajes">Personajes</a></li>
            <li><a href="/unisex">Unisex</a></li>
            <li><a href="/regreso-a-clases">Regreso a clases</a></li>
          </ul>
        </div>

        {/* Columna 5 - País y medios de pago */}
        <div className="footer-col">
          <div className="country-selector">
            <div className="current-country">
              <span>Colombia</span>
              <img src="https://tottoco.vtexassets.com/arquivos/colombiaIcon.png" alt="Colombia" />
            </div>
          </div>

        </div>

        <div className='footer-col'>
        <div class="payment-methods">
            <p class="payment-icons">
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/pse.png" 
                alt="PSE" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/mastercard.png" 
                alt="Mastercard" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/visa.png" 
                alt="Visa" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/americanexpress.png" 
                alt="American Express" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/dinersclub.png" 
                alt="Diners Club" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/efecty.png" 
                alt="Efecty" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/creditofacil.png" 
                alt="Crédito Fácil" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vtexassets.com/arquivos/sistecredito.png" 
                alt="Sistecrédito" 
                />
                <img 
                class="payment-icon" 
                src="https://tottoco.vteximg.com.br/arquivos/addione.png" 
                alt="Addi" 
                />
            </p>
        </div>
        </div>
      </div>

      

      {/* Redes sociales y enlaces legales */}
      <div className="footer-bottom">
        <Container className="d-flex justify-content-center align-items-center">
            <div className="social-networks">
            <a href="https://www.facebook.com/totto.brand/" target="_blank" rel="noopener noreferrer">
                <img src="https://tottoco.vtexassets.com/assets/vtex/assets-builder/tottoco.storetheme/1.0.6/svgs/footer/social/facebook___1826c4522e3fb0edc2cbad41cdc687a9.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/tottobrand/" target="_blank" rel="noopener noreferrer">
                <img src="https://tottoco.vtexassets.com/assets/vtex/assets-builder/tottoco.storetheme/1.0.6/svgs/footer/social/instagram___b4791eb92b7d44fd5d4bf558d0a36255.svg" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@tottobrand" target="_blank" rel="noopener noreferrer">
                <img src="https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/8333968c-3f4e-45fb-81ba-2c1a21f14f9a___112645a2db55c4218b08f1cd61bb653b.svg" alt="TikTok" />
            </a>
            </div>

            <div className="legal-links">
            <a href="/promociones-vigentes">PROMOCIONES VIGENTES</a>
            <a href="https://tottoco.vteximg.com.br/arquivos/PC-POLiTICA-PROTECCIo-DATOS-PERSONALES-V4-13-06-2024.pdf">POLÍTICA DE TRATAMIENTOS DE DATOS</a>
            <a href="/terminos-y-condiciones">TÉRMINOS Y CONDICIONES</a>
            <span>© 2023 Totto</span>
            </div>
        </Container>
      </div>

      {/* Información de contacto */}
      <div className="contact-info">
        <Container fluid className="d-flex justify-content-center align-items-center flex-row position-relative">
            <div className="contact-item">
            <p><strong>NALSANI S.A.S</strong> Nit.800.020.706-9</p>
            </div>
            <div className="contact-item">
            <p>Cra. 43 A N° 20C 55 Bogotá - Colombia</p>
            </div>
            <div className="contact-item">
            <p>Nuestra línea nacional gratuita 01 8000 111707</p>
            </div>
            <div className="contact-item">
            <p><strong>Correo Notificaciones judiciales:</strong> impuestos@totto.com</p>
            </div>
            <div className="contact-item">
            <p><strong>Correo Clientes:</strong> Servicioalcliente@totto.com</p>
            </div>
        </Container>
      </div>
    </footer>
  );
};

export default TottoFooter;