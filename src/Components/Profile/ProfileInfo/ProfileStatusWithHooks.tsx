import React, { ChangeEvent, useEffect, useState } from 'react';

type ProfileStatusPropsType = {
	status: string,
	updateStatus: (status: string) => void
}

type ProfileStatusType = {
	editMode: boolean,
	status: string
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	},[props.status]);

	const activateEditMode = () => {
		setEditMode(true);
		props.updateStatus(status)
	};

	const deactivateEditMode = () => {
		setEditMode(false);
	};

	const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.currentTarget.value)
	}

	return (
		<div>
			{!editMode &&
				<div>
					<span onDoubleClick={activateEditMode}>{status || '------'}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onBlur={deactivateEditMode} 
						onChange={onStatusChange}
						value={status} autoFocus />
				</div>
			}
		</div>
	)
}

export default ProfileStatusWithHooks;