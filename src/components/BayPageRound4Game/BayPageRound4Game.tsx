import { motion } from "motion/react";
import { useLoaderData, Link } from "react-router-dom";
import mermaidIcon from "../../assets/images/icons/footer/mermaid.png";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./baypageround4game.scss";

import { BayRound4Card } from "../../interfaces/interfaces";

type BayRound4Data = BayRound4Card[];

const BayPageRound4Game = () => {
	const roundCard = useLoaderData() as BayRound4Data;

	return (
		<motion.div
			className="bay-round4-game-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="bay-round4-game-content">
				<div className="bay-round4-game-cards">
					{roundCard.map((element) => (
						<motion.div
							className="bay-round4-game-card"
							key={element.index}
							initial={{ opacity: 0, scale: 0 }}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									type: "spring",
									stiffness: 200,
									damping: 10,
									duration: 1,
								},
							}}
							exit={{ opacity: 0, scale: 1, transition: { duration: 0.5 } }}
						>
							<VideoPlayer url={element.url} />
						</motion.div>
					))}
				</div>
				<div className="bay-round4-button-block">
					<Link to="/bay/nextpage">
						<motion.button
							className="bay-round4-button-next-round"
							initial={{ scale: 0 }}
							animate={{
								scale: 1,
								transition: {
									type: "spring",
									stiffness: 200,
									damping: 10,
									duration: 1,
								},
							}}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.5 },
							}}
							whileTap={{
								y: "10px",
							}}
						>
							<img src={mermaidIcon} alt="mermaid-icon" />
						</motion.button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default BayPageRound4Game;
