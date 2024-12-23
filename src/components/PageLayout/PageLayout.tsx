import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Spider from "../Spider/Spider";

const PageLayout = () => {
	const location = useLocation();
	const currentLocation: string = location.pathname.slice(1);
	const [showSpider, setShowSpider] = useState(false);

	const ghostPageLinks = [
		"ghostsgame",
		"ghostsgame/round1",
		"ghostsgame/round2",
		"ghostsgame/round3",
		"ghostsgame/round4",
		"ghostsgame/round5",
		"ghostsgame/round6",
		"ghostsgame/round7",
		"ghostsgame/round8",
		"ghostsgame/round9",
		"ghostsgame/round10",
	];

	useEffect(() => {
		if (ghostPageLinks.includes(currentLocation)) {
			setShowSpider(true);
		} else {
			setShowSpider(false);
		}
	}, [location.pathname]);

	return (
		<motion.div
			className="page-layout"
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

export default PageLayout;
