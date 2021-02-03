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
                        <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile1.mp3" customAdditionalControls={[]} footer={<button className="select">select</button>}/>
                    </div>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile2.mp3" customAdditionalControls={[]} footer="Smile(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile3.mp3" customAdditionalControls={[]} footer="Smile(3)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile4.mp3" customAdditionalControls={[]} footer="Smile(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile5.mp3" customAdditionalControls={[]} footer="Smile(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile6.mp3" customAdditionalControls={[]} footer="Smile(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile7.mp3" customAdditionalControls={[]} footer="Smile(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile8.mp3" customAdditionalControls={[]} footer="Smile(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile9.mp3" customAdditionalControls={[]} footer="Smile(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile/smile10.mp3" customAdditionalControls={[]} footer="Smile(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral1.mp3" customAdditionalControls={[]} footer="Neutral(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral2.mp3" customAdditionalControls={[]} footer="Neutral(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral3.mp3" customAdditionalControls={[]} footer="Neutral(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral4.mp3" customAdditionalControls={[]} footer="Neutral(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral5.mp3" customAdditionalControls={[]} footer="Neutral(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral6.mp3" customAdditionalControls={[]} footer="Neutral(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral7.mp3" customAdditionalControls={[]} footer="Neutral(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral8.mp3" customAdditionalControls={[]} footer="Neutral(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral9.mp3" customAdditionalControls={[]} footer="Neutral(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral/neutral10.mp3" customAdditionalControls={[]} footer="Neutral(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad1.mp3" customAdditionalControls={[]} footer="Sad(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad2.mp3" customAdditionalControls={[]} footer="Sad(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad3.mp3" customAdditionalControls={[]} footer="Sad(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad4.mp3" customAdditionalControls={[]} footer="Sad(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad5.mp3" customAdditionalControls={[]} footer="Sad(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad6.mp3" customAdditionalControls={[]} footer="Sad(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad7.mp3" customAdditionalControls={[]} footer="Sad(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad8.mp3" customAdditionalControls={[]} footer="Sad(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad9.mp3" customAdditionalControls={[]} footer="Sad(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad/sad10.mp3" customAdditionalControls={[]} footer="Sad(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear1.mp3" customAdditionalControls={[]} footer="Fear(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear2.mp3" customAdditionalControls={[]} footer="Fear(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear3.mp3" customAdditionalControls={[]} footer="Fear(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear4.mp3" customAdditionalControls={[]} footer="Fear(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear5.mp3" customAdditionalControls={[]} footer="Fear(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear6.mp3" customAdditionalControls={[]} footer="Fear(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear7.mp3" customAdditionalControls={[]} footer="Fear(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear8.mp3" customAdditionalControls={[]} footer="Fear(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear9.mp3" customAdditionalControls={[]} footer="Fear(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear/fear10.mp3" customAdditionalControls={[]} footer="Fear(10)"/>
                    <br/> */}
                </TabPanel>
                <TabPanel>
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise1.mp3" customAdditionalControls={[]} footer="Surprise(1)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise2.mp3" customAdditionalControls={[]} footer="Surprise(2)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise3.mp3" customAdditionalControls={[]} footer="Surprise(3)"/> */}
                    {/* <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise4.mp3" customAdditionalControls={[]} footer="Surprise(4)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise5.mp3" customAdditionalControls={[]} footer="Surprise(5)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise6.mp3" customAdditionalControls={[]} footer="Surprise(6)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise7.mp3" customAdditionalControls={[]} footer="Surprise(7)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise8.mp3" customAdditionalControls={[]} footer="Surprise(8)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise9.mp3" customAdditionalControls={[]} footer="Surprise(9)"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise/surprise10.mp3" customAdditionalControls={[]} footer="Surprise(10)"/>
                    <br/> */}
                </TabPanel>
            </Tabs>
    )
}


export default MusicCategory;