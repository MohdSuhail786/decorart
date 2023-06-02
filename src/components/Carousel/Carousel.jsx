import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import "./Carousel.css"

export default function Carousel() {
  return (
    <MDBCarousel showControls interval={4000}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='...' />
          {/* <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='...' />
          {/* <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://images.pexels.com/photos/2736542/pexels-photo-2736542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='...' />
          {/* <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}