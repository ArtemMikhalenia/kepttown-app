import { motion } from "motion/react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./videopage.scss";

export type VideoProps = {
	url: string;
};

const VideoPage = ({ url }: VideoProps) => {
	return (
		<motion.div
			className="video-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.2 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			{/* <motion.div
				className="video-page-title"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { duration: 1 },
				}}
				viewport={{ once: true, amount: 0.1 }}
			>
				<h1>Сейчас в эфире - Шатер гадалки</h1>
			</motion.div> */}
			<VideoPlayer url={url} />
		</motion.div>
	);
};

export default VideoPage;
