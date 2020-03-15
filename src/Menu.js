import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Language from './Language'
import ReactFlagsSelect from 'react-flags-select';
import logo from './ashkelon-logo.svg';

class Menu extends React.Component {
    render() {
        let DICT = Language.getDict();
        let mrClass = (Language.getLanguage() === 'IL') ? 'ml-auto' : 'mr-auto';
        return(
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo"/>{DICT.rules}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={mrClass}>
                        <Nav.Link href="/kids4_5">{DICT.kids4_5}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav-2">
                    <Nav>
                            <ReactFlagsSelect defaultCountry={Language.getLanguage()}
                                              countries={["IL", "RU"]}
                                              // customLabels={{"IL": "עיברית","RU": "Русский"}}
                                              alignOptions="right"
                                              showSelectedLabel={false}
                                              showOptionLabel={false}
                                              onSelect={(lan => {Language.changeLanguage(lan); this.props.refresh()})}>
                            </ReactFlagsSelect>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Menu;