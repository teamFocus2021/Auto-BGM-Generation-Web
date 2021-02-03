import { FC } from 'react';
import * as React from 'react';
import frame from '../upload/emotion/emotions.json';
import AudioPlayer from 'react-h5-audio-player';
import { Entity } from 'typeorm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
    onTime: (key:string, value:string) => void;
}

const Frames: FC<Props> = (props) => {

    const sendTime = (key: string, value:string) => {    
        props.onTime(key, value);
 
    }

    var data = Object.keys(frame);

    //버튼과 이미지 mapping
    var lists = Object.entries(frame).filter(([key,value])=> key != 'total' && key != 'time').map(
        ([key,value]) => <Col style={{marginRight: "-10rem"}}><img  style={{cursor: 'pointer', display:'inline-block' }} src={`https://storage.googleapis.com/store_video2/${key}.jpg`} onClick={()=>sendTime(key, value)}/>
        <AudioPlayer className="player" style={{'width':"200px"}} src={`http://sehwa98.dothome.co.kr/mp3/${value}.mp3`} customAdditionalControls={[]} footer={`${value}`}/></Col>
       )
    
    return (
        <div >
            <Container>
                <Row>   
                    {lists}
                </Row>
            </Container>    
        </div>  
    )
}

export default Frames;

