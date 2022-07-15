/* eslint-disable jsx-a11y/alt-text */
import { Link} from "react-router-dom"

interface Movie_props{
    m_id : number 
    m_image : string
    m_title : string
    m_summary : string
    m_genres : string[]
}


export function Movie(props:Movie_props){

    return (
    <div key={props.m_id}>
        <img src={props.m_image}></img>
        <h2>
          <Link to={`/movie/${props.m_id}`}>{props.m_title}</Link>
        </h2>
        <p>{props.m_summary}</p>
        <ul> 
        {props.m_genres && props.m_genres.map( (g:string) =>  <li key={g}>{g}</li> )}
        </ul>
        <hr></hr>
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