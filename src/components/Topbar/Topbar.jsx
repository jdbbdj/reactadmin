import React from 'react';
import "./topbar.css";

import {
    NotificationsNone,
    Language,
    Settings
} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topBar"> 
            <div className="topBarWrapper">
            <div className="topLeft">
                <span className="logo">
                    Lamn'n
                </span>
            </div>
            <div className="topRight">
                <div className="topBarIconsCont">
                    <NotificationsNone/>
                    <div className="topIconBadge">
                        2
                    </div>
                </div>

                <div className="topBarIconsCont">
                    <Language/>
                    <div className="topIconBadge">
                        2
                    </div>
                </div>

                <div className="topBarIconsCont">
                    <Settings/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkbyW8fmcUjmy4q-_-zkT2OWTFPJuYzegnQ&usqp=CAU" 
                alt="" className="topAvatar" />
            </div>
            </div>
        </div>
    )
}
