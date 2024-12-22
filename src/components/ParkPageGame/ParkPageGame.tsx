import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

import "./parkpagegame.scss";

import { ParkCard } from "../../interfaces/interfaces";

type ParkData = ParkCard[];

const ParkPageGame = () => {
	const location = useLocation();
	const parkCard = useLoaderData() as ParkData;
	const [parkCards, setParkCards] = useState<ParkCard[]>(parkCard);

	useEffect(() => {
		setParkCards(parkCard);
	}, [location.pathname]);

	return (
		<motion.div
			className="park-page-game"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
		>
			<motion.div
				className="park-content"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						type: "spring",
						stiffness: 200,
						damping: 10,
						duration: 1,
					},
				}}
			>
				<Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
					{parkCards.map((element) => (
						<SwiperSlide key={element.id}>
							<img src={element.src} alt={element.alt} />
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
			<div className="ghost-button-block">
				<Link to="/ghostsgame/nowpage">
					{/* <motion.img
						className="ghost-button-next-round"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={ghostIconImg}
						alt="ghost-icon"
					/> */}
				</Link>
			</div>
		</motion.div>
	);
};

export default ParkPageGame;
