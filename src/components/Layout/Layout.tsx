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

	const potionsPageLinks = ["potionspage", "potionspage/potiongame"];
	const ghostPageLinks = [
		"ghostspage",
		"ghostspage/ghostsgame/round1",
		"ghostspage/ghostsgame/round2",
		"ghostspage/ghostsgame/round3",
		"ghostspage/ghostsgame/round4",
		"ghostspage/ghostsgame/round5",
		"ghostspage/ghostsgame/round6",
		"ghostspage/ghostsgame/round7",
		"ghostspage/ghostsgame/round8",
		"ghostspage/ghostsgame/round9",
		"ghostspage/ghostsgame/round10",
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
