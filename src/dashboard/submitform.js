import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Axios from 'axios';





function Submitform(){
 
  const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
  
    const handleSubmit = (e) => {
         e.preventDefault(); 
  
        Axios.post('http://localhost:4000/insert', {
            fullName: name,
            companyRole:role,
           studentDob:dob,
           studentAddress:address,
           studentEmail:email

        }).then((res) => {
    alert(res.data);
    window.location.reload();
  
  })
    }
  /* const validate = () => {
    return name.length & role.length & dob.length & address.length & email.length;
  }; */
  
  
    return(
        <div style={{width:"500px",marginLeft:"auto",marginRight:"auto" ,border:"1px solid black",padding:"20px"}} > 

           <div>
              <div style={{fontSize:"30px"}}>Student Registration Form</div>
           </div>
        <Form onSubmit={handleSubmit} action='http://localhost:4000/insert' method='post'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FullNAME</Form.Label>
        <Form.Control type="text" className = "Name" placeholder="Enter Your Name"  onChange={(e) => {setName(e.target.value)}} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number"  placeholder="Enter Your Number" className = "Role" onChange={(e) => {setRole(e.target.value)}}/>
      </Form.Group>
         {/* new list added */}
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date"  placeholder="DOB" className = "dob" onChange={(e) => {setDob(e.target.value)}}/>
      </Form.Group>
                 {/* new list added */}
                 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text"  placeholder="Enter Your Address" className = "address" onChange={(e) => {setAddress(e.target.value)}}/>
      </Form.Group>
                    {/* new list added */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="email"  placeholder="Enter Your Mail" className = "email" onChange={(e) => {setEmail(e.target.value)}}/>
      </Form.Group>
               <Button variant="primary" type="submit" style={{width:"150px",marginLeft:"140px"}} disabled={!name} > Submit </Button>
        </Form>
        </div>
       
    );
}



export default Submitform;