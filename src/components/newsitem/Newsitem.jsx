import React from "react";
import "./newsitem.css"
import moment from 'moment'
import alterImg from "../../assets/images.jpeg"

export default function Newsitem({title,link,photo,time,source}) {
  return (
  
      <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:2, left:"90%"}}>{source}</span>
        <img src={photo || alterImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small className="text-body-secondary">{moment(time).fromNow()}</small>
          </p>
          <a className="btn btn-primary" href={link}>Know More</a>
        </div>
      </div>
  );
}
