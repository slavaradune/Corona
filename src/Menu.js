import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Language from './Language'
import ReactFlagsSelect from 'react-flags-select';
import logo from './ashkelon-logo.svg';

class Menu extends React.Component {
    render() {
        let DICT = Language.getDict();
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactFlagsSelect defaultCountry={Language.getLanguage()}
                                  countries={["IL", "RU"]}
                    // customLabels={{"IL": "עיברית","RU": "Русский"}}
                                  alignOptions="right"
                                  showSelectedLabel={false}
                                  showOptionLabel={false}
                                  onSelect={(lan => {Language.changeLanguage(lan); this.props.refresh()})}>
                </ReactFlagsSelect>
                <Navbar.Brand href="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {DICT.rules}
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/kids4_5" style={{color: 'white'}}>{DICT.kids4_5}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/white_orange_belts" style={{color: 'orange'}}>{DICT.white_orange_belts}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/blue_belts" style={{color: ' #4db8ff'}}>{DICT.blue_belts}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/yellow_belts" style={{color: 'yellow'}}>{DICT.yellow_belts}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/green_belts" style={{color: 'green'}}>{DICT.green_belts}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav-2">
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Menu;