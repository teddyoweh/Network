import './banner.css';
 
const BannerComponent = () => {
    return (
    
             
        <banner>
          <div className="banner">
          <nav>
            <a href='/login'>
              login

            </a>
          </nav>
          <div className="container">
            <img src={'./favicon.png'} alt='Network Logo'></img>
            <h1>Network</h1>
          </div>
          </div>
        </banner>
       
    );
}

export default BannerComponent;