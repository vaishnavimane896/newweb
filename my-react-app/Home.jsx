import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/techimg.jpg";
import Common from './Common';

const Home = () => {
  return (
    <>
    <Common name ="grow your business "  imgsrc={web} visit="/service" btname="get started"/>
    </>
  )
}

export default Home