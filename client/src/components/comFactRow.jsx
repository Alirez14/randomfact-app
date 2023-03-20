import React, { useState } from "react";
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

const updateFact = async (id, fact, setFavList) => {
	console.log(JSON.stringify(fact));
	const response = await fetch(
		constantsGeneral.apiConstants.apiBaseUrl + "/" + id,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",	
			},
			body: JSON.stringify(fact),
		}
	);
	const data = await response.json();
	setFavList(data);
	
};

function ComFactRow({ text, source_url, language, setFavList, id }) {
	const [editMode, setEditMode] = useState(false);
	const [newText, setNewText] = useState(text);
	const handelDelete = () => {
		deleteFact(id, setFavList);
	};
	const handelUpdate = () => {
		updateFact(
			id,
			{ source_url: source_url, language: language, text: newText },
			setFavList
		);
	};
	const handelEdit = () => {
		setEditMode(!editMode);
	};

	const handelChange = (e) => {
		setNewText(e.target.value);
	};

	return (
		<div className="card">
			{!editMode ? (
				<p onClick={handelEdit}>{newText}</p>
			) : (
				<>
					<textarea
						type="text"
						value={newText}
						onChange={handelChange}
					/>
					<button onClick={handelEdit}>Switch</button>
				</>
			)}
			<p>
				the language of this fact is in :
				{language === "en" ? "english" : "german"}
			</p>

			<p> the source url of this fact is : {source_url}</p>

			<button onClick={handelDelete}>delete</button>
			<button onClick={handelUpdate}>update</button>
		</div>
	);
}

export default ComFactRow;
