export interface PotionItem {
	name: string;
	id: string;
	src: string;
	alt: string;
	clicked: boolean;
}
export interface PotionData {
	round: number;
	potion: string;
	correctAnswer: string[];
	roundItems: PotionItem[];
}

export interface GhostCard {
	index: number;
	text: string;
	id: string;
	src: string;
	alt: string;
	clicked: boolean;
	correct: boolean;
	cloudText: string;
}
export interface GhostsData {
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
