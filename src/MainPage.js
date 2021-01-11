import React from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css'



export default function MainPage(props) {
    let notes=props.notes
    if(props.match.params.folderId){
        notes=notes.filter(note => note.folderId === props.match.params.folderId)
    }
    console.log(props);
    return (
       <div className='Mainpage'>
          {notes.map(note => <div><li key={note.id} className='note'>
                <h2><Link to={'/note/'+note.id} >{note.name}</Link></h2>
                <h3>{note.modified}</h3>
                <button className='noteButton'>Remove Note</button>
           </li> </div>)}
       </div>
    )



}