export interface IngredientProps {
	id: string;
	src: string;
	alt: string;
	name: string;
	clicked: boolean;
	toggleCard: (id: string) => void;
}

export interface Ingredient {
	id: string;
	src: string;
	name: string;
	alt: string;
	clicked: boolean;
}
export interface PotionRound {
	round: number;
	potion: string;
	roundItems: Ingredient[];
	correctAnswer: string[];
}

export interface GhostCard {
	id: string;
	index: number;
	src: string;
	alt: string;
	cloudText: string;
	text: string;
	clicked: boolean;
	correct: boolean;
}

export interface GhostRound {
	round: number;
	roundPhoto: string;
	roundQuestion: string;
	roundCards: GhostCard[];
}

export interface BayRound1Card {
	index: number;
	id: string;
	src: string;
	alt: string;
	clicked: boolean;
}

export interface BayRound1Round {
	team: number;
	roundCards: BayRound1Card[];
}

export interface BayRound2Card {
	index: number;
	id: string;
	src: string;
	alt: string;
	clicked: boolean;
}

export interface BayRound2Round {
	team: number;
	roundCards: BayRound2Card[];
}

export interface BayRound4Card {
	index: number;
	id: string;
	url: string;
	clicked: boolean;
}

export interface BeastsCard {
	index: number;
	id: string;
	classNameCard: string;
	src: string;
	alt: string;
	clicked: boolean;
	correct: boolean;
}
export interface BeastsLevel {
	level: number;
	levelCards: BeastsCard[];
}

export interface ParkCard {
	id: string;
	src: string;
	alt: string;
}

export interface TreeCard {
	id: string;
	src: string;
	alt: string;
}

export interface Crystal {
	className: string;
	link: string;
	classNameImg: string;
	key: number;
	id: string;
	src: string;
	alt: string;
}

export interface DishCard {
	index: number;
	className: string;
	imgClassName: string;
	src: string;
	alt: string;
	clicked: boolean;
}

export interface DepartmentInterface {
	src: string;
	alt: string;
	color: string;
	benefits: string[];
	videoLink: string;
}
