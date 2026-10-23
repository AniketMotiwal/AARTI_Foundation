import React from 'react';
import Hero from '../home/Hero';
import {
  CallToAction,
  Centres,
  FocusAreas,
  Highlights,
  IndustrialRD,
  Intro,
  Journey,
  Moments,
  Partners,
  Programmes,
  Technologies,
} from '../home/HomeSections';

const Home = () => (
  <>
    <Hero />
    <Intro />
    <FocusAreas />
    <Centres />
    <Highlights />
    <Journey />
    <Technologies />
    <IndustrialRD />
    <Programmes />
    <Moments />
    <Partners />
    <CallToAction />
  </>
);

export default Home;
