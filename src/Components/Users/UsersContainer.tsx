import { connect } from 'react-redux';
// import Users from './Users';
import UsersApiComponent from './UsersAPIComponent';
// import { StateType, ActionsType } from '../../Redux/state';
import { StateType } from '../../Redux/state';
import { follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../Redux/users-reducer';
// import { follow, unFollow, UserType1, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../Redux/users-reducer';

let mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

// let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
// 	return {
// 		follow: (userdId: number) => {
// 			dispatch(followActionCreator(userdId))
// 		},
// 		unFollow: (userId: number) => {
// 			dispatch(unFollowActionCreator(userId))
// 		},
// 		setUsers: (users: Array<UserType1>) => {
// 			dispatch(setUsersActionCreator(users))
// 		},
// 		setCurrentPage: (pageNumber: number) => {
// 			dispatch(setCurrentPageActionCreator(pageNumber))
// 		},
// 		setTotalCountUsersCount: (totalCount: number) => {
// 			dispatch(setUsersTotalCountActionCreator(totalCount))
// 		},
// 		toggleIsFetching: (isFetching: boolean) => {
// 			dispatch(toggleIsFetchingActionCreator(isFetching))
// 		}
// 	}
// }

export default connect(mapStateToProps, {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching
})(UsersApiComponent);
// export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);