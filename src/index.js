import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import image from './computer.svg';
import cimg from './aurionpro-Logo_Color-1-01_Aurionpro-Logo-2022-color-.svg';

function Form__Input__error(props){
    return (
        <div className="form--input--error--message">{props.message}</div>
    );
}
class Form__Input extends React.Component{
    render() {
        return (
            <div className="form--input--group">
                <input type={this.props.type} className="form--input" autoFocus placeholder={this.props.pholder}></input>
                <Form__Input__error message="Username must be at least 10 characters in length"/>
            </div>
        );
    }
}
function FormError(props){
    return(
        <div className="form--message form--message--error">{props.message}</div>
    );
}
class FormLogin extends React.Component {
    _onClick = (e) => {
        e.preventDefault();
        this.props.handleClick();
    }
    render() {
        return (
            <form className={this.props.classadd} >
                <h1 className="form--title">Login</h1>
                <FormError message="Invalid Login Id/Password"/>
                <Form__Input type="text" pholder="Username or email"/>
                <Form__Input type="password" pholder="Password" />
                <button className="form--button" type="submit">Continue</button>
                <p className="form--text">
                    <a className="form--link" href="#" >Forgot your password?</a>
                </p>
                <p className="form--text">
                    <a className="form--link" href="./" id="linkcreateaccount" onClick={e => this._onClick(e)} >Don't have an account? Create account</a>
                </p>
            </form>
        );
    }
}
class FormCreateAccount extends React.Component{
    _onClick = (e) => {
        e.preventDefault();
        this.props.handleClick();
    }
    render() {
        return (
            <form className={this.props.classadd}>
                <h1 className="form--title">Create Account</h1>
                <FormError message="Invalid Login Id/Password"/>
                <Form__Input type="text" pholder="Username or email"/>
                <Form__Input type="text" pholder="EmailAddress"/>
                <Form__Input type="password" pholder="Password" />
                <Form__Input type="password" pholder="Confirm password" />
                <button className="form--button" type="submit">Continue</button>
                <p className="form--text">
                    <a className="form--link" href="./" id="linklogin" onClick={e => this._onClick(e)} >Already have an account? Sign in</a>
                </p>
            </form>
        );
    }
}
class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginclassadd: "form",
            loginisActive: true,
            signupclassadd: "form form--hidden",
            signupIsActive: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        const loginclassadd = this.state.loginclassadd;
        const signupclassadd = this.state.signupclassadd;
        if(this.state.loginisActive && !this.state.signupIsActive){
            this.setState({
                loginclassadd: loginclassadd.concat(" ", "form--hidden"),
                loginisActive: !this.state.loginisActive,
                signupclassadd: signupclassadd.replace(" form--hidden", ""),
                signupIsActive: !this.state.signupIsActive,                
            });
        }
        else if(this.state.signupIsActive && !this.state.loginisActive){
            this.setState({
                loginclassadd: loginclassadd.replace(" form--hidden", ""),
                loginisActive: !this.state.loginisActive,
                signupclassadd: signupclassadd.concat(" ", "form--hidden"),
                signupIsActive: !this.state.signupIsActive,                
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="container--img">
                    <img className="cimg" src={cimg} alt="Aurionpro svg"></img>
                </div>
                <div className="page">
                    <div className="page--table">
                        <div className="page--table--column">
                            <img className="wimg" src={image} alt="women on computer" />
                        </div>
                        <div className="page--table--column form--container">
                            <div className="page--table content-center">
                                <FormLogin classadd={this.state.loginclassadd} handleClick={this.handleClick} />
                                <FormCreateAccount classadd={this.state.signupclassadd} handleClick={this.handleClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

