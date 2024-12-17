import { Outlet } from "react-router-dom";
import { motion } from "motion/react";
import "./baygame4layout.scss";

const BayGame4Layout = () => {
	return (
		<motion.div
			className="bay-game4-layout"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<Outlet />
		</motion.div>
	);
};

export default BayGame4Layout;
