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
        this.props.phaseUp();
    }

    render() { 

        return ( 
            <section className="registeravatar">
                <h1>Give yourself a face by<br />uploading a Profile Picture. <span>😉</span></h1>
                <div className="avatar-preview" style={this.state.file ? {backgroundImage: `url(${this.state.file})`, backgroundSize: 'cover'} : {}}>
                </div>
                <div className="avatar-upload">
                    <input type="file" accept="image/png, image/jpeg" id="avatar-upload" onChange={this.handleChange} />
                    <label htmlFor="avatar-upload">Choose File ...</label>
                </div>
                <button type="submit">Submit</button>
                <p className="registeravatar__skip" onClick={this.handlePhaseUp}><span className="txt-green">Skip</span> this step for now</p>
            </section>
         );
    }
}
 
export default RegisterAvatar;