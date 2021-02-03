import React, { FC, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import frame from '../upload/emotion/emotions.json';
import axios from 'axios';

interface Props {
    time: string;
    onTime: (time:string, emotion:string) => void;
    emotion: string;
}

//select 눌렀을 때 json파일 변경
const MusicCategory: FC<Props> = (props) => {
    // const [index, setIndex] = useState(0); // 현재 어떤 탭을 클릭했는지 알 수 있음 index:0 -> smile, index:1 -> neutral  ---
    const time = props.time;
    var regex = /[0-9]/g;
    var music_id = props.emotion;
    var emotion = music_id.split(regex).join('');

    function onSelect(id:string){
        music_id = id;
        axios.post('/video', {time:time, music_id:music_id}).then(function(response){
            console.log(response);
        }).catch(function(err){ console.log(err)});
    }

    function mapping(emotion:string){
        return(
        <div>
            
            <br/>                                    
            <AudioPlayer className="player" src={`http://sehwa98.dothome.co.kr/mp3/${emotion}1.mp3`} customAdditionalControls={[]} footer={<button className="select" onClick={() => onSelect(emotion+'1')}>select</button>}/>
            <br/>
            <AudioPlayer className="player" src={`http://sehwa98.dothome.co.kr/mp3/${emotion}2.mp3`} customAdditionalControls={[]} footer={<button className="select" onClick={() => onSelect(emotion+'2')}>select</button>}/>
            <br/>
            <AudioPlayer className="player" src={`http://sehwa98.dothome.co.kr/mp3/${emotion}3.mp3`} customAdditionalControls={[]} footer={<button className="select" onClick={() => onSelect(emotion+'3')}>select</button>}/>
        </div>
    )}

    var list = mapping(emotion);

    return (
            <div style={{marginLeft: "8rem", marginRight: "3rem", fontFamily: "TitilliumWeb-Regular"}}>
            <Tabs style={{marginRight: "70px" }}>
                <TabList>
                    <Tab>{emotion}</Tab>
                </TabList>
                <TabPanel>
                    {list}
                </TabPanel>
            </Tabs>
        </div>
    )
}


export default MusicCategory;