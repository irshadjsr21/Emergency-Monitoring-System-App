import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class QuickActions extends Component {
  render() {
    return (
    <div>
       <Link to={"/manualinput" }>Start Manual Input</Link><Link to={"/video" }>Emergency Video Sharing</Link>
    </div>
    )
  }
}