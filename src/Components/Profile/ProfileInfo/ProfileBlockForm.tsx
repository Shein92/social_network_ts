import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { UserProfileType } from '../../../Redux/state';
import { requiredField } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css'


type ProfileBlockType = {
	profile: UserProfileType,
	isOwner: boolean,
	goToEditMode: () => void
}

const ProfileBlockForm = (props: any) => {
	return (
		<form>
			<div>
				<button onClick={() => { }}>save</button>
			</div>
			<div>
				<b>Full Name:</b>
				<div>
					<Field name={'fullName'} validate={[]} placeholder={'Full name'} component={Input} />
				</div>
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

				<div className={s.contact}><b>FaceBook</b>:{props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}>FaceBook</a> : null}</div>
				<div className={s.contact}><b>GitHub</b>:{props.profile.contacts.github ? <a href={props.profile.contacts.github}>GitHub</a> : null}</div>
				<div className={s.contact}><b>Instagram</b>:{props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}>Instagram</a> : null}</div>
				<div className={s.contact}><b>Main Link</b>:{props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink}>Main Link</a> : null}</div>
				<div className={s.contact}><b>Twitter</b>:{props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}>Twitter</a> : null}</div>
				<div className={s.contact}><b>My website</b>:{props.profile.contacts.website ? <a href={props.profile.contacts.website}>My website</a> : null}</div>
				<div className={s.contact}><b>My youtube chanell</b>:{props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}>My youtube chanell</a> : null}</div>
			</div>
		</form>
	)
}

const ProfileBlockFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileBlockForm);

export default ProfileBlockForm;