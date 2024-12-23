import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { NextPageProps } from "../../types/types";

import santaHat from "../../assets/images/icons/front-page/santa-hat.png";
import santaImg from "../../assets/images/icons/footer/next-page.gif";
import "./nextpage.scss";

const NextPage = ({ title, url }: NextPageProps) => {
	return (
		<motion.div
			className="next-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			<div className="next-page-title-block">
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
					<h1>Далее в эфире - {title}</h1>
				</motion.div>
			</div>
			<motion.div className="next-page-link-block">
				<Link to={url}>
					<motion.img
						src={santaImg}
						alt="santa-image"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						viewport={{ once: true, amount: 0.1 }}
					/>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default NextPage;
