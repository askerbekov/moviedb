import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {useParams} from "react-router-dom";
import './style.css';


const MoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState({})

    useEffect( () => {
        axios(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8478755afaaa063d38320c7a6d2f0743`)
            .then(res => setMovie(res.data))
    }, [])
    return (
        <Layout>
            <div className="container">
                <div className={'inner-wrapper'}>
                    <img className={'inner-img'} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>

                    <div>
                        <h4>{movie.title}</h4>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default MoviePage;