import React from "react"
import {  useSelector } from "react-redux"

import Description from '../description/description'
import NoteForm from "./form/NoteForm";

import Note from "./note/note";
import classes from './notesList.module.css'



export default function NotesList () {

    let notes= useSelector(state => state.notes.notes) 


    return(
        <div>
            <Description description={'A simple note app'}/>
            <NoteForm />

            <div className={classes.list}>
                {notes.map(note => 
                (
                    <Note title={note.title} body={note.body} id={note.id} date={note.date}/>
                ))}
            </div>


        </div>

    )
}