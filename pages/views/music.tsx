import * as React from 'react';
import { FC } from 'react';
import MusicList from '../../components/music_list'

const Page: FC= () => {
  return  <div className="main_div">
            <MusicList />
          </div>;
};

export default Page;
