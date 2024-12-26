import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

import santaHat from "../../assets/images/icons/front-page/santa-hat.png";

import "./treepage.scss";

const TreePage = () => {
	return (
		<motion.div
			className="tree-page-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<Snowfall snowflakeCount={250} />
			<div className="tree-page-title-block">
				<motion.div
					className="tree-page-title"
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { duration: 1 },
					}}
					viewport={{ once: true, amount: 0.1 }}
				>
					<img className="santa-hat" src={santaHat} alt="tree-santa-hat" />
					<h1>Конкурс Christmas space</h1>
				</motion.div>
			</div>

			<motion.div
				className="tree-button-container"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
				exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
			>
				<Link to="game" className="tree-button-link">
					<motion.span
						className="tree-button-start"
						whileHover={{ scale: 1.05 }}
						whileTap={{
							y: "10px",
							boxShadow: "0 5px 3px 3px rgba(255,255,255,1)",
						}}
					>
						Забраться на самый красивый рабочий стол
					</motion.span>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default TreePage;
