import "./spider.scss";

const Spider = () => {
	return (
		<div className="spider">
			<div className="spiderweb"></div>
			<div className="spider-body">
				<div className="eye left"></div>
				<div className="eye right"></div>
			</div>
			<div className="legs left">
				<div className="leg"></div>
				<div className="leg"></div>
				<div className="leg"></div>
			</div>
			<div className="legs right">
				<div className="leg"></div>
				<div className="leg"></div>
				<div className="leg"></div>
			</div>
		</div>
	);
};

export default Spider;
