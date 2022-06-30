import video from "./Sudoku.mp4";
import "./BackgroundAnimation.css";

const BackgroundAnimation = (props) => {
	return (
		<div>
			<video autoPlay muted id="back-video">
				<source src={video} type="video/mp4" />
			</video>
		</div>
	);
};

export default BackgroundAnimation;
