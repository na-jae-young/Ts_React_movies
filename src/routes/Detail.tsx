
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Detail(){
   // const id = useParams().id
    const {id} = useParams()
    const getMovieDate = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        console.log(json)
    }
    useEffect(()=>{
        getMovieDate()
    })
    return(<div>Detail {id}</div>)
}

export default Detail; 