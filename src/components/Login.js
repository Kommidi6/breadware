import React from "react";
import { NavLink } from "react-router-dom";



const Login = () => {
	return(
		<div className="loginSection">
			<h1>Login</h1>
			<div>
				<label>User Name</label>
				<input type="text" />
			</div>
			<div>
				<label>Password</label>
				<input type="password" />
			</div>
			<div>
				<label></label>
			<NavLink to="/todos">
				<input type="button" value="Login" />
				</NavLink>
			</div>
		</div>
	);
};

export default Login;