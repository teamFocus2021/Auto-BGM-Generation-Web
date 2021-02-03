import { FC } from 'react';
import * as React from 'react';
import frame from '../upload/emotion/emotions.json';
import AudioPlayer from 'react-h5-audio-player';
import { Entity } from 'typeorm';

interface Props {
    onTime: (key:string) => void;
}

const Frames: FC<Props> = (props) => {

    const sendTime = (key: string) => {    
        props.onTime(key);
    }

    var data = Object.keys(frame);

    //버튼과 이미지 mapping
    var lists = Object.entries(frame).filter(([key,value])=> key != 'total' && key != 'time').map(
        ([key,value]) => <div><img src={`https://storage.googleapis.com/store_video2/${key}.jpg`} onClick={()=>sendTime(key)}/>
        <AudioPlayer className="player" style={{'width':"400px"}} src={`http://sehwa98.dothome.co.kr/mp3/smile/${value}.mp3`} customAdditionalControls={[]} footer={`${value}`}/></div>
       )
    
    return (
        <div style={{cursor: 'pointer', display:'inline-block' }}>
            {lists}
        </div>          
    )
}

export default Frames;

