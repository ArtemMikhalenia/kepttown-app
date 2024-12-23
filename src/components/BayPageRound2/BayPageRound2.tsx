import { motion } from "motion/react";
import { Link, Outlet } from "react-router-dom";

import "./baypageround2.scss";

const BayPageRound2 = () => {
	return (
		<motion.div
			className="bay-page-round2"
			key="bay-page-round2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className="bay-round2-content">
				<motion.div
					className="bay-round2-title"
					initial={{ opacity: 0, y: "-100%" }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
				>
					Раунд 2. Искусственная музыка
				</motion.div>
				<Link className="bay-round2-link" to="team1">
					<motion.span
						className="bay-round2-button"
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
						exit={{ opacity: 0, transition: { duration: 0.5 } }}
						whileHover={{ scale: 1.05 }}
						whileTap={{
							y: "10px",
							boxShadow: "0 5px 3px 3px rgba(255,255,255,1)",
						}}
					>
						Начать
					</motion.span>
				</Link>
				<Outlet />
			</div>
		</motion.div>
	);
};

export default BayPageRound2;
