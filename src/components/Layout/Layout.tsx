import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import frontBackground from "../../assets/images/backgrounds/front-background.webp";
import mapBackground from "../../assets/images/backgrounds/map-background.webp";
import ghostPageBackground from "../../assets/images/backgrounds/ghostspage-background.webp";
import potionsBackground from "../../assets/images/backgrounds/potions-background.webp";
import fortuneBackground from "../../assets/images/backgrounds/fortune-background.webp";
import fortuneGameBackground from "../../assets/images/fortune-page/background.webp";
import bayBackground from "../../assets/images/backgrounds/bay-background.webp";
import videoBackground from "../../assets/images/backgrounds/video-background.webp";
import randomBackground from "../../assets/images/backgrounds/random-background.webp";
import bayRound1Background from "../../assets/images/bay-page/backgrounds/round1.webp";
import bayRound2Background from "../../assets/images/bay-page/backgrounds/round2.webp";

import "./layout.scss";

const Layout = () => {
	let [background, setBackground] = useState("");
	const [snowfall, setSnowfall] = useState(true);
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);

	const bayPageLinks = ["bay"];
	const bayRound1Links = [
		"bay/round1",
		"bay/round1/team1",
		"bay/round1/team2",
		"bay/round1/team3",
	];
	const bayRound2Links = [
		"bay/round2",
		"bay/round2/team1",
		"bay/round2/team2",
		"bay/round2/team3",
	];

	const videoLinks = ["bay/bay-video"];

	const fortunePageLinks = ["fortunegame"];

	const potionsPageLinks = [
		"potionsgame",
		"potionsgame/round1",
		"potionsgame/round2",
		"potionsgame/round3",
		"potionsgame/round4",
		"potionsgame/round5",
		"potionsgame/round6",
		"potionsgame/round7",
	];
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
		} else if (fortunePageLinks.includes(currentLocation)) {
			setBackground(fortuneBackground);
			setSnowfall(false);
		} else if (currentLocation === "fortunegame/game") {
			setBackground(fortuneGameBackground);
			setSnowfall(false);
		} else if (bayPageLinks.includes(currentLocation)) {
			setBackground(bayBackground);
			setSnowfall(false);
		} else if (randomPageLinks.includes(currentLocation)) {
			setBackground(randomBackground);
		} else if (videoLinks.includes(currentLocation)) {
			setBackground(videoBackground);
			setSnowfall(false);
		} else if (bayRound1Links.includes(currentLocation)) {
			setBackground(bayRound1Background);
			setSnowfall(false);
		} else if (bayRound2Links.includes(currentLocation)) {
			setBackground(bayRound2Background);
			setSnowfall(false);
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
