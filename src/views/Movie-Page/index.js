import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {useParams} from "react-router-dom";
import './style.css';
import Loader from "../../components/Loader";


const MoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState({})

    useEffect( () => {
        axios(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8478755afaaa063d38320c7a6d2f0743`)
            .then(res => setMovie(res.data))
    }, [])
    console.log(movie)
   if (movie.id) {
       return (
           <Layout>
              <div style={{
                  background: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                  backgroundSize:'cover',
                  backgroundPosition: 'center',
                  padding: '10px',
                  position: 'relative',

              }}>
                  <div className="image-filter">
                      <div className="container" style={{
                          position: 'relative',
                          zIndex: 4,
                      }}>
                          <div className={'inner-wrapper'}>
                              <img className={'inner-img'} src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt=""/>

                              <div>
                                  <h4>{movie.title}</h4>
                                  <p>{movie.overview}</p>
                                  <p>{movie.genres.name}</p>


                              </div>
                          </div>
                      </div>
                  </div>
              </div>

           </Layout>
       );
   }else {
return (
    <Loader/>
)
   }
};

export default MoviePage;