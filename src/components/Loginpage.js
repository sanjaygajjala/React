import React, { Component } from "react";
import Tokenservice from './Tokenservice'
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import './CSS/registerformtable.css'

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      email: "",
      password: "",

    };
  }
  token = new Tokenservice();
  
  submitHandler = event => {
    if(this.state.email === 'test@gmail.com' && this.state.password === '123456')
    {
    this.token.setToken(this.state.password);
    event.preventDefault();
    
    this.props.history.push('/')
    }
    else
    {
        event.preventDefault();
      alert("invalid login details ")
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });

  };

  render() {
    return (
      <div className="bg">
        <br></br>
        <form
          className="needs-validation col-md-6 offset-2"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>

            <MDBCol>
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
            </MDBCol>
            <MDBCol >
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control "
                name="email"
                placeholder="Your Email address"
                required

              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <br></br>
          <MDBRow>
            <MDBCol>
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Password
              </label>
            </MDBCol>
            <MDBCol >
              <input
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>

          </MDBRow>

          <MDBBtn gradient="blue" type="submit">
            Submit
          </MDBBtn>
          
        </form>
      </div>
    );
  }
}

export default Loginpage;