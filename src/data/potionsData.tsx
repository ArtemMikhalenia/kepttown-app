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

import tourmalineImg from "../assets/images/potions-page/round3/tourmaline.webp";
import aquamarineImg from "../assets/images/potions-page/round3/aquamarine.webp";
import avanthurineImg from "../assets/images/potions-page/round3/avanthurine.webp";
import citrineImg from "../assets/images/potions-page/round3/citrine.webp";
import emeraldImg from "../assets/images/potions-page/round3/emerald.webp";
import pearlsImg from "../assets/images/potions-page/round3/pearls.webp";
import rubyImg from "../assets/images/potions-page/round3/ruby.webp";
import sapphireImg from "../assets/images/potions-page/round3/sapphire.webp";
import topazImg from "../assets/images/potions-page/round3/topaz.webp";

import batWingsImg from "../assets/images/potions-page/round4/bat-wings.webp";
import catImg from "../assets/images/potions-page/round4/cat.webp";
import elephantImg from "../assets/images/potions-page/round4/elephant.webp";
import frogImg from "../assets/images/potions-page/round4/frog.webp";
import horseImg from "../assets/images/potions-page/round4/horse.webp";
import pigImg from "../assets/images/potions-page/round4/pig.webp";
import rabbitImg from "../assets/images/potions-page/round4/rabbit.webp";
import tigerImg from "../assets/images/potions-page/round4/tiger.webp";
import turtleImg from "../assets/images/potions-page/round4/turtle.webp";

import sakuraImg from "../assets/images/potions-page/round5/sakura.webp";
import appleImg from "../assets/images/potions-page/round5/apple.webp";
import avocadoImg from "../assets/images/potions-page/round5/avocado.webp";
import grapesImg from "../assets/images/potions-page/round5/grapes.webp";
import mandarineImg from "../assets/images/potions-page/round5/mandarine.webp";
import pineappleImg from "../assets/images/potions-page/round5/pineapple.webp";
import pomegranateImg from "../assets/images/potions-page/round5/pomegranate.webp";
import raspberryImg from "../assets/images/potions-page/round5/raspberry.webp";
import rowanImg from "../assets/images/potions-page/round5/rowan.webp";

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
			clicked: false,
		},
		{
			name: "Базилик",
			id: "basil",
			src: basilImg,
			alt: "basil-image",
			clicked: false,
		},
		{
			name: "Лавровый лист",
			id: "bay-leaf",
			src: bayLeafImg,
			alt: "bay-leaf-image",
			clicked: false,
		},
		{
			name: "Фенхель",
			id: "fennel",
			src: fennelImg,
			alt: "fennel-image",
			clicked: false,
		},
		{
			name: "Герань",
			id: "geranium",
			src: geraniumImg,
			alt: "geranium-image",
			clicked: false,
		},
		{
			name: "Имбирь",
			id: "ginger",
			src: gingerImg,
			alt: "ginger-image",
			clicked: false,
		},
		{
			name: "Плющ",
			id: "ivy",
			src: ivyImg,
			alt: "ivy-image",
			clicked: false,
		},
		{
			name: "Денежное дерево",
			id: "money-tree",
			src: moneyTreeImg,
			alt: "money-tree-image",
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
			clicked: false,
		},
		{
			name: "Кардамон",
			id: "cardamom",
			src: cardamomImg,
			alt: "cardamom-image",
			clicked: false,
		},
		{
			name: "Гвоздика",
			id: "carnation",
			src: carnationImg,
			alt: "carnation-image",
			clicked: false,
		},
		{
			name: "Корица",
			id: "cinnamon",
			src: cinnamonImg,
			alt: "cinnamon-image",
			clicked: false,
		},
		{
			name: "Мускатный орех",
			id: "nutmeg",
			src: nutmegImg,
			alt: "nutmeg-image",
			clicked: false,
		},
		{
			name: "Розмарин",
			id: "rosemary",
			src: rosemaryImg,
			alt: "rosemary-image",
			clicked: false,
		},
		{
			name: "Кунжут",
			id: "sesame",
			src: sesameImg,
			alt: "sesame-image",
			clicked: false,
		},
		{
			name: "Ваниль",
			id: "vanilla",
			src: vanillaImg,
			alt: "vanilla-image",
			clicked: false,
		},
	],
};

export const potionsDataLvl3 = {
	round: 3,
	potion: tourmalineImg,
	correctAnswer: ["emerald", "sapphire", "citrine", "ruby"],
	roundItems: [
		{
			name: "Аквамарин",
			id: "aquamarine",
			src: aquamarineImg,
			alt: "aquamarine-image",
			clicked: false,
		},
		{
			name: "Авантюрин",
			id: "avanthurine",
			src: avanthurineImg,
			alt: "avanthurine-image",
			clicked: false,
		},
		{
			name: "Цитрин",
			id: "citrine",
			src: citrineImg,
			alt: "citrine-image",
			clicked: false,
		},
		{
			name: "Изумруд",
			id: "emerald",
			src: emeraldImg,
			alt: "emerald-image",
			clicked: false,
		},
		{
			name: "Жемчуг",
			id: "pearls",
			src: pearlsImg,
			alt: "pearls-image",
			clicked: false,
		},
		{
			name: "Рубин",
			id: "ruby",
			src: rubyImg,
			alt: "ruby-image",
			clicked: false,
		},
		{
			name: "Сапфир",
			id: "sapphire",
			src: sapphireImg,
			alt: "sapphire-image",
			clicked: false,
		},
		{
			name: "Топаз",
			id: "topaz",
			src: topazImg,
			alt: "topaz-image",
			clicked: false,
		},
	],
};

export const potionsDataLvl4 = {
	round: 4,
	potion: batWingsImg,
	correctAnswer: ["elephant", "frog", "pig", "cat"],
	roundItems: [
		{
			name: "Кот",
			id: "cat",
			src: catImg,
			alt: "cat-image",
			clicked: false,
		},
		{
			name: "Слон",
			id: "elephant",
			src: elephantImg,
			alt: "elephant-image",
			clicked: false,
		},
		{
			name: "Лягушка",
			id: "frog",
			src: frogImg,
			alt: "frog-image",
			clicked: false,
		},
		{
			name: "Лошадь",
			id: "horse",
			src: horseImg,
			alt: "horse-image",
			clicked: false,
		},
		{
			name: "Свинья",
			id: "pig",
			src: pigImg,
			alt: "pig-image",
			clicked: false,
		},
		{
			name: "Кролик",
			id: "rabbit",
			src: rabbitImg,
			alt: "rabbit-image",
			clicked: false,
		},
		{
			name: "Тигр",
			id: "tiger",
			src: tigerImg,
			alt: "tiger-image",
			clicked: false,
		},
		{
			name: "Черепаха",
			id: "turtle",
			src: turtleImg,
			alt: "turtle-image",
			clicked: false,
		},
	],
};

export const potionsDataLvl5 = {
	round: 5,
	potion: sakuraImg,
	correctAnswer: ["pomegranate", "grapes", "rowan", "raspberry"],
	roundItems: [
		{
			name: "Яблоко",
			id: "apple",
			src: appleImg,
			alt: "apple-image",
			clicked: false,
		},
		{
			name: "Авокадо",
			id: "avocado",
			src: avocadoImg,
			alt: "avocado-image",
			clicked: false,
		},
		{
			name: "Виноград",
			id: "grapes",
			src: grapesImg,
			alt: "grapes-image",
			clicked: false,
		},
		{
			name: "Мандарин",
			id: "mandarine",
			src: mandarineImg,
			alt: "mandarine-image",
			clicked: false,
		},
		{
			name: "Ананас",
			id: "pineapple",
			src: pineappleImg,
			alt: "pineapple-image",
			clicked: false,
		},
		{
			name: "Гранат",
			id: "pomegranate",
			src: pomegranateImg,
			alt: "pomegranate-image",
			clicked: false,
		},
		{
			name: "Малина",
			id: "raspberry",
			src: raspberryImg,
			alt: "raspberry-image",
			clicked: false,
		},
		{
			name: "Рябина",
			id: "rowan",
			src: rowanImg,
			alt: "rowan-image",
			clicked: false,
		},
	],
};

export const potionsDataLvl6 = {
	round: 6,
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
export const potionsDataLvl7 = {
	round: 7,
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
