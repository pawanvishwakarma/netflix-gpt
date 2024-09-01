import { useEffect } from "react"
import { API_OPTION } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";


const useUpcomingMovies = () => {

    const dispatch = useDispatch();
 
    useEffect(()=>{
         fetchUpcomingMovies();
    }, [])

    const fetchUpcomingMovies = async () => {

        const upcomingMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTION);
        const json = await upcomingMovies.json();
        dispatch(addUpcomingMovies(json.results))
    }
}

export default useUpcomingMovies