import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import { StateType, ActionsType, PostType, DialogsDataType } from './Redux/state';
import { CombinedState, Store } from 'redux';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

type AppPropsType = {
	state: StateType
	dispatch: (action: ActionsType) => void
	store: Store<CombinedState<{ profilePage: PostType; messagesPage: DialogsDataType; }>, ActionsType>
}

function App(props: AppPropsType) {
	debugger
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Nav />
				<div className="app-wrapper-content">
					<Route path="/messages" render={() =>
						<DialogsContainer store={props.store}
							// state={props.state.messagesPage}
							// dispatch={props.dispatch}
						/>} />
					<Route path="/profile" render={() =>
						<Profile store={props.store}
						// state={props.state.profilePage}
						// 	dispatch={props.dispatch}
						/>} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
