import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            phase: 1 // There will be 3 phases: User Info -> Profile Pic -> Follow topics
         }
    }
    render() { 
        return ( 
            <div className="registerpage">
                <section className="register">
                    <div className="register__container">
                        <p>Register</p>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Register;