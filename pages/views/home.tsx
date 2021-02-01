import { FC } from 'react';
import Link from 'next/link';

const Home: FC = ({}) => {

  return (
    <div>

    <div className="main_div">
      <h4 style={{fontSize: '60px', lineHeight:'7px'}}>Edit your video<p></p>Quickly & Easily </h4>
      <h4 style={{fontSize: '20px', lineHeight:'7px'}}>You can edit your YouTube upload video easily and quickly.
      <p></p>Find the right background music for your video! <p></p> you just put your video.</h4>

      <div style={{marginTop:'80px'}}>
      <Link href="/views/start" as="/start">
        <a className="start_button">TRY YOUR VIDEO</a>
      </Link>
      </div>
    </div>

    <div className="image_div">
      <img style={{ width: "800px", height: "650px", marginTop: '-20%'}} src='http://sarac33.dothome.co.kr/image.png' />
    </div>

    </div>
  );
};

export default Home;
