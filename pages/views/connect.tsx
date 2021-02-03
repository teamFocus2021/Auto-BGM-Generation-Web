import * as React from 'react';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return <div style={{marginTop: "-8rem"}}>
    <img style={{display: "block", margin: "0px auto", marginTop: "-2rem", width: "450px", height: "450px"}} src='http://sarac33.dothome.co.kr/bean.png' />
    <p className="about_text1">
      If you want to connect with us, please contact us!
    </p>
    <p className="about_text2">
      ire4564@gmail.com
      </p>
  </div>;
};

export default Page;
