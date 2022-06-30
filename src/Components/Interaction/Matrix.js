import React from "react";

import "./Matrix.css";
import Box from "./Box.js";
import { Container, Row, Col } from "react-bootstrap";

const Matrix = (props) => {
	var matrix = new Array(9);

	for (let i = 0; i < 9; i++) {
		matrix[i] = new Array(9);
		for (let j = 0; j < 9; j++) {
			if (j % 3 === 2 && j !== 8)
				matrix[i][j] = <Box corner="right" key={i + " " + j} />;
			else matrix[i][j] = <Box corner="none" key={i + " " + j} />;
		}
	}

	return (
		<Container fluid className="text-center my-5 main-matrix">
			<Row>
				<Col className="text-center h1 mb-4 text-decoration-underline">
					SUDOKU
				</Col>
			</Row>
			<Row>
				<Col></Col>
				<Col id="sudoku" xs="8">
					<div className="side">{matrix[0].map((row) => row)}</div>
					<div>{matrix[1].map((row) => row)}</div>
					<div>{matrix[2].map((row) => row)}</div>
					<div className="bd-top side">{matrix[3].map((row) => row)}</div>
					<div>{matrix[4].map((row) => row)}</div>
					<div>{matrix[5].map((row) => row)}</div>
					<div className="bd-top side">{matrix[6].map((row) => row)}</div>
					<div>{matrix[7].map((row) => row)}</div>
					<div>{matrix[8].map((row) => row)}</div>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default Matrix;
