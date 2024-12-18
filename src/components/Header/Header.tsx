import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./header.scss";

const Header = () => {
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);

	useEffect(() => {}, [location]);

	const headerLocations = ["", "ghostspage", "ghostspage/ghost"];

	return (
		<>
			{headerLocations.includes(currentLocation) && (
				<header
					className="header"
					style={{ cursor: "url(snowflake-cursor.svg),auto" }}
				></header>
			)}
		</>
	);
};

export default Header;
