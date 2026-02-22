import React from 'react'
import web from "../src/images/japan.jpg";
import { NavLink } from 'react-router-dom';

const Card= (props) => {
 return (
  <div className="col-md-4 col-10 mx-auto">
    <div className="card">
      <img src={props.imgsrc} className="card-img-top" alt="service" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <p className="card-text">
          We provide high quality development services with modern design.
        </p>
        <NavLink to="" className="btn btn-primary">
          Explore
        </NavLink>
      </div>
    </div>
  </div>
);
}

export default Card
