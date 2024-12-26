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
import TreePage from "../../pages/TreePage/TreePage";
import LastPage from "../../pages/LastPage/LastPage";

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
import {
	adcDepartmentData,
	auditDepartmentData,
	bookDepartmentData,
	consultDepartmentData,
	directorDepartmentData,
	hrDepartmentData,
	taxesDepartmentData,
} from "../../data/departmentsData";
import { treeData } from "../../data/treeData";

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
const DepartmentPage = lazy(() => import("../DepartmentPage/DepartmentPage"));
const TreePageGame = lazy(() => import("../TreePageGame/TreePageGame"));

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
					element={
						<NextPage title="Поздравление именинников" url="/birthday" />
					}
				/>
			</Route>
			<Route path="fortunegame" element={<PageLayout />}>
				<Route index element={<FortunePage />} />
				<Route
					path="fortune-video"
					element={
						<VideoPage
							url="https://youtu.be/cVkg0hwftoY?si=ZmBWyIFnwQ6BlYZ6"
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
					element={<NowPage title="Подсчет знатоков призраков" url="/map" />}
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
					element={<NowPage title="Поиск искусного зельевара" url="/map" />}
				/>
			</Route>
			<Route path="beastsgame" element={<PageLayout />}>
				<Route index element={<BeastsPage />} />
				<Route
					path="beasts-video"
					element={
						<VideoPage
							url="https://youtu.be/apHJwJXfmi4?si=jsaUsj6rEBX5Jd6m"
							link="/beastsgame"
						/>
					}
				/>
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
					element={<NextPage title="Аттракцион" url="/map" />}
				/>
			</Route>
			<Route path="taverngame" element={<PageLayout />}>
				<Route index element={<TavernPage />} />
				<Route
					path="tavern-video"
					element={
						<VideoPage
							url="https://youtu.be/EWEM6j4d5hY?si=7F9TM6a_osIZYY9b"
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
					element={<NowPage title="Поиск истинного гурмана" url="/map" />}
				/>
			</Route>
			<Route path="parkgame" element={<PageLayout />}>
				<Route index element={<ParkPage />} />
				<Route
					path="park-video"
					element={
						<VideoPage
							url="https://youtu.be/M8jYhnf1tsM?si=LxqPNkd1G9RH0HfP"
							link="/parkgame"
						/>
					}
				/>
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
					element={<NextPage title="Завершение истории" url="/lastpage" />}
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
					path={"adc"}
					loader={() => adcDepartmentData}
					element={
						<Suspense fallback={<TailSpin />}>
							<DepartmentPage />
						</Suspense>
					}
				/>
				<Route
					path="adc-video"
					element={
						<VideoPage
							url="https://youtu.be/-RWO4kX94PM?si=YLQ2R1ISwxiOCyPT"
							link="/mountain/adc"
						/>
					}
				/>
				<Route
					path={"audit"}
					loader={() => auditDepartmentData}
					element={
						<Suspense fallback={<TailSpin />}>
							<DepartmentPage />
						</Suspense>
					}
				/>
				<Route
					path={"taxes"}
					loader={() => taxesDepartmentData}
					element={
						<Suspense fallback={<TailSpin />}>
							<DepartmentPage />
						</Suspense>
					}
				/>
				<Route
					path={"bookkeeping"}
					loader={() => bookDepartmentData}
					element={
						<Suspense fallback={<TailSpin />}>
							<DepartmentPage />
						</Suspense>
					}
				/>
				<Route
					path={"director"}
					loader={() => directorDepartmentData}
					element={
						<Suspense fallback={<TailSpin />}>
							<DepartmentPage />
						</Suspense>
					}
				/>
				<Route
					path={"hr"}
					loader={() => hrDepartmentData}
					element={
						<Suspense fallback={<TailSpin />}>
							<DepartmentPage />
						</Suspense>
					}
				/>
				<Route
					path={"consulting"}
					loader={() => consultDepartmentData}
					element={
						<Suspense fallback={<TailSpin />}>
							<DepartmentPage />
						</Suspense>
					}
				/>
				<Route
					path="nextpagetavern"
					element={<NextPage title='Страўня "Сябры"' url="/map" />}
				/>
				<Route
					path="nextpagelunch"
					element={<NextPage title="Обед + Мемы" url="/lunch&memes" />}
				/>
				<Route
					path="nextpagepotions"
					element={<NextPage title="Институт разработки" url="/map" />}
				/>
				<Route
					path="nowpagebewellwithkept"
					element={
						<NowPage
							title='Результаты марафона "Be Well With Kept"'
							url="/mountain/game"
						/>
					}
				/>
				<Route
					path="nextpagepark"
					element={<NextPage title="Зоопарк" url="/map" />}
				/>
			</Route>
			<Route path="lunch&memes" element={<PageLayout />}>
				<Route
					index
					element={<NowPage title="Обед & Конкурс мемов" url="nextpage" />}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Бухта сирен" url="/map" />}
				/>
			</Route>
			<Route path="birthday" element={<PageLayout />}>
				<Route
					index
					element={<NowPage title="С Днём Рождения!" url="nextpage" />}
				/>
				<Route
					path="nextpage"
					element={<NextPage title="Главная ёлка" url="/map" />}
				/>
			</Route>
			<Route path="treegame" element={<PageLayout />}>
				<Route index element={<TreePage />} />
				<Route
					path="tree-video"
					element={
						<VideoPage
							url="https://youtu.be/ECCQL32UU_Q?si=CYP5Qax1Sr5s2_XO"
							link="/treegame"
						/>
					}
				/>
				<Route
					path={"game"}
					loader={() => treeData}
					element={
						<Suspense fallback={<TailSpin />}>
							<TreePageGame />
						</Suspense>
					}
				/>
			</Route>
			<Route path="lastpage" element={<PageLayout />}>
				<Route index element={<LastPage />} />
				<Route
					path="nowpage"
					element={<NowPage title="Новогодний релакс" url="/lastpage" />}
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
