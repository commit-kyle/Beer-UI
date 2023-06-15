import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './RandomBeer.module.css';

function RandomBeer() {
    const [beer, setBeer] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5178/beer/random')
            .then(response => setBeer(response.data[0]))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={classes.randomBeer_container}>
            { beer ? (
                <div className={classes.randomBeer}>
                    <div>
                        <h2 className={classes.randomBeer_header}>{beer.name}</h2>
                        <p className={classes.randomBeer_desc}>{beer.description}</p>
                    </div>
                    <img className={classes.randomBeer_img} src={beer.image_url} alt={beer.name} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RandomBeer;