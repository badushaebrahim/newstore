import React from 'react'
import {Carousel} from 'react-bootstrap'
function Addcard() {
  return (
	<Carousel.Item>
	<img
	  className="d-block w-100"
	  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80"
	  alt="First slide"
	/>
	<Carousel.Caption>
	  <h5>Test </h5>
	  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	</Carousel.Caption>
      </Carousel.Item>
  )
}

export default Addcard