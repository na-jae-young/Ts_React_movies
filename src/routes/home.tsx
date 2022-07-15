/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import Movie from '../conponent/Movie'
import { monitorEventLoopDelay } from 'perf_hooks';


export function Home(){

    const [loading, setLoading] = useState<boolean>(true)
    const [movies,setMovies] = useState<any[]>([])
    //비동기적 함수 async   기다리게 만드는 await     async 함수 반환값은 promise 
    const getMovies = async ()=>{
      const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
      const json = await response.json()
      setMovies(json.data.movies)
      setLoading(false)
    }
  
    useEffect(()=>{
      getMovies()
      /*fetch('https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year'
      ).then((response)=>response.json())
      .then(json => {setMovies(json.data.movies); setLoading(false)})*/
    },[])
    useEffect(()=>{
      console.log(movies)
    },[movies])
    return (//이유는 모르겟지만 typescript 에선 map 사용시  &&  사용하면 any type 에러 사라짐  
      <div>
        {loading ? ( <h1>Loading...</h1> ): (<div>{movies.map(m => 
          <Movie     
          m_id ={m.id}
          m_image ={m.medium_cover_image}
          m_title ={m.title}
          m_summary ={m.summary}
          m_genres ={m.genres}
          />)}</div> )}
      </div>
    );


}

export default Home;