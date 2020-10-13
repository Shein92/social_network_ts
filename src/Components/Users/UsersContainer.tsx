import { connect } from 'react-redux';
import UsersApiComponent from './UsersAPIComponent';
import { setCurrentPage, getUsersThunkCreator, followUsersThunkCreator, unfollowUsersThunkCreator } from '../../Redux/users-reducer';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { AppStateType } from '../../Redux/redux-store';
import { getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../Redux/users-selectors';
// import { compose } from 'redux';

// let mapStateToProps = (state: StateType) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 		isAuth: state.auth.isAuth
// 	}
// }
let mapStateToProps = (state: AppStateType) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state)
	}
}

let AuthRedirectComponent = withAuthRedirect(UsersApiComponent);

export default connect(mapStateToProps, {
	setCurrentPage,
	getUsers: getUsersThunkCreator,
	followUsersThunkCreator,
	unfollowUsersThunkCreator
})(AuthRedirectComponent)

// export default UserContainer;
// export default compose(
// 	connect(mapStateToProps, {
// 		setCurrentPage,
// 		getUsers: getUsersThunkCreator,
// 		followUsersThunkCreator,
// 		unfollowUsersThunkCreator
// 	}),
// 	withAuthRedirect)(UsersApiComponent)
// export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);