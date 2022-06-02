import React from 'react';
import Image from "./assets/img.png";
import Avatar from "./Avatar";
export default function Post(){
    return (

        <>
        <li className="list-group-item">
  <figure className="figure">
   
  <figcaption className="figure-caption">A caption for the above image.</figcaption>
  <div className='post-insight'> 
  <a href="#" className="btn btn-primary"><i className='bx bx-message-rounded-dots'></i>  Comment</a>
  <Avatar></Avatar>
  </div>
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
        </>
    )
}