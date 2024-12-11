import busGhostsImg from "../assets/images/ghosts-page/round1/bus-ghosts.webp";
import lukovoImg from "../assets/images/ghosts-page/round1/lukovo.webp";
import belchiteImg from "../assets/images/ghosts-page/round1/belchite.webp";
import pluckleyImg from "../assets/images/ghosts-page/round1/pluckley.webp";
import borgvattnetImg from "../assets/images/ghosts-page/round1/borgvattnet.webp";

import paulImg from "../assets/images/ghosts-page/round2/paul_I.webp";
import zimnyImg from "../assets/images/ghosts-page/round2/zimny.webp";
import ekaterynenskyImg from "../assets/images/ghosts-page/round2/ekaterynensky.webp";
import mikhailovskyImg from "../assets/images/ghosts-page/round2/mikhailovsky.webp";
import anichkovImg from "../assets/images/ghosts-page/round2/anichkov.webp";

import kartezhnikImg from "../assets/images/ghosts-page/round3/kartezhnik.webp";
import cathedralImg from "../assets/images/ghosts-page/round3/cathedral-st-petr.webp";
import cathedralInRomeImg from "../assets/images/ghosts-page/round3/cathedral-st-petr-in-rome.webp";
import cathedralInViennaImg from "../assets/images/ghosts-page/round3/cathedral-vienna.webp";
import lancasterImg from "../assets/images/ghosts-page/round3/lancaster-cathedral.webp";

import uniImg from "../assets/images/ghosts-page/round4/uni.webp";
import pensilvaniaImg from "../assets/images/ghosts-page/round4/pensilvania_uni.webp";
import oxfordImg from "../assets/images/ghosts-page/round4/oxford_uni.webp";
import cambridgeImg from "../assets/images/ghosts-page/round4/cambridge_uni.webp";
import manchesterImg from "../assets/images/ghosts-page/round4/machester_uni.webp";

import lockImg from "../assets/images/ghosts-page/round5/lock.webp";
import gardenerImg from "../assets/images/ghosts-page/round5/gardener.webp";
import camerdinerImg from "../assets/images/ghosts-page/round5/camerdiner.webp";
import kucherImg from "../assets/images/ghosts-page/round5/kucher.webp";
import musicianImg from "../assets/images/ghosts-page/round5/musician.webp";

import fireImg from "../assets/images/ghosts-page/round6/fire.webp";
import cryingBoyImg from "../assets/images/ghosts-page/round6/crying-boy.webp";
import damaImg from "../assets/images/ghosts-page/round6/dama-s-gornostaem.webp";
import orfanaImg from "../assets/images/ghosts-page/round6/orfana.webp";
import loveImg from "../assets/images/ghosts-page/round6/love-letters.webp";

import apartmentsImg from "../assets/images/ghosts-page/round7/apartments.webp";
import houstonImg from "../assets/images/ghosts-page/round7/houston.webp";
import monroeImg from "../assets/images/ghosts-page/round7/monroe.webp";
import cocoImg from "../assets/images/ghosts-page/round7/coco.webp";
import balerinaImg from "../assets/images/ghosts-page/round7/balerina.webp";

import oldBookImg from "../assets/images/ghosts-page/round8/old-book.webp";
import notaryImg from "../assets/images/ghosts-page/round8/notary.webp";
import librarianImg from "../assets/images/ghosts-page/round8/librarian.webp";
import watchmakerImg from "../assets/images/ghosts-page/round8/watchmaker.webp";
import jewelerImg from "../assets/images/ghosts-page/round8/jeweler.webp";

import damaVelataImg from "../assets/images/ghosts-page/round9/dama-velata.webp";
import kallImg from "../assets/images/ghosts-page/round9/kall.webp";
import violetImg from "../assets/images/ghosts-page/round9/violet.webp";
import hydrangeaImg from "../assets/images/ghosts-page/round9/hydrangea.webp";
import liliiImg from "../assets/images/ghosts-page/round9/lilii.webp";

import zamokImg from "../assets/images/ghosts-page/round10/zamok.webp";
import greyImg from "../assets/images/ghosts-page/round10/grey.webp";
import teslaImg from "../assets/images/ghosts-page/round10/tesla.webp";
import frankensteinImg from "../assets/images/ghosts-page/round10/frankenstein.webp";
import draculaImg from "../assets/images/ghosts-page/round10/dracula.webp";

export const ghostsDataLvl1 = {
	round: 1,
	roundPhoto: busGhostsImg,
	roundQuestion: "В какую деревню направляется целая «маршрутка» призраков?",
	roundCards: [
		{
			index: 1,
			text: "Деревня Луково (Чехия)",
			id: "lukovo",
			src: lukovoImg,
			alt: "lukovo-image",
			clicked: false,
			correct: false,
			cloudText: "Пожертвуйте на восстановление храма",
		},
		{
			index: 2,
			text: "Деревня Бельчите (Испания)",
			id: "belchite",
			src: belchiteImg,
			alt: "belchite-image",
			clicked: false,
			correct: false,
			cloudText: "Это что за развалины? Мы тут жить не намерены",
		},
		{
			index: 3,
			text: "Деревня Плакли (Англия)",
			id: "pluckley",
			src: pluckleyImg,
			alt: "pluckley-image",
			clicked: false,
			correct: true,
			cloudText: "Вот наша деревня, вот наш дом родной",
		},
		{
			index: 4,
			text: "Деревня Боргваттнет (Швеция)",
			id: "borgvattnet",
			src: borgvattnetImg,
			alt: "borgvattnet-image",
			clicked: false,
			correct: false,
			cloudText: "Вы чьих будете? У нас все дома",
		},
	],
};

export const ghostsDataLvl2 = {
	round: 2,
	roundPhoto: paulImg,
	roundQuestion: "В каком из петербуржских дворцов обитает дух Павла I?",
	roundCards: [
		{
			index: 1,
			text: "Зимний дворец",
			id: "zimny",
			src: zimnyImg,
			alt: "zimny-image",
			clicked: false,
			correct: false,
			cloudText: "Это не мои покои!",
		},
		{
			index: 2,
			text: "Екатерининский дворец",
			id: "ekaterynensky",
			src: ekaterynenskyImg,
			alt: "ekaterynensky-image",
			clicked: false,
			correct: false,
			cloudText: "Это не мои покои!",
		},
		{
			index: 3,
			text: "Михайловский замок",
			id: "mikhailovsky",
			src: mikhailovskyImg,
			alt: "mikhailovsky-image",
			clicked: false,
			correct: true,
			cloudText: "Вот крепость моя, которую не покину",
		},
		{
			index: 4,
			text: "Аничков дворец",
			id: "anichkov",
			src: anichkovImg,
			alt: "anichkov-image",
			clicked: false,
			correct: false,
			cloudText: "Это не мои покои!",
		},
	],
};

export const ghostsDataLvl3 = {
	round: 3,
	roundPhoto: kartezhnikImg,
	roundQuestion: "В каком городе обитает призрак, у которого 5 тузов в рукаве?",
	roundCards: [
		{
			index: 1,
			text: "Собор Святого Петра в Праге",
			id: "cathedral",
			src: cathedralImg,
			alt: "cathedral-image",
			clicked: false,
			correct: true,
			cloudText: "Раскинем партейку? Оставлю тебя в дураках",
		},
		{
			index: 2,
			text: "Собор Святого Петра в Риме",
			id: "cathedral-in-Rome",
			src: cathedralInRomeImg,
			alt: "cathedral-in-Rome-image",
			clicked: false,
			correct: false,
			cloudText: "Папа Римский не выдавал индульгенцию на азартные игры",
		},
		{
			index: 3,
			text: "Собор Святого Петра в Вене",
			id: "cathedral-in-vienna",
			src: cathedralInViennaImg,
			alt: "cathedral-in-vienna-image",
			clicked: false,
			correct: false,
			cloudText: "Побойтесь Бога, мы приличное заведение",
		},
		{
			index: 4,
			text: "Собор Святого Петра в Ланкастере",
			id: "lancaster",
			src: lancasterImg,
			alt: "lancaster-image",
			clicked: false,
			correct: false,
			cloudText: "Мы прогрессивных взглядов, но не настолько",
		},
	],
};

export const ghostsDataLvl4 = {
	round: 4,
	roundPhoto: uniImg,
	roundQuestion: "О каком университете идет речь?",
	roundCards: [
		{
			index: 1,
			text: "Университет штата Пенсильвания",
			id: "pensilvania",
			src: pensilvaniaImg,
			alt: "pensilvania-image",
			clicked: false,
			correct: true,
			cloudText: "Вот то место, которое я оберегаю",
		},
		{
			index: 2,
			text: "Оксфордский университет",
			id: "oxford",
			src: oxfordImg,
			alt: "oxford-image",
			clicked: false,
			correct: false,
			cloudText: "Здесь не наша альма-матер!",
		},
		{
			index: 3,
			text: "Кембриджский университет",
			id: "cambridge",
			src: cambridgeImg,
			alt: "cambridge-image",
			clicked: false,
			correct: false,
			cloudText: "Здесь не наша альма-матер!",
		},
		{
			index: 4,
			text: "Манчестерский университет",
			id: "manchester",
			src: manchesterImg,
			alt: "manchester-image",
			clicked: false,
			correct: false,
			cloudText: "Здесь не наша альма-матер!",
		},
	],
};

export const ghostsDataLvl5 = {
	round: 5,
	roundPhoto: lockImg,
	roundQuestion: "Кем при замке служил призрак?",
	roundCards: [
		{
			index: 1,
			text: "Садовником",
			id: "gardener",
			src: gardenerImg,
			alt: "gardener-image",
			clicked: false,
			correct: false,
			cloudText: "Господа, я только за цветами присматриваю",
		},
		{
			index: 2,
			text: "Камердинером",
			id: "camerdiner",
			src: camerdinerImg,
			alt: "camerdiner-image",
			clicked: false,
			correct: false,
			cloudText: "Господа, я только за домом присматриваю",
		},
		{
			index: 3,
			text: "Кучером",
			id: "kucher",
			src: kucherImg,
			alt: "kucher-image",
			clicked: false,
			correct: false,
			cloudText: "Господа, я только за лошадьми присматриваю",
		},
		{
			index: 4,
			text: "Придворным музыкантом",
			id: "musician",
			src: musicianImg,
			alt: "musician-image",
			clicked: false,
			correct: true,
			cloudText:
				"Как вы прекрасно выглядите, позвольте я сыграю вам на своей арфе",
		},
	],
};

export const ghostsDataLvl6 = {
	round: 6,
	roundPhoto: fireImg,
	roundQuestion: "О какой картине идет речь?",
	roundCards: [
		{
			index: 1,
			text: "Плачущий мальчик",
			id: "crying-boy",
			src: cryingBoyImg,
			alt: "crying-boy-image",
			clicked: false,
			correct: true,
			cloudText: "Сгори и ты сам!",
		},
		{
			index: 2,
			text: "Дама с горностаем",
			id: "dama",
			src: damaImg,
			alt: "dama-image",
			clicked: false,
			correct: false,
			cloudText: "Это не я тревожу ваш покой!",
		},
		{
			index: 3,
			text: "Орфана на кладбище",
			id: "orfana",
			src: orfanaImg,
			alt: "orfana-image",
			clicked: false,
			correct: false,
			cloudText: "Это не я тревожу ваш покой!",
		},
		{
			index: 4,
			text: "Любовные письма",
			id: "love",
			src: loveImg,
			alt: "love-image",
			clicked: false,
			correct: false,
			cloudText: "Это не я тревожу ваш покой!",
		},
	],
};

export const ghostsDataLvl7 = {
	round: 7,
	roundPhoto: apartmentsImg,
	roundQuestion: "Чьи любимые апартаменты?",
	roundCards: [
		{
			index: 1,
			text: "Bevery Hilton с Уитни Хьюстон",
			id: "houston",
			src: houstonImg,
			alt: "houston-image",
			clicked: false,
			correct: false,
			cloudText: "Мой 434 был гораздо скромнее",
		},
		{
			index: 2,
			text: "Roosevelt Hotel с Мэрилин Монро",
			id: "monroe",
			src: monroeImg,
			alt: "monroe-image",
			clicked: false,
			correct: false,
			cloudText:
				"Ищите меня или в бальном зале, или у бассейна, но не в этом отеле",
		},
		{
			index: 3,
			text: "Ritz с Коко Шанель",
			id: "coco",
			src: cocoImg,
			alt: "coco-image",
			clicked: false,
			correct: true,
			cloudText: "Ritz — это мой дом",
		},
		{
			index: 4,
			text: "Hotel Des Indes с Анной Павловой",
			id: "balerina",
			src: balerinaImg,
			alt: "balerina-image",
			clicked: false,
			correct: false,
			cloudText: "Я балерина императорского театра, мое место на сцене",
		},
	],
};

export const ghostsDataLvl8 = {
	round: 8,
	roundPhoto: oldBookImg,
	roundQuestion: "Кем работал столь предприимчивый человек?",
	roundCards: [
		{
			index: 1,
			text: "Нотариус",
			id: "notary",
			src: notaryImg,
			alt: "notary-image",
			clicked: false,
			correct: false,
			cloudText: "Не тревожьте меня, господа! Чрезвычайно много работы!",
		},
		{
			index: 2,
			text: "Библиотекарь",
			id: "librarian",
			src: librarianImg,
			alt: "librarian-image",
			clicked: false,
			correct: true,
			cloudText: "Виновен я! Не будет мне покоя!",
		},
		{
			index: 3,
			text: "Часовщик",
			id: "watchmaker",
			src: watchmakerImg,
			alt: "watchmaker-image",
			clicked: false,
			correct: false,
			cloudText: "Вы загородили мне свет, милейшие! Прошу вас отойти",
		},
		{
			index: 4,
			text: "Ювелир",
			id: "jeweler",
			src: jewelerImg,
			alt: "jeweler-image",
			clicked: false,
			correct: false,
			cloudText: "Хороший мастер ценит честность превыше всего!",
		},
	],
};

export const ghostsDataLvl9 = {
	round: 9,
	roundPhoto: damaVelataImg,
	roundQuestion: "Какие цветы предпочитает призрачная итальянка?",
	roundCards: [
		{
			index: 1,
			text: "Каллы",
			id: "kall",
			src: kallImg,
			alt: "kall-image",
			clicked: false,
			correct: false,
			cloudText: "Таких цветов нет в моем саду",
		},
		{
			index: 2,
			text: "Фиалки",
			id: "violet",
			src: violetImg,
			alt: "violet-image",
			clicked: false,
			correct: true,
			cloudText:
				"Вдохни аромат и следуй за мной, я приглашаю тебя пожить на моей вилле",
		},
		{
			index: 3,
			text: "Гортензии",
			id: "hydrangea",
			src: hydrangeaImg,
			alt: "hydrangea-image",
			clicked: false,
			correct: false,
			cloudText: "Прекрасный цветок, но, к сожалению, не мой любимый",
		},
		{
			index: 4,
			text: "Лилии",
			id: "lilii",
			src: liliiImg,
			alt: "lilii-image",
			clicked: false,
			correct: false,
			cloudText: "Хороший выбор, но неправильный",
		},
	],
};

export const ghostsDataLvl10 = {
	round: 10,
	roundPhoto: zamokImg,
	roundQuestion: "Кто скрывает свои темные дела под покровом ночи?",
	roundCards: [
		{
			index: 1,
			text: "Дориан Грей",
			id: "grey",
			src: greyImg,
			alt: "grey-image",
			clicked: false,
			correct: false,
			cloudText: "Не угадали, я прячу свой портрет не здесь",
		},
		{
			index: 2,
			text: "Никола Тесла",
			id: "tesla",
			src: teslaImg,
			alt: "tesla-image",
			clicked: false,
			correct: false,
			cloudText: "Позвольте, у нас был скромный домик в хорватской деревушке",
		},
		{
			index: 3,
			text: "Франкенштейн",
			id: "frankenstein",
			src: frankensteinImg,
			alt: "frankenstein-image",
			clicked: false,
			correct: false,
			cloudText: "Увы, моя скромная обитель в Германии",
		},
		{
			index: 4,
			text: "Граф Дракула",
			id: "dracula",
			src: draculaImg,
			alt: "dracula-image",
			clicked: false,
			correct: true,
			cloudText: "Хочешь, я подарю тебе вечную жизнь в моем замке Бран?",
		},
	],
};
