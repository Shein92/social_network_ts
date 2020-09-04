import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/rick.png';
import { UserType1 } from '../../Redux/users-reducer';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import { unfollowUser, followUser } from '../../API/api';

type UsersPropsType = {
	users: Array<UserType1>
	totalUsersCount: number,
	pageSize: number,
	currentPage: number,
	followingInProgress: Array<number>

	onPageChanged: (pageNumber: number) => void,
	follow: (userId: number) => void,
	unFollow: (userId: number) => void,
	toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

let Users = (props: UsersPropsType) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div>
				{pages.map(p => {
					return <span className={props.currentPage === p ? styles.selectedPage : ""}
						onClick={() => { props.onPageChanged(p) }}>{`${p} `}</span>
				})}
			</div>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<NavLink to={`/profile/` + u.id}>
								<img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto} />
							</NavLink>
						</div>
						<div>
							{u.followed
								? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									// 	axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
									// 	headers:
									// 		{"API-KEY": "51942aaa-243d-451f-aca7-fe5920feb22f"}	
									// })
									props.toggleFollowingProgress(true, u.id)
									unfollowUser(u.id)
										.then(data => {
											if (data.resultCode === 0) {
												props.unFollow(u.id);
											}
											props.toggleFollowingProgress(false, u.id);
										})
								}}>Unfollow</button>
								: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
									// 	withCredentials: true,
									// 	headers:
									// 		{ "API-KEY": "51942aaa-243d-451f-aca7-fe5920feb22f" }
									// })
									props.toggleFollowingProgress(true, u.id);
									followUser(u.id)
										.then(data => {
											if (data.resultCode === 0) {
												props.follow(u.id);
											}
											props.toggleFollowingProgress(false, u.id);
										})
								}}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city"}</div>
						</span>
					</span>
				</div>
				)
			}
		</div>
	)
}

export default Users;