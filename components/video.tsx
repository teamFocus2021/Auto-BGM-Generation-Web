import * as React from 'react';
import { FC } from 'react';
import ReactPlayer from 'react-player'

// import videourl from 'localhost:3000/test.mp4';


const VideoPlayer: FC = () => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player fixed-bottom'
          url= 'https://storage.googleapis.com/auto-bgm-generation-web/test.mp4'
          controls = {true}

        />
      </div>

)
}

export default VideoPlayer;

