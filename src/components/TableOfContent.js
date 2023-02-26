import { useContext, useState, useEffect, useRef } from "react";
import { NumberingContext } from "../contexts/NumberingContextProvider";

function TableOfContent() {
	const { sectionData } = useContext(NumberingContext);
	const [activeId, setActiveId] = useState();
	useIntersectionObserver(setActiveId);

	return (
		<div className="blog-navi">
			<ul className="list-section">
				{sectionData.length > 0 && sectionData.map(sec => (
					<li key={sec.id}>
						<SmoothScrollLink id={sec.id} name={sec.name} activeId={activeId} />
						{/* Subsection */}
						{sec.items.length > 0 &&
							<ul className="list-subsection">
								{sec.items.map(subsec => (
									<li key={subsec.id}>
										<SmoothScrollLink id={subsec.id} name={subsec.name} activeId={activeId} />
									</li>
								))}
							</ul>
						}
					</li>
				))}
			</ul>
		</div>
	);
}

// from this tutorial: https://www.emgoto.com/react-table-of-contents/
const useIntersectionObserver = (setActiveId) => {
	const headingElementsRef = useRef({});
	useEffect(() => {
		// callback function
		const callback = (headings) => {
			headingElementsRef.current = headings.reduce((map, headingElement) => {
				map[headingElement.target.id] = headingElement;
				return map;
			}, headingElementsRef.current);

			const visibleHeadings = [];
			Object.keys(headingElementsRef.current).forEach((key) => {
				const headingElement = headingElementsRef.current[key];
				if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
			});

			const getIndexFromId = (id) =>
				headingElements.findIndex((heading) => heading.id === id);

			if (visibleHeadings.length === 1) {
				setActiveId(visibleHeadings[0].target.id);
			} else if (visibleHeadings.length > 1) {
				const sortedVisibleHeadings = visibleHeadings.sort(
					(a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
				);
				setActiveId(sortedVisibleHeadings[0].target.id);
			}
		};

		// region observer
		const observer = new IntersectionObserver(callback, {
			rootMargin: "-16px 0px -40% 0px"
		});
		const headingElements = Array.from(
			document.querySelectorAll("h1.section-title, h2.subsection-title")
		);
		headingElements.forEach((element) => observer.observe(element));

		// unmount
		return () => observer.disconnect();
	}, [setActiveId]);
};

function SmoothScrollLink({
	id, name, activeId
}) {
	// escape special characters
	const escapedId = CSS.escape(id);

	// jump to selected section
	const handleClick = (e) => {
		e.preventDefault();
		document.querySelector(`#${escapedId}`).scrollIntoView({
			behavior: "smooth"
		});
	};

	return (
		<a href={`#${id}`} onClick={handleClick}
			className={id === activeId ? "active" : ""}
		>
			{name}
		</a>
	);
}

export default TableOfContent;