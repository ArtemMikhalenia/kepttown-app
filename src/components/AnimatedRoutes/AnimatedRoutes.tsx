import { Route, Routes, useLocation } from "react-router-dom";
import FrontPage from "../../pages/FrontPage/FrontPage";
import MapPage from "../../pages/MapPage/MapPage";
import NextPage from "../../pages/NextPage/NextPage";
import NowPage from "../../pages/NowPage/NowPage";

import { AnimatePresence } from "motion/react";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<FrontPage />} />
				<Route path="/map" element={<MapPage />} />
				<Route path="/nextpage" element={<NextPage />} />
				<Route path="/nowpage" element={<NowPage />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
