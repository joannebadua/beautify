import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';
import Container from '../Container';
import Row from '../Row';
import './style.css';
// import Col from "../Col";

// import '';
// import makeup from '../../assets/img/makeup.png';
// import hair from '../../assets/img/hair.png';
// import yoga from '../../assets/img/yoga.png';
import yoga2 from '../../assets/img/yoga2.png';
// import fitness from '../../assets/img/fitness.png';
import workout from '../../assets/img/workout.png';
// import nutrition from '../../assets/img/nutrition.png';
import nutritionist from '../../assets/img/nutritionist.png';
import nails from '../../assets/img/nails.png';
import fashion from '../../assets/img/fashion.png';
import massage from '../../assets/img/massage.png';
import lipstick2 from '../../assets/img/lipstick2.png';
import blowdry from '../../assets/img/blowdry.png';
  

  
const IconCard = (props) => {
  const id = "fitness";
  return (
    <div className="services-content">
    <Container>
        <h1>Choose A Service</h1>
        <hr />
        <br />
    <Row>
    <div className="col-lg-3">

      <Card>

        <CardImg top width="100%" height="100%" src={lipstick2} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>MakeUp</strong></h2>
            </CardTitle>

         <Button onClick={() => props.findServicesForCategory("make-up")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>

      <div className="col-lg-3">

      <Card>

        <CardImg top width="100%" src={blowdry} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>Hair/Barber</strong></h2>
            </CardTitle>

         <Button onClick={() => props.findServicesForCategory("hair-barber")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>

      <div className="col-lg-3">
      <Card id="fitness">
        <CardImg top width="100%" src={yoga2} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>Yoga</strong></h2>
            </CardTitle>

         <Button onClick={() => props.findServicesForCategory("yoga")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>

      <div className="col-3">

      <Card className="hoverable">

        <CardImg top width="100%" src={workout} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>Fitness</strong></h2>
            </CardTitle>

         <Button id="fitness" onClick={() => props.findServicesForCategory("fitness")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>
      </Row>
    <br />
    <br />
    <Row>
      <div className="col-lg-3">

      <Card className="hoverable">

        <CardImg top width="100%" src={nutritionist} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>Nutritionist</strong></h2>
            </CardTitle>

         <Button onClick={() => props.findServicesForCategory("nutritionist")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>

      <div className="col-lg-3">

      <Card className="hoverable">

        <CardImg top width="100%" src={fashion} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>Fashion</strong></h2>
            </CardTitle>

         <Button onClick={() => props.findServicesForCategory("fashion")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>

      <div className="col-lg-3">

      <Card className="hoverable">

        <CardImg top width="100%" src={massage} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>Massage</strong></h2>
            </CardTitle>

         <Button onClick={() => props.findServicesForCategory("massage")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>

      <div className="col-lg-3">

      <Card className="hoverable">

        <CardImg top width="100%" src={nails} alt="Card image cap Lipstick" />
        <CardBody>
          <CardTitle>
              <h2 className="title"><strong>Nails</strong></h2>
            </CardTitle>

         <Button onClick={() => props.findServicesForCategory("nails")}>BROWSE</Button>

        </CardBody>
      </Card>
      </div>

    <br></br>
    <br></br>
    
      </Row>
      </Container>
      
    </div>
  );
};

export default IconCard;