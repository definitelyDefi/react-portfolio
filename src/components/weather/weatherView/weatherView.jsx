
import React, { useEffect } from "react"
import classes from './weatherView.module.css'
import { useSelector, useDispatch } from "react-redux";
import WeatherItem from "./weatherItem/weatherItem";
import Preloader from "../../decorative/preloader/preloader";
import { useParams } from "react-router";
import { weatherApiCallThunk } from "../../../http";

export default function WeatherView (){

    let isFetching = useSelector(state => state.weather.isFetching)
    const weather = useSelector(state => state.weather.weather)
    let country = useSelector(state => state.weather.country)
    let dispatch = useDispatch()
    let error = useSelector(state => state.weather.isWeatherError)
    let city = useParams()['*']
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    
    useEffect(() => {
        dispatch(weatherApiCallThunk(city, api_key))
        
    }, [])

    

        return(
            <div>
                {(weather.length !== 0 && !isFetching && !error)
                ?
                <div>
                    <h1 className={classes.city}>{`${city}, ${country}`}</h1>
                        <div className={classes.forecast}>
                            {weather.map(item =>{
                                return(
                                    <WeatherItem 
                                                date={item.valid_date} 
                                                icon={item.weather.icon} 
                                                temp={item.temp} 
                                                min_temp={item.min_temp}
                                                max_temp={item.max_temp}
                                                description={item.weather.description}
                                                wind_spd={item.wind_spd}
                                                wind_cdir_full={item.wind_cdir_full} />
                                
                                )
                            })}
            
                        </div>
                    </div>

                    : (isFetching === true && error === false)
                    ? <Preloader />
                    : (error === true)
                    ?<div className={classes.error}>City not found</div>
                    :null
                    
                }
            </div>
        )
    }
    
    
