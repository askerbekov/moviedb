import React from 'react';

const List = (movies) => {
    return (
        <div className={'row'}>
            {
                movies.results && movies.results.map(movie => {
                    return (
                        <div key={movie.id} className={'col-3'}>
                            <h3>{movie.title}</h3>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default List;