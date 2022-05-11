import React from 'react'
import { Card } from 'react-bootstrap'
function Sellcard(props) {
  return (
    <div>
	     <a href="/login"><Card style={{ width: '18rem',border:'solid',padding:"2rem",background:"black",color:"white" }}>
			   <Card.Body><center>
			     <Card.Title>Card Title</Card.Title>
			     <Card.Img variant="top" src="data:image/jpeg;base64,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" />
			
			     <Card.Link href="#">Card Link</Card.Link></center>
			</Card.Body></Card></a>
    </div>
  )
}

export default Sellcard