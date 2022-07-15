/* eslint-disable jsx-a11y/alt-text */
import { Link} from "react-router-dom"
import styles from "./Movie.module.css"

interface Movie_props{
    m_id : number 
    m_image : string
    m_title : string
    m_summary : string
    m_genres : string[]
    m_year : number
}


export function Movie(props:Movie_props){

    return (
    <div key={props.m_id} className={styles.movie}>
        <img src={props.m_image} alt={props.m_title} className={styles.movie__img}></img>
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${props.m_id}`}>{props.m_title}</Link>
          </h2>
          <h3 className={styles.movie__year}>
            {props.m_year}
          </h3>
          <p>{props.m_summary.length >235 ? `${props.m_summary.slice(0,235)}...` : props.m_summary}</p>
          <ul className={styles.movie__genres}>  
          {props.m_genres && props.m_genres.map( (g:string) =>  <li key={g}>{g}</li> )}
          </ul>
        </div>
    </div>
  )
}

export default Movie;
/*
<div key={m.id}>
<img src={m.medium_cover_image}></img>
<h2>{m.title}</h2>
<p>{m.summary}</p>
<ul> 
  {m.genres && m.genres.map( (g:string) =>  <li key={g}>{g}</li> )}
</ul>
<hr></hr>
</div>


Movie.prototype = { 
  m_id : PropTypes.number.inRequired
  m_image : PropTypes.string.inRequired
  m_title : PropTypes.string.inRequired
  m_summary : PropTypes.string.inRequired
  m_genres : PropTypes.arrayOf(PropTypes.string).inRequired
}
*/