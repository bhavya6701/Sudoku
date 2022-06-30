import Background from "./Components/UIBackground/Background";
import Play from "./Components/Interaction/Play";
import "./App.css";
import { useState } from "react";
import Matrix from "./Components/Interaction/Matrix";

function App() {
	const [playing, setPlaying] = useState(false);
	const playHandler = () => {
		setPlaying((playing) => !playing);
	};

	return (
		<div>
			<Background isPlaying={playing} />
			<Play playHandler={playHandler} />
			{playing && <Matrix />}
		</div>
	);
}

export default App;
