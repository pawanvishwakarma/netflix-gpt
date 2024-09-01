import { useEffect } from "react"
import { API_OPTION } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {

    const dispatch = useDispatch();
  
    useEffect(()=>{
        fetchTopRatedMovie();
    },[])

    const fetchTopRatedMovie = async () => {

        const topRatedMovies = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTION);
        const json = await topRatedMovies.json();
        dispatch(addTopRatedMovies(json.results))
    }

}

export default useTopRatedMovies;
