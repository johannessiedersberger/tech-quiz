import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, NavbarText } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class HeaderComponent extends Component {
    
    constructor(props){
        super(props);
        this.state = {
           questions: [],
          };
    }

    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Tech Quiz</NavbarBrand>
                </Navbar>
            </div>
        );
        
    }
}

export default HeaderComponent;