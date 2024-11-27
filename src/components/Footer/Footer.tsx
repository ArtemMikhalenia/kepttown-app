import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

import mapIcon from "../../assets/images/icons/footer/map-icon.png";
import nextPage from "../../assets/images/icons/footer/next-page.gif";

import "./footer.scss";
import { useEffect } from "react";

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
						initial={{ opacity: 0, x: -50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{
							scale: 1.15,
							transition: { duration: 0.5 },
						}}
						viewport={{ once: true, amount: 0.1 }}
					/>
				</Link>
			)}
			<Link to="/map">
				<motion.img
					className="map-icon"
					src={mapIcon}
					alt="map-icon"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { duration: 1 },
					}}
					whileHover={{
						scale: 1.15,
						transition: { duration: 0.5 },
					}}
					viewport={{ once: true, amount: 0.1 }}
				/>
			</Link>
		</footer>
	);
};

export default Footer;
