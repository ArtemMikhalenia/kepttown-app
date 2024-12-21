
import "./footer.scss";

// const animationVariants: Variants = {
// 	offscreenFromLeft: {
// 		x: -50,
// 		opacity: 0,
// 	},
// 	offscreenFromRight: {
// 		x: 50,
// 		opacity: 0,
// 	},
// 	onscreen: {
// 		x: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 0.5,
// 		},
// 	},
// 	hover: { scale: 1.15 },
// 	tap: { scale: 0.9 },
// };

const Footer = () => {

	return (
		<footer
			className="footer"
			style={{ cursor: "url(snowflake-cursor.svg),auto" }}
		></footer>
	);
};

export default Footer;
