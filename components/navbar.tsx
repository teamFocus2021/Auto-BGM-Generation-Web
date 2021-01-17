import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <div style={{ display: 'flex', marginTop: "40px", marginBottom: "40px", marginLeft: "20px", marginRight: "20px" }}>
      <div style={{ flexBasis: '80%' }}>
        <Link href="/views/home" as="/">
          <a className="nav_button no_split">
            Bean Pod
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
    </div>
  );
};

export default Navbar;
