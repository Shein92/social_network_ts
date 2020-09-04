import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route } from "react-router-dom";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App() {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer />
				<Nav />
				<div className="app-wrapper-content">
					<Route path="/messages" 
						render={() => <DialogsContainer />} />
					<Route path="/profile/:userId?" 
						render={() => <ProfileContainer/>} />
					<Route path="/users"
						render={() => <UsersContainer/>} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
