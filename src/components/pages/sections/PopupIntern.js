import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, } from 'mdbreact';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class PopupIntern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: {
                value:"",
                valid: true
              },
              Name: {
                value:"",
                valid: true
              },
              LastName: {
                value:"",
                valid: true
              },
              Address: {
                value:"",
                valid: true
              },
              PhoneNumber: {
                value:"",
                valid: true
              },
              Email: {
                value:"",
                valid: true
              }
        }
    }
    toChange = (event) => {
        var valid
        switch(event.target.name){
            case "Name":
                if(event.target.value.length <= 1){
                    valid = false
                }else{
                    valid = true
                }
                break
            case "Email":
                var reEmail = /^[a-zA-Z0-9]+[.]{0,1}[a-zA-Z0-9]+[@][a-z]+([.][a-z]{2,})+$/
                var testEmail = reEmail.test(event.target.value)
                if(testEmail){
                valid = true
                }else{
                valid = false
                }
                break
            case "PhoneNumber":
                var rePhone = /^[0][0-9]{1,9}$/
                var testPhone = rePhone.test(event.target.value)
                if(testPhone){
                    if(event.target.value.length === 10){
                    valid = true
                    }else{
                    valid = false
                    }
                }else{
                    valid = false
                }
                break
        }
        console.log(event.target.name)
        console.log(event.target.value)
        console.log(valid)
        this.setState({ [event.target.name]: { value: event.target.value, valid: valid } });
    }
    displayErrow = (state,name) => {
        if(!state){
            return(
            <div className="invalid-feedback">{"Please provide a valid " + name + "."}</div>
            )
        }
    }
    resetForm = () => {
        this.setState({
            Phone:{
            valid:true
            },
            Email:{
            valid:true
            }
        })
        this.props.changeStatusForm(!this.props.popupIntern)
    }
    displayButton = () => {
        if(this.props.isUpdate){
            return(
                <div>
                    <MDBBtn color="secondary" onClick={() => this.resetForm()}>Update</MDBBtn>
                    <MDBBtn color="primary" type="submit">Delete</MDBBtn>
                </div>
            )
        }else{
            return(
                <div>
                    <MDBBtn color="secondary" onClick={() => this.resetForm()}>Close</MDBBtn>
                    <MDBBtn color="primary" type="submit">Add</MDBBtn>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <MDBModal isOpen={this.props.popupIntern} toggle={() => this.resetForm()}>
                    <MDBModalHeader toggle={() => this.resetForm()}>Form</MDBModalHeader>
                    <MDBModalBody>  
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Name
                        </label>
                        <input 
                        className={this.state.Name.valid ? "form-control" : "form-control is-invalid"} 
                        name="Name" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your First Name" 
                        required />
                        {this.displayErrow(this.state.Name.valid,"name")}
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Phone Number
                        </label>
                        <input 
                        className={this.state.PhoneNumber.valid ? "form-control" : "form-control is-invalid"} 
                        name="PhoneNumber" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Phone" 
                        required />
                        <div 
                        className="invalid-feedback">Please provide a valid phone.
                        </div>
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Email
                        </label>
                        <input 
                        className={this.state.Email.valid ? "form-control" : "form-control is-invalid"} 
                        name="Email" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Email" 
                        required />
                        {this.displayErrow(this.state.Email.valid,"email")}
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Gender
                        </label>
                        <select className="browser-default custom-select" name="Gender" onChange={(event) => this.toChange(event)}>
                            <option>Choose your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="3"></option>
                        </select>
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Course
                        </label>
                        <select className="browser-default custom-select" name="CourseID" onChange={(event) => this.toChange(event)}>
                            <option>Choose your course</option>
                            <option value="1">Java</option>
                            <option value="2">Python</option>
                        </select>
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">DOB
                        </label>
                        <input 
                        className="form-control" 
                        name="DayofBirth" 
                        onChange={(event) => this.toChange(event)} 
                        type="date" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your DayofBirth" 
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">University
                        </label>
                        <input 
                        className="form-control" 
                        name="University" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your University" 
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Faculty
                        </label>
                        <input 
                        className="form-control" 
                        name="Faculty" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Faculty" 
                        required />
                    </MDBModalBody>
                    <MDBModalFooter>
                    {
                        this.displayButton()
                    }
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default PopupIntern;