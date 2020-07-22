import React from 'react';
import dialog from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

// + ' ' + dialog.active
type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={dialog.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={dialog.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;