import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const pageSize = 15

  const [progress, setProgress] = useState( 0 );

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={ 3 }
          color='#f11946'
          progress={ progress }
        />
        <Routes>
          <Route exact path='/' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="" pageSize={ pageSize + 5 } category="" country="us" /> } ></Route>
          <Route exact path='/about' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="general" pageSize={ pageSize } category="general" country="in" /> } ></Route>
          <Route exact path='/bussiness' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="bussiness" pageSize={ pageSize } category="business" country="in" /> } ></Route>
          <Route exact path='/entertainment' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="entertainment" pageSize={ pageSize } category="entertainment" country="in" /> } ></Route>
          <Route exact path='/health' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="health" pageSize={ pageSize } category="health" country="in" /> } ></Route>
          <Route exact path='/general' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="general" pageSize={ pageSize } category="general" country="in" /> } ></Route>
          <Route exact path='/science' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="science" pageSize={ pageSize } category="science" country="in" /> } ></Route>
          <Route exact path='/sports' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="sports" pageSize={ pageSize } category="sports" country="in" /> } ></Route>
          <Route exact path='/technology' element={ <News setProgress={ setProgress } apiKey={ apiKey } key="technology" pageSize={ pageSize } category="technology" country="in" /> } ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

