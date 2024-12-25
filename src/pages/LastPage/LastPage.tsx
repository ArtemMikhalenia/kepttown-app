import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import nextIcon from "../../assets/images/icons/footer/next-page.gif";

import "./lastpage.scss";

const LastPage = () => {
	const [clicked, setClicked] = useState(false);
	const letters = [
		"М",
		"а",
		"г",
		"и",
		"я",
		" ",
		"в",
		"н",
		"е",
		" ",
		"K",
		"e",
		"p",
		"t",
		" ",
		"з",
		"а",
		"п",
		"р",
		"е",
		"щ",
		"е",
		"н",
		"а",
		"!",
	];

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<motion.div
			className="last-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<div className="last-title-container">
				<motion.div
					className="last-title-block"
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { duration: 1 },
					}}
					viewport={{ once: true, amount: 0.1 }}
				>
					<h1>С Новым годом!</h1>
					<h2>или...</h2>
					<h2 className="hidden-text" onClick={handleClick}>
						{letters.map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, scale: 1 }}
								animate={{
									opacity: clicked ? 1 : 0,
									scale: clicked ? 1 : 0,
									transition: { duration: 1, delay: 0 + index * 0.1 },
								}}
							>
								{letter}
							</motion.span>
						))}
					</h2>
				</motion.div>
			</div>
			<div className="last-button-block">
				<Link to="/lastpage/nowpage">
					<motion.img
						className="last-button"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={nextIcon}
						alt="next-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default LastPage;
