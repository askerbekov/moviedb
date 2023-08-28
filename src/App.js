import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./views/Home-Page";
import MoviePage from "./views/Movie-Page";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/movie/:id" element={<MoviePage/>}/>
        </Routes>
    );
};

export default App;