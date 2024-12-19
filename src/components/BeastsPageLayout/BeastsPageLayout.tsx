import { Outlet } from "react-router-dom";
import { motion } from "motion/react";

import "./beastspagelayout.scss";

const BeastsPageLayout = () => {

	return (
		<motion.div
			className="beasts-page-layout"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<Outlet />
		</motion.div>
	);
};

export default BeastsPageLayout;
