import React, { FC, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import frame from '../upload/emotion/emotions.json';

interface Props {
    time: string;
    onTime: (time:string) => void;
}

//select 눌렀을 때 json파일 변경
const MusicCategory: FC<Props> = (props) => {
    const [index, setIndex] = useState(0); // 현재 어떤 탭을 클릭했는지 알 수 있음 index:0 -> smile, index:1 -> neutral  ---
    // var time = "0010";
    // const editMusic = () => {
    //         frame[props.time] = 'neutral5'   // 이거만하면 되는데 안먹음 ㅠㅠ  근데 더 충격. 이런식으로 바꿔도 실제 json파일이 바뀌는 게 아니라 
                                                // import한 컴포넌트 안에서만 바뀜 
    // }
    
    // console.log(props.time)
    // console.log(frame['0001'])

    return (
            <div style={{marginLeft: "8rem", marginRight: "3rem"}}>
            <Tabs selectedIndex={index} onSelect={index => setIndex(index)} style={{marginRight: "70px" }}>
                <TabList>
                    <Tab>Smile / Laugh</Tab>
                    <Tab>Neutral / Talking</Tab>
                    <Tab>Sad / Sorrow</Tab>
                    <Tab>Fear / Angry</Tab>
                    <Tab>Surprise / Disgust</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        <p>music : {props.time}</p>
                        <br/>                                    
                        <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile1.mp3" customAdditionalControls={[]} footer={<button className="select">select</button>}/>
                    </div>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile2.mp3" customAdditionalControls={[]} footer="Smile(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile3.mp3" customAdditionalControls={[]} footer="Smile(3)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile4.mp3" customAdditionalControls={[]} footer="Smile(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile5.mp3" customAdditionalControls={[]} footer="Smile(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile6.mp3" customAdditionalControls={[]} footer="Smile(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile7.mp3" customAdditionalControls={[]} footer="Smile(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile8.mp3" customAdditionalControls={[]} footer="Smile(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile9.mp3" customAdditionalControls={[]} footer="Smile(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile10.mp3" customAdditionalControls={[]} footer="Smile(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral1.mp3" customAdditionalControls={[]} footer="Neutral(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral2.mp3" customAdditionalControls={[]} footer="Neutral(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral3.mp3" customAdditionalControls={[]} footer="Neutral(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral4.mp3" customAdditionalControls={[]} footer="Neutral(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral5.mp3" customAdditionalControls={[]} footer="Neutral(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral6.mp3" customAdditionalControls={[]} footer="Neutral(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral7.mp3" customAdditionalControls={[]} footer="Neutral(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral8.mp3" customAdditionalControls={[]} footer="Neutral(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral9.mp3" customAdditionalControls={[]} footer="Neutral(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral10.mp3" customAdditionalControls={[]} footer="Neutral(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad1.mp3" customAdditionalControls={[]} footer="Sad(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad2.mp3" customAdditionalControls={[]} footer="Sad(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad3.mp3" customAdditionalControls={[]} footer="Sad(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad4.mp3" customAdditionalControls={[]} footer="Sad(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad5.mp3" customAdditionalControls={[]} footer="Sad(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad6.mp3" customAdditionalControls={[]} footer="Sad(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad7.mp3" customAdditionalControls={[]} footer="Sad(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad8.mp3" customAdditionalControls={[]} footer="Sad(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad9.mp3" customAdditionalControls={[]} footer="Sad(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad10.mp3" customAdditionalControls={[]} footer="Sad(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear1.mp3" customAdditionalControls={[]} footer="Fear(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear2.mp3" customAdditionalControls={[]} footer="Fear(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear3.mp3" customAdditionalControls={[]} footer="Fear(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear4.mp3" customAdditionalControls={[]} footer="Fear(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear5.mp3" customAdditionalControls={[]} footer="Fear(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear6.mp3" customAdditionalControls={[]} footer="Fear(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear7.mp3" customAdditionalControls={[]} footer="Fear(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear8.mp3" customAdditionalControls={[]} footer="Fear(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear9.mp3" customAdditionalControls={[]} footer="Fear(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear10.mp3" customAdditionalControls={[]} footer="Fear(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise1.mp3" customAdditionalControls={[]} footer="Surprise(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise2.mp3" customAdditionalControls={[]} footer="Surprise(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise3.mp3" customAdditionalControls={[]} footer="Surprise(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise4.mp3" customAdditionalControls={[]} footer="Surprise(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise5.mp3" customAdditionalControls={[]} footer="Surprise(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise6.mp3" customAdditionalControls={[]} footer="Surprise(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise7.mp3" customAdditionalControls={[]} footer="Surprise(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise8.mp3" customAdditionalControls={[]} footer="Surprise(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise9.mp3" customAdditionalControls={[]} footer="Surprise(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise10.mp3" customAdditionalControls={[]} footer="Surprise(10)"/>
                    <br/> */}
                </TabPanel>
            </Tabs>
        </div>
    )
}


export default MusicCategory;