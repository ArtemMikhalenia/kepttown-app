import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { VideoPageProps } from "../../types/types";

import mapIcon from "../../assets/images/icons/map-icon.png";
import mermaidIcon from "../../assets/images/icons/mermaid.png";
import sphereIcon from "../../assets/images/icons/footer/sphere.png";
import tavernIcon from "../../assets/images/icons/tavern-icon.png";
import ghostIcon from "../../assets/images/icons/footer/ghost.webp";
import potionsIcon from "../../assets/images/icons/potions-icon.png";
import "./videopage.scss";

const VideoPage = ({ url, link }: VideoPageProps) => {
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);
	const [icon, setIcon] = useState(mapIcon);
	// let icon = mapIcon;

	useEffect(() => {
		if (currentLocation === "/front-video") {
			setIcon(mapIcon);
		} else if (currentLocation === "bay/bay-video") {
			setIcon(mermaidIcon);
		} else if (currentLocation === "fortunegame/fortune-video") {
			setIcon(sphereIcon);
		} else if (currentLocation === "taverngame/tavern-video") {
			setIcon(tavernIcon);
		} else if (currentLocation === "ghostsgame/ghosts-video") {
			setIcon(ghostIcon);
		} else if (currentLocation === "potionsgame/potions-video") {
			setIcon(potionsIcon);
		}
	}, [location.pathname]);

	return (
		<motion.div
			className="video-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			<VideoPlayer url={url} />
			<div className="video-button-block">
				<Link to={link}>
					<motion.img
						className="video-button"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={icon}
						alt="video-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default VideoPage;
