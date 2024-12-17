import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import "./baypage.scss";
import { useEffect } from "react";

const BayPage = () => {
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);

	useEffect(() => {
		console.log(location.pathname);
	}, [location.pathname]);

	return (
		<motion.div
			className="bay-page-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.h2
				className="bay-title"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
			>
				Бухта сирен
			</motion.h2>
			<motion.div
				className="bay-button-container"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
			>
				<Link
					to={currentLocation === "bay" ? "round1" : "/bay/round3"}
					className="bay-button-link"
				>
					<motion.span
						className="bay-button-start"
						whileHover={{ scale: 1.05 }}
						whileTap={{
							y: "10px",
							boxShadow: "0 5px 3px 3px rgba(255,255,255,1)",
						}}
					>
						{currentLocation === "bay"
							? "Погрузиться в таинственный мир океана"
							: "Продолжить путешествие"}
					</motion.span>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default BayPage;
