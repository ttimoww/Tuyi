import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import RegisterForm from './RegisterForm';
import RegisterAvatar from './RegisterAvatar';
import RegisterInterests from './RegisterInterests';

class Registerpage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            registerErrorMessage: '',
            registerSuccessMessage: '',
            phase: 1 
         }
    }

    handlePhaseUp = () => this.setState(prevState => {
        return { phase: prevState.phase += 1 };
    });

    handlePhaseDown = () => this.setState(prevState => {
        return { phase: prevState.phase-- };
    });

    handleChangeErrorMessage = message => this.setState({ registerErrorMessage: message, registerSuccessMessage: '' });
    handleChangeSuccessMessage = message => this.setState({ registerErrorMessage: '', registerSuccessMessage: message });
    
    render() { 

        let phase = null;
        if (this.state.phase === 1){phase = <RegisterForm changeErrorMessage={this.handleChangeErrorMessage} changeSuccessMessage={this.handleChangeSuccessMessage} phaseUp={this.handlePhaseUp} />}
        else if (this.state.phase === 2){phase = <RegisterAvatar changeErrorMessage={this.handleChangeErrorMessage} changeSuccessMessage={this.handleChangeSuccessMessage} phaseUp={this.handlePhaseUp} />}
        else if (this.state.phase === 3){phase = <RegisterInterests changeErrorMessage={this.handleChangeErrorMessage} />}

        return ( 
            <div className="registerpage">
                <div className="registerpage__content">
                <section className="registerpage__logo">
                    <Link to="/"><div className="registerpage__logo__content"></div></Link>
                </section>
                <div className="register">
                    {this.state.registerErrorMessage ? <div className="login-error-message"><p>{this.state.registerErrorMessage}</p><i className="fas fa-exclamation-triangle"></i></div> : null}
                    {this.state.registerSuccessMessage ? <div className="login-success-message"><p>{this.state.registerSuccessMessage}</p><i className="fas fa-check"></i></div> : null}
                    <div className="register__container">
                        {phase}
                        {/* <div className="register__buttons">
                            <div className="register__buttons__arrow" id="left" onClick={this.handlePhaseDown} ></div>
                            <div className="register__buttons__arrow" id="right" onClick={this.handlePhaseUp} ></div>
                        </div> */}
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Registerpage;