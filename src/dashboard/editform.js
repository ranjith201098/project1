
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import {   useEffect, useState } from 'react';
import Axios from 'axios';

   



export default function MyVerticallyCenteredModal(props) {
     const[_name,setName]=useState('');
      const[_role,setRole]=useState('');
     const[_dob,setDob]=useState('');
     const[_address,setAddress]=useState('');
     const[_email,setEmail]=useState(''); 
  
     const HandleSubmit = (_id) => {
             
      
            Axios.post(`http://localhost:4000/update/api/${_id}`, {
                _fullName: _name,
                _companyRole:_role,
               _studentDob:_dob,
               _studentAddress:_address,
               _studentEmail:_email
    
            }).then((res) => {
        alert(res.data);
        /* window.location.reload(); */
      
      })
        }            
      useEffect(()=>{
        console.log(_name)
      })
       
      

    return (
        <div className="edit_parent">
           
                  
                
          
      <Modal
        {...props}
        size="50"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Edit Student Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">/
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" className = "Name" onInput={(e) => setName(e.target.value)} placeholder="Enter Your Name"defaultValue={props.sendData}  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number"  placeholder="Enter Your Number" onChange={(e) => setRole(e.target.value)} className = "Role" defaultValue={props.sendDataa}/>
      </Form.Group>
         {/* new list added */}
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date"  placeholder="DOB" className = "dob" onChange={(e) => setDob(e.target.value)} defaultValue={props.sendDatac}/>
      </Form.Group>
                 {/* new list added */}
                 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control  type="text"  placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)} className = "address" defaultValue={props.sendDatad}/>
      </Form.Group>
                    {/* new list added */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="email"  placeholder="Enter Your Mail" className = "email" onChange={(e) => setEmail(e.target.value)} defaultValue={props.sendDatab}/>
      </Form.Group>
                
               <Button variant="primary" type="submit" style={{width:"150px",marginLeft:"140px"}} onClick={HandleSubmit(props.sendDatae)} > Save Changes </Button>
               <div>{props.sendDatae}</div>
        </Form>

        </Modal.Body>
       
      </Modal>
 
      </div>
    );
    }
























