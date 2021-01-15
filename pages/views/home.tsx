import { FC } from 'react';
import Link from 'next/link';

const Home: FC = ({}) => {

  return (
    <div>
      <Link href="/views/start" as="/start">
        <a className="startbutton">TRY YOUR VIDEO</a>
      </Link>
    </div>
  );
};

export default Home;
