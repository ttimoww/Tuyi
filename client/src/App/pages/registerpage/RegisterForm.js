import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            password2: '',
            terms: false
         }
    }

    handleFirstnameChange = e => this.setState({ firstname: e.target.value });
    handleLastnameChange = e => this.setState({ lastname: e.target.value });
    handleEmailChange = e => this.setState({ email: e.target.value });
    handleUsernameChange = e => this.setState({ username: e.target.value });
    handlePasswordChange = e => this.setState({ password: e.target.value });
    handlePassword2Change = e => this.setState({ password2: e.target.value });
    handleTermsChange = e => this.setState({ terms: e.target.checked });

    handleFormSubmit = e => {
        e.preventDefault();
        if(this.state.firstname && this.state.lastname && this.state.username && this.state.email && this.state.password && this.state.password2){
            if (this.state.password === this.state.password2){
                if (this.state.terms) {

                    const body = {
                        firstName: this.state.firstname,
                        lastName: this.state.lastname,
                        userName: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    }

                    fetch('api/register', {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(resp => {
                        if (resp.status === 200){
                            this.props.phaseUp();
                            this.props.changeSuccessMessage('You\'re Succesfully registered! Welcome to Tuyi');
                        } else if ( resp.status === 409){
                            resp.json().then(json => {
                                if (json.duplicate === 'email'){this.props.changeErrorMessage('This e-mail address is already taken');}
                                else if (json.duplicate === 'username'){this.props.changeErrorMessage('This username is already taken');}
                            })
                        } else if (resp.status === 500){
                            this.props.changeErrorMessage('Oops, something went wrong');
                        }
                    })
                } else{
                    this.props.changeErrorMessage('Accepting the Terms of Service is required')
                }
            } else{
                this.props.changeErrorMessage('Passwords do not match')
            }
        }else{
            this.props.changeErrorMessage('Please fill in all fields')
        }
    }

    /**
     * Function that does a simple login with a dummy 
     * account to test phase 1 & 2
     */
    handleFakeFormSubmit = e => {
        e.preventDefault();

        const body = {
            email: 'my@email.com',
            password: 'hallo123'
        }

        fetch('/api/login', {
            method: 'POST', 
            body: JSON.stringify(body), 
            headers: {'Content-Type': 'application/json'}
        })
        .then( resp => {
            this.props.phaseUp();
            this.props.changeSuccessMessage('You\'re Succesfully registered! Welcome to Tuyi');
        }) 
    }

    render() { 
        return ( 
            <section className="registerform">
                <form>
                    <input type="text" placeholder="First name" id="register-firstname" onChange={this.handleFirstnameChange} />
                    <input type="text" placeholder="Last name" id="register-lastname" onChange={this.handleLastnameChange} />
                    <input type="email" placeholder="Enter your email" id="register-email" onChange={this.handleEmailChange} />
                    <input type="text" placeholder="Choose your username" id="register-username" onChange={this.handleUsernameChange} />
                    <input type="password" placeholder="Password" id="register-pass" onChange={this.handlePasswordChange} />
                    <input type="password" placeholder="Repeat password" id="register-pass-check" onChange={this.handlePassword2Change} />
                    <div className="register-terms">
                        <input type="checkbox" id="register-terms" onChange={this.handleTermsChange} /><p>I accept the <span className="txt-green">Terms of Service</span>.</p>
                    </div>
                    <button type="submit" onClick={this.handleFormSubmit} >Next step</button>
                    <button type="submit" onClick={this.handleFakeFormSubmit} >Development skip</button>
                </form>
            </section>
         );
    }
}
 
export default RegisterForm;