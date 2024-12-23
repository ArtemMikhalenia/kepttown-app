import { motion } from "motion/react";
import { useState, useEffect, MouseEvent } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";

import { Crystal } from "../../interfaces/interfaces";
import { CrystalData } from "../../types/types";

import mountainIcon from "../../assets/images/icons/mountain-icon.png";
import MountainPopup from "../MountainPopup/MountainPopup";

import "./mountainpagegame.scss";

const MountainPageGame = () => {
	const location = useLocation();
	const crystal = useLoaderData() as CrystalData;
	const [crystals, setCrystals] = useState<Crystal[]>(crystal);
	const [isHovered, setIsHovered] = useState(false);
	const [crystalName, setCrystalName] = useState("");

	useEffect(() => {
		setCrystals(crystal);
	}, [location.pathname]);

	const handleMouseEnter = (event: MouseEvent) => {
		const target = event.target as HTMLImageElement;
		setCrystalName(target.id);
		setIsHovered(true);
	};
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.div
			className="mountain-page-game"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
		>
			<MountainPopup name={crystalName} isHovered={isHovered} />
			<motion.div
				className="mountain-content"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						type: "spring",
						stiffness: 200,
						damping: 10,
						duration: 1,
					},
				}}
			>
				<div className="mountain-crystals">
					{crystals.map((element) => (
						<Link
							className={element.className}
							key={element.key}
							to={element.link}
						>
							<motion.img
								className={element.classNameImg}
								id={element.id}
								src={element.src}
								alt={element.alt}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { duration: 0.2 } }}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								whileHover={{
									scale: 1.1,
								}}
							/>
						</Link>
					))}
				</div>
			</motion.div>
			<div className="mountain-button-block">
				<Link to="/parkgame/nowpage">
					<motion.img
						className="mountain-button-next"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={mountainIcon}
						alt="mountain-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default MountainPageGame;
