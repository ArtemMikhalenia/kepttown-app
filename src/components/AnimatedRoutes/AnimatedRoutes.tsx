import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import Layout from "../Layout/Layout";
import GhostsPageLayout from "../GhostsPageLayout/GhostsPageLayout";
import PotionsPageLayout from "../PotionsPageLayout/PotionsPageLayout";

import FrontPage from "../../pages/FrontPage/FrontPage";
import MapPage from "../../pages/MapPage/MapPage";
import NextPage from "../../pages/NextPage/NextPage";
import NowPage from "../../pages/NowPage/NowPage";
import GhostsPage from "../../pages/GhostsPage/GhostsPage";

import PotionsPage from "../../pages/PotionsPage/PotionsPage";
import PotionsPageGame from "../PotionsPageGame/PotionsPageGame";

import CustomBlock from "../CustomBlock/CustomBlock";

import { AnimatePresence } from "motion/react";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<FrontPage />} />
			<Route path="map" element={<MapPage />} />
			<Route path="nextpage" element={<NextPage />} />
			<Route path="nowpage" element={<NowPage />} />
			<Route path="ghostspage" element={<GhostsPageLayout />}>
				<Route index element={<GhostsPage />} />
				<Route path="ghost" element={<CustomBlock />} />
			</Route>
			<Route path="potionspage" element={<PotionsPageLayout />}>
				<Route index element={<PotionsPage />} />
				<Route path="potiongame" element={<PotionsPageGame />} />
			</Route>
		</Route>
	)
);

const AnimatedRoutes = () => {
	return (
		<AnimatePresence mode="wait">
			<RouterProvider router={router} />
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
