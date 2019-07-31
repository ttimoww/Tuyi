import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            password2: '',
            terms: false
         }
    }

    handleFirstnameChange = e => this.setState({ firstname: e.target.value });
    handleLastnameChange = e => this.setState({ lastname: e.target.value });
    handleEmailChange = e => this.setState({ email: e.target.value });
    handlePasswordChange = e => this.setState({ password: e.target.value });
    handlePassword2Change = e => this.setState({ password2: e.target.value });
    handleTermsChange = e => this.setState({ terms: e.target.checked });

    handleSubmit = e => {
        e.preventDefault();

    }

    render() { 
        return ( 
            <section className="registerform">
                <form>
                    <input type="text" placeholder="First name" id="register-firstname" onChange={this.handleFirstnameChange} />
                    <input type="text" placeholder="Last name" id="register-lastname" onChange={this.handleLastnameChange} />
                    <input type="email" placeholder="Enter your email" id="register-email" onChange={this.handleEmailChange} />
                    <input type="password" placeholder="Password" id="register-pass" onChange={this.handlePasswordChange} />
                    <input type="password" placeholder="Repeat password" id="register-pass-check" onChange={this.handlePassword2Change} />
                    <div className="register-terms">
                        <input type="checkbox" id="register-terms" onChange={this.handleTermsChange} /><p>I accept the <span className="txt-green">Terms of Service</span>.</p>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} >Next step</button>
                </form>
            </section>
         );
    }
}
 
export default RegisterForm;