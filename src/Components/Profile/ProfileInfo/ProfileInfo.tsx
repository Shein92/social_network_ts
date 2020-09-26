import React from 'react';
import s from './ProfileInfo.module.css';
import { UserProfileType } from '../../../Redux/state';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
	profile: null | UserProfileType
	status: string,
	updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} style={{ width: "100px" }} alt="no ava ;(" />
				<span>{props.profile.fullName}</span>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
			</div>
			<div>
				{props.profile.aboutMe}
			</div>
			<div>
				Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			<div>
				What job I'm looking for: {props.profile.lookingForAJobDescription}
			</div>
			<div>
				Links on my social networks:
				<div>{props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}>FaceBook</a> : null}</div>
				<div>{props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}>FaceBook</a> : null}</div>
				<div>{props.profile.contacts.github ? <a href={props.profile.contacts.github}>GitHub</a> : null}</div>
				<div>{props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}>Instagram</a> : null}</div>
				<div>{props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink}>Main Link</a> : null}</div>
				<div>{props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}>Twitter</a> : null}</div>
				<div>{props.profile.contacts.website ? <a href={props.profile.contacts.website}>My website</a> : null}</div>
				<div>{props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}>My youtube chanell</a> : null}</div>
			</div>
		</div>
	)
}

export default ProfileInfo;