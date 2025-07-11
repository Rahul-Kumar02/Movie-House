import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import axios from "axios";

function App() {
  const api_key = "cc568b05";
  
  const [movies, setMovies] = useState([]);

  const fetchApi = async (search) => {

    try {
      const movie_url = `http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}&s=${search}`;
      const res = await axios.get(movie_url);
      setMovies(res.data.Search || [])
      console.log(res.data.Search || []);
      
    } catch (error) {
      console.log(error, 'error hai');
      
    }
  };
  // Initial fetch to get movies when the app loads
  useEffect( () => {
    fetchApi("avengers");
  },[]) 

  return (
    <div className=" full-h-screen flex justify-center flex-col">
      {/* <h1 className=" text-3xl text-center fixed right-0 left-0 z-10 top-0 bg-red-200 p-3">Movies House App</h1> */}
      <Navbar moveisSearch={fetchApi}/>

      <div className="w-full full-h-screen flex flex-wrap items-center justify-center gap-5 py-20 px-4 lg:justify-between lg:flex 
      ">
        {
          movies.map((movie) => ( <MovieCard key={movie.imdbID} movie={movie}/>))
        }
         
          
        
      </div>
    </div>
  );
}

export default App;
