import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a> */}
          <a href='https://api.whatsapp.com/send/?phone=+917668102374' className='me-4 text-reset'>
            <i className='fab fa-whatsapp'></i>
          </a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=decorartmoradabad@gmail.com' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a> */}
          <a href='https://www.linkedin.com/in/decor-art-797814224/' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a> */}
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>DecorArt
              </h6>
              <p style={{textAlign:'justify'}}>
              DecorArt is the best manufacturer, exporter and supplier of MDF wooden coaster set, Iron hamper basket, iron lotus design candle stand, wooden serving tray set and much more.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Top Products</h6>
              <p>
                <a href='/product-category/BRASS ARTICLE' className='text-reset'>
                  Brass Article
                </a>
              </p>
              <p>
                <a href='/product-category/ALUMINUM CRAFTED' className='text-reset'>
                  Aluminum Crafted
                </a>
              </p>
              <p>
                <a href='/product-category/WOODEN CRAFTED' className='text-reset'>
                  Wooden Crafted
                </a>
              </p>
              <p>
                <a href='/product-category/CAKE STAND' className='text-reset'>
                  Cake Stand
                </a>
              </p>
            </div>

            {/* <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>&nbsp;</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Aluminium Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Wire Mesh Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hexagon Glass Mirror
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Silver Products
                </a>
              </p>
            </div> */}

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Harthala, Moradabad, UP
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                decorartmoradabad@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +91 76681 02374
              </p>
              <p>
                <i className='fas fa-print me-3'></i> +91 89797 86605
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href=''>
          DecorArt.co.in
        </a>
      </div>
    </MDBFooter>
  );
}