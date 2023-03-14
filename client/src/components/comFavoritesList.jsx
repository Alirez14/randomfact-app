import React from "react";
import ComFactRow from "./comFactRow";

const ComFavoritesList = ({ setFacts, facts }) => {
	return facts.map((fact) => {
		return (
			<ComFactRow
				setFavList={setFacts}
				key={fact.id}
				{...fact}
			></ComFactRow>
		);
	});
};

export default ComFavoritesList;
