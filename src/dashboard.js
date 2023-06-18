
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Aboutstudent from './dashboard/aboutstudent';
import Submitform from './dashboard/submitform';
import Aboutus from './dashboard/aboutus';
import Home from './dashboard/home';
import Contactus from './dashboard/contactus';


/* import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
 */
const Dashboard = () => {
          

       return (
      <div style={{marginTop:"-45px"}}>
        <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="tabsClass mb-5"
      
      fill
      style={{backgroundColor:"black"}}
    >
      
      <Tab eventKey="home" title="Home" style={{fontSize:"20px"}}>
       <Home />
      </Tab>
      <Tab eventKey="aboutus" title="Aboutus">
        <Aboutus/>
      </Tab>
      <Tab eventKey="studentform" title="Add Student">
        <Submitform/>
      </Tab>
      <Tab eventKey="studentdetails" title="Student Report">
      <Aboutstudent/>
      </Tab>
      <Tab eventKey="contact" title="Contactus"  >
        <Contactus/>
      </Tab>
    </Tabs>
    
      </div>
    );
  }


export default Dashboard;