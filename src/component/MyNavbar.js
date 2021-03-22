import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink, withRouter } from 'react-router-dom'
import '../styles/navbar.scss'

function MyNavbar(props) {
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
  //紀錄有什麼縣市
  return (
    <>
      <Navbar
        className="alex-navbarHeight"
        collapseOnSelect
        expand="lg"
        variant="dark"
        id="navbar"
        key={props.location}
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
                    {`${city[index]}`}
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
