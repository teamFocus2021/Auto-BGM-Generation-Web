import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Sidebar from '../components/navbar';
import 'react-dropzone-uploader/dist/styles.css'
import '../components/dropzone.css'
import '../components/about.css'
import '../components/button.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
