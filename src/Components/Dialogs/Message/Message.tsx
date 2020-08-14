import React from 'react';
import dialog from './../Dialogs.module.css';

type MessagePropsType = {
    message: string,
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={dialog.message}>{props.message}</div>
    )
}

export default Message;