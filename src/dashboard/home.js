import React from 'react';
import './home.css'
import { useNavigate } from "react-router-dom";









function Home(){
    const navigate = useNavigate()
    const _Start = (()=>{
        navigate('/start')
       }) 
    return(
     <div className='boDy' >
        <div className='header'>    
            <div>
               <div style={{fontSize:"40px"}}>Boost Your Knowledge</div>
           </div>
           <div>
                <div  style={{fontSize:"30px"}}> And Gain Career</div>
           </div>
            <div>
                <button className='Button' onClick={_Start}>Get Started</button>
            </div>
        </div>
     </div>    
    );
}



export default Home;