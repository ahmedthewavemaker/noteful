import React,{useContext} from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';



export default function AddFolder(props) {
    const context=useContext(AppContext)
    const onAddFolder=(event) => {
        event.preventDefault();
    const name=event.target.name.value
    const folder={name}
    
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(folder)
        })
        .then(response => {
           context.getData()
           props.history.push('/')
        })
        
    }

    return (
        <form onSubmit={onAddFolder}>
            <label >

            </label>
            <input name='name' placeholder='Folder Name'/>
            <button>Add Folder</button>
        </form>
    )
}

AddFolder.propTypes={
    name: PropTypes.string.isRequired,
    match: PropTypes.any,
    history: PropTypes
}
