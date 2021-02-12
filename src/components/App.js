// import './App.css';
import Header from "./Header";
import KegControl from './KegControl';
import React from 'react';
import fizz2 from '../img/fizz2.jpeg';

export default function App(props) {
  const appStyles = {
    backgroundImage: `url("${fizz2}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <>
      <Header/>
      <div style={appStyles}>
        <KegControl/>
      </div>
    </>
  );
}