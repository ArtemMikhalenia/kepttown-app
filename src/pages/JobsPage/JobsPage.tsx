import { motion } from "motion/react";
import jobsImg from "../../assets/images/fortune-page/jobs.webp";
import "./jobspage.scss";
import { Link } from "react-router-dom";
import sphereIcon from "../../assets/images/icons/footer/sphere.png";
import redCrossIcon from "../../assets/images/fortune-page/red-cross.png";
import { useState } from "react";

const JobsPage = () => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked((prevClick) => !prevClick);
	};

	return (
		<motion.div
			className="jobs-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<motion.div
				className="jobs-image-block"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { duration: 7 },
				}}
				viewport={{ once: true, amount: 0.1 }}
				onClick={handleClick}
			>
				<img className="jobs-image" src={jobsImg} alt="jobs-image" />
				{clicked && (
					<motion.img
						className="red-cross-image"
						src={redCrossIcon}
						alt="red-cross-image"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.5 } }}
					/>
				)}
			</motion.div>
			<Link to="/fortunegame/game">
				<motion.button
					className="jobs-button"
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
					<img className="jobs-image" src={sphereIcon} alt="jobs-image" />
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default JobsPage;
