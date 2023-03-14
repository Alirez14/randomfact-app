import { useEffect, useState } from "react";
import "./App.css";
import ComFactCard from "./components/comFactCard.jsx";
import ComFavoritesList from "./components/comFavoritesList.jsx";
import { constantsGeneral } from "./constants/constantsGeneral";

const getRandomFact = async (setRandomFact, lang = "en") => {
	const response = await fetch(
		constantsGeneral.apiConstants.apiBaseUrl +
			"/" +
			lang +
			constantsGeneral.apiConstants.random
	);
	const data = await response.json();
	setRandomFact(data);
};

const getFacts = async (setFacts) => {
	const response = await fetch(
		constantsGeneral.apiConstants.apiBaseUrl +
			constantsGeneral.apiConstants.favorites
	);
	const data = await response.json();
	setFacts(data);
};

function App() {
	const [randomFact, setRandomFact] = useState({});
	const [facts, setFacts] = useState([]);
	useEffect(() => {
		getFacts(setFacts);
		getRandomFact(setRandomFact);
	}, []);

	return (
		<div className="App">
			<ComFactCard
				setFavList={setFacts}
				id={randomFact.id}
				text={randomFact.text}
				language={randomFact.language}
				source_url={randomFact.source_url}
			></ComFactCard>

			<h1>FAVS</h1>
			<ComFavoritesList
				facts={facts}
				setFacts={setFacts}
			></ComFavoritesList>
		</div>
	);
}

export default App;
