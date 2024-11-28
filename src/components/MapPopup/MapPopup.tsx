import { motion } from "motion/react";
import { MapPopupTypes } from "../../types";
import tavernImg from "../../assets/images/icons/map-page/tavern-icon.webp";
import "./mappopup.scss";

const MapPopup = ({ name }: MapPopupTypes) => {

	switch (name) {
		case "fortuneteller":
			name = "Дом гадалки";
			break;
		default:
	}
	return (
		<motion.div
			className="map-popup"
			initial={{ opacity: 1, y: "-100%" }}
			animate={{ opacity: 1, y: "0", transition: { duration: 0.2 } }}
			exit={{ opacity: 0, y: "-100%", transition: { duration: 0.2 } }}
			style={{ cursor: "url(snowflake-cursor.svg),auto" }}
		>
			<div className="map-popup-image-block">
				<img src={tavernImg} alt="tavern-img" />
				<p className="map-popup-name">{name}</p>
			</div>
		</motion.div>
	);
};

export default MapPopup;
