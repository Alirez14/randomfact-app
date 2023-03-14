import fetch from "node-fetch";

const apiData = {
	hostName: "https://uselessfacts.jsph.pl",
	apiPaths: {
		random: "/api/v2/facts/random",
		today: "/api/v2/facts/today",
	},
};

export async function getFact(host, path) {
	const response = await fetch(host + path);
	const data = await response.json();
	return data;
}
export async function getTodayFact(language = "en") {
	const data = await getFact(
		apiData.hostName,
		apiData.apiPaths.today + "?language=" + language
	);
	return data;
}
export async function getRandomFact(language = "en") {
	const data = await getFact(
		apiData.hostName,
		apiData.apiPaths.random + "?language=" + language
	);
	return data;
}
