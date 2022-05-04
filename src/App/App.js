import React from 'react';
import './App.css';
import PeepImage from './PeepImage.png'
import { MainBox } from '../Components/MainBox/MainBox';

function App() {
  // let movies = getMovies('jaws');
  // console.log(movies);
  return (
    <div>
      <div className='App'>
      <div className="LeftSide">
        <div className='LetsJudge'>
          <h1 className='LetsText'>Let's</h1>
          <h1 className='JudgeText'>judge</h1>
        </div>
        
          <div className='ImageBox'>
          <img alt='Man with a moustache and coffee illustration' src={PeepImage} />
          </div>
      </div>
      <div className="RightSide">

       <MainBox/>
      </div>
    </div>
    </div>
  );
}

export default App;
