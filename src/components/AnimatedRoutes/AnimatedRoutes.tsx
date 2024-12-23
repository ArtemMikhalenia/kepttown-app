import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "motion/react";

import Layout from "../Layout/Layout";
import PageLayout from "../PageLayout/PageLayout";

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
import BayPageRound3 from "../BayPageRound3/BayPageRound3";
import BayPageRound4 from "../BayPageRound4/BayPageRound4";
import JobsPage from "../../pages/JobsPage/JobsPage";
import MillennialsPage from "../../pages/MillennialsPage/MillennialsPage";
import ZoomersPage from "../../pages/ZoomersPage/ZoomersPage";
import BeastsPage from "../../pages/BeastsPage/BeastsPage";
import TavernPage from "../../pages/TavernPage/TavernPage";
import ParkPage from "../../pages/ParkPage/ParkPage";
import MountainPage from "../../pages/MountainPage/MountainPage";

import { TailSpin } from "react-loading-icons";

import {
	PotionRound,
	GhostRound,
	BayRound1Round,
	BeastsLevel,
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
	bayDataRound4,
} from "../../data/bayData";
import {
	beastsDataLvl1,
	beastsDataLvl2,
	beastsDataLvl3,
	beastsDataLvl4,
	beastsDataLvl5,
	beastsDataLvl6,
	beastsDataLvl7,
} from "../../data/beastsData";
import { tavernData } from "../../data/tavernData";
import { parkData } from "../../data/parkData";
import { mountainData } from "../../data/mountainData";

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

const beastsDataLevels = [
	beastsDataLvl1,
	beastsDataLvl2,
	beastsDataLvl3,
	beastsDataLvl4,
	beastsDataLvl5,
	beastsDataLvl6,
	beastsDataLvl7,
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
const BayPageRound4Game = lazy(
	() => import("../BayPageRound4Game/BayPageRound4Game")
);
const FortunePageGame = lazy(
	() => import("../FortunePageGame/FortunePageGame")
);
const BeastsPageGame = lazy(() => import("../BeastsPageGame/BeastsPageGame"));
const TavernPageGame = lazy(() => import("../TavernPageGame/TavernPageGame"));
const ParkPageGame = lazy(() => import("../ParkPageGame/ParkPageGame"));
const MountainPageGame = lazy(
	() => import("../MountainPageGame/MountainPageGame")
);

const generateGhostRoutes = (levelsData: GhostRound[]) => {
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

const generatePotionsRoutes = (levelsData: PotionRound[]) => {
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

const generateBeastsRoutes = (levelsData: BeastsLevel[]) => {
	return levelsData.map((data, index) => (
		<Route
			key={`beasts-level-${index + 1}`}
			path={`level${index + 1}`}
			loader={() => {
				return data;
			}}
			element={
				<Suspense fallback={<TailSpin />}>
					<BeastsPageGame />
				</Suspense>
			}
		/>
	));
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route element={<PageLayout />}>
				<Route index element={<FrontPage />} />
				<Route
					path="front-video"
					element={
						<VideoPage
							url="https://www.youtube.com/watch?v=0AzEO3DWWuA"
							link="/map"
						/>
					}
				/>
			</Route>
			<Route path="map" element={<MapPage />} />
			<Route path="bay" element={<PageLayout />}>
				<Route index element={<BayPage />} />
				<Route
					path="bay-video"
					element={
						<VideoPage
							url="https://youtu.be/JoDypYhwlcA?si=WELdZfV-IOeVee3f"
							link="/bay"
						/>
					}
				/>
				<Route path="round1" element={<PageLayout />}>
					<Route index element={<BayPageRound1 />} />
					{generateBayRound1Routes(bayDataRound1Teams)}
				</Route>
				<Route path="round2" element={<PageLayout />}>
					<Route index element={<BayPageRound2 />} />
					{generateBayRound2Routes(bayDataRound2Teams)}
				</Route>
				<Route path="preround3" element={<BayPage />} />
				<Route path="round3" element={<PageLayout />}>
					<Route index element={<BayPageRound3 />} />
				</Route>
				<Route path="round4" element={<PageLayout />}>
					<Route index element={<BayPageRound4 />} />
					<Route
						path="video"
						loader={() => bayDataRound4}
						element={
							<Suspense fallback={<TailSpin />}>
								<BayPageRound4Game />
							</Suspense>
						}
					/>
				</Route>
				<Route
					path="nextpage"
					element={<NextPage title="Поздравления именинников" url="/map" />}
				/>
			</Route>
			<Route path="fortunegame" element={<PageLayout />}>
				<Route index element={<FortunePage />} />
				<Route
					path="fortune-video"
					element={
						<VideoPage
							url="https://www.youtube.com/watch?v=A1agUoAGCnc"
							link="/fortunegame"
						/>
					}
				/>
				<Route
					path={"game"}
					element={
						<Suspense fallback={<TailSpin />}>
							<FortunePageGame />
						</Suspense>
					}
				/>
				<Route path="millennials" element={<MillennialsPage />} />
				<Route path="zoomers" element={<ZoomersPage />} />
				<Route
					path="nextpage"
					element={<NextPage title="Дом с призраками" url="/map" />}
				/>
				<Route path="stevejobs" element={<JobsPage />} />
			</Route>
			<Route path="ghostsgame" element={<PageLayout />}>
				<Route index element={<GhostsPage />} />
				<Route
					path="ghosts-video"
					element={
						<VideoPage
							url="https://youtu.be/i8V7qe275_4?si=0vpSnaWeR86Z_hXM"
							link="/ghostsgame"
						/>
					}
				/>
				{generateGhostRoutes(ghostsDataLevels)}
				<Route
					path="nowpage"
					element={
						<NowPage
							title="Подсчет знатоков призраков"
							url="/ghostsgame/nextpage"
						/>
					}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Поздравления отделов" url="/map" />}
				/>
			</Route>
			<Route path="potionsgame" element={<PageLayout />}>
				<Route index element={<PotionsPage />} />
				<Route
					path="potions-video"
					element={
						<VideoPage
							url="https://youtu.be/Hh4xTFVas-I?si=EsYSlv1KuGW2loce"
							link="/potionsgame"
						/>
					}
				/>
				{generatePotionsRoutes(potionsDataLevels)}
				<Route
					path="nowpage"
					element={
						<NowPage
							title="Поиск искусного зельевара"
							url="/potionsgame/nextpage"
						/>
					}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Поздравления отделов" url="/map" />}
				/>
			</Route>
			<Route path="beastsgame" element={<PageLayout />}>
				<Route index element={<BeastsPage />} />
				{generateBeastsRoutes(beastsDataLevels)}
				<Route
					path="nowpage"
					element={
						<NowPage
							title="Поиск лучшего детектива"
							url="/beastsgame/nextpage"
						/>
					}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Поздравления отделов" url="/map" />}
				/>
			</Route>
			<Route path="taverngame" element={<PageLayout />}>
				<Route index element={<TavernPage />} />
				<Route
					path="tavern-video"
					element={
						<VideoPage
							url="https://youtu.be/EWEM6j4d5hY?si=iJJ0icn5QbD5rjKt"
							link="/taverngame"
						/>
					}
				/>
				<Route
					path="game"
					loader={() => tavernData}
					element={
						<Suspense fallback={<TailSpin />}>
							<TavernPageGame />
						</Suspense>
					}
				/>
				<Route
					path="nowpage"
					element={
						<NowPage
							title="Поиск истинного гурмана"
							url="/taverngame/nextpage"
						/>
					}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Поздравления отделов" url="/map" />}
				/>
			</Route>
			<Route path="parkgame" element={<PageLayout />}>
				<Route index element={<ParkPage />} />
				<Route
					path={"game"}
					loader={() => parkData}
					element={
						<Suspense fallback={<TailSpin />}>
							<ParkPageGame />
						</Suspense>
					}
				/>
				<Route
					path="nowpage"
					element={
						<NowPage title="Поиск победителя" url="/parkgame/nextpage" />
					}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Новогодний релакс" url="/parkgame/relax" />}
				/>
				<Route
					path="relax"
					element={
						<NowPage title="Сейчас в эфире - Новогодний релакс" url="/map" />
					}
				/>
			</Route>
			<Route path="mountain" element={<PageLayout />}>
				<Route index element={<MountainPage />} />
				<Route
					path={"game"}
					loader={() => mountainData}
					element={
						<Suspense fallback={<TailSpin />}>
							<MountainPageGame />
						</Suspense>
					}
				/>
				<Route
					path="nowpage"
					element={
						<NowPage title="Поиск победителя" url="/parkgame/nextpage" />
					}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Новогодний релакс" url="/parkgame/relax" />}
				/>
				<Route
					path="relax"
					element={
						<NowPage title="Сейчас в эфире - Новогодний релакс" url="/map" />
					}
				/>
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
