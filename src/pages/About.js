import React, { Component } from 'react';
import "./About.css";
import pfp from './pfp.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image" 
              src={pfp} 
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Avery Lanier</div>
            <div className="brief_description">
                I am a junior computer science student at 
                The University of Texas at Dallas. I love 
                to read fantasy novels, play and develop 
                video games, and do archery.
            </div>
          </div>
        </div>
      </div>

    )
  }
}