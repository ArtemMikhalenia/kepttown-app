import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";
import { useWindowSize } from "@custom-react-hooks/use-window-size";
import Confetti from "react-confetti";

import boilerImg from "../../assets/images/potions-page/boiler.webp";
import scrollImg from "../../assets/images/potions-page/scroll.webp";
import boilerSmoke from "../../assets/images/potions-page/smoke.gif";

import winSound from "../../assets/sounds/potions-game/win_sound.wav";
import lostSound from "../../assets/sounds/potions-game/lost_sound.wav";

import "./potionspagegame.scss";
import PotionsCard from "./PotionCard.tsx";

interface Ingredient {
	id: string;
	src: string;
	name: string;
	alt: string;
	correct: boolean;
	clicked: boolean;
}

interface PotionRound {
	round: number;
	potion: string;
	roundItems: Ingredient[];
	correctAnswer: string[];
}

type PotionsData = PotionRound;

const PotionsPageGame = () => {
	const location = useLocation();
	const round = useLoaderData() as PotionsData;
	const [potions, setPotions] = useState<Ingredient[]>(round.roundItems);
	const { width, height } = useWindowSize();
	const [startConfetti, setStartConfetti] = useState(false);

	let winAudio = new Audio(winSound);
	let lostAudio = new Audio(lostSound);

	useEffect(() => {
		setPotions(round.roundItems);
	}, [location.pathname]);

	const toggleCard = (id: string) => {
		setPotions((prevPotions) => {
			return prevPotions.map((potion) => {
				if (potion.id === id) {
					return { ...potion, clicked: !potion.clicked };
				}
				return potion;
			});
		});
	};

	const checkAnswer = () => {
		const selectedIngredients = potions.filter((item) => item.clicked);
		const selectedIds = selectedIngredients.map((item) => item.id);
		const isCorrect =
			round.correctAnswer.every((id) => selectedIds.includes(id)) &&
			selectedIds.every((id) => round.correctAnswer.includes(id));

		if (isCorrect) {
			winAudio.play();
			setStartConfetti(true);
		} else {
			lostAudio.play();
		}

		setPotions((prevPotions) => {
			return prevPotions.map((potion) => {
				return { ...potion, clicked: false };
			});
		});
	};

	return (
		<motion.div
			className="potions-page-game"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className="potions-content">
				<div className="potions-head">
					<motion.div
						className="potions-head-container"
						initial={{ opacity: 0, y: "-150%" }}
						animate={{
							opacity: 1,
							y: "-2%",
							transition: {
								type: "spring",
								stiffness: 200,
								damping: 10,
								duration: 2,
							},
						}}
					>
						<img className="potions-head-scroll" src={scrollImg} alt="scroll" />
						<img
							className="potions-head-clover"
							src={round.potion}
							alt="clover"
						/>
					</motion.div>
				</div>
				<motion.div
					className="potions-boiler"
					initial={{ opacity: 0, x: "-250%" }}
					animate={{
						opacity: 1,
						x: 0,
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 10,
							duration: 2,
						},
					}}
				>
					<img className="smoke" src={boilerSmoke} alt="boiler-smoke-img" />
					<img className="boiler" src={boilerImg} alt="boiler-image" />
				</motion.div>
				<div className="potions-ingredients">
					{potions.map((element) => (
						<PotionsCard
							key={element.id}
							toggleCard={toggleCard}
							id={element.id}
							src={element.src}
							alt={element.alt}
							name={element.name}
							clicked={element.clicked}
						/>
					))}
				</div>
				<div className="potions-buttons-block">
					<motion.button
						className="potions-check-answer"
						onClick={checkAnswer}
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
						whileHover={{ scale: 1.05 }}
						whileTap={{ y: "10px", boxShadow: "0 5px 3px 3px rgba(0,0,0,1)" }}
					>
						Проверить ответ
					</motion.button>
					<motion.button
						className="potions-next-round"
						// onClick={checkAnswer}
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
						whileHover={{ scale: 1.05 }}
						whileTap={{ y: "10px", boxShadow: "0 5px 3px 3px rgba(0,0,0,1)" }}
					>
						Следующий раунд
					</motion.button>
				</div>

				{startConfetti && <Confetti width={width} height={height} />}
			</div>
		</motion.div>
	);
};

export default PotionsPageGame;
