
import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';
import'./aboutstudent';

import MyVerticallyCenteredModal from "./editform";
/* import { redirect, useNavigate } from "react-router-dom"; */










function Aboutstudent(){

 /*  const navigate = useNavigate(); */
    const [posts, setPosts] = useState([]);
    const [editData, seteditData] = useState([]);
    
   
    const [modalShow, setModalShow] = React.useState(false);

                           
    
 
   
    useEffect(() => {
      axios
        .get("http://localhost:4000/api/books")
        .then((result) => {
          console.log(result.data);
          setPosts(result.data);
        })
        .catch((error) => console.log(error));
    }, []);


    const deleteHandler =(_id) =>{
        axios
           .delete(`http://localhost:4000/api/delete/${_id}`)
           .then(res => {
            alert(res.data);
       
            window.location.reload();
           
           })
           .catch(error =>{
            console.log(error)
           })
        }

      const editHandler = (_id) =>{
        
        axios.get(`http://localhost:4000/api/edit/${_id}`)
        .then(res =>{
          seteditData([res.data]);
        /*  console.log(res.data); */
      
        })
    } 
 

    //lifecycle method used for    componentDidUpdate
    useEffect(() => {
      /* componentDidUpdate code */       
      setModalShow(true)

    }, [editData]);
    return(

        <div className="container">
          
           
            
             
             
          
     
         <table className="table table-striped">
            <thead>
                <tr style={{color:"rgb(175, 42, 87)",fontSize:"20px"}}>
                    <th className="text-center"> S.No</th>
                    <th className="text-center">Full Name</th>
                    <th className="text-center">phonenumber</th>
                    <th className="text-center">dateofbirth</th>
                    <th className="text-center">Address</th>
                    <th className="text-center">E-mail ID</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                    
                </tr>
               {/*  name: FirstName,
           role: CompanyRole,                        
       dob: Dob,
       address:Address,
       email:Email */}
            </thead>
            <tbody >{
                 posts.map((data, index)=>{
                    return(
                        <tr key={data._id} >
                            <td className="text-center" style={{color:"blue"}}>{index+1}</td>
                            <td className="text-center" style={{color:"white"}}  >{data.name}</td>
                            <td className="text-center" style={{color:"white"}}>{data.role}</td>
                            <td className="text-center" style={{color:"white"}}>{data.dob}</td>
                            <td className="text-center" style={{color:"white"}}>{data.address}</td>
                            <td className="text-center" style={{color:"white"}}>{data.email}</td>
                            <td className="p-auto text-center" ><button className="btn btn-success"  onClick={() => {
                
                  editHandler(data._id);
                  
                }}>Edit</button></td>
                            <td className="text-center"><button className="btn btn-success" onClick={ () => deleteHandler(data._id)} >delete</button></td>
                           
                        </tr>
                    )
                })
                }

            </tbody>
         </table>{
           editData.map((mapping)=>{
            return(
         <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        sendData={mapping.name}
        sendDataa={mapping.role}
        sendDatab={mapping.email}
        sendDatac={mapping.dob}
        sendDatad={mapping.address}
        sendDatae={mapping._id}
      />
            )
    })
         }
         </div>
    );
  }
  
   


export default Aboutstudent;





/*  {/* <div>
        {posts.map((data) => {
          return (
            <div key={data.id}>
              <h4>{data.name}</h4>
              <h3>{data.role}</h3>
            </div>
          );
        })}
      </div>  */