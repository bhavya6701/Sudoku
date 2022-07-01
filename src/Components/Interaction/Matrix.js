import React from "react";

import "./Matrix.css";
import Box from "./Box.js";
import SudokuLogic from "./SudokuLogic";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

var mergedBox = new Array(9);
var valueBox = new Array(9);
var numMatrix = new Array(9);
for (let i = 0; i < 9; i++) {
	mergedBox[i] = new Array(9);
	valueBox[i] = new Array(9);
	numMatrix[i] = new Array(9);
	for (let j = 0; j < 9; j++) {
		valueBox[i][j] = 0;
		numMatrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	}
}

const Matrix = (props) => {
	const boxHandler = (e) => {
		return;
	};
	const sudokuMaker = () => {
		const randomNum = Math.floor(Math.random() * (27 - 17 + 1) + 17);
		for (let i = 0; i < randomNum; i++) {
			const num = (Math.floor(Math.random() * 9 + 1) % 9) + 1;
			const j = Math.floor(Math.random() * 81 + 1) % 9;
			if (valueBox[i % 9][j] === 0) {
				let check = true;
				let k = (i % 9) % 3 === 0 ? i % 9 : (i % 9) % 3 === 1 ? (i % 9) - 1 : (i % 9) - 2;

				outer: for (let m = 0; m < 3; m++, k++) {
					let l = j % 3 === 0 ? j : j % 3 === 1 ? j - 1 : j - 2;
					for (let n = 0; n < 3; n++, l++) {
						if (k === i && l === j) continue;
						if (!numMatrix[k][l].includes(num)) {
							check = false;
							break outer;
						}
					}
				}
				if (check) {
					for (let k = 0; k < 9; k++) {
						if (!numMatrix[i % 9][k].includes(num) || !numMatrix[k][j].includes(num)) {
							check = false;
							break;
						}
					}
				}
				if (check) {
					if (j % 3 === 2 && j !== 8)
						mergedBox[i % 9][j % 9] = (
							<Box corner="right" key={(i % 9) + " " + j} value={num} onChange={boxHandler} />
						);
					else
						mergedBox[i % 9][j] = (
							<Box corner="none" key={(i % 9) + " " + j} value={num} onChange={boxHandler} />
						);
					numMatrix[i % 9][j][num - 1] = 0;
					valueBox[i % 9][j] = num;
				}
			}
		}

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (valueBox[i][j] === 0) {
					if (j % 3 === 2 && j !== 8)
						mergedBox[i][j] = (
							<Box corner="right" key={(i % 9) + " " + j} value={0} onChange={boxHandler} />
						);
					else
						mergedBox[i][j] = (
							<Box corner="none" key={(i % 9) + " " + j} value={0} onChange={boxHandler} />
						);
				}
			}
		}
	};
	sudokuMaker();

	const [matrix, setMatrix] = useState(mergedBox);
	const matrixHandler = (newMatrix) => {
		setMatrix(newMatrix);
	};

	return (
		<Container fluid className="text-center my-5 main-matrix">
			<Row>
				<Col className="text-center h1 mb-4 text-decoration-underline">SUDOKU</Col>
			</Row>
			<Row>
				<Col></Col>
				<Col id="sudoku" xs="8">
					<SudokuLogic matrix={matrix} />
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default Matrix;
