import { useEffect } from 'react'
import { API_OPTION } from '../utils/contants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchPopularMovies();
    }, [])

 
    const fetchPopularMovies = async () => {
      
        const popularMovies = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTION);
        const json = await popularMovies.json();
        console.log(json)
        dispatch(addPopularMovies(json.results))
    }

}

export default usePopularMovies