import React from "react";

const scriptures = [
	{
		name: "Holy Bible",
		description:
			"The Holy Bible is a collection of sacred texts in Christianity, consisting of the Old Testament and the New Testament. It is regarded as the inspired word of God by Christians.",
		link: "https://www.bible.com/",
	},
	{
		name: "Qur'an",
		description:
			"The Qur'an is the central religious text of Islam, believed by Muslims to be a revelation from God. It is widely regarded as the finest work in classical Arabic literature.",
		link: "https://quran.com/",
	},
];

export default function ScripturesPage() {
	return (
		<main>
			<h1>Scriptures</h1>
			<p>
				Explore the foundational scriptures of two major world religions: Christianity and Islam.
			</p>
			<ul>
				{scriptures.map((scripture) => (
					<li key={scripture.name} style={{ marginBottom: "2rem" }}>
						<h2>{scripture.name}</h2>
						<p>{scripture.description}</p>
						<a href={scripture.link} target="_blank" rel="noopener noreferrer">
							Read Online
						</a>
					</li>
				))}
			</ul>
		</main>
	);
}