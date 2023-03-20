import React from "react";
import { constantsGeneral } from "../constants/constantsGeneral";

const postFact = async (fact, setFavList) => {
	const response = await fetch(constantsGeneral.apiConstants.apiBaseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(fact),
	});
	const data = await response.json();
	setFavList(data);
};

const ComFactFrom = ({ setFavList }) => {
	const handelSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		let fact = {};
		formData.forEach((value, key) => (fact[key] = value));
		postFact(fact, setFavList);
	};

	return (
		<form onSubmit={handelSubmit}>
			<input name="text" type="text" placeholder="Enter your fact here" />
			<input
				name="language"
				type="text"
				placeholder="Enter your lang here"
			/>
			<input
				name="source_url"
				type="text"
				placeholder="Enter your source here"
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ComFactFrom;
