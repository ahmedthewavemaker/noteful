import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import store from './Store';
import GoBack from './GoBack';
import NoteDetail from './NoteDetail';
import './App.css';



class App extends Component {
  state = {
    
    notes: store.notes,
    folders: store.folders,

  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>

          <header>
            <h1><Link to='/'>Noteful</Link></h1>
          </header>
        </div>

        <div className='Sidebar'>
          <Route
            exact path='/'
            render={() =>
              <Sidebar 
                  folders={this.state.folders}
                  />
            } />

          <Route
            path='/folder/:folderId'
            render={() =>
              <Sidebar 
              folders={this.state.folders} />
            } />
          <Route
            path='/note/:noteId'
            render={(routerProps) =>
              <GoBack 
              {...routerProps}
              
              folders={this.state.folders}/>
            } />
        </div>

        <div className='MainPage'>
          <main>

            <Route
              exact path='/'
              render={(routerProps) =>
                <MainPage 
                {...routerProps}
                notes={this.state.notes}/>
              } />
            <Route
              path='/folder/:folderId'
              render={(routerProps) =>
                <MainPage 
                {...routerProps}
                notes={this.state.notes}/>
              } />

            <Route
              path='/note/:noteId'
              render={(routerProps) =>
                <NoteDetail 
                {...routerProps}
                notes={this.state.notes}/>
              } />

          </main>
        </div>
      </div>

    )
  }

}
export default App;