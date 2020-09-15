import React from 'react';
import { UserType1 } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';

type UsersPropsType = {
	users: Array<UserType1>,
	pageSize: number,
	totalUsersCount: number,
	currentPage: number,
	isFetching: boolean,
	followingInProgress: Array<number>,
	isAuth: boolean

	setCurrentPage: (pageNumber: number) => void
	getUsers: (currentPage: number, pageSize: number) => void,
	followUsersThunkCreator:(userId: number) => void,
	unfollowUsersThunkCreator: (userId: number) => void
}

class UsersApiComponent extends React.Component<UsersPropsType> {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};

	onPageChanged = (pageNumber: number) => {

		this.props.getUsers(pageNumber, this.props.pageSize);

		this.props.setCurrentPage(pageNumber);
	}

	render() {
		if(this.props.isAuth === false) {
			return <Redirect to={'/login'}/>
		}
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users users={this.props.users}
					currentPage={this.props.currentPage}
					pageSize={this.props.pageSize}
					totalUsersCount={this.props.totalUsersCount}
					onPageChanged={this.onPageChanged}
					followingInProgress={this.props.followingInProgress}
					followUsersThunkCreator={this.props.followUsersThunkCreator}
					unfollowUsersThunkCreator={this.props.unfollowUsersThunkCreator}
				/>
			</>
		)
	}
}

export default UsersApiComponent;