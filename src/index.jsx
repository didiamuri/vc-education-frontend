import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/css/App.css';
import './assets/css/Carousel.css';
import './assets/css/Responsive.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/course-details/Main';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* <Home /> */}
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
