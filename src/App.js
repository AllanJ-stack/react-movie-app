import React from 'react';
import Header from './components/Header'
import Movies from './components/Movies'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import ActionMovies from './components/ActionMovies';
import ComedyMovies from './components/ComedyMovies';
import DramaMovies from './components/DramaMovies';
import Details from './components/Details';
import Home from './components/Home';
import Footer from './components/Footer'




function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          
          
          <section>
            <Routes>
              <Route path="/" element = {<Home />}/>
              <Route path="movies" element = {<Movies />}/>
              <Route path="details" element = {<Details />} />
              <Route path="actionmovies" element = {<ActionMovies />}/>
              <Route path="comedymovies" element = {<ComedyMovies />}/>
              <Route path="dramamovies" element = {<DramaMovies />}/>
           
            </Routes>
          
          </section>
         
         
        </Router>
      
      </div>
      <div>
      <Footer />
      </div>
    </DataProvider>
    
  );
}

export default App;
