import React from 'react';
import dialog from './../Dialogs.module.css';

// + ' ' + dialog.active
type MessagePropsType = {
    message: string,
    // sendMessage: (sendMessage: string) => void
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={dialog.message}>{props.message}</div>
    )
}

export default Message;