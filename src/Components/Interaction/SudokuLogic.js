import "./SudokuLogic.css";

const SudokuLogic = (props) => {
	return (
		<div>
			<div>{props.matrix[0].map((row) => row)}</div>
			<div>{props.matrix[1].map((row) => row)}</div>
			<div>{props.matrix[2].map((row) => row)}</div>
			<div className="bd-top">{props.matrix[3].map((row) => row)}</div>
			<div>{props.matrix[4].map((row) => row)}</div>
			<div>{props.matrix[5].map((row) => row)}</div>
			<div className="bd-top">{props.matrix[6].map((row) => row)}</div>
			<div>{props.matrix[7].map((row) => row)}</div>
			<div>{props.matrix[8].map((row) => row)}</div>
		</div>
	);
};

export default SudokuLogic;
