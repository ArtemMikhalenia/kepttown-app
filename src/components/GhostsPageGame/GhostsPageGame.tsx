import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";
import ghostHappyImg from "../../assets/images/ghosts-page/ghost-happy.webp";
import ghostAngryImg from "../../assets/images/ghosts-page/ghost-angry.webp";

import "./ghostspagegame.scss";

interface GhostCard {
	id: string;
	index: number;
	src: string;
	alt: string;
	cloudText: string;
	text: string;
	clicked: boolean;
	correct: boolean;
}

interface GhostRound {
	round: number;
	roundPhoto: string;
	roundQuestion: string;
	roundCards: GhostCard[];
}

type GhostsData = GhostRound;

const GhostsPageGame = () => {
	const location = useLocation();
	const ghostCard = useLoaderData() as GhostsData;
	const [ghostCards, setGhostCards] = useState<GhostCard[]>(
		ghostCard.roundCards
	);
	const isLastRound = ghostCard.round === 10;

	useEffect(() => {
		setGhostCards(ghostCard.roundCards);
	}, [location.pathname]);

	const toggleCard = (id: string) => {
		setGhostCards((prevCards) => {
			return prevCards.map((card) => {
				if (card.id === id) {
					return { ...card, clicked: !card.clicked };
				}
				return card;
			});
		});
	};

	return (
		<motion.div
			className="ghosts-page-game"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
			key={ghostCard.round}
		>
			<div className="ghosts-content">
				<motion.div
					className="ghosts-head"
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { duration: 0.5 } }}
					exit={{ scale: 1, transition: { duration: 0.5 } }}
				>
					<img src={ghostCard.roundPhoto} alt="head-image" />
				</motion.div>
				<motion.div
					className="ghosts-question"
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { duration: 0.5 } }}
					exit={{ scale: 1, transition: { duration: 0.5 } }}
				>
					{ghostCard.roundQuestion}
				</motion.div>
				<motion.div
					className="ghosts-cards"
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { duration: 0.5 } }}
					exit={{ scale: 1, transition: { duration: 0.5 } }}
				>
					{ghostCards.map((element) => (
						<div
							key={element.id}
							onClick={() => toggleCard(element.id)}
							className={
								element.clicked
									? `ghosts-card card-${element.index} active`
									: `ghosts-card card-${element.index}`
							}
						>
							<div className="card-image-block">
								<img className="card-img" src={element.src} alt={element.alt} />
								<img
									className={
										element.clicked ? "card-img-ghost active" : "card-img-ghost"
									}
									src={element.correct ? ghostHappyImg : ghostAngryImg}
									alt="ghost-image"
								/>
								<p></p>
							</div>
							<div
								className={
									element.clicked ? "cloud-block active" : "cloud-block"
								}
							>
								<p className="cloud-text">{element.cloudText}</p>
							</div>
							<p className="card-text">{element.text}</p>
						</div>
					))}
				</motion.div>
				<div className="ghost-button-block">
					<Link
						to={
							isLastRound ? "/map" : `/ghostsgame/round${ghostCard.round + 1}`
						}
					>
						<motion.button
							className="ghost-button-next-round"
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
								color: "rgba(255,0,0,1)",
								background: "rgba(255,255,255,1)",
								transition: { duration: 0.5 },
							}}
							whileTap={{
								y: "10px",
								boxShadow: "0 5px 3px 3px rgba(255,0,0,1)",
							}}
						>
							{isLastRound
								? "Завершить и перейти на карту"
								: "Едем дальше, если хватит духу"}
						</motion.button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default GhostsPageGame;
