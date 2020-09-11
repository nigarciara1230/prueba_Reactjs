import React, { Component } from 'react';
import Timeline from '../TimeLine/Timeline';
import Tile from '../Tiles/tile';

export default class Dashboard extends Component {
    render(){
        return (
            <div>
              <div className="container my-ngr" >
                <h1>System</h1>
                <h6>Tiles</h6>
              </div>
              <Tile />
              <hr></hr>
              <div  className="container my-ngr">
                <h1>System</h1>
                <h6>Timeline</h6>
              </div>
              <Timeline />
            </div>
        );
    }
}