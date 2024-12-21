import ReactPlayer from "react-player";

export type VideoProps = {
	url: string;
};

const VideoPlayer = ({ url }: VideoProps) => {
	return (
		<ReactPlayer light url={url} width="100%" height="100%" playing controls />
	);
};

export default VideoPlayer;
