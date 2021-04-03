import React from 'react';
import {useSelector} from 'react-redux';

import './Notification.css';

const Notification = () => {
    const currentNotif = useSelector((state) => state.user_reducer.notif);
    return(
        <div className="notification_container drop_shadow neon_effect">
            <h2> {currentNotif} </h2>
        </div>
    );
}
export default Notification;