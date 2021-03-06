import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import MusicCategory from '../../components/music_category'
import VideoPlayer from '../../components/video'
import Frames from '../../components/frames'
import Download from '../../components/download'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Make() {
    
    const [time, setTime] = useState("0000");
    const [emotion, setEmotion] = useState("smile");
    function onTime(time: string, emotion:string){
        setTime(time);
        setEmotion(emotion);
    }
    return (
        <>
        <Container style={{marginTop: "-8rem", fontFamily: "TitilliumWeb-Regular", color: "#232437"}}>
            <Row>
                <Col xs={8} style={{marginLeft: "-3rem"}}>
                    <p>you selected a {time} frame / {emotion}</p>
                    <div className="video_player">            
                        <VideoPlayer />
                    <div className="frame_list">            
                    <Frames onTime={onTime}/>
                    </div>
                    </div>
                </Col>
                <Col xs={4} style={{marginLeft: "3rem"}}>
                    <div className="music_list">            
                        <MusicCategory time={time} onTime={onTime} emotion={emotion} />
                    </div>
                    {/*render button*/}
                    <div className="download">
                        <Download />
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
Make.getInitialProps = async function (context: NextPageContext) {
    const { query } = context;
    return { query }
}