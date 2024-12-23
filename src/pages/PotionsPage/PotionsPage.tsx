import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./potionspage.scss";

const PotionsPage = () => {
	return (
		<motion.div
			className="potions-page-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.div
				className="potions-button-container"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
			>
				<Link to="round1" className="potions-button-link">
					<motion.p
						className="potions-button-start"
						whileHover={{ scale: 1.05 }}
						whileTap={{ y: "10px", boxShadow: "0 5px 3px 3px rgba(0,0,0,1)" }}
					>
						Да начнется варка
					</motion.p>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default PotionsPage;
