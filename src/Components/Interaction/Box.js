import React from "react";

import "./Box.css";

const Box = (props) => {
	const boxLengthHandler = (event) => {
		event.target.value = event.target.value.slice(0, 1);
	};
	if (props.value !== 0) {
		if (props.corner === "right") {
			return (
				<input
					maxLength={1}
					type="number"
					disabled
					value={props.value}
					onChange={boxLengthHandler}
					className="bd-right text-center disabled-box"
				/>
			);
		} else {
			return (
				<input
					maxLength={1}
					type="number"
					disabled
					value={props.value}
					onChange={boxLengthHandler}
					className="text-center disabled-box"
				/>
			);
		}
	} else {
		if (props.corner === "right") {
			return (
				<input
					maxLength={1}
					type="number"
					onChange={boxLengthHandler}
					className="bd-right text-center"
				/>
			);
		} else {
			return (
				<input maxLength={1} type="number" onChange={boxLengthHandler} className="text-center" />
			);
		}
	}
};

export default Box;
