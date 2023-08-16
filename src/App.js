import { useEffect , useState } from 'react';
import "./App.css"
import Search from './Search.svg'
import React from 'react';
import MovieCard from './MovieCard';

//450ac4f0

const API_URL = 'http://www.omdbapi.com?apikey=450ac4f0';
// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"
// }



const App=()=>{

     const[movies, setmovies] = useState([]);
     const[searchterm, setsearchterm] = useState('');

    const searchMovies= async (title)=>{
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();

    setmovies(data.Search);
}
       
     useEffect(()=>{
         searchMovies('');   
       },[]);
       
 return(
        <div className="app">
           <h1>MovieLand</h1>
            <div className='search'>
               <input
               placeholder='Search Movie'
               value={searchterm}
               onChange={(e)=>{setsearchterm(e.target.value)}}
               />

               <img
               src={Search}
               alt='search'
               onClick={()=>searchMovies(searchterm)}
               />
           </div>

           {
            movies?.length > 0
            ?( <div className='container'>
                {movies.map((movie)=>
                <MovieCard movie={movie}/>
                )}
              </div>
              ):(
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>   
              )
           }
              
           
           
           
        </div>
    );
        
      

        
}

export default App;