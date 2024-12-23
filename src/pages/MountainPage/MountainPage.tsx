import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./mountainpage.scss";

const MountainPage = () => {
	return (
		<motion.div
			className="mountain-page-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.div
				className="mountain-button-container"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
			>
				<Link to="game" className="mountain-button-link">
					<motion.span
						className="mountain-button-start"
						whileHover={{ scale: 1.05 }}
						whileTap={{
							y: "10px",
							boxShadow: "0 5px 3px 3px rgba(255,255,255,1)",
						}}
					>
						Погрузиться в бездну поздравлений
					</motion.span>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default MountainPage;
