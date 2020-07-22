import React from 'react';
import dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { UserType, MessagesType } from '../../Redux/state';

type DialogsPropsType = {
    state: {
        dialogsData: Array<UserType>,
        messagesData: Array<MessagesType>
    }
    sendMessage: (sendMessage: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messagesData.map(mes => <Message message={mes.message} />);

    let newMessageElement = React.createRef<HTMLTextAreaElement | any>();

    let sendMessage = () => {
        if (newMessageElement.current) {
            let message = newMessageElement.current.value;
            props.sendMessage(message);
            // alert(message);
            newMessageElement.current.value = '';
        }
    }

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={dialog.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;