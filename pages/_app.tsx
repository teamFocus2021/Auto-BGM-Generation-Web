import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Navbar from '../components/navbar';
import 'react-dropzone-uploader/dist/styles.css'
import '../components/dropzone.css'
import '../components/about.css'
import '../components/button.css'
import '../components/editor.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
    </div>
  );
};

export default MyApp;
