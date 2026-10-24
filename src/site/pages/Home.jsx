import React from 'react';
import Hero from '../home/Hero';
import VisitsSection from '../VisitsSection';
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
    <VisitsSection />
    <Moments />
    <Partners />
    <CallToAction />
  </>
);

export default Home;
