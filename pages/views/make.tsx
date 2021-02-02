import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import MusicCategory from '../../components/music_category'
import VideoPlayer from '../../components/video'
import Frames from '../../components/frames'
import Download from '../../components/download'

type IndexProps = {
    query : {
        emotions: string
    }
}


export default function Make(props: IndexProps) {
    const { emotions } = props.query;
    const [time, setTime] = useState("0000");
    function onTime(time: string){
        setTime(time);
    }
    return (
        <>
            <p>you selected a {time} frame</p>
            {/* <div>
                {emotions}
            </div> */}
            <div className="video_player">            
                <VideoPlayer />
            </div>
            <div className="music_list">            
                <MusicCategory time={time} onTime={onTime} />
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