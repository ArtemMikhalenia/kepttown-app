import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";

import "./ghostpagelayout.scss";
import Spider from "../Spider/Spider";
import { useEffect, useState } from "react";

const GhostsPageLayout = () => {
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);
	const [showSpider, setShowSpider] = useState(true);

	useEffect(() => {
		if (
			currentLocation === "ghostsgame/nowpage" ||
			currentLocation === "ghostsgame/nextpage"
		) {
			setShowSpider(false);
		}
	}, [location.pathname]);

	return (
		<motion.div
			className="ghosts-page-layout"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			viewport={{ once: true, amount: 0.1 }}
		>
			{showSpider && <Spider />}
			<Outlet />
		</motion.div>
	);
};

export default GhostsPageLayout;
