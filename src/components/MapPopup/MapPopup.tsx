import { motion } from "motion/react";
import { MapPopupTypes } from "../../types/types";

import tavernImg from "../../assets/images/icons/map-page/tavern-icon.webp";

import "./mappopup.scss";

const MapPopup = ({ name, isHovered }: MapPopupTypes) => {
	switch (name) {
		case "amusement-park":
			name = "Парк аттракционов";
			break;
		case "bay":
			name = "Бухта сирен";
			break;
		case "fortune":
			name = "Шатёр гадалки";
			break;
		case "haunted-house":
			name = "Дом с призраками";
			break;
		case "research-center":
			name = "Институт разработки";
			break;
		case "tavern":
			name = 'Страўня "Сябры"';
			break;
		case "beasts":
			name = "Зоопарк";
			break;
		case "christmas-tree":
			name = "Главная ёлка";
			break;
		case "mountain":
			name = "ВыГора";
			break;
		default:
	}
	return (
		<motion.div
			className="map-popup"
			animate={{
				opacity: isHovered ? 1 : 0,
				y: isHovered ? "-40%" : "-100%",
				transition: { type: "spring", stiffness: 200, damping: 10 },
			}}
			exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5 } }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			style={{ cursor: "url(snowflake-cursor.svg),auto" }}
		>
			<div className="map-popup-image-block">
				<img src={tavernImg} alt="tavern-img" />
				<div className="map-popup-name-container">
					<p className="map-popup-name">{name}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default MapPopup;
