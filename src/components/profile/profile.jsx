

import classes from './profile.module.css'
import React from 'react'
import pic from './../../assets/pic.png'
import github from './../../assets/github.png'
export default function ProfilePage(){
    return(
        <div className={classes.wrapper}>
            <div className={classes.items}>
                <div className={`${classes.item} ${classes.about}`}>
                    <img src={pic} className={classes.image} alt={pic}/>
                    <h1 className={classes.title}>Hi, my name is Denis Beliy</h1>
                    <p className={classes.text}>My nickname in WWW is <span className={classes.nickname}>definitelydefi</span> or just <span className={classes.nickname}>defi</span>. i am <span className={classes.creator}>creator</span> of this single page application and i want to become <span className={classes.junior}>junior react developer</span>.</p>
                    <p className={`${classes.text} ${classes.textMe}`}>{'Feel free to text me :)'}</p>
                </div>

                <div className={`${classes.item} ${classes.links}`}>
                    <h1 className={classes.titleSmall}>Yo, you can text me using these</h1>
                    <ul className={classes.list}>
                        
                        <li className={classes.listItem}><a href='https://t.me/definitelydefi'>Telegram</a></li>
                        <li className={classes.listItem}><a href='https://www.linkedin.com/'>LinkedIn</a></li>
                        <li className={classes.listItem}><a href='mailto:iamdefied@gmail.com'>E-mail</a></li>
                    
                    </ul>
                    <h1 className={classes.titleSmall}>And surely, my github</h1>
                        <div className={classes.github}>
                            <img src={github} width="50" height="50" alt={github}/>
                            <a href='https://github.com/definitelyDefi'>Github</a>
                        </div>
                        
                </div>
                
            </div>
            
        </div>
    )
}