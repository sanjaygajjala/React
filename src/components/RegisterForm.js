import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader,  MDBContainer } from "mdbreact";
import './CSS/registerformtable.css'
import axios from 'axios'
class RegisterForm extends React.Component {

    constructor()
    {
        super();
        this.state = {
            userid: "",
            title: "",
            body: "",

          };
    }
  

    back=()=>
    {
        window.history.back()
    }
  submitHandler = (event) => {
    event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(resp=>{console.log(resp)})
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value },);
  };

  render() {
    return (
      <div>
       
  <MDBCard >
    <MDBCardHeader color="primary-color" tag="h3">
      Register Form
      <MDBBtn  gradient="aqua" onClick={this.back}>Back</MDBBtn>
    </MDBCardHeader>
    <MDBCardBody>
    <form
          className="needs-validation col-md-6 offset-2"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol >
            
              <input
                value={this.state.userid}
                name="userid"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="UserId"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
         
           
          </MDBRow>
          <br></br>
          <MDBRow>
          <MDBCol  >
            
              <input
                value={this.state.title}
                name="title"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Title"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <br></br>
          <MDBRow>
          <MDBCol >
             
              <input
                value={this.state.body}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="body"
                placeholder="Body"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" type="submit">
            Submit
          </MDBBtn>
        </form>
   
   
    </MDBCardBody>
  </MDBCard>

      </div>
    );
  }
}

export default RegisterForm;