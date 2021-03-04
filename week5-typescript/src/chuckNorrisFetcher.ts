import fetch from "node-fetch";

interface IJoke {
	categories: Array<any>;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
}

function chuckNorrisFetcher(): Promise<IJoke> {
	return fetch("https://api.chucknorris.io/jokes/random")
		.then((res) => res.json())
		.then((data) => data);
}

async function chuckNorrisTester() {
	let joke = await chuckNorrisFetcher();
	console.log(joke.value);
}

chuckNorrisTester();
