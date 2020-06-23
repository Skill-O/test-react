import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
