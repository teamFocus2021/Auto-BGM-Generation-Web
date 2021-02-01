import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
      <div style={{ display: 'flex', marginLeft: '-3.5%', marginTop: '-7%' }}>
          <div style={{ flexBasis: '50%' }}>
            <Link href="/views/home" as="/">
              <a>
                <img style={{ width: "400px", height: "100px"}} className="logo" src='http://sehwa98.dothome.co.kr/mp3/logo.png' />
              </a>
            </Link>
          </div>
          <div className="nav_button">
            <Link href="/views/start" as="/start">
              <a className="nav_button">START</a>
            </Link>
          </div>
          <div className="nav_button">
            <Link href="/views/about" as="/about">
              <a className="nav_button">DETAIL</a>
            </Link>
          </div>
          <div className="nav_button">
            <Link href="/views/music" as="/music">
              <a className="nav_button">MUSIC</a>
            </Link>
          </div>
          <div className="nav_button">
            <Link href="/views/connect" as="/connect">
              <a className="nav_button">CONNECT</a>
            </Link>
          </div>

          {/*make video session*/}
          <div className="nav_button">
            <Link href="/views/make" as="/make">
              <a className="nav_button">MAKE</a>
            </Link>
          </div>

      </div>
  );
};

export default Navbar;
