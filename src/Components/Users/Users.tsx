import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/rick.png';
import { UserType1 } from '../../Redux/users-reducer';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';

type UsersPropsType = {
	users: Array<UserType1>
	totalUsersCount: number,
	pageSize: number,
	currentPage: number,
	followingInProgress: Array<number>

	onPageChanged: (pageNumber: number) => void,
	followUsersThunkCreator: (userId: number) => void
	unfollowUsersThunkCreator: (userId: number) => void
}

let Users = (props: UsersPropsType) => {

	// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	// let pages = [];
	// for (let i = 1; i <= pagesCount; i++) {
	// 	pages.push(i);
	// }

	return (
		<div>
			{/* <div>
				{pages.map(p => {
					return <span className={props.currentPage === p ? styles.selectedPage : ""}
						onClick={() => { props.onPageChanged(p) }}>{`${p} `}</span>
				})}
			</div> */}
			<Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} pageSize={props.pageSize} totalUsersCount={props.totalUsersCount}/>
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
									props.unfollowUsersThunkCreator(u.id)
								}}>Unfollow</button>
								: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.followUsersThunkCreator(u.id);
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