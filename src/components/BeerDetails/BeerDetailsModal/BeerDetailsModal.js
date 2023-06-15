import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './BeerDetailsModal.module.css';
import { Link } from 'react-router-dom';

function BeerDetailsModal({ beer, onClose, match }) {
    const [fetchedBeer, setFetchedBeer] = useState({});

    useEffect(() => {
        if (!beer && match) {
            const id = match.params.id;

            axios.get(`http://localhost:5178/beer/${id}`)
            .then(response => setFetchedBeer(response.data[0]))
            .catch(error => console.log(error));
        }
    }, [beer, match]);

    const displayedBeer = beer || fetchedBeer;

    if (!displayedBeer) {
        return null;
    }

    return (
        <>
            <div className={classes.overlay} onClick={onClose} />
            <div className={classes.modal}>
                <div className={classes.beerDetails}>
                    <div>
                        <h2 className={classes.beerDetails_header}>{beer.name}</h2>
                        <p className={classes.beerDetails_desc}>{beer.description}</p>
                    </div>
                    <img className={classes.beerDetails_img} src={beer.image_url} alt={beer.name} />
                </div>
                <Link className={classes.beerDetails_link} to={`/beer/${beer.id}`}>Go to Beer Page</Link>
                {onClose && <button className={classes.closeBtn} onClick={onClose}>CLOSE</button>}
            </div>
        </>
    )
}

export default BeerDetailsModal;