import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import MapPopup from "../../components/MapPopup/MapPopup";
import "./mappage.scss";

import amusementParkImg from "../../assets/images/map-page/amusement-park.png";
import bayImg from "../../assets/images/map-page/bay.png";
import fortuneImg from "../../assets/images/map-page/fortuneteller.png";
import hauntedHouseImg from "../../assets/images/map-page/haunted-house.png";
import researchCenterImg from "../../assets/images/map-page/research-center.png";
import tavernImg from "../../assets/images/map-page/tavern.png";
import zooImg from "../../assets/images/map-page/zoo.png";
import christmasTreeImg from "../../assets/images/map-page/christmas-tree.png";

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

	const imageData = [
		{
			className: "amusement-park",
			link: "/nextpage",
			classNameImg: "amusement-park-image",
			key: 1,
			id: "amusement-park",
			src: amusementParkImg,
			alt: "amusement-park-image",
		},
		{
			className: "bay",
			link: "/bay/bay-video",
			classNameImg: "bay-image",
			key: 2,
			id: "bay",
			src: bayImg,
			alt: "bay-image",
		},
		{
			className: "fortune",
			link: "/fortunegame/fortune-video",
			classNameImg: "fortune-image",
			id: "fortune",
			src: fortuneImg,
			alt: "fortune-image",
		},
		{
			className: "haunted-house",
			link: "/ghostsgame",
			classNameImg: "haunted-house-image",
			id: "haunted-house",
			src: hauntedHouseImg,
			alt: "haunted-house-image",
		},
		{
			className: "research-center",
			link: "/potionsgame",
			classNameImg: "research-center-image",
			id: "research-center",
			src: researchCenterImg,
			alt: "research-center-image",
		},
		{
			className: "tavern",
			link: "/nextpage",
			classNameImg: "tavern-image",
			id: "tavern",
			src: tavernImg,
			alt: "tavern-image",
		},
		{
			className: "zoo",
			link: "/nextpage",
			classNameImg: "zoo-image",
			id: "zoo",
			src: zooImg,
			alt: "zoo-image",
		},
		{
			className: "christmas-tree",
			link: "/map",
			classNameImg: "christmas-tree-image",
			id: "christmas-tree",
			src: christmasTreeImg,
			alt: "christmas-tree-image",
		},
	];

	return (
		<motion.div
			className="map-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<Snowfall snowflakeCount={250} />
			<MapPopup name={houseName} isHovered={isHovered} />
			<motion.div
				className="map-image-block"
				initial={{ opacity: 0, scale: 0 }}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 2,
						type: "spring",
						stiffness: 200,
						damping: 15,
					},
				}}
				exit={{
					opacity: 0,
					scale: 1,
					transition: { duration: 1 },
				}}
			>
				<motion.img className="map-image" src={mapImg} alt="map-image" />
				{imageData.map((element) => (
					<Link
						className={element.className}
						key={element.id}
						to={element.link}
					>
						<motion.img
							className={element.classNameImg}
							id={element.id}
							src={element.src}
							alt={element.alt}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							whileHover={{
								scale: 1.1,
							}}
						/>
					</Link>
				))}
			</motion.div>
		</motion.div>
	);
};

export default MapPage;
