import React from "react";

import "./Box.css";

const Box = (props) => {
	if (props.value !== 0) {
		if (props.corner === "right") {
			return (
				<input
					maxLength={1}
					type="number"
					disabled
					value={props.value}
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
					className="text-center disabled-box"
				/>
			);
		}
	} else {
		if (props.corner === "right") {
			return <input maxLength={1} type="number" className="bd-right text-center" />;
		} else {
			return <input maxLength={1} type="number" className="text-center" />;
		}
	}
};

export default Box;
