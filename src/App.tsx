import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Route, withRouter } from "react-router-dom";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer'
import { AppStateType } from './Redux/redux-store';
import Preloader from './Components/common/Preloader/Preloader';
import { getInitializedStatus } from './Redux/users-selectors';

type AppPropsType = {
	setUserDataThunkCreator: () => void
}

class App extends React.Component<any>{

	componentDidMount() {
		this.props.initializeApp();
		// this.props.setUserDataThunkCreator();
	};

	render() {
		if (this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Nav />
				<div className="app-wrapper-content">
					<Route path="/messages"
						render={() => <DialogsContainer />} />
					<Route path="/profile/:userId?"
						render={() => <ProfileContainer />} />
					<Route path="/users"
						render={() => <UsersContainer />} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
					<Route path="/login"
						render={() => <Login />} />
				</div>
			</div>
		)
	};
}

const mapStateToProps = (state: AppStateType) => {
	return {
		initialized: getInitializedStatus(state)
	}
}

export default connect(mapStateToProps, { initializeApp })(withRouter(App))

// export default compose(
// 	withRouter,
// 	connect(null, {setUserDataThunkCreator}))(App);
