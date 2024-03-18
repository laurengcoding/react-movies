import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import LoginPage from "../LoginPage/LoginPage";
import ActorDetailPage from "../ActorListPage/ActorListPage";
import MovieDetailPage from "../../components/MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import NavBar from "../../components/NavBar/NavBar";
import { movies } from "../../data";


export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {
      user === null ? 
      
      <LoginPage user={user} setUser={setUser} />
      :
      <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={ <MoviesListPage movies={movies} /> } />
        <Route path="/movies/:movieName" element={ <MovieDetailPage /> } />
        <Route path="/actors" element={ <ActorDetailPage /> } />
      </Routes>
      </>
      }
    </div>
  );
}
