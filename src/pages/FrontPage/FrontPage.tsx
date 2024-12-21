import { motion } from "motion/react";
import { Link } from "react-router-dom";
import santaHat from "../../assets/images/icons/front-page/santa-hat.png";
import videoIcon from "../../assets/images/icons/front-page/video-icon.png";
import "./frontpage.scss";

const FrontPage = () => {
	return (
		<motion.div
			className="front-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<div className="front-title-container">
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
					<img
						className="front-santa-hat"
						src={santaHat}
						alt="front-santa-hat"
					/>
					<h1>С Новым годом!</h1>
					<h2>или...</h2>
				</motion.div>
			</div>
			<div className="front-button-block">
				<Link to="front-video">
					<motion.img
						className="front-button"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={videoIcon}
						alt="video-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default FrontPage;
