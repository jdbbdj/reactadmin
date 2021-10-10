import "./newuser.css";

export default function NewUser() {
    return (
        <div className="NewUserCont">
            <h1 className="NewUserTitle">
                New User
            </h1>
            <form className="NewUserForm">
                <div className="NewUserItem">
                    <label htmlFor="">
                        Username
                    </label>
                    <input type="text" placeholder="someuser"/>
                </div>

                <div className="NewUserItem">
                    <label htmlFor="">
                        Full Name
                    </label>
                    <input type="text" placeholder="Some User" />
                </div>

                <div className="NewUserItem">
                    <label htmlFor="">
                        Address
                    </label>
                    <input type="text" placeholder="California" />
                </div>

                <div className="NewUserItem">
                    <label htmlFor="">
                        Contact Number
                    </label>
                    <input type="text" placeholder="123 456 789"/>
                </div>

                <div className="NewUserItem">
                    <label htmlFor="" >
                        Email
                    </label>
                    <input type="text"  placeholder="someuser@gmail.com"/>
                </div>

                <div className="NewUserItem">
                    <label htmlFor="">
                        Password
                    </label>
                    <input type="password" />
                </div>

                <div className="NewUserItem">
                    <label>
                        Gender
                    </label>
                    <div className="NewUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label htmlFor="female">Female</label>
                    </div>                    
                </div>

                <div className="NewUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="NewUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">no</option>
                    </select>
                </div>

                <button className="NewUserButton">
                    Create
                </button>
            </form>
        </div>
    )
}
