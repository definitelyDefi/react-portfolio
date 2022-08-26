
import React from "react"
import classes from './animeItem.module.css'
import { useNavigate } from "react-router"


export default function AnimeItem(props){

    let navigate = useNavigate()

    let onclickHandler = (e) =>{
        navigate('/react-training/anime/view/'+ e.target.value)
    }
    
    return(
        <div className={classes.item}>
            <h1 className={classes.title}>{props.title}</h1>
            <img 
                src={props.poster} 
                className={classes.poster} 
                alt={props.poster}
            />
            <button 
                className={classes.button} 
                onClick={ onclickHandler } 
                value={props.id}>More
            </button>

            <h2 className={classes.startDate}>Started:      <span className={classes.attrs}>{props.startDate}</span></h2>
            <h2 className={classes.episodeCount}>Episodes:  <span className={classes.attrs}>{props.episodeCount || 'ongoing'}</span></h2>
            <h2 className={classes.showType}>Type:          <span className={classes.attrs}>{props.showType}</span></h2>
            <h2 className={classes.popularity}>Rank:        <span className={classes.attrs}>{props.popularityRank}</span></h2>
            <h2 className={classes.rating}>Age rating:      <span className={classes.attrs}>{props.ageRating}</span></h2>
            <h2 className={classes.status}>Status:          <span className={classes.attrs}>{props.status}</span></h2>       
        </div>
    )
}



