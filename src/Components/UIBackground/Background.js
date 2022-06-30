import "./Background.css";
import BackgroundAnimation from "./Background/BackgroundAnimation";
import BackgroundPlay from "./Background/BackgroundPlay";

const Background = (props) => {
	return (
		<div>
			<BackgroundAnimation />
			{props.isPlaying && <BackgroundPlay isPlaying={props.isPlaying} />}
		</div>
	);
};

export default Background;
