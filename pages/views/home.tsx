import { FC } from 'react';
import Link from 'next/link';

const Home: FC = ({}) => {

  return (
    <div className="main_div">
      <Link href="/views/start" as="/start">
        <a className="start_button">TRY YOUR VIDEO</a>
      </Link>
    </div>
  );
};

export default Home;
