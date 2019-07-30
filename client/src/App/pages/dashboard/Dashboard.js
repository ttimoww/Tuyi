import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo: {
                firstName: null,
                lastName: null,
                email: null,
                availability: null
            }
         }
    }

    componentWillMount = () => {
        fetch('/api/userinfo')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                userInfo: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    availability: data.availability
                }
            })
        });
    }

    handleLogout = () => {
        fetch('/api/logout')
        .then(resp => {
            console.log(resp.status);
            if (resp.status === 200){
                let { history } = this.props;
                history.push({
                    pathname: '/'
                })
            }
        })
    }

    render() { 
        return ( 
            <div className="dashboard">
                <button onClick={this.handleLogout}>Logout</button>
                <ul>
                    <li>{this.state.userInfo.firstName}</li>
                    <li>{this.state.userInfo.lastName}</li>
                    <li>{this.state.userInfo.email}</li>
                </ul>
            </div>
         );
    }
}
 
export default Dashboard;