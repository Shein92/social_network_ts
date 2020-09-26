import { connect } from 'react-redux';
import UsersApiComponent from './UsersAPIComponent';
import { StateType } from '../../Redux/state';
import { setCurrentPage, getUsersThunkCreator, followUsersThunkCreator, unfollowUsersThunkCreator } from '../../Redux/users-reducer';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
// import { compose } from 'redux';

let mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
		isAuth: state.auth.isAuth
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