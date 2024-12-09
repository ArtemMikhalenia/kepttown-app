import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, Variants } from "motion/react";

import mapIcon from "../../assets/images/icons/footer/map-icon.png";
import nextPage from "../../assets/images/icons/footer/next-page.gif";

import "./footer.scss";

const animationVariants: Variants = {
	offscreenFromLeft: {
		x: -50,
		opacity: 0,
	},
	offscreenFromRight: {
		x: 50,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	hover: { scale: 1.15 },
	tap: { scale: 0.9 },
};

const Footer = () => {
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);

	useEffect(() => {
		console.log(currentLocation);
	}, [location]);

	const locationIcon = ["nextpage", "nowpage"];

	return (
		<footer
			className="footer"
			style={{ cursor: "url(snowflake-cursor.svg),auto" }}
		>
			{locationIcon.includes(currentLocation) && (
				<Link to={currentLocation === "nextpage" ? "/nowpage" : "/"}>
					<motion.img
						className="next-page-icon"
						src={nextPage}
						alt="next-icon"
						variants={animationVariants}
						initial="offscreenFromLeft"
						whileInView="onscreen"
						whileHover="hover"
						whileTap="tap"
						viewport={{ once: false, amount: 0.1 }}
					/>
				</Link>
			)}
			{currentLocation !== "map" && (
				<Link to="/map">
					<motion.img
						className="map-icon"
						src={mapIcon}
						alt="map-icon"
						variants={animationVariants}
						initial="offscreenFromRight"
						whileInView="onscreen"
						whileHover="hover"
						whileTap="tap"
						viewport={{ once: true, amount: 0.1 }}
					/>
				</Link>
			)}
		</footer>
	);
};

export default Footer;
