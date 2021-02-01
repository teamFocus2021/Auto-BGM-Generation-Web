import { FC } from 'react';
import * as React from 'react';
import frame from '../upload/emotion/emotions.json';

const Frames: FC = () => {

    var frame_url ='';
    for (const key of Object.keys(frame)){
        if( key == 'total' || key == 'time')
            continue;
    
        frame_url += "<img src= \'https://storage.googleapis.com/store_video2/"+ key + ".jpg\' alt=\'logo\' />";
        console.log(frame_url);
    }
    return (
        <div dangerouslySetInnerHTML={ {__html: frame_url} }></div>
    )
}

export default Frames;

