import React, { Component } from 'react';

class RegisterAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            file: null
         }
    }

    handleChange = e => {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
          })
    }

    handlePhaseUp = () => {
        this.props.changeErrorMessage('');
        this.props.phaseUp();
    }

    handleSubmit = () => {
        if(this.state.file){

        } else{
            this.props.changeErrorMessage('Please upload an Image first');
        }
    }

    render() { 

        return ( 
            <section className="registeravatar">
                <h1>Give yourself a face by<br />uploading a Profile Picture. <span role="img" aria-label="emoji">😉</span></h1>
                <div className="avatar-preview" style={this.state.file ? {backgroundImage: `url(${this.state.file})`, backgroundSize: 'cover'} : {}}>
                </div>
                <div className="avatar-upload">
                    <input type="file" accept="image/png, image/jpeg" id="avatar-upload" onChange={this.handleChange} />
                    <label htmlFor="avatar-upload">Choose File ...</label>
                </div>
                <button type="submit" onClick={this.handleSubmit} >Submit</button>
                <p className="registeravatar__skip" onClick={this.handlePhaseUp}>Skip this step for now</p>
            </section>
         );
    }
}
 
export default RegisterAvatar;