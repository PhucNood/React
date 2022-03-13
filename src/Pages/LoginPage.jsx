import React, { useState } from "react";

const LoginPage = () => {
    const validEmail =email=>
      String(email).toLowerCase()
        .match(' /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
        ? "" : "Invalid email";
    
    const [details, setDetails] = useState({ email: "", password: "" });
    

    const handeSubmit = (evt) => {
        evt.preventDefault();
        console.log(details);

    }

    return <div >
        <form className="form" action="" onSubmit={handeSubmit}>
            <div style={{ margin: '20px' }}>
               
                <input className="form" type="email" name="email" id="email" placeholder="Email" />
            </div >
            <div style={{ margin: '20px' }}>
               
                <input type="password" name="password" id="password" placeholder="Password"  />
            </div>
            <div style={{ margin: '20px' }}>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
        </form>
    </div>
}

export default LoginPage;