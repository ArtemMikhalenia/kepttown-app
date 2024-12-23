import ReactPlayer from "react-player";
import { VideoProps } from "../../types/types";

const VideoPlayer = ({ url }: VideoProps) => {
	return (
		<ReactPlayer light url={url} width="100%" height="100%" playing controls />
	);
};

export default VideoPlayer;
