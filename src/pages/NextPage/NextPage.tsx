import { motion } from "motion/react";
import santaHat from "../../assets/images/icons/front-page/santa-hat.png";

import "./nextpage.scss";

const NextPage = () => {
	return (
		<motion.div
			className="next-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			<motion.div
				className="next-page-title"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { duration: 1 },
				}}
				viewport={{ once: true, amount: 0.1 }}
			>
				<img className="santa-hat" src={santaHat} alt="front-santa-hat" />
				<h1>Далее в эфире - Шатер гадалки</h1>
			</motion.div>
		</motion.div>
	);
};

export default NextPage;
