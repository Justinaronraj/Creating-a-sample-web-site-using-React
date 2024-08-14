import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './nav';
import Footer from './footer';
import Table from './content';
import './index.css';
function Body(){
  return (
    <div>
      <Navbar/>
      <Table/>
      <Footer/>
    </div>
  )

}
ReactDOM.render(<Body />, document.getElementById("root"));

