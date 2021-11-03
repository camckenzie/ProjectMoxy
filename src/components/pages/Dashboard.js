import React from 'react';
import './Dashboard.css';
//import { motion } from "framer-motion"

const Panel1 = () => {
  return (
    <h1>Panel1</h1>
  );
};
const Panel2 = () => {
  return (
    <h1>Panel2</h1>
  );
};
const Panel3 = () => {
  return (
    <h1>Panel3</h1>
  );
};
const Panel4 = () => {
  return (
    <h1>Panel4</h1>
  );
};


const Dashboard = () => {
  return (
    //<motion.div exit={{ opacity:0}} >
      <div class="panels">
        <h1>Dashboard button works</h1>
        <div class="panel-1">
          <Panel1 />
        </div>
        <div class="panel-2">
          <Panel2 />
        </div>
        <div class="panel-3">
          <Panel3 />
        </div>
        <div class="panel-4">
          <Panel4 />
        </div>
      </div>
   // </motion.div>
  );
};
  
export default Dashboard;