import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { requiredField } from '../../../utils/validators/validators'
import { Input } from '../../common/FormsControls/FormsControls'
import style from '../../common/FormsControls/FormsControls.module.css'

export type FormDataType = {
	login: string,
	password: string,
	rememberMe: boolean
}


// const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
const LoginForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={'login'} validate={[requiredField]} placeholder={'Login'} component={Input}/>
			</div>
			<div>
				<Field name={'password'} validate={[requiredField]} placeholder={'Password'} type={"password"} component={Input}/>
			</div>
			<div>
				<Field name={'rememberMe'} type="checkbox" component={Input}/> Remember me
            </div>
			{props.error && <div className={style.formSummaryError}>
				{props.error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<FormDataType>({
	form: 'login'
})(LoginForm)

export default LoginReduxForm