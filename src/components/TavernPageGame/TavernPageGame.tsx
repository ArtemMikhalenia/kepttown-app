import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";
import tavernIcon from "../../assets/images/icons/tavern-icon.png";
import foodCapImg from "../../assets/images/tavern-page/food-cap.png";

import "./tavernpagegame.scss";

interface DishCard {
	index: number;
	className: string;
	imgClassName: string;
	src: string;
	alt: string;
	clicked: boolean;
}

type DishData = DishCard[];

const TavernPageGame = () => {
	const location = useLocation();
	const dishCard = useLoaderData() as DishData;
	const [dishCards, setDishCards] = useState<DishCard[]>(dishCard);

	useEffect(() => {
		setDishCards(dishCard);
	}, [location.pathname]);

	const toggleDish = (id: string) => {
		setDishCards((prevCards) => {
			return prevCards.map((dish) => {
				if (dish.className === id) {
					return { ...dish, clicked: !dish.clicked };
				}
				return dish;
			});
		});
	};

	return (
		<motion.div
			className="tavern-page-game"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="tavern-content">
				<motion.div
					className="tavern-dishes"
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { duration: 0.5 } }}
					exit={{ scale: 1, transition: { duration: 0.5 } }}
				>
					{dishCards.map((element) => (
						<motion.div
							className={`tavern-dish-container ${element.className}`}
							onClick={() => toggleDish(element.className)}
							key={element.index}
							whileHover={{ scale: 1.08 }}
						>
							<div className="tavern-dish-content">
								<img
									className={element.imgClassName}
									src={element.src}
									alt={element.alt}
								/>
								<div
									className={
										element.clicked
											? "food-cap-container active"
											: "food-cap-container"
									}
								>
									<img className="food-cap" src={foodCapImg} alt="food-cap" />
									<span className="food-cap-number">{element.index}</span>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
			<div className="tavern-button-block">
				<Link to="/taverngame/nowpage">
					<motion.img
						className="tavern-button-next"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={tavernIcon}
						alt="tavern-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default TavernPageGame;
