import "./Play.css";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";

const Play = (props) => {
	const [display, setDisplay] = useState("py-md-5 text-center");
	const displayHandler = () => {
		setDisplay("py-md-5 text-center d-none");
		props.playHandler();
	};
	return (
		<Container id="container-play" className={display}>
			<Button
				className="rounded-0 border-1"
				id="btn-play"
				variant="outline-light"
				size="lg"
				onClick={displayHandler}
			>
				LET'S PLAY
			</Button>
		</Container>
	);
};

export default Play;
