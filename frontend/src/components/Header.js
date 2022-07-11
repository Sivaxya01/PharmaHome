import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import navColor from "../css/styles.css"
// import logo from '../../public/images/logo.png'
import { Component } from 'react'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar className='navColor' variant='dark' expand='lg' collapseOnSelect>
        <Container>
       
          <LinkContainer to='/'>
            <Navbar.Brand><b style={{ fontSize: 20, marginRight:0 , paddingRight:0 }}>Pharmahome</b></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' style={{marginLeft:0 , paddingLeft:0 }}/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
            </LinkContainer>
            <i className='fas fa-user-alt'></i>
              {userInfo ? 
              (
                <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/terms'>
                    <NavDropdown.Item>Terms &amp; Policies</NavDropdown.Item>
                  </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
                
              )}
              <span className='.bg-white'><i className='fas fa-laptop-code '></i></span>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <LinkContainer to='/blog'>
                <Nav.Link>
                  <i className='fas fa-blog'></i> Blog
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fa fa-info-circle'></i> About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contacts'>
                <Nav.Link>
                  <i className='fas fa-phone-alt'></i> Contacts
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
