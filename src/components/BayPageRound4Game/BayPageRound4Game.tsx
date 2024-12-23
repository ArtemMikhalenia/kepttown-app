import { motion } from "motion/react";
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

import { BayRound4Card } from "../../interfaces/interfaces";
import { BayRound4Data } from "../../types/types";

import mermaidIcon from "../../assets/images/icons/mermaid.png";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

import "./baypageround4game.scss";

const BayPageRound4Game = () => {
	const roundCard = useLoaderData() as BayRound4Data;
	const [videos, setVideos] = useState<BayRound4Card[]>(roundCard);

	const toggleVideo = (id: string) => {
		setVideos((prevVideo) => {
			return prevVideo.map((video) => {
				if (video.id === id) {
					return { ...video, clicked: !video.clicked };
				}
				return video;
			});
		});
	};

	return (
		<motion.div
			className="bay-round4-game-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="bay-round4-game-content">
				<motion.div
					className="bay-round4-game-title"
					initial={{ opacity: 0, y: "-100%" }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
				>
					Раунд 4. Смотри в оба
				</motion.div>
				<div className="bay-round4-game-cards">
					{videos.map((element) => (
						<motion.div
							className="bay-round4-game-card"
							key={element.index}
							initial={{ opacity: 0, scale: 0 }}
							onClick={() => toggleVideo(element.id)}
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
							style={{ filter: element.clicked ? "blur(0px)" : "blur(15px)" }}
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
