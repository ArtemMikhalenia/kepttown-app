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
import GhostsPageGame from "../GhostsPageGame/GhostsPageGame";

import PotionsPage from "../../pages/PotionsPage/PotionsPage";
import PotionsPageGame from "../PotionsPageGame/PotionsPageGame";

import { AnimatePresence } from "motion/react";

import {
	ghostsDataLvl1,
	ghostsDataLvl2,
	ghostsDataLvl3,
	ghostsDataLvl4,
	ghostsDataLvl5,
	ghostsDataLvl6,
	ghostsDataLvl7,
	ghostsDataLvl8,
	ghostsDataLvl9,
	ghostsDataLvl10,
} from "../../data/ghostsData";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<FrontPage />} />
			<Route path="map" element={<MapPage />} />
			<Route path="nextpage" element={<NextPage />} />
			<Route path="nowpage" element={<NowPage />} />
			<Route path="ghostsgame" element={<GhostsPageLayout />}>
				<Route index element={<GhostsPage />} />
				<Route
					path="round1"
					loader={() => ghostsDataLvl1}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round2"
					loader={() => ghostsDataLvl2}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round3"
					loader={() => ghostsDataLvl3}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round4"
					loader={() => ghostsDataLvl4}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round5"
					loader={() => ghostsDataLvl5}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round6"
					loader={() => ghostsDataLvl6}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round7"
					loader={() => ghostsDataLvl7}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round8"
					loader={() => ghostsDataLvl8}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round9"
					loader={() => ghostsDataLvl9}
					element={<GhostsPageGame />}
				/>
				<Route
					path="round10"
					loader={() => ghostsDataLvl10}
					element={<GhostsPageGame />}
				/>
			</Route>
			<Route path="potionsgame" element={<PotionsPageLayout />}>
				<Route index element={<PotionsPage />} />
				<Route path="round1" element={<PotionsPageGame />} />
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
