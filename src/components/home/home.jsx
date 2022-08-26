import classes from './home.module.css';
import React from 'react'
import HomeItem from './homeItem/homeItem';

const Welcome = function(){

    return(
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Homepage</h1>
                <p className={classes.text}>Welcome to my <span className={classes.textMark}>SPA portfolio,
                    </span> use <span className={classes.textMark}>links</span> below to navigate through my projects
                </p>
            </div>
            
            <div className={classes.items}>

                <HomeItem 
                    title='Counter' 
                    link='/react-training/counter' 
                    description='Simple counter with 3 buttons — increment, decrement and reset'
                />

                <HomeItem 
                    title='Calculator'
                    link='/react-training/calculator' 
                    description='A simple calculator for dividing, multiplying, summation and substraction'
                />

                <HomeItem 
                    title='Rule34 viewer' 
                    link='/react-training/rule34/search' 
                    description='App for working with rule34 api and viewing pictures easily (in progress)'
                />

                <HomeItem 
                    title='Notes app' 
                    link='/react-training/notes' 
                    description='Note app with integration of localStorage, note have title,body and date of creation'
                />

                <HomeItem 
                    title='Forecast app' 
                    link='/react-training/weather/search' 
                    description='Forecast app for 16 days including icon,wind, temp and text description of weather, supports all languages'
                />

                <HomeItem 
                    title='Anime search' 
                    link='/react-training/anime/search' 
                    description='Anime search tool using kitsu api, supports only english'

                />
                

            </div>
        </div>
        
    )
}

export default Welcome;