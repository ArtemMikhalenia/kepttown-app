import cloverImg from "../assets/images/potions-page/round1/clover.webp";

import fennelImg from "../assets/images/potions-page/round1/fennel.webp";
import geraniumImg from "../assets/images/potions-page/round1/geranium.webp";
import gingerImg from "../assets/images/potions-page/round1/ginger.webp";
import ivyImg from "../assets/images/potions-page/round1/ivy.webp";
import moneyTreeImg from "../assets/images/potions-page/round1/money_tree.webp";
import aloeImg from "../assets/images/potions-page/round1/aloe.webp";
import basilImg from "../assets/images/potions-page/round1/basil.webp";
import bayLeafImg from "../assets/images/potions-page/round1/bay_leaf.webp";

import barberryImg from "../assets/images/potions-page/round2/barberry.webp";

import carawayImg from "../assets/images/potions-page/round2/caraway.webp";
import cardamomImg from "../assets/images/potions-page/round2/cardamom.webp";
import carnationImg from "../assets/images/potions-page/round2/carnation.webp";
import cinnamonImg from "../assets/images/potions-page/round2/cinnamon.webp";
import nutmegImg from "../assets/images/potions-page/round2/nutmeg.webp";
import rosemaryImg from "../assets/images/potions-page/round2/rosemary.webp";
import sesameImg from "../assets/images/potions-page/round2/sesame.webp";
import vanillaImg from "../assets/images/potions-page/round2/vanilla.webp";

// interface Ingredient {
// 	id: string;
// 	src: string;
// 	name: string;
// 	alt: string;
// 	correct: boolean;
// 	clicked: boolean;
// }

// interface Potion {
// 	round: number;
// 	potion: string;
// 	roundItems: Ingredient[];
// 	correctAnswer: string[];
// }

// type PotionsData = Potion[];

export const potionsDataLvl1 = {
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
};

export const potionsDataLvl2 = {
	round: 2,
	potion: barberryImg,
	correctAnswer: ["carnation", "cardamom", "nutmeg", "cinnamon"],
	roundItems: [
		{
			name: "Тмин",
			id: "caraway",
			src: carawayImg,
			alt: "caraway-image",
			correct: false,
			clicked: false,
		},
		{
			name: "Кардамон",
			id: "cardamom",
			src: cardamomImg,
			alt: "cardamom-image",
			correct: true,
			clicked: false,
		},
		{
			name: "Гвоздика",
			id: "carnation",
			src: carnationImg,
			alt: "carnation-image",
			correct: true,
			clicked: false,
		},
		{
			name: "Корица",
			id: "cinnamon",
			src: cinnamonImg,
			alt: "cinnamon-image",
			correct: true,
			clicked: false,
		},
		{
			name: "Мускатный орех",
			id: "nutmeg",
			src: nutmegImg,
			alt: "nutmeg-image",
			correct: true,
			clicked: false,
		},
		{
			name: "Розмарин",
			id: "rosemary",
			src: rosemaryImg,
			alt: "rosemary-image",
			correct: false,
			clicked: false,
		},
		{
			name: "Кунжут",
			id: "sesame",
			src: sesameImg,
			alt: "sesame-image",
			correct: false,
			clicked: false,
		},
		{
			name: "Ваниль",
			id: "vanilla",
			src: vanillaImg,
			alt: "vanilla-image",
			correct: false,
			clicked: false,
		},
	],
};
