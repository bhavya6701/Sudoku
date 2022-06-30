import React from "react";

import "./Box.css";

const Box = (props) => {
	const maxLengthCheck = (object) => {
		if (object.target.value.length > 1) {
			object.target.value = object.target.value.slice(0, 1);
		}
	};
	if (props.corner === "right")
		return (
			<input
				maxLength={1}
				type="number"
				className="bd-right text-center"
				onInput={maxLengthCheck}
			/>
		);
	else
		return (
			<input
				maxLength={1}
				type="number"
				className="text-center"
				onInput={maxLengthCheck}
			/>
		);
};

export default Box;
