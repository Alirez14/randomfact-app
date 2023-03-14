import React from "react";
import { constantsGeneral } from "../constants/constantsGeneral";

const sendToFavorites = async (fact, setFavList) => {
	const response = await fetch(
		constantsGeneral.apiConstants.apiBaseUrl +
			constantsGeneral.apiConstants.favorites,
		{
			method: "POST",
			body: JSON.stringify(fact),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await response.json();
	setFavList(data);
};

const ComFactCard = ({ id, text, source_url, language, setFavList }) => {
	const handelAddToFavorites = () => {
		sendToFavorites({ id, text, source_url, language }, setFavList);
	};

	return (
		<div className="card">
			<h2>{text}</h2>
			<b>
				the language of this fact is in :
				{language === "en" ? "english" : "german"}
			</b>
			<br />
			<b> the source url of this fact is : {source_url}</b>

			<br />
			<button onClick={handelAddToFavorites}>add to favorites</button>
		</div>
	);
};

export default ComFactCard;
