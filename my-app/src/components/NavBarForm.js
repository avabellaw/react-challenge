import React, { Component } from 'react'
import NavBarChild from "./NavBarChild"
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    toggleLoggedIn = () => {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return (
            <div className ={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild isLoggedIn={this.state.isLoggedIn} clickHandler={this.toggleLoggedIn} />
            </div>
        )
    }
}

export default NavBarForm