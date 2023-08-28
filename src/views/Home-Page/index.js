import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import List from "../../components/List";
import Carousel from "../../components/Carousel";

const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect( () => {
        axios('https://api.themoviedb.org/3/movie/popular?api_key=8478755afaaa063d38320c7a6d2f0743')
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Layout>
            <div className={'carousel-wrapper'}>
                <Carousel movies={movies}/>
            </div>
            <div className="container">
                <List movies={movies}/>
            </div>
        </Layout>
    );
};

export default HomePage;