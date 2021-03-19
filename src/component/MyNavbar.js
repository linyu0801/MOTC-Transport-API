import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// 要使用能有active css效果的NavLink元件

import { NavLink, withRouter, Link } from 'react-router-dom'
import '../styles/navbar.scss'

function MyNavbar(props) {
  // const { changecity, setChangecity } = props

  const city = [
    'Taipei',
    'NewTaipei',
    'Taoyuan',
    'Taichung',
    'Tainan',
    'Kaohsiung',
    'Keelung',
    'Hsinchu',
    'HsinchuCounty',
    'MiaoliCounty',
    'ChanghuaCounty',
    'NantouCounty',
    'YunlinCounty',
    'ChiayiCounty',
    'Chiayi',
    'PingtungCounty',
    'YilanCounty',
    'HualienCounty',
    'TaitungCounty',
    'KinmenCounty',
    'PenghuCounty',
    'LienchiangCounty',
  ]
  return (
    <>
      <Navbar
        className="alex-navbarHeight"
        collapseOnSelect
        expand="lg"
        variant="dark"
        id="navbar"
      >
        <Navbar.Brand as={NavLink} to="/" className="nav-left"></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link as={NavLink} to="/scenicSpot">
              全部縣市
            </Nav.Link>

            <Nav>
              <NavDropdown.Divider />
              <NavDropdown
                title="各縣市景點"
                id="nav-member"
                className="nav-member-link "
              >
                {city.map((value, index) => (
                  <Nav.Link as={NavLink} to={`/scenicSpot/${city[index]}`}>
                    {/* <Nav.Link href={`/scenicSpot/${city[index]}`}> */}

                    {`${city[index]}`}
                    {/* <NavDropdown.Item
                      // as={NavLink}
                      className="nav-ul "
                     }
                    >
                    </NavDropdown.Item> */}
                  </Nav.Link>
                ))}
              </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar)
