import * as React from 'react';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return <div className="main_div">
  <h2>PROJECT DETAIL</h2>
  <img style={{ width: "700px", height: "500px", marginTop:"-5rem" }} src='http://sarac33.dothome.co.kr/icon.png' />
  <p className="explanation">
    Our program tracks your face in your video and suggests music to match the mood of your video!<br></br>
    Use this program to save time choosing BGM when editing, and make editing easier.<br></br>
    We provide a function to show matching music based on a total of five emotions.<br></br>
  </p>
</div>;
};

export default Page;
