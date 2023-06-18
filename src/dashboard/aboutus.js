import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './aboutus.css'

function Aboutus(){

    return(
        <Container>
        <Row>
          <Col>
             <div className=''>
             <button className='aboutus'>Aboutus</button>
             </div>
             <div>
                  <div className='welcome'>Welcome to</div>
             </div>
             <div>
                  <div className='chell'>RALPH LANGLEY ELEMENTARY SCHOOL</div>
             </div>
             <div className='para'>
                  <p>RALPH LANGLEY ELEMENTARY SCHOOLis one of the CBSE schools under The Umbrella of the Elite Sowdambikaa Group of Schools. Our school offers rainbow of learning programmes with world class education within your reach.The approach to education is inquiry based, collaborating and learning socially. Project based learning with interdisciplinary and multidisciplinary aspects reflect global perception in the School learning. Beyond curriculum we ensure holistic development of the children to mould them to be an accomplished human being. Focus is on extracurricular activities also.</p>
             </div>
          </Col>
          <Col>
             <div className='img'>
                <img src='https://www.nisd.net/sites/default/files/styles/homepage_hero_1200x650/public/images/front-of-school.jpg?h=4521fff0&itok=BH7djPa3 'style={{width:"600px",height:"480px"}}></img>
             </div>
          </Col>
        </Row>
       
       
      </Container>
    );
}



export default Aboutus;