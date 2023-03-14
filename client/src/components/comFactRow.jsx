import React from "react";
import { constantsGeneral } from "../constants/constantsGeneral";

const deleteFact = async (id, setFavList) => {
	const response = await fetch(
		constantsGeneral.apiConstants.apiBaseUrl + "/" + id,
		{
			method: "DELETE",
		}
	);
	const data = await response.json();
	setFavList(data);
};
function ComFactRow({ text, source_url, language, setFavList, id }) {
	const handelDelete = () => {
		deleteFact(id, setFavList);
	};

	return (
		<div className="card">
			<p>{text}</p>
			<p>
				the language of this fact is in :
				{language === "en" ? "english" : "german"}
			</p>

			<p> the source url of this fact is : {source_url}</p>

			<button onClick={handelDelete}>delete</button>
		</div>
	);
}

export default ComFactRow;
