import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

import "./parkpage.scss";

const ParkPage = () => {
	return (
		<motion.div
			className="park-page-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<Snowfall snowflakeCount={250} />

			<motion.div
				className="park-button-container"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
			>
				<Link to="game" className="park-button-link">
					<motion.span
						className="park-button-start"
						whileHover={{ scale: 1.05 }}
						whileTap={{
							y: "10px",
							boxShadow: "0 5px 3px 3px rgba(255,255,255,1)",
						}}
					>
						Отправиться в мир развлечений и веселья
					</motion.span>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default ParkPage;
