import React  from "react";
import "./assets/css/feed.css";
import Image from "./assets/img.png";
import Avatar from "./Avatar";
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
  <li className="list-group-item">
  <figure className="figure">
   
  <figcaption className="figure-caption">A caption for the above image.</figcaption>
  <a href="#" className="btn btn-primary"><i className='bx bx-message-rounded-dots'></i>  Comment</a>
</figure>
    
    </li>
    <li className="list-group-item">
  <figure className="figure">
  <img src={Image} className="figure-img img-fluid rounded" alt="..."/>
  <figcaption className="figure-caption">A caption for the above image.</figcaption>
  <div className='post-insight'> 
  <a href="#" className="btn btn-primary"><i className='bx bx-message-rounded-dots'></i>  Comment</a>
  <Avatar></Avatar>
  </div>
</figure>
    
    </li>
   
</ul>
 
</div>
        </>
    )
}
export default Feed;