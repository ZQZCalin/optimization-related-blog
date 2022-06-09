import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const NumberingContext = createContext();

export default function NumberingContextProvider(props) {
	// read section data hook
	const [sectionData, setSectionData] = useState([]);
	const [subsectionData, setSubsectionData] = useState([]);

	const blogId = useParams();

	useEffect(() => {
		const elementList = Array.from(
			document.querySelectorAll("h1.section-title, h2.subsection-title")
		);
		const [sec, sub] = getSectionData(elementList);
		setSectionData(sec);
		setSubsectionData(sub);

		return () => {
			setSectionData([]);
			setSubsectionData([]);
		}
	}, [props.children]);  
	// solution to render problem:
	// re-render upon child component updates

	// read theorem data
	const [thmData, setThmData] = useState([]);
	useEffect(() => {
		const thmList = Array.from(
			document.querySelectorAll("div.theorem")
		);
		setThmData(getThmData(thmList));
	}, [props.children]);

	return (
		<NumberingContext.Provider value={{
			sectionData, subsectionData, thmData,
		}}>
			{props.children}
		</NumberingContext.Provider>
	);
}

function getSectionData(sectionList) {
	// parse a list of sections, subsections, and theorems into a nested list
	let numSec = 0;
	let numSub = 0;
	const nestedList = [];
	const subsectionList = [];

	sectionList.forEach(element => {
		if (element.nodeName === "H1") {
			// section
			numSec++;
			numSub = 0;
			nestedList.push({
				id: element.id,
				name: element.innerText,
				num: numSec,
				items: [],
			});
		} else if (element.nodeName === "H2") {
			// subsection
			if (nestedList.length === 0) {
				nestedList.push({
					id: "_placeholder",
					name: "_placeholder",
					items: [],
				});
			}
			numSub++;
			nestedList[nestedList.length - 1].items.push({
				id: element.id,
				name: element.innerText,
				num: [numSec, numSub],
			});
			subsectionList.push({
				id: element.id,
				num: [numSec, numSub],
			});
		}
	});

	return [nestedList, subsectionList];
}

function getThmData(thmList) {
	let numThm = 1;
	const nestedList = [];

	thmList.forEach(thm => {
		nestedList.push({
			id: thm.id,
			num: numThm,
		});
		numThm++;
	});

	return nestedList;
}