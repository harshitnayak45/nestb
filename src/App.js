import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './components/main/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
