const HomeComponent = () => {
    return (
      <div className="container">
      <div className='posts'>
          <div className='up'><img src={process.env.PUBLIC_URL + '/assets/img/anony.png'}alt ='altext'/><div className='others'><span>Anyone have a book for sale?</span></div></div>
      </div>
      <div className='posts'>
          <div className='up'><img src={process.env.PUBLIC_URL + '/assets/img/anony.png'}alt ='altext'/><div className='others'><span>Anyone have a book for sale?</span><img src='https://pbs.twimg.com/media/FN6ZmFcXwAs2CzY?format=png'alt ='altext'/></div></div>
      </div>
     
   </div>



    );
}

export default HomeComponent;