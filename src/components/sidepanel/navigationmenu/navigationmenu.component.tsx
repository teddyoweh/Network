import {Link} from 'react-router-dom';
import logo from './favicon.png'; 
const NavigationComponent = () => {
    return (
      <nav>
      <div className="logo">
          <img src={logo} alt="logo"/>
      </div>
      <div className="search-bar">
          <input type="text"/>
          <i className='bx bx-search-alt'></i>
      </div>
      <div className="nav-bars">


          <i className='bx bx-bell'></i>
          <i className='bx bx-bookmarks'></i>
          <i className='bx bx-cart-alt'></i>
      </div>

      <div className="user-info">
          <img src="https://teddyoweh.files.wordpress.com/2022/02/img_3807.jpg" alt="logo"/>
          <div className="name-info">
              <label>Oweh Ifechukwudeni</label>
              <span>@teddyoweh</span>
          </div>
      </div>
  </nav>
       
    );
}

export default NavigationComponent;