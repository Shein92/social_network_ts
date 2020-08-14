import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App() {
	debugger
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Nav />
				<div className="app-wrapper-content">
					<Route path="/messages" render={() =>
						<DialogsContainer />} />
					<Route path="/profile" render={() =>
						<Profile/>} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
