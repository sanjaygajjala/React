import React, { Component } from 'react';
import axios from 'axios'
import {  MDBDataTable , MDBCard, MDBCardBody,MDBCardText,MDBBtn, MDBCardHeader} from "mdbreact";
import './CSS/registerformtable.css'

class Registerformtable extends Component {
    constructor(props) {
        super(props);
        this.state = { register: [] }
    }
    back=()=>
    {
        window.history.back()
    }
    info = [];
   async componentDidMount() {
      await axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
            this.info = resp.data
        })
      this.setState({register:this.info});

    }

  

    render() {
       const data = {


            columns: [
                {
                    label: 'UserId',
                    field: 'userId',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Body',
                    field: 'body',
                    sort: 'asc',
                    width: 200
                },
    
            ],
            rows: this.info
        };
        return (


           
  <MDBCard>
    <MDBCardHeader color="deep-orange lighten-1">Register Form
    <MDBBtn   gradient="peach" onClick={this.back}>Back</MDBBtn>
    </MDBCardHeader> 
    <MDBCardBody> 
      < MDBDataTable
                striped
                bordered
                hover
                data={data}
            />
    
    
    </MDBCardBody>
  </MDBCard>

        );
    }
}

export default Registerformtable;