 
import React  from "react";
import "./assets/css/feed.css";
import Image from "./assets/img.png";
import Post from './Post';
import 'boxicons';
function Feed(){
    return(
        <>
     <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
 
  <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
        <div className="container-fluid" id='feed'>
        <ul className="list-group">
  
    <Post></Post>
    <Post></Post>
    <Post></Post>
   
</ul>
 
</div>
        </>
    )
}
export default Feed;