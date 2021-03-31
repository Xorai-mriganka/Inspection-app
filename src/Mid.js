import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./mid.css";
import * as ReactBootStrap from 'react-bootstrap';
import row from "./components/row";
import Grid from "./components/grid";


const Mid = () => {
return (
  <div className="mid">
    <h2>Exterior</h2>
    <ReactBootStrap.Table className="table">
      <thead className="table container">
        <Grid/>
      </thead>
    </ReactBootStrap.Table>
  </div>
);
}
export default Mid;