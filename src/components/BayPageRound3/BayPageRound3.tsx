import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./baypageround3.scss";

const BayPageRound3 = () => {
	return (
		<motion.div
			className="bay-page-round3"
			key="bay-page-round3"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className="bay-round3-content">
				<motion.div
					className="bay-round3-title"
					initial={{ opacity: 0, y: "-100%" }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
				>
					Раунд 3. Взболтать, но не смешивать
				</motion.div>
				<Link className="bay-round3-link" to="/bay/round4">
					<motion.span
						className="bay-round3-button"
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
						exit={{ opacity: 0, transition: { duration: 0.5 } }}
						whileHover={{ scale: 1.05 }}
						whileTap={{
							y: "10px",
							boxShadow: "0 5px 3px 3px rgba(255,255,255,1)",
						}}
					>
						Продолжить
					</motion.span>
				</Link>
			</div>
		</motion.div>
	);
};

export default BayPageRound3;
