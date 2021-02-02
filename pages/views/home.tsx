import { FC } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: FC = ({}) => {

  return (
      <div className="container" style={{marginTop:"8rem"}}>

        <div className="row">
          <div className="col-xl" style={{}}>
              <h4 style={{fontSize: '60px', lineHeight: '2.5rem'}}>Edit your video</h4>
              <h4 style={{fontSize: '60px', }}>Quickly & Easily</h4>

              <h4 style={{fontSize: '20px', marginTop: '2rem'}}>You can edit your YouTube upload video easily and quickly.</h4>
              <h4 style={{fontSize: '20px'}}>Find the right background music for your video! you just put your video.</h4>

              <div style={{marginTop:'4.5rem'}}>
                <Link href="/views/start" as="/start">
                  <a className="start_button">TRY YOUR VIDEO</a>
                </Link>
              </div>
          </div>

          <div className="col-xl">
            <img style={{ width: "600px", height: "500px"}} src='http://sarac33.dothome.co.kr/image.png' />
          </div>
        </div>
    
      </div>
  );
};

export default Home;
