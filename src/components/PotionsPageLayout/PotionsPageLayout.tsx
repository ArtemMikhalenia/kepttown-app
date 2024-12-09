import { Outlet } from "react-router-dom";
import { motion } from "motion/react";

import "./potionspagelayout.scss";

const PotionsPageLayout = () => {
	return (
		<motion.div
			className="potions-page-layout"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<Outlet />
		</motion.div>
	);
};

export default PotionsPageLayout;
