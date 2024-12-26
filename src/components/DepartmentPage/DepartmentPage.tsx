import { motion } from "motion/react";
import { useEffect } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";

import { DepartmentData } from "../../types/types";

import mountainIcon from "../../assets/images/icons/mountain-icon.png";
// import videoIcon from "../../assets/images/icons/front-page/video-icon.png";

import "./departmentpage.scss";

const DepartmentPage = () => {
	const location = useLocation();
	const department = useLoaderData() as DepartmentData;

	useEffect(() => {
		console.log(department);
	}, [location.pathname]);

	return (
		<motion.div
			className="department-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="department-content">
				<motion.div
					className="department-image"
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { duration: 1 } }}
					exit={{ scale: 0, transition: { duration: 1 } }}
				>
					<img
						src={department.src}
						alt={department.alt}
						style={{ boxShadow: `0 0 20px 10px ${department.color}` }}
					/>
				</motion.div>
				<motion.div
					className="department-text-container"
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { duration: 1 } }}
				>
					<motion.div
						className="department-text"
						style={{ textShadow: `2px 4px ${department.color}` }}
					>
						Сильные стороны: <br />
						<ul>
							{department.benefits.map((element) => (
								<li key={element}>{element}</li>
							))}
						</ul>
					</motion.div>
				</motion.div>
			</div>
			<div className="department-button-block">
				<Link to="/mountain/game">
					<motion.img
						className="department-button-next"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={mountainIcon}
						alt="mountain-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default DepartmentPage;
