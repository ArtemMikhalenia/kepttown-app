import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "motion/react";

import Layout from "../Layout/Layout";
import GhostsPageLayout from "../GhostsPageLayout/GhostsPageLayout";
import PotionsPageLayout from "../PotionsPageLayout/PotionsPageLayout";
import FortunePageLayout from "../FortunePageLayout/FortunePageLayout";
import BayPageLayout from "../BayPageLayout/BayPageLayout";
import BayGame1Layout from "../BayGame1Layout/BayGame1Layout";
import BayGame2Layout from "../BayGame2Layout/BayGame2Layout";

import FrontPage from "../../pages/FrontPage/FrontPage";
import MapPage from "../../pages/MapPage/MapPage";
import NextPage from "../../pages/NextPage/NextPage";
import NowPage from "../../pages/NowPage/NowPage";
import GhostsPage from "../../pages/GhostsPage/GhostsPage";
import PotionsPage from "../../pages/PotionsPage/PotionsPage";
import FortunePage from "../../pages/FortunePage/FortunePage";
import VideoPage from "../../pages/VideoPage/VideoPage";
import BayPage from "../../pages/BayPage/BayPage";
import BayPageRound1 from "../BayPageRound1/BayPageRound1";
import BayPageRound2 from "../BayPageRound2/BayPageRound2";

import { TailSpin } from "react-loading-icons";

import {
	PotionData,
	GhostsData,
	BayRound1Round,
} from "../../interfaces/interfaces";

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

import {
	potionsDataLvl1,
	potionsDataLvl2,
	potionsDataLvl3,
	potionsDataLvl4,
	potionsDataLvl5,
	potionsDataLvl6,
	potionsDataLvl7,
} from "../../data/potionsData";

import {
	bayDataRound1Team1,
	bayDataRound1Team2,
	bayDataRound1Team3,
	bayDataRound2Team1,
	bayDataRound2Team2,
	bayDataRound2Team3,
} from "../../data/bayData";

const ghostsDataLevels = [
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
];

const potionsDataLevels = [
	potionsDataLvl1,
	potionsDataLvl2,
	potionsDataLvl3,
	potionsDataLvl4,
	potionsDataLvl5,
	potionsDataLvl6,
	potionsDataLvl7,
];

const bayDataRound1Teams = [
	bayDataRound1Team1,
	bayDataRound1Team2,
	bayDataRound1Team3,
];

const bayDataRound2Teams = [
	bayDataRound2Team1,
	bayDataRound2Team2,
	bayDataRound2Team3,
];

const GhostsPageGame = lazy(() => import("../GhostsPageGame/GhostsPageGame"));
const PotionsPageGame = lazy(
	() => import("../PotionsPageGame/PotionsPageGame")
);
const BayPageRound1Game = lazy(
	() => import("../BayPageRound1Game/BayPageRound1Game")
);
const BayPageRound2Game = lazy(
	() => import("../BayPageRound2Game/BayPageRound2Game")
);
const FortunePageGame = lazy(
	() => import("../FortunePageGame/FortunePageGame")
);

const generateGhostRoutes = (levelsData: GhostsData[]) => {
	return levelsData.map((data, index) => (
		<Route
			key={`ghosts-round-${index + 1}`}
			path={`round${index + 1}`}
			loader={() => {
				return data;
			}}
			element={
				<Suspense fallback={<TailSpin />}>
					<GhostsPageGame />
				</Suspense>
			}
		/>
	));
};

const generatePotionsRoutes = (levelsData: PotionData[]) => {
	return levelsData.map((data, index) => (
		<Route
			key={`potions-round-${index + 1}`}
			path={`round${index + 1}`}
			loader={() => {
				return data;
			}}
			element={
				<Suspense fallback={<TailSpin />}>
					<PotionsPageGame />
				</Suspense>
			}
		/>
	));
};

const generateBayRound1Routes = (levelsData: BayRound1Round[]) => {
	return levelsData.map((data, index) => (
		<Route
			key={`bay-round-1`}
			path={`team${index + 1}`}
			loader={() => {
				return data;
			}}
			element={
				<Suspense fallback={<TailSpin />}>
					<BayPageRound1Game />
				</Suspense>
			}
		/>
	));
};

const generateBayRound2Routes = (levelsData: BayRound1Round[]) => {
	return levelsData.map((data, index) => (
		<Route
			key={`bay-round-2`}
			path={`team${index + 1}`}
			loader={() => {
				return data;
			}}
			element={
				<Suspense fallback={<TailSpin />}>
					<BayPageRound2Game />
				</Suspense>
			}
		/>
	));
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<FrontPage />} />
			<Route path="map" element={<MapPage />} />
			<Route path="bay" element={<BayPageLayout />}>
				<Route index element={<BayPage />} />
				<Route
					path="bay-video"
					element={
						<VideoPage url="https://youtu.be/UdIF5lpnxPA?si=p17NoHFnQxunO5vf" />
					}
				/>
				<Route path="round1" element={<BayGame1Layout />}>
					<Route index element={<BayPageRound1 />} />
					{generateBayRound1Routes(bayDataRound1Teams)}
				</Route>
				<Route path="round2" element={<BayGame2Layout />}>
					<Route index element={<BayPageRound2 />} />
					{generateBayRound2Routes(bayDataRound2Teams)}
				</Route>
			</Route>
			<Route path="nextpage" element={<NextPage />} />
			<Route path="nowpage" element={<NowPage />} />
			<Route path="fortunegame" element={<FortunePageLayout />}>
				<Route index element={<FortunePage />} />
				<Route
					path="fortune-video"
					element={
						<VideoPage url="https://www.youtube.com/watch?v=FoSgDtqb0Zc" />
					}
				/>
				<Route
					path={"game"}
					element={
						<Suspense fallback={<TailSpin />}>
							<FortunePageGame />
						</Suspense>
					}
				>
					<Route path="baby-boomers" element={<FortunePageGame />} />
					<Route path="generationX" element={<FortunePageGame />} />
					<Route path="millennials" element={<FortunePageGame />} />
					<Route path="zoomers" element={<FortunePageGame />} />
				</Route>
			</Route>
			<Route path="ghostsgame" element={<GhostsPageLayout />}>
				<Route index element={<GhostsPage />} />
				{generateGhostRoutes(ghostsDataLevels)}
			</Route>
			<Route path="potionsgame" element={<PotionsPageLayout />}>
				<Route index element={<PotionsPage />} />
				{generatePotionsRoutes(potionsDataLevels)}
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
