// import './App.css';
import Header from "./Header";
import KegControl from './KegControl';
import React from 'react';
import fizz from '../img/fizz.jpeg';

export default function App(props) {
  const appStyles = {
    backgroundImage: `url("${fizz}")`
  }
  return (
    <div style={appStyles}>
    <Header/>
    <KegControl/>
    </div>
  );
}