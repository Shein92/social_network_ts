import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { StateType } from './Redux/state';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import StoreContext from './StoreContext';

export let rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
				{/* <App state={state}
					dispatch={store.dispatch.bind(store)}
					store={store}
				/> */}
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();