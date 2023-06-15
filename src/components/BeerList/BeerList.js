import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './BeerList.module.css';
import BeerDetailsModal from '../BeerDetails/BeerDetailsModal/BeerDetailsModal';

function BeerList() {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5178/beer/menu')
            .then(response => setBeers(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleBeerDetails = beer => {
        setSelectedBeer(beer);
    }

    const handleBeerDetailsClose = () => {
        setSelectedBeer(null);
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.listHeader}>Here is your list of beers</h2>
            <ul className={classes.listContainer}>
                {beers.map((beer, index) => (
                    <li key={index} 
                        className={classes.listItem}
                        onClick={() => handleBeerDetails(beer)}>
                        {beer.name}
                    </li>
                ))}
            </ul>
            {selectedBeer && 
            <BeerDetailsModal beer={selectedBeer} onClose={handleBeerDetailsClose} />}
        </div>
    );
}

export default BeerList;