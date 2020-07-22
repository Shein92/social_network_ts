import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import { StateType } from './Redux/state';

//   "noImplicitAny": false

// let ProfileComp = () => <Profile postsData={postsData}/>; 

type AppPropsType = {
  state: StateType
  addPost: (postMessage: string) => void
  sendMessage: (sendMessage: string) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/messages" render={() => <Dialogs state={props.state.messagesPage} sendMessage={props.sendMessage}/>} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
          {/* <Route path="/" render={() => <Profile state={props.state.profilePage}/>} /> */}
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
