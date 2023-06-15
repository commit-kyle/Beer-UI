import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import classes from './App.module.css';
import BeerList from './components/BeerList/BeerList';
import BeerDetails from './components/BeerDetails/BeerDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';
import SearchBeer from './components/SearchBeer/SearchBeer';

function App() {
  return (
    <Router>
      <div>
        <nav className={classes.nav}>
          <ul className={classes.listContainer}>
            <li>
              <Link className={classes.listItem} to="/beer/menu">Beer Menu</Link>
            </li>
            <li>
              <Link className={classes.listItem} to="/beer/random">Random Beer</Link>
            </li>
            <li>
              <Link className={classes.listItem} to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/beer/menu" element={<BeerList/>} />
          <Route path="/beer/:id" element={<BeerDetails/>} />
          <Route path="/beer/random" element={<RandomBeer/>} />
          <Route path="/search" element={<SearchBeer/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
