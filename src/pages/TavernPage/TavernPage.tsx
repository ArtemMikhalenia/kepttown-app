import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./tavernpage.scss";

const TavernPage = () => {
	return (
		<motion.div
			className="tavern-page-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.div
				className="tavern-button-container"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
			>
				<Link to="game" className="tavern-button-link">
					<motion.span
						className="tavern-button-start"
						whileHover={{ scale: 1.05 }}
						whileTap={{
							y: "10px",
							boxShadow: "0 5px 3px 3px rgba(255,255,255,1)",
						}}
					>
						Смачна есцi
					</motion.span>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default TavernPage;
