import React, { useState } from 'react';
import axios from 'axios';

import classes from "./SearchBeer.module.css";

function SearchBeer() {
    const [query, setQuery] = useState('');
    const [beers, setBeers] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5178/search?query=${query}`)
            .then(response => setBeers(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div className={classes.searchBeer_container}>
            <h1 className={classes.searchBeer_header}>The search for your beer begins here</h1>
            <div>
            <input
                className={classes.searchBeer_input}
                type="text"
                placeholder="Search for a beer..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button className={classes.searchBeer_btn} onClick={handleSearch}>Search</button>
            </div>
            <ul className={classes.searchBeer_listContainer}>
                {beers.map(beer => (
                    <li className={classes.searchBeer_listItem} key={beer.id}>{beer.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBeer;