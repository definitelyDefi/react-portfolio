
import classes from './animeSearch.module.css'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux/es/exports'
import { useNavigate } from 'react-router'
import Description from '../../description/description'

import { fetchAnimeThunk } from '../../../http'


const animeSearch = function(){

    const [anime,setAnime] = useState('')

    let dispatch = useDispatch()
    let navigate = useNavigate()
    

    const onclickHandler = () => {
        
        dispatch(fetchAnimeThunk(anime))
        navigate('/react-training/anime/list')
    }
    return(
        <>
            <Description description='Anime search tool using kitsu api'/>
            <div className={classes.wrapper}>
            
                <input 
                    className={ classes.input } 
                    type='text' value={ anime } 
                    onChange={ (e)=>setAnime(e.target.value) }
                />

                <button 
                    className={ classes.button } 
                    onClick={ onclickHandler }>
                </button>
            </div>
            
        </>
    )
}

export default animeSearch;