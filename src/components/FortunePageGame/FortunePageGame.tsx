import { motion, Variants } from "motion/react";
import { Link } from "react-router-dom";
import { fortuneData } from "../../data/fortuneData";

import allGenerationsImg from "../../assets/images/fortune-page/all-generations.webp";

import "./fortunepagegame.scss";

const animationVariants: Variants = {
	scaleInitial: {
		scale: 0,
		opacity: 0,
	},
	onscreen: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	hover: { scale: 1.08 },
	tap: { scale: 0.9 },
};

const FortunePageGame = () => {
	return (
		<motion.div className="fortune-page-game" key="fortune-page-game">
			<div className="fortune-content">
				{fortuneData.map((element) => (
					<motion.div
						key={element.index}
						className={element.className}
						variants={animationVariants}
						initial="scaleInitial"
						whileInView="onscreen"
						whileHover="hover"
						whileTap="tap"
					>
						<Link className="generation-link" to={element.link}>
							<img
								className="generation-image"
								src={element.src}
								alt={element.alt}
							/>
							<span className="generation-text">{element.text}</span>
						</Link>
					</motion.div>
				))}
				<motion.div
					className="fortune-generations"
					variants={animationVariants}
					initial="scaleInitial"
					whileInView="onscreen"
					whileHover="hover"
					whileTap="tap"
				>
					<Link to="/fortunegame/stevejobs">
						<img
							className="generation-image"
							src={allGenerationsImg}
							alt="all-generations-image"
						/>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default FortunePageGame;
