import React, { FC, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


//select 눌렀을 때 json파일 변경
const MusicList: FC = () => {

    return (            
            <Tabs>
                <TabList>
                    <Tab>Smile / Laugh</Tab>
                    <Tab>Neutral / Talking</Tab>
                    <Tab>Sad / Sorrow</Tab>
                    <Tab>Fear / Angry</Tab>
                    <Tab>Surprise / Disgust</Tab>
                </TabList>
                {/* <TabPanel>
                                  
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile1.mp3" customAdditionalControls={[]} footer="Smile1"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile2.mp3" customAdditionalControls={[]} footer="Smile2"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile3.mp3" customAdditionalControls={[]} footer="Smile3"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile4.mp3" customAdditionalControls={[]} footer="Smile4"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile5.mp3" customAdditionalControls={[]} footer="Smile5"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile6.mp3" customAdditionalControls={[]} footer="Smile6"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile7.mp3" customAdditionalControls={[]} footer="Smile7"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile8.mp3" customAdditionalControls={[]} footer="Smile8"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile9.mp3" customAdditionalControls={[]} footer="Smile9"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/smile10.mp3" customAdditionalControls={[]} footer="Smile10"/>
                    <br/>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral1.mp3" customAdditionalControls={[]} footer="Neutral1"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral2.mp3" customAdditionalControls={[]} footer="Neutral2"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral3.mp3" customAdditionalControls={[]} footer="Neutral3"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral4.mp3" customAdditionalControls={[]} footer="Neutral4"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral5.mp3" customAdditionalControls={[]} footer="Neutral5"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral6.mp3" customAdditionalControls={[]} footer="Neutral6"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral7.mp3" customAdditionalControls={[]} footer="Neutral7"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral8.mp3" customAdditionalControls={[]} footer="Neutral8"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral9.mp3" customAdditionalControls={[]} footer="Neutral9"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/neutral10.mp3" customAdditionalControls={[]} footer="Neutral10"/>
                    <br/>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad1.mp3" customAdditionalControls={[]} footer="Sad1"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad2.mp3" customAdditionalControls={[]} footer="Sad2"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad3.mp3" customAdditionalControls={[]} footer="Sad3"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad4.mp3" customAdditionalControls={[]} footer="Sad4"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad5.mp3" customAdditionalControls={[]} footer="Sad5"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad6.mp3" customAdditionalControls={[]} footer="Sad6"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad7.mp3" customAdditionalControls={[]} footer="Sad7"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad8.mp3" customAdditionalControls={[]} footer="Sad8"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad9.mp3" customAdditionalControls={[]} footer="Sad9"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/sad10.mp3" customAdditionalControls={[]} footer="Sad10"/>
                    <br/>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear1.mp3" customAdditionalControls={[]} footer="Fear1"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear2.mp3" customAdditionalControls={[]} footer="Fear2"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear3.mp3" customAdditionalControls={[]} footer="Fear3"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear4.mp3" customAdditionalControls={[]} footer="Fear4"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear5.mp3" customAdditionalControls={[]} footer="Fear5"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear6.mp3" customAdditionalControls={[]} footer="Fear6"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear7.mp3" customAdditionalControls={[]} footer="Fear7"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear8.mp3" customAdditionalControls={[]} footer="Fear8"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear9.mp3" customAdditionalControls={[]} footer="Fear9"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/fear10.mp3" customAdditionalControls={[]} footer="Fear10"/>
                    <br/>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise1.mp3" customAdditionalControls={[]} footer="Surprise1"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise2.mp3" customAdditionalControls={[]} footer="Surprise2"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise3.mp3" customAdditionalControls={[]} footer="Surprise3"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise4.mp3" customAdditionalControls={[]} footer="Surprise4"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise5.mp3" customAdditionalControls={[]} footer="Surprise5"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise6.mp3" customAdditionalControls={[]} footer="Surprise6"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise7.mp3" customAdditionalControls={[]} footer="Surprise7"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise8.mp3" customAdditionalControls={[]} footer="Surprise8"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise9.mp3" customAdditionalControls={[]} footer="Surprise9"/>
                    <br/>
                    <AudioPlayer className="player" src="http://sehwa98.dothome.co.kr/mp3/surprise10.mp3" customAdditionalControls={[]} footer="Surprise10"/>
                    <br/>
                </TabPanel> */}
            </Tabs>
    )
}


export default MusicList;