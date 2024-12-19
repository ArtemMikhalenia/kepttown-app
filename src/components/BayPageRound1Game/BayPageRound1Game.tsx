import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";

import "./baypageround1game.scss";
import mermaidIcon from "../../assets/images/icons/footer/mermaid.png";
import { BayRound1Card, BayRound1Round } from "../../interfaces/interfaces";

type BayRound1Data = BayRound1Round;

const BayPageRound1Game = () => {
	const location = useLocation();
	const roundCard = useLoaderData() as BayRound1Data;
	const [roundCards, setRoundCards] = useState<BayRound1Card[]>(
		roundCard.roundCards
	);

	useEffect(() => {
		setRoundCards(roundCard.roundCards);
	}, [location.pathname]);

	const isLastTeam = roundCard.team === 3;

	const toggleCard = (id: string) => {
		setRoundCards((prevCards) => {
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
			className="bay-round1-game-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
			key={roundCard.team}
		>
			<div className="bay-round1-game-content">
				<motion.h2
					className="bay-round1-game-title"
					initial={{ opacity: 0, y: "-100%" }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
				>
					Что на вечер? Команда {roundCard.team}
				</motion.h2>
				<div className="bay-round1-game-cards">
					{roundCards.map((element) => (
						<motion.div
							className="bay-round1-game-card"
							key={element.id}
							onClick={() => toggleCard(element.id)}
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
							whileHover={{ scale: 1.1 }}
							exit={{ opacity: 0, scale: 1, transition: { duration: 0.5 } }}
						>
							<img
								style={{ filter: element.clicked ? "blur(0px)" : "blur(20px)" }}
								src={element.src}
								alt={element.alt}
							/>
							<div
								className={
									element.clicked
										? "bay-round1-game-card-background active"
										: "bay-round1-game-card-background"
								}
							></div>
						</motion.div>
					))}
				</div>
				<div className="bay-round1-button-block">
					<Link
						to={
							isLastTeam
								? "/bay/round2"
								: `/bay/round1/team${roundCard.team + 1}`
						}
					>
						<motion.button
							className="bay-round1-button-next-round"
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

export default BayPageRound1Game;
