import React, {useEffect,  useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import'./start.css'
import { IoIosContact } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import Axios from 'axios';




export default function Start(props){
         const[data,setdata]=useState('');
         const[incomeData,setincomeData]=useState([])
    const getDataHandler = (e) =>{
     
              Axios.get(`http://localhost:4000/student/data?name=${data}`)
        .then(res =>{
        console.log(res.data)
        setincomeData(res.data)
      /*   window.location = "./submitform" */
        })
    }
            useEffect(()=>{
            console.log(props.parentchild)
           })
    return(
           
        <div className='inPutParent'>
           <div style={{marginLeft:"100px",color:"blue"}}>
           <IoIosContact size={100}/>
           </div>
               <div style={{fontSize:"20px",marginLeft:"40px"}}>Enter Student Name</div>
            
            <InputGroup size="sm" className="inPut"  onChange={(e) => {setdata(e.target.value)}} placeholder='Enter student Name'>
           
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
       <Button style={{backgroundColor:"none"}} onClick={getDataHandler} >Click</Button> 
      </InputGroup>
          
      <div>{
                 incomeData.map((data, index)=>{
                    return(
                        <ul key={data.id} style={{color:"blue",fontSize:"30px",listStyleType:"initial"}}>
                           
                            <li>{data.name}</li>
                            <li>{data.role}</li>
                            <li>{data.dob}</li>
                            <li>{data.address}</li>
                            <li>{data.email}</li><hr style={{color:" #2eda18"}}></hr>
                            
                        </ul>
                    )
                })
                }</div>
      
        </div>
    )
};