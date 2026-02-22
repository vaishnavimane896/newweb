import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/techimg.jpg";
import Common from './Common';

const About = () => {
  return (
    <>
    <Common name ="welcome to about page "  imgsrc={web} visit="/contact" btname="Contact Now"/>
    </>
  )
}

export default About;
