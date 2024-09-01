
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/contants";
import { addMovieTrailer } from "../utils/movieSlice";


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    useEffect(()=>{
       fetchMovirTrailer();
    }, [])

    const fetchMovirTrailer = async () => {
        const traileData = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_OPTION);
        const json = await traileData.json();
        const filterTrailer = json.results.filter((video)=> video.type === "Trailer")
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0]
        dispatch(addMovieTrailer(trailer))
        
    }

}

export default useMovieTrailer;