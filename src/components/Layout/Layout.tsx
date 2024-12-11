import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import frontBackground from "../../assets/images/backgrounds/front-background.webp";
import mapBackground from "../../assets/images/backgrounds/map-background.webp";
import ghostPageBackground from "../../assets/images/backgrounds/ghostspage-background.webp";
// import ghostPageBackgroundRound1 from "../../assets/images/ghosts-page/round1/background.webp";
import potionsBackground from "../../assets/images/backgrounds/potions-background.webp";
import randomBackground from "../../assets/images/backgrounds/random-background.webp";

import "./layout.scss";

const Layout = () => {
	let [background, setBackground] = useState("");
	const [snowfall, setSnowfall] = useState(true);
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);

	const potionsPageLinks = ["potionsgame", "potionsgame/round1"];
	const ghostPageLinks = [
		"ghostsgame",
		"ghostsgame/round1",
		"ghostsgame/round2",
		"ghostsgame/round3",
		"ghostsgame/round4",
		"ghostsgame/round5",
		"ghostsgame/round6",
		"ghostsgame/round7",
		"ghostsgame/round8",
		"ghostsgame/round9",
		"ghostsgame/round10",
	];
	const randomPageLinks = ["nextpage", "nowpage"];

	useEffect(() => {
		if (currentLocation === "") {
			setBackground(frontBackground);
		} else if (currentLocation === "map") {
			setBackground(mapBackground);
		} else if (ghostPageLinks.includes(currentLocation)) {
			setBackground(ghostPageBackground);
			setSnowfall(false);
		} else if (potionsPageLinks.includes(currentLocation)) {
			setBackground(potionsBackground);
			setSnowfall(false);
		} else if (randomPageLinks.includes(currentLocation)) {
			setBackground(randomBackground);
		}
	}, [location]);

	return (
		<div
			className="app-wrapper"
			style={{
				backgroundImage: `url("${background}")`,
				cursor: "url(snowflake-cursor.svg),auto",
			}}
		>
			{snowfall && <Snowfall snowflakeCount={250} />}

			<Header />
			<main className="app-wrapper-main">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
