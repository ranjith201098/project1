import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillEnvelopeFill} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import { useState } from 'react';
import Axios from 'axios';



import "./contactus.css"



function MyVerticallyCenteredModal(props) {
  
        const[email,setEmail]= useState('')
        const[subject,setSubject]= useState('')
        const[description,setDescription]= useState('')
                         


        const handleSubmit = (e) => {
                 e.preventDefault(); 
                       
                Axios.post('http://localhost:4000/email_Post', {
                    Email:email,
                    Subject:subject,
                    Description:description
                   
                }).then((res) => {
            alert(res.data);
            window.location.reload();
                   console.log(res.data)
          })
            }
         /* useEffect((e)=>{
          console.log(email);
          console.log(subject);
          console.log(description);
         })
          */
       
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
        style={{backgroundColor:"		#AFEEEE"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{marginLeft:"auto",marginRight:"auto"}}>
          Contact Us Now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit} method='post' action='http://localhost:4000/email_Post'>
             <div>
                
                 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To</Form.Label>
        <Form.Control type="email" placeholder="Enter email" style={{width:"400px"}} onChange={(e) => {setEmail(e.target.value)}} />
      </Form.Group>
                
             </div>
             <div>
                  
                 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>subject</Form.Label>
        <Form.Control type="text" placeholder="Type Here" style={{width:"200px"}} onChange={(e) => {setSubject(e.target.value)}}/>
      </Form.Group>
             </div>
             <div>
                   
                 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" style={{width:"300px",height:"60px"}} onChange={(e) => {setDescription(e.target.value)}}/>
      </Form.Group>
             </div>
             
             </Form>  

             <Modal.Footer>
        <Button onClick={props.onHide} style={{width:"100px"}}>Close</Button>
        <Button  style={{width:"100px"}} type='submit' onClick={handleSubmit} >Send</Button>
      </Modal.Footer>
      </Modal.Body>
      
    </Modal>
  );
}
function MYtelePhone(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{backgroundColor:"#AFEEEE"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Telephone Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Mobile no</h4>
        <h1>6382588569</h1>

        <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal.Body>
      
    </Modal>
  );
}









function Contactus(){

    
      const [modalShow, setModalShow] = React.useState(false);
      const [telephone, settelePhone] = React.useState(false);

      return (
        <>
        <div className='parent_button'>
            <div style={{fontSize:"50px",cursor:"pointer",color:"red"}} >
          
          <BsFillEnvelopeFill   onClick={() => setModalShow(true)} />
          
          </div>
             <div style={{fontSize:"50px",cursor:"pointer",color:"brown"}} >
             
          <BsFillTelephoneFill  onClick={() => settelePhone(true)} />
          
             </div>
             <div style={{fontSize:"50px",cursor:"pointer",color:"blueviolet"}} >
             
             <a href='https://www.facebook.com/rk.smart.524'><FaFacebook/></a> 
          
             </div>
             <div style={{fontSize:"50px",cursor:"pointer"}} >
             
             <a href='https://twitter.com/Ranjith74847026?s=08'><BsTwitter /></a>
          
             </div>
            

             </div>
    
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <MYtelePhone  show={telephone}
            onHide={() => settelePhone(false)}/>
        </>
    );
}



export default Contactus;