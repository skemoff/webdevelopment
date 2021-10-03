import React from 'react';
import './App.css';
import Header from './components/Header';
import MainNews from './components/MainNews';
import News from './components/News';

function App() {
  return (
    <div>
      <Header />
      <MainNews category = 'PÄIVÄN TIMANTTI' title = 'Matti Nykänen söi Aake Kallialan mökkilaiturin Kaliforniassa'/>
      <MainNews category = 'HELSINKI' title = 'Suomenlinnan 200-vuotiaat kadut pinnoitetaan 1800-luvun makadam-tekniikalla'/>
      <MainNews category = 'MAINOS' title = 'Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta'/>
      <News/>
    </div>
  );
}

export default App;
