import { FC } from 'react';
import * as React from 'react';
import frame from '../upload/emotion/emotions.json';

interface Props {
    onTime: (key:string) => void;
}

const Frames: FC<Props> = (props) => {

    const sendTime = (key: string) => {    
        props.onTime(key);
    }
    
    //버튼과 이미지 mapping
    var lists = Object.keys(frame).filter(key=> key != 'total' && key != 'time').map(key => <img src={`https://storage.googleapis.com/store_video2/${key}.jpg`} onClick={()=>sendTime(key)}/>)
    
    return (
        <div style={{cursor: 'pointer', display:'inline-block' }}>
            {lists}
        </div>          
    )
}

export default Frames;

