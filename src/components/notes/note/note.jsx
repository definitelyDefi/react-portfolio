
import React from "react"
import classes from './note.module.css'
import { useDispatch } from "react-redux"
import { deleteNote } from "../../../store/reducers/notesReducer"

export default function Note(props){

    const dispatch = useDispatch()
    
    const deletehandler = (e) =>{
        dispatch(deleteNote(e.currentTarget.value))
    }
    
    return(
        <div className={classes.note}>
                        <h3 className={classes.title} >{props.title} </h3>
                        <h2 className={classes.body}>{props.body}</h2>
                        <small className={classes.date}>{props.date}</small>
                        <button className={classes.delete} onClick={ deletehandler } value={props.id}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                        </button>

                    </div>
    )
}

