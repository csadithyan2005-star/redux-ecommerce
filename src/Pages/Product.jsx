import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Product() {
    return (
        <div className='m-5'>
            <div className='row'>
                {/* duplicate column according b to products  */}
                <div className="col-lg-3">
                    {/* cards */}
                    <Card>
                        <Card.Img style={{height:'250px'}} variant="top" src="https://myop.in/cdn/shop/files/offbeat.webp?v=1790267990&width=400" />
                        <Card.Body className='text-center'>
                            <Card.Title>Card Title</Card.Title>
                            <Link to={'/ product:id'} className='btn btn-primary'>View more</Link>
                         
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Product
