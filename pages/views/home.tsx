import { FC } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home: FC = ({}) => {

  return (
      <Container fluid>
      <div style={{marginTop:"8rem"}}>

        <Row>
          <Col>
              <h4 style={{fontSize: '60px', lineHeight: '2.5rem'}}>Edit your video</h4>
              <h4 style={{fontSize: '60px', }}>Quickly & Easily</h4>

              <h4 style={{fontSize: '20px', marginTop: '2rem'}}>You can edit your YouTube upload video easily and quickly.</h4>
              <h4 style={{fontSize: '20px'}}>Find the right background music for your video! you just put your video.</h4>

              <div style={{marginTop:'4.5rem'}}>
                <Link href="/views/start" as="/start">
                  <a className="start_button">TRY YOUR VIDEO</a>
                </Link>
              </div>
          </Col>

          <Col>
            <img style={{ width: "600px", height: "410px"}} src='http://sarac33.dothome.co.kr/image.png' />
          </Col>
        </Row>
    
      </div>
      </Container>
  );
};

export default Home;
