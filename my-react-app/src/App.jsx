import React from 'react';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import App from './App.css'
import {Switch,Route, Redirect} from "react-router-dom";


const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route  exact path='/' Component={Home}/>    
       <Route exact path='/about' Component={About}/>                            
        <Route   exact path='/service' Component={Service}/>
         <Route exact path='/contact' Component={Contact}/>
         
         <Redirect to="/"/>
  
   </Switch>
   <Footer />
    
    </>
  )
}

export default App