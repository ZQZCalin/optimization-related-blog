import { useContext, useEffect, useState } from "react";
import { NumberingContext } from "../contexts/NumberingContextProvider";
import { v4 as uuid } from "uuid";

function Theorem({
	type = "Theorem", name = "", label = "", thmstyle = "plain", ...props
}) {
	// only 2 types of styles: plain, definition
	const { thmData } = useContext(NumberingContext);
	const id = `${label}`;
	const [num, setNum] = useState("");

	useEffect(() => {
		const thisItem = thmData.find(item => item.id === id);
		if (thisItem) {
			setNum(`${thisItem.num}. `)
		}
	}, [thmData]);

	return (
		<div id={id} className={`theorem ${thmstyle}`}>
			<p>
				<span className="theorem-heading">
					{type} {num}{name && `(${name}) `}
				</span>
				{props.children}
			</p>
		</div>
	);
}

export default Theorem;