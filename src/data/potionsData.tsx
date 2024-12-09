import fennelImg from "../assets/images/potions-page/round1/fennel.png";
import geraniumImg from "../assets/images/potions-page/round1/geranium.png";
import gingerImg from "../assets/images/potions-page/round1/ginger.png";
import ivyImg from "../assets/images/potions-page/round1/ivy.png";
import moneyTreeImg from "../assets/images/potions-page/round1/money_tree.png";
import aloeImg from "../assets/images/potions-page/round1/aloe.png";
import basilImg from "../assets/images/potions-page/round1/basil.png";
import bayLeafImg from "../assets/images/potions-page/round1/bay_leaf.png";
import cloverImg from "../assets/images/potions-page/round1/clover.png";

interface Ingredient {
	id: string;
	src: string;
	name: string;
	alt: string;
	correct: boolean;
	clicked: boolean;
}

interface Potion {
	round: number;
	potion: string;
	roundItems: Ingredient[];
	correctAnswer: string[];
}

type PotionsData = Potion[];

// export const potionsData: PotionsData = [
// 	{
// 		name: "Алоэ",
// 		id: "aloe",
// 		src: aloeImg,
// 		alt: "aloe-image",
// 		correct: false,
// 		clicked: false,
// 	},
// 	{
// 		name: "Базилик",
// 		id: "basil",
// 		src: basilImg,
// 		alt: "basil-image",
// 		correct: true,
// 		clicked: false,
// 	},
// 	{
// 		name: "Лавровый лист",
// 		id: "bay-leaf",
// 		src: bayLeafImg,
// 		alt: "bay-leaf-image",
// 		correct: true,
// 		clicked: false,
// 	},
// 	{
// 		name: "Фенхель",
// 		id: "fennel",
// 		src: fennelImg,
// 		alt: "fennel-image",
// 		correct: true,
// 		clicked: false,
// 	},
// 	{
// 		name: "Герань",
// 		id: "geranium",
// 		src: geraniumImg,
// 		alt: "geranium-image",
// 		correct: false,
// 		clicked: false,
// 	},
// 	{
// 		name: "Имбирь",
// 		id: "ginger",
// 		src: gingerImg,
// 		alt: "ginger-image",
// 		correct: true,
// 		clicked: false,
// 	},
// 	{
// 		name: "Плющ",
// 		id: "ivy",
// 		src: ivyImg,
// 		alt: "ivy-image",
// 		correct: false,
// 		clicked: false,
// 	},
// 	{
// 		name: "Денежное дерево",
// 		id: "money-tree",
// 		src: moneyTreeImg,
// 		alt: "money-tree-image",
// 		correct: false,
// 		clicked: false,
// 	},
// ];

export const potionsData: PotionsData = [
	{
		round: 1,
		potion: cloverImg,
		correctAnswer: ["basil", "fennel", "ginger", "bay-leaf"],
		roundItems: [
			{
				name: "Алоэ",
				id: "aloe",
				src: aloeImg,
				alt: "aloe-image",
				correct: false,
				clicked: false,
			},
			{
				name: "Базилик",
				id: "basil",
				src: basilImg,
				alt: "basil-image",
				correct: true,
				clicked: false,
			},
			{
				name: "Лавровый лист",
				id: "bay-leaf",
				src: bayLeafImg,
				alt: "bay-leaf-image",
				correct: true,
				clicked: false,
			},
			{
				name: "Фенхель",
				id: "fennel",
				src: fennelImg,
				alt: "fennel-image",
				correct: true,
				clicked: false,
			},
			{
				name: "Герань",
				id: "geranium",
				src: geraniumImg,
				alt: "geranium-image",
				correct: false,
				clicked: false,
			},
			{
				name: "Имбирь",
				id: "ginger",
				src: gingerImg,
				alt: "ginger-image",
				correct: true,
				clicked: false,
			},
			{
				name: "Плющ",
				id: "ivy",
				src: ivyImg,
				alt: "ivy-image",
				correct: false,
				clicked: false,
			},
			{
				name: "Денежное дерево",
				id: "money-tree",
				src: moneyTreeImg,
				alt: "money-tree-image",
				correct: false,
				clicked: false,
			},
		],
	},
];
