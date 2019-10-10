import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Carousel } from './components/Carousel/Carousel';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Services />
      <Footer />
    </>
  );
}

export default App;
