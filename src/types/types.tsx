import {
	Crystal,
	ParkCard,
	BayRound1Round,
	BayRound2Round,
	BayRound4Card,
	BeastsLevel,
	GhostRound,
	PotionRound,
	DishCard,
} from "../interfaces/interfaces";

export type CrystalData = Crystal[];
export type ParkData = ParkCard[];
export type BayRound1Data = BayRound1Round;
export type BayRound2Data = BayRound2Round;
export type BayRound4Data = BayRound4Card[];
export type BeastsData = BeastsLevel;
export type GhostsData = GhostRound;
export type PotionsData = PotionRound;
export type DishData = DishCard[];

export type VideoProps = {
	url: string;
};

export type VideoPageProps = {
	url: string;
	link: string;
};

export type NextPageProps = {
	title: string;
	url: string;
};

export type MapPopupTypes = {
	name: string;
	isHovered: boolean;
};

export type MountainPopupTypes = {
	name: string;
	isHovered: boolean;
};
