import { motion } from "motion/react";
import { MountainPopupTypes } from "../../types/types";

import boardImg from "../../assets/images/icons/mountain-board.png";

import "./mountainpopup.scss";

const MountainPopup = ({ name, isHovered }: MountainPopupTypes) => {
	switch (name) {
		case "adc-crystal":
			name = "Маги времени";
			break;
		case "taxes-crystal":
			name = "Артефакторы";
			break;
		case "bookkeeping-crystal":
			name = "Маги рун";
			break;
		case "director-crystal":
			name = "Министр Магии";
			break;
		case "hr-crystal":
			name = "Жрецы";
			break;
		case "audit-crystal":
			name = "Маги стихий";
			break;
		case "consulting-crystal":
			name = "Оракулы";
			break;
		default:
	}
	return (
		<motion.div
			className="mountain-popup"
			animate={{
				opacity: isHovered ? 1 : 0,
				y: isHovered ? "-20%" : "-100%",
				transition: { type: "spring", stiffness: 200, damping: 10 },
			}}
			exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5 } }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			style={{ cursor: "url(snowflake-cursor.svg),auto" }}
		>
			<div className="mountain-popup-image-block">
				<img src={boardImg} alt="board-img" />
				<div className="mountain-popup-name-container">
					<p className="mountain-popup-name">{name}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default MountainPopup;
