import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<NavLink to="/">Login</NavLink>
			<NavLink to="/todos">Todos</NavLink>
		</div>
	);
};

export default Navigation;