import React, { ChangeEvent } from 'react';

type ProfileStatusPropsType = {
	status: string,
	updateStatus: (status: string) => void
}

type ProfileStatusType = {
	editMode: boolean,
	status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
	state: ProfileStatusType = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () =>{
		this.setState({
			editMode: true
		})
	}

	deactivateEditeMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status);
	}

	onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: event.currentTarget.value
		})
	}

	componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusType) {
		if(prevProps.status !== this.props.status) {
			this.setState({
				state: this.props.status
			})
		}
		console.log('componentDidUpdate');
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange} onBlur={this.deactivateEditeMode} value={this.state.status} autoFocus/>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;