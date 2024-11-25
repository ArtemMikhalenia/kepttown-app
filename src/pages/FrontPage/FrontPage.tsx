import { motion } from "motion/react";
import Snowfall from "react-snowfall";
import santaHat from "../../assets/images/icons/front-page/santa-hat.png";
import "./frontpage.scss";

const FrontPage = () => {

	return (
		<motion.div
			className="front-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			<Snowfall snowflakeCount={250} />
			<motion.div
				className="front-title-block"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { duration: 1 },
				}}
				viewport={{ once: true, amount: 0.1 }}
			>
				<img className="front-santa-hat" src={santaHat} alt="front-santa-hat" />
				<h1>С Новым годом!</h1>
				<h2>или...</h2>
			</motion.div>
		</motion.div>
	);
};

export default FrontPage;
