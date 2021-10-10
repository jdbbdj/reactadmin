import "./sidebar.css";
import {Link} from 'react-router-dom';
import {LineStyle,
    Timeline,
    TrendingUp,
    PeopleOutline,
    Storefront,
    AttachMoney,
    Equalizer,
    MailOutline,
    Feedback,
    Forum,
    BusinessCenter,
    Report


    
} from "@material-ui/icons";

export default function Sidebar(){
    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <Link className="sideBarLinks" to="/">
                        <li className="sideBarListItem">
                            <LineStyle className="sideBarIcon"/>
                            Home
                        </li>
                        </Link>
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon"/>
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className="sideBarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <Link className="sideBarLinks" to='/users'>
                        <li className="sideBarListItem">                            
                            
                            <PeopleOutline className="sideBarIcon"/>
                            Users
                            
                        </li>
                        </Link>
                        <Link className="sideBarLinks" to='/products'>
                        <li className="sideBarListItem">
                            <Storefront className="sideBarIcon"/>
                            Products
                        </li>
                        </Link>
                        <li className="sideBarListItem">
                            <AttachMoney className="sideBarIcon"/>
                            Transaction 
                        </li>
                        <li className="sideBarListItem">
                            <Equalizer className="sideBarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <MailOutline className="sideBarIcon"/>
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <Feedback className="sideBarIcon"/>
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <Forum className="sideBarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <BusinessCenter className="sideBarIcon"/>
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon"/>
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <Report  className="sideBarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}


