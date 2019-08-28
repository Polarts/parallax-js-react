import React from 'react';
import './App.css';
import ParallaxScene from './components/ParallaxScene/ParallaxScene';

function App() {
  return (
    <div className="App">
      <ParallaxScene hoverOnly>
        <img src="https://i.dlpng.com/static/png/3886211-stuff-misc-icon-stuff-png-256_256_preview.png" data-depth="0.5"/>
        <img src="https://cdn0.iconfinder.com/data/icons/pry_etched_black/512/Stuff.png" data-depth="0.7"/>
      </ParallaxScene>
    </div>
  );
}

export default App;
