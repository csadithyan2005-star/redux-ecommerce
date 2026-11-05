import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function View() {
  return (
    <div className='container my-5 pt-5'>
      <div style={{height:"80vh"}} className="row">
        <div className="col-lg-6"><img className='img-fluid' style={{width:'500px'}} src="https://png.pngtree.com/png-clipart/20240826/original/pngtree-realistic-watch-image-png-image_15852956.png" alt="" />
        <div className="d-flex justify-content-evenly mt-5">
            <button className='btn btn-outline-info'>ADD TO WISHLIST</button>
            <button className='btn btn-outline-info'>ADD TO CART</button>
          </div></div>
        
        <div className="col-lg-6">
        <h3>title</h3>
        <h2>$30</h2>
        <h4>Brand</h4>
        <h4>Category</h4>
        <h5>Client Review</h5>
        <div className="border shadow rounded my-5 p-3">
            <p><span className='fw-bolder'>Name :</span> message</p>
            <p>Rating: 5<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default View
