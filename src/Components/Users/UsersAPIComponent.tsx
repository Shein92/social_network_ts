import React from 'react';
import { UserType1 } from '../../Redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

type UsersPropsType = {
	users: Array<UserType1>,
	pageSize: number,
	totalUsersCount: number,
	currentPage: number,
	isFetching: boolean,

	follow: (userId: number) => void,
	unFollow: (userId: number) => void,
	setUsers: (users: Array<UserType1>) => void
	setCurrentPage: (pageNumber: number) => void
	setUsersTotalCount: (usersTotalCount: number) => void,
	toggleIsFetching: (isFetching: boolean) => void
}

class UsersApiComponent extends React.Component<UsersPropsType> {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setUsersTotalCount(response.data.totalCount)
		});
	};

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
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
				/>
			</>
		)
	}
}

export default UsersApiComponent;