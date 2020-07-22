import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, sendMessage} from './Redux/state'
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} sendMessage={sendMessage}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}