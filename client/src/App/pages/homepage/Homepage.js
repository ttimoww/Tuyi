import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    checkAuthentication = () => {
        fetch('/api/isauthenticated')
        .then(resp => {
            if (resp.status === 200){
                let { history } = this.props;
                history.push({pathname: '/dashboard'})
            }
        })
    }

    handleLoginEmail = e =>{
        this.setState({email: e.target.value});
    }

    handleLoginPassword = e =>{
        this.setState({password: e.target.value});
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        this.setState({loginErrorMessage: null});
        
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.email && this.state.password){
            fetch('/api/login', {
                method: 'POST', 
                body: JSON.stringify(body), 
                headers: {'Content-Type': 'application/json'}
            })
            .then(resp => {
                if (resp.status === 200) {
                    let { history } = this.props;
                    history.push({pathname: '/dashboard'})
                } else if (resp.status === 401){
                    this.setState({loginErrorMessage: 'Wrong username or password'})
                } else{
                    this.setState({loginErrorMessage: 'Oops, something went wrong'})
                }
            });
        }else{
            this.setState({loginErrorMessage: 'Please fill in both field'})
        }
    }

    componentDidMount = () => {
        this.checkAuthentication();
    }

    render() { 
        return ( 
            <div className="homepage">
                <div className="homepage__content">
                    <section className="homepage__logo">
                        <div className="homepage__logo__content">
                            
                        </div>
                    </section>
                    <section className="login">
                    {this.state.loginErrorMessage ? <div className="login-error-message"><p>{this.state.loginErrorMessage}</p><i className="fas fa-exclamation-triangle"></i></div> : null}
                        <div className="login__container">
                            <form onSubmit={this.handleLoginSubmit}>
                                <input type="email" placeholder="Enter your email" id="login-user" onChange={this.handleLoginEmail}/>
                                <input type="password" placeholder="Password" id="login-pass" onChange={this.handleLoginPassword} />
                                <button type="submit">Login</button>
                            </form>
                            <p className="login__newacc" ><Link to="/register">Click here</Link> to sign up!</p>
                        </div>
                    </section>
                </div>
            </div>
         );
    }
}
 
export default Homepage;