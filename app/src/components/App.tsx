import React from 'react';

import Header from "./Header";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Avatar from './Avatar';
import Footer from "./Footer";
import UploadYak from './Upload';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <UploadYak></UploadYak>
    <Feed></Feed>

    <Footer></Footer>
 
     
    </>
  );
}

export default App;
