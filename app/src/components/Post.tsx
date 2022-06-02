import React from 'react';
import Image from "./assets/img.png";
import Avatar from "./Avatar";
export default function Post(){
    return (

        <>
 
    <li className="list-group-item">
  <figure className="figure">
      <div className='post-main'>
            <div className='post-body'>
            <img src={Image} className="figure-img img-fluid rounded" alt="..."/>

            <figcaption className="figure-caption">A caption for the above image.</figcaption>
            </div>
            <div className="likes">
                <i className='bx bxs-chevron-up'></i>
                 <small >10</small> 
                 <i className='bx bxs-chevron-down'></i> 
            </div>
        </div>
  <div className='post-insight'> 
  <div className="post-interact"> 
  <div className='box'>
      <div className='box11'>
    <div className='howlong' >2h </div> 
    <div className="comments">    <small> 10  comments</small>
    </div> 
    </div>  <Avatar></Avatar>
    </div>
    <div className='actionbox'>
        <a href="#" className="btn btn-primary">
            <i className='bx bx-message-rounded-dots'></i>  Comment
        </a>
        <a href="#" className="btn btn-primary">
            <i className='bx bxs-paper-plane'></i>  Share
        </a>
        <a href="#" className="btn btn-primary">
            <i className='bx bx-flag'></i>  Report
            </a>
    </div>
    </div>

  </div>
</figure>
    
    </li>
    <li className="list-group-item">
  <figure className="figure">
      <div className='post-main'>
            <div className='post-body'>
         

            <figcaption className="figure-caption">A caption for the above image.</figcaption>
            </div>
            <div className="likes">
                <i className='bx bxs-chevron-up'></i>
                 <small >10</small> 
                 <i className='bx bxs-chevron-down'></i> 
            </div>
        </div>
  <div className='post-insight'> 
  <div className="post-interact"> 
  <div className='box'>
      <div className='box11'>
    <div className='howlong' >2h </div> 
    <div className="comments">    <small> 10  comments</small>
    </div> 
    </div>  <Avatar></Avatar>
    </div>
    <div className='actionbox'>
        <a href="#" className="btn btn-primary">
            <i className='bx bx-message-rounded-dots'></i>  Comment
        </a>
        <a href="#" className="btn btn-primary">
            <i className='bx bxs-paper-plane'></i>  Share
        </a>
        <a href="#" className="btn btn-primary">
            <i className='bx bx-flag'></i>  Report
            </a>
    </div>
    </div>

  </div>
</figure>
    
    </li>
        </>
    )
}