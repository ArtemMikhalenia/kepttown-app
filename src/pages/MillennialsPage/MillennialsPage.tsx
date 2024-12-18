import { motion } from "motion/react";
import "./millennialspage.scss";
import { Link } from "react-router-dom";
import sphereIcon from "../../assets/images/icons/footer/sphere.png";

const MillennialsPage = () => {
	return (
		<motion.div
			className="millennials-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<motion.div
				className="millennials-title"
				initial={{ opacity: 0, y: "-100%" }}
				animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, transition: { duration: 0.5 } }}
			>
				Предсказание для миллениалов
			</motion.div>
			<Link to="/fortunegame/game">
				<motion.button
					className="millennials-button"
					initial={{ scale: 0 }}
					animate={{
						scale: 1,
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 10,
							duration: 1,
						},
					}}
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.5 },
					}}
					whileTap={{
						y: "10px",
					}}
				>
					<img
						className="millennials-image"
						src={sphereIcon}
						alt="millennials-image"
					/>
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default MillennialsPage;
