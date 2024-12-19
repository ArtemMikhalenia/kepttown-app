import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";
import icon from "../../assets/images/beasts-page/gold_push_pin.webp";
import suspectImg from "../../assets/images/beasts-page/suspect.webp";
import notGuiltyImg from "../../assets/images/beasts-page/not-guilty.webp";
import yetiIcon from "../../assets/images/icons/footer/yeti.webp";

import "./beastspagegame.scss";

export interface BeastsCard {
	index: number;
	classNameCard: string;
	id: string;
	src: string;
	alt: string;
	clicked: boolean;
	correct: boolean;
}
export interface BeastsLevel {
	level: number;
	levelCards: BeastsCard[];
}

type BeastsData = BeastsLevel;

const BeastsPageGame = () => {
	const location = useLocation();
	const beastsCard = useLoaderData() as BeastsData;
	const [beastsCards, setBeastsCards] = useState<BeastsCard[]>(
		beastsCard.levelCards
	);
	const isLastRound = beastsCard.level === 7;

	useEffect(() => {
		setBeastsCards(beastsCard.levelCards);
	}, [location.pathname]);

	const toggleCard = (id: string) => {
		setBeastsCards((prevCards) => {
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
			className="beasts-page-game"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
			key={beastsCard.level}
		>
			<div className="beasts-content">
				<motion.div
					className="beasts-cards"
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { duration: 0.5 } }}
					exit={{ scale: 1, transition: { duration: 0.5 } }}
				>
					{beastsCards.map((element) => (
						<motion.div
							className={element.classNameCard}
							onClick={() => toggleCard(element.id)}
							key={element.id}
							animate={{
								rotate: [-20, 0, -20],
								transformOrigin: "top right",
							}}
							transition={{
								rotate: { duration: 2, ease: "easeInOut", repeat: Infinity },
							}}
							whileHover={{
								scale: 1.05,
							}}
						>
							<motion.img
								className="beasts-card-image"
								src={element.src}
								alt={element.alt}
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{
									scale: 0.95,
								}}
							/>
							<img
								className="beasts-card-icon"
								src={icon}
								alt="beasts-card-icon"
							/>
							<div
								className={
									element.clicked ? "suspect-block active" : "suspect-block"
								}
							>
								<img
									src={element.correct ? suspectImg : notGuiltyImg}
									alt="suspect-image"
								/>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
			<div className="beasts-button-block">
				<Link
					to={
						isLastRound
							? "/beastsgame/nowpage"
							: `/beastsgame/level${beastsCard.level + 1}`
					}
				>
					<motion.img
						className="beasts-button-next-round"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={yetiIcon}
						alt="yeti-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default BeastsPageGame;
