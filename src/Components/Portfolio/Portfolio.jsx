import React from 'react'
import './Portfolio.css'
import vid from '../../assets/video.mp4';

const Portfolio = () => {
  return (
    <div className='container-fluid portfolio ' id='projects'>
        
        <h2 className='text text-light text-center'>Projects</h2>
        <div className="row align-items-center">
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
            <div className="col-4 text-center">
                <h3 className="text-light">E-commerce Website</h3>
            </div>
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
        </div>
        <div className="container mt-5 mb-3">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className='text-light'>
          This project is a full-stack e-commerce website built using
          <span className='tech'> HTML, CSS, JavaScript, PHP, and SQL</span>. 
          The front-end is designed with HTML and CSS for a responsive and visually appealing user interface. JavaScript is used to add interactivity and enhance user experience. The back-end is powered by PHP, which handles server-side logic, user authentication, and transaction processing. SQL is used to manage the database, storing product information, user details, and order histories. The website features a shopping cart, secure checkout process, user account management, and an admin panel for managing products and orders.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center align-items-center">
          <video width="80%" height="auto" controls className='video'>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
            <div className="col-4 text-center">
                <h3 className="text-light">Food Delivery Web App</h3>
            </div>
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
        </div>
        <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className='text-light '>
          This project is a food delivery web application developed with <span className='tech'> HTML, CSS, and React</span>. It boasts a responsive and visually appealing user interface crafted with HTML and CSS, ensuring seamless navigation on both desktop and mobile devices. React components enhance interactivity, providing features such as real-time order updates, user authentication, and dynamic restaurant listings. The app integrates backend APIs for fetching restaurant data and managing orders, aiming to deliver a streamlined and intuitive experience for users to browse menus, customize orders, and track deliveries efficiently.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center align-items-center">
          <video width="80%" height="auto" controls className='video'>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
            <div className="col-4 text-center">
                <h3 className="text-light">Weather Forcast</h3>
            </div>
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
        </div>
        <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className='text-light'>
          This project is a weather application designed to provide real-time weather information based on the user's current location. Developed using <span className='tech'>HTML, CSS, and React</span> , the app features a responsive and intuitive interface crafted with HTML for structure and CSS for styling. React components enable dynamic updates and interactive features, showcasing current weather conditions such as temperature, humidity, wind speed, and precipitation. The application seamlessly integrates with the <span className='tech'>OpenWeather API</span> to fetch and display accurate forecasts, including detailed hourly updates at 3-hour intervals. It aims to enhance user experience by delivering clear and accessible weather data, empowering users to plan activities and make informed decisions based on weather forecasts.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center align-items-center">
          <video width="80%" height="auto" controls className='video'>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
            <div className="col-4 text-center">
                <h3 className="text-light">Landing page</h3>
            </div>
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
        </div>
        <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className='text-light'>
          This project is an engaging landing page developed with <span className='tech'>React</span>, designed to captivate visitors with its modern and responsive layout. Leveraging React's component-based architecture, <span className="tech">HTML</span> provides the structure while <span className="tech">CSS</span>  enhances the visual appeal and responsiveness, ensuring seamless navigation across devices. JavaScript within React adds interactive elements such as animations, dynamic content updates, and smooth transitions. The landing page is crafted to effectively showcase key features or offerings, encourage user engagement through clear calls-to-action, and deliver a user experience that aligns with the brand's identity and objectives. It aims to leave a positive impression on visitors, driving conversions and fostering user retention through a compelling and intuitive interface.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center align-items-center">
          <video width="80%" height="auto" controls className='video'>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>


      
    </div>
  )
}

export default Portfolio
