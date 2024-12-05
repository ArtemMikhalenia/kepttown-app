import { motion } from "motion/react";
import "./ghostspage.scss";

const GhostsPage = () => {
	return (
		<motion.div
			className="ghosts-page-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		></motion.div>
	);
};

export default GhostsPage;
