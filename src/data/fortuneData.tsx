import babyBoomersImg from "../assets/images/fortune-page/baby-boomers.webp";
import generationXImg from "../assets/images/fortune-page/generationX.webp";
import millennialsImg from "../assets/images/fortune-page/millennials.webp";
import zoomersImg from "../assets/images/fortune-page/zoomers.webp";

export const fortuneData = [
	{
		index: 1,
		className: "baby-boomers",
		link: "",
		src: babyBoomersImg,
		alt: "baby-boomers-image",
		text: "Бэби-бумеры",
	},
	{
		index: 2,
		className: "generationX",
		link: "",
		src: generationXImg,
		alt: "generation-X-image",
		text: "Поколение Х",
	},
	{
		index: 3,
		className: "millennials",
		link: "/fortunegame/millennials",
		src: millennialsImg,
		alt: "millennials-image",
		text: "Миллениалы",
	},
	{
		index: 4,
		className: "zoomers",
		link: "/fortunegame/zoomers",
		src: zoomersImg,
		alt: "zoomers-image",
		text: "Зумеры",
	},
];
