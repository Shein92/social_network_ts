import React from 'react';
import style from './FormsControls.module.css';

type Itype = {
	placeholder: string
}

export const Textarea = ({ input, meta, ...props }: { input: any, meta: any, props: Itype }) => {

	const hasError = meta.touched && meta.error;

	return (
		<div className={style.formControll + " " + (hasError ? style.error : "")}>
			<div>
				<textarea {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export const Input = ({ input, meta, ...props }: { input: any, meta: any, props: Itype }) => {

	const hasError = meta.touched && meta.error;

	return (
		<div className={style.formControll + " " + (hasError ? style.error : "")}>
			<div>
				<input {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}