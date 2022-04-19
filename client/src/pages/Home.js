import React from 'react';
import HeroSection from '../components/HeroSection';
import { homeObjOne } from './Data';

function Home() {
  return (
      <div>
        <HeroSection {...homeObjOne} />
      </div>
  );
}

export default Home;