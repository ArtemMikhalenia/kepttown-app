import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import MapPopup from "../../components/MapPopup/MapPopup";
import "./mappage.scss";

import houseImg from "../../assets/images/house.png";
import mapImg from "../../assets/images/map-page/map-image.webp";
import { useState } from "react";

const MapPage = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [houseName, setHouseName] = useState("");

	const handleMouseEnter = (event: MouseEvent) => {
		const target = event.target as HTMLImageElement;
		setHouseName(target.id);
		setIsHovered(true);
	};
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.div
			className="map-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			<Snowfall snowflakeCount={250} />
			{isHovered && <MapPopup name={houseName} />}

			<div className="map-image-block">
				<img className="map-image" src={mapImg} alt="map-image" />
				<Link className="house" to="/nextpage">
					<motion.img
						className="house-image"
						id="fortuneteller"
						src={houseImg}
						alt=""
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						whileHover={{
							scale: 1.1,
						}}
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default MapPage;
