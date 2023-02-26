import React, { createContext, useState, useEffect } from "react";
import { parseBibtex } from "../utils";
import review from "../reviews/reviews.json";
import bibtex from "../reviews/bibtex.txt";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		// Update data using review and bibtex
		fetch(bibtex)
			.then(response => response.text())
			.then(loadedBibtex => {
				setData(parseBibtex(loadedBibtex)
					.filter(entry => review.includes(entry.key))
					.sort((e1, e2) => e1.fields.title - e2.fields.title));
				// testing
				// console.log("review data loaded");
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<DataContext.Provider value={{ data }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataContext, DataProvider };
