import React from 'react';
import HeroSection from '../components/HeroSection';
import Pricing from '../components/Pricing';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

function Home() {
  return (
      <div>
        <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjThree} />
          <Pricing />
          <HeroSection {...homeObjTwo} />
      </div>
  );
}

export default Home;