import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    )
}

export default ProfileInfo;