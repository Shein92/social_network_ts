import React from 'react';
import { UserType1 } from '../../Redux/users-reducer';
// import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../API/api';

type UsersPropsType = {
	users: Array<UserType1>,
	pageSize: number,
	totalUsersCount: number,
	currentPage: number,
	isFetching: boolean,
	followingInProgress: Array<number>

	follow: (userId: number) => void,
	unFollow: (userId: number) => void,
	setUsers: (users: Array<UserType1>) => void
	setCurrentPage: (pageNumber: number) => void
	setUsersTotalCount: (usersTotalCount: number) => void,
	toggleIsFetching: (isFetching: boolean) => void
	toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

class UsersApiComponent extends React.Component<UsersPropsType> {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
		getUsers(this.props.currentPage, this.props.pageSize)
		.then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setUsersTotalCount(data.totalCount)
		});
	};

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
		getUsers(pageNumber, this.props.pageSize)
		.then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		});
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users users={this.props.users}
					currentPage={this.props.currentPage}
					pageSize={this.props.pageSize}
					totalUsersCount={this.props.totalUsersCount}
					follow={this.props.follow}
					unFollow={this.props.unFollow}
					onPageChanged={this.onPageChanged}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}

export default UsersApiComponent;