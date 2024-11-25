import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import "./mappage.scss";

import houseImg from "../../assets/images/house.png";
// import { useState } from "react";

const MapPage = () => {
	// const [isHovered, setIsHovered] = useState(false);

	// const handleMouseEnter = () => setIsHovered(true);
	// const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.div
			className="map-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			<Snowfall snowflakeCount={250} />
			<Link className="house" to="/nextpage">
				<motion.img
					className="house-image"
					src={houseImg}
					alt=""
					// onHoverStart={handleMouseEnter}
					// onHoverEnd={handleMouseLeave}
					whileHover={{
						scale: 1.1,
					}}
				/>
				{/* <p
					style={{
						display: isHovered ? "block" : "none",
					}}
				>
					Гадалка
				</p> */}
			</Link>
		</motion.div>
	);
};

export default MapPage;
