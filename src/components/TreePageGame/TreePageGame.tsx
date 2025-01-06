import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Snowfall from "react-snowfall";

import { TreeCard } from "../../interfaces/interfaces";
import { TreeData } from "../../types/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import treeIcon from "../../assets/images/icons/tree-icon.png";

import "./treepagegame.scss";

const TreePageGame = () => {
	const location = useLocation();
	const treeCard = useLoaderData() as TreeData;
	const [treeCards, setTreeCards] = useState<TreeCard[]>(treeCard);

	useEffect(() => {
		setTreeCards(treeCard);
	}, [location.pathname]);

	return (
		<motion.div
			className="tree-page-game"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: false, amount: 0.1 }}
		>
			<Snowfall snowflakeCount={250} />
			<motion.div
				className="tree-content"
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
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					autoHeight={true}
					slidesPerView={2}
					spaceBetween={30}
					centeredSlides={true}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 50,
						modifier: 1,
						slideShadows: true,
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={true}
					modules={[EffectCoverflow, Autoplay]}
					className="treeSwiper"
				>
					{treeCards.map((element) => (
						<SwiperSlide key={element.id}>
							<img src={element.src} alt={element.alt} />
							<span className="card-number">{element.id}</span>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
			<div className="tree-button-block">
				<Link to="/map">
					<motion.img
						className="tree-button-next"
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 1 },
						}}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						src={treeIcon}
						alt="tree-icon"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default TreePageGame;
