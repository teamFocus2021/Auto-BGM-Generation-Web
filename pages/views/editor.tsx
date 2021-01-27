import * as React from 'react';
import { FC } from 'react';
import MusicCategory from '../../components/music_category'
import VideoPlayer from '../../components/video'
import Frames from '../../components/frames'


const Page: FC= () => {
  return  <div className="main_div">
            <div className="video_player">            
                <VideoPlayer />
            </div>
            <div className="music_list">            
                <MusicCategory />
            </div>
            <div className="frame_list">            
                <Frames />
            </div>


          </div>;
};

export default Page;


