import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <div style={{ display: 'flex', marginTop: "40px", marginBottom: "40px", marginLeft: "20px", marginRight: "20px" }}>
      <div style={{ flexBasis: '80%' }}>
        <Link href="/views/home" as="/">
          <a
            style={{
              fontSize: 22,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            BEAN POD
          </a>
        </Link>
      </div>
        <div style={{ flexBasis: '5%', marginLeft: "10px" }}>
          <Link href="/views/home" as="/">
            <a>START</a>
          </Link>
        </div>
        <div style={{ flexBasis: '5%', marginLeft: "10px" }}>
          <Link href="/views/about" as="/about">
            <a>DETAIL</a>
          </Link>
        </div>
        <div style={{ flexBasis: '5%', marginLeft: "10px" }}>
          <Link href="/views/home" as="/">
            <a>MUSIC</a>
          </Link>
        </div>
        <div style={{ flexBasis: '5%', marginLeft: "10px" }}>
          <Link href="/views/home" as="/">
            <a>CONNECT</a>
          </Link>
        </div>
    </div>
  );
};

export default Navbar;
