import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import MusicCategory from '../../components/music_category'
import VideoPlayer from '../../components/video'
import Frames from '../../components/frames'
import Download from '../../components/download'


export default function Make() {
    
    const [time, setTime] = useState("0000");
    const [emotion, setEmotion] = useState("smile");
    function onTime(time: string, emotion:string){
        setTime(time);
        setEmotion(emotion);
    }
    return (
        <>
            <p>you selected a {time} frame / {emotion}</p>
            
            <div className="video_player">            
                <VideoPlayer />
            </div>
            <div className="music_list">            
                <MusicCategory time={time} onTime={onTime} emotion={emotion} />
            </div>
            <div className="download">
                <Download />
            </div>
            <div className="frame_list">            
                <Frames onTime={onTime}/>
            </div>
        </>
    )
}
Make.getInitialProps = async function (context: NextPageContext) {
    const { query } = context;
    return { query }
}