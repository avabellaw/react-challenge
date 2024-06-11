import css from './css/NavBarSimple.module.css';
import React  from 'react';

class NavBarSimple extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello, guest",
            buttonText: "Log in"
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello, guest" ? "Hello, " + this.props.name : "Hello, guest",
                buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
            }
        }, () => {
            console.log(this.state.message);
            console.log(this.state.buttonText);
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}!</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
};

export default NavBarSimple;