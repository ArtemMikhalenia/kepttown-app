import { motion } from "motion/react";

const CustomBlock = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			style={{ background: "red", width: "400px", height: "150px" }}
		></motion.div>
	);
};

export default CustomBlock;
