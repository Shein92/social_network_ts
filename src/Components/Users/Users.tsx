import React from 'react';
import { UserType1 } from '../../Redux/users-reducer';
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/rick.png';

type UsersPropsType = {
	users: Array<UserType1>,

	follow: (userId: number) => void,
	unFollow: (userId: number) => void,
	setUsers: (users: Array<UserType1>) => void
}

const Users = (props: UsersPropsType) => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				props.setUsers(response.data.items)
			});
		}
	}

	// if (props.users.length === 0) {
	// 	props.setUsers([
	// 		{ id: 1, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: false, fullName: "Vasyl", status: "I'm a boss", location: { city: "Mukachevo", country: "Ukraine" } },
	// 		{ id: 2, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: true, fullName: "Karina", status: "I love Vasyl", location: { city: "Uzhhorod", country: "Ukraine" } },
	// 		{ id: 3, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: false, fullName: "George", status: "I hate Igor", location: { city: "Baranyntsi", country: "Ukraine" } },
	// 		{ id: 4, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: true, fullName: "Diana", status: "I believe in tooth-fairies", location: { city: "Vilkhiwtsi", country: "Ukraine" } },
	// 	])
	// }

	return (
		<div>
			<button onClick={getUsers}>Get Users</button>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto} />
						</div>
						<div>
							{u.followed ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
							{/* <button>Follow</button> */}
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