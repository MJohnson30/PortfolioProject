import React, { Component } from "react";
import { Image } from "react-konva";
import planetOne from '../img/planetOne.png'; 
import planetTwo from '../img/planetTwo.png';
import planetThree from '../img/planetThree.png';
import planetFour from '../img/planetFour.png';
import planetFive from '../img/planetFive.png';
import useImage from 'use-image';


 const PlanetOneImage = () => {
  const [image] = useImage(planetOne);
  return <Image image={image} x={750} y={400} />;
};

const PlanetTwoImage = () => {
  const [image] = useImage(planetTwo);
  return <Image image={image} x={500}/>;
};

const PlanetThreeImage = () => {
  const [image] = useImage(planetThree);
  return <Image image={image} x={300} y={250}/>;
};

const PlanetFourImage = () => {
  const [image] = useImage(planetFour);
  return <Image image={image} x={100} y={550}/>;
};

const PlanetFiveImage = () => {
  const [image] = useImage(planetFive);
  return <Image image={image} x={0} y={0}/>;
};

const Planet = () => {
  return (
    <>
      <PlanetFiveImage />
      <PlanetTwoImage />
      <PlanetOneImage />
      <PlanetFourImage /> 
      <PlanetThreeImage />
    </>
  ); 
}

export default Planet;