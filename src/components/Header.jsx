import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShippingFast } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


function Header() {
  return (
     <Navbar style={{backgroundColor:"#002e0f"}} expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand href="#home"> <Link to={"/"} className='text-decoration-none fw-bold'><FaShippingFast className='fs-2' />Flopcart</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <input type='text' className='form-control' placeholder='search your product'/>
            </Nav.Item>
            <Link to={"/Wishlist"}className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faHeart} className='btn btn-danger me-2' />Wishlist <Badge pill bg="secondary">10</Badge></Link>
                        <Link to={"/Cart"}className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faCartPlus} className='btn btn-success me-2' />Cart <Badge pill bg="secondary">10</Badge></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
