import { useContext, useEffect, useState } from "react";
import { NumberingContext } from "../contexts/NumberingContextProvider";

function Section({
	label, ...props
}) {
	const { sectionData } = useContext(NumberingContext);
	const id = `sec-${label}`;
	const [num, setNum] = useState("");

	useEffect(() => {
		const thisItem = sectionData.find(item => item.id === id);
		if (thisItem) {
			setNum(`${thisItem.num}. `)
		}
	}, [sectionData]);

	return (
		<h1 className="section-title" id={id}>
			{num}{props.children}
		</h1>
	);
}

function Subsection({
	label, ...props
}) {
	const { subsectionData } = useContext(NumberingContext);
	const id = `sec-${label}`;
	const [num, setNum] = useState("");

	useEffect(() => {
		const thisItem = subsectionData.find(item => item.id === id);
		if (thisItem) {
			setNum(`${thisItem.num[0]}.${thisItem.num[1]}. `)
		}
	}, [subsectionData]);

	return (
		<h2 className="subsection-title" id={id}>
			{num}{props.children}
		</h2>
	);
}

export { Section, Subsection };