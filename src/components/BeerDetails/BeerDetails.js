import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import classes from "./BeerDetails.module.css";

function BeerDetails () {
    const { id } = useParams();
    const [beer, setBeer] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5178/beer/${id}`)
            .then(response => setBeer(response.data[0]))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div className={classes.beerDetails_container}>
            { beer ? (
                <div className={classes.beerDetails}>
                    <div>
                        <h2 className={classes.beerDetails_header}>{beer.name}</h2>
                        <p className={classes.beerDetails_desc}>{beer.description}</p>
                    </div>
                    <img className={classes.beerDetails_img} src={beer.image_url} alt={beer.name} />
                    <Link className={classes.beerDetails_link} to={"/beer/menu"}>Back</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BeerDetails;