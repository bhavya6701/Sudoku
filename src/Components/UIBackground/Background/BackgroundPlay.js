import image from "./Sudoku.png";
import "./BackgroundPlay.css";

const BackgroundPlay = (props) => {
	return (
		<div>
			<img id="back-image" src={image} alt="..." />
		</div>
	);
};

export default BackgroundPlay;
