import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css';
import { UserProfileType } from '../../../Redux/state';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/rick.png';
import ProfileBlockForm from './ProfileBlockForm';

type ProfileInfoPropsType = {
	profile: null | UserProfileType
	status: string,
	updateStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: any) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

	const [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files?.length) {
			props.savePhoto(e.currentTarget.files[0]);
			// alert(typeof e.currentTarget.files[0]);
		}
	}

	const profile = {
		profile: props.profile,
		isOwner: props.isOwner,
		goToEditMode: () => setEditMode(true)
	}

	return (
		<div>
			<div>
				<img src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				<div>
					<img src={props.profile.photos.large || userPhoto} alt="no ava ;(" className={s.mainPhoto} />
				</div>
				{props.isOwner && <div><input type={'file'} onChange={onMainPhotoSelect} /></div>}
				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			</div>
			{editMode ?
				// <ProfileBlockForm {...profile} /> :
				<ProfileBlockForm profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(false)}/> : 
				<ProfileBlock profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)} />}
		</div>
	)
}

type ProfileBlockType = {
	profile: UserProfileType,
	isOwner: boolean,
	goToEditMode: () => void
}

const ProfileBlock = (props: ProfileBlockType) => {
	return <div>
		{props.isOwner &&
			<div>
				<button onClick={props.goToEditMode}>edit</button>
			</div>}
		<div>
			<b>Full Name:</b><span><b>{props.profile?.fullName}</b></span>
		</div>
		<div>
			<b>About me</b>{props.profile.aboutMe}
		</div>
		<div>
			<b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
		</div>
		{props.profile.lookingForAJob &&
			<div>
				<b>What job I'm looking for:</b> {props.profile.lookingForAJobDescription}
			</div>
		}
		{props.profile.contacts['facebook']}
		<div>
			<b>Contacts</b>:
	{/* {Object.keys(props.profile.contacts).map((key) => {
		if (key === 'facebook' || key === 'github' || key === 'instagram' || key === 'mainLink' || key === 'twitter' || key === 'vk' || key === 'website' || 'youtube') {
			return <Contact key={key} contactTitle={key} contactValue={props.profile?.contacts[key]} />
		}

	})} */}
			{/* <b>Links on my social networks:</b> */}
			<div className={s.contact}><b>FaceBook</b>:{props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}>FaceBook</a> : null}</div>
			<div className={s.contact}><b>GitHub</b>:{props.profile.contacts.github ? <a href={props.profile.contacts.github}>GitHub</a> : null}</div>
			<div className={s.contact}><b>Instagram</b>:{props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}>Instagram</a> : null}</div>
			<div className={s.contact}><b>Main Link</b>:{props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink}>Main Link</a> : null}</div>
			<div className={s.contact}><b>Twitter</b>:{props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}>Twitter</a> : null}</div>
			<div className={s.contact}><b>My website</b>:{props.profile.contacts.website ? <a href={props.profile.contacts.website}>My website</a> : null}</div>
			<div className={s.contact}><b>My youtube chanell</b>:{props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}>My youtube chanell</a> : null}</div>
		</div>
	</div>
}




type ContactPropsType = {
	contactTitle: string,
	contactValue: string
}

const Contact = (props: any) => {
	return (
		<div><b>{props.contactTitle}</b>: {props.contactValue}</div>
	)
}

export default ProfileInfo;