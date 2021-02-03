import * as React from 'react';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return <div className="align">
  <h2 style={{textAlign: "center", fontFamily: "ArchivoBlack-Regular", fontSize: "40px", color: "#232437"}}>PROJECT DETAIL</h2>
  <img style={{display: "block", margin: "0px auto", marginTop: "-2rem", width: "1000px", height: "450px"}} src='http://sarac33.dothome.co.kr/icon.png' />
  <p className="explanation">
    Our program tracks your face in your video and suggests music to match the mood of your video!<br></br>
    Use this program to save time choosing BGM when editing, and make editing easier.<br></br>
    We provide a function to show matching music based on a total of five emotions.<br></br>
  </p>
</div>;
};

export default Page;
