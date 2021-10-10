import "./user.css";
import {LocationSearching,
        PermIdentity,
        CalendarToday,
        PhoneAndroid,
        MailOutline,
        Publish} from '@material-ui/icons';

import {Link} from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTtitle">
                    Edit User
                </h1>
                <Link to='/newuser'>
                <button className="userAddButton">
                    Create
                </button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="data:image/jpeg;base64,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" alt=""/>
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">
                                Adam Lambert
                            </span>
                            <span className="userTitle">
                                Software Engineer
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowBottomTitle">
                            Account Details
                        </span>

                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">
                                annabeck99
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">
                                May 15,2021
                            </span>
                        </div>

                        <span className="userShowBottomTitle">
                            Contact Details
                        </span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">
                                +63 991991991
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">
                                annabeck99@gmail.com
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">
                                New York
                            </span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">
                        Edit
                    </span>

                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" placeholder="Adam Lambert" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Birthday</label>
                                <input type="text" placeholder="May 15,2021" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Contact</label>
                                <input type="text" placeholder="+63 991991991" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="data:image/jpeg;base64,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" alt=""/>
                            <label className="userUpdateIcon" htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                             <button className="userUpdateButton">
                                 Update
                             </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
