import { useContext } from "react";
import { useState, useEffect, createContext } from "react";

const TestContext = createContext();

function TestCotnextProvider(props) {
    /* Numbering Object:
    {
        [var1]: {
            _value: 0,
            [sub1]: 0,
            ...
        },
        ...
    }
    var is a level-one component, and sub is a level-two component under var.
    */
	// Here we provide numbering system for two levels
	const [numbering, setNumbering] = useState(new Object());

    // get and set numbers
    const updateLevelOne = (key) => {
        /* Once a section component is created, increments the number by 1 
        and clears numbering in all children components. */
        const newState = {
            ...numbering,
            [key]: {
                _value: (numbering[key] && numbering[key]["_value"]+1) || 1,
            },
        };
        setNumbering(newState);
    };

    const updateLevelTwo = (key1, key2) => {
        /* Once a section-child component is created,
        increments the child number by 1. */
        const newState = {
            ...numbering,
            [key1]: {
                ...numbering[key1],
                [key2]: numbering[key1][key2]+1 || 1,
            } || {
                _value: 0,
                [key2]: 1,
            },
        };
        setNumbering(newState);
    };

    return (
		<TestContext.Provider value={{
			numbering, updateLevelOne, updateLevelTwo
		}}>
			{props.children}
		</TestContext.Provider>
	);
}

function Section({
	label, ...props
}) {
    const { numbering, updateLevelOne } = useContext(TestContext);

    // update context (only once when it's created)
	useEffect(() => {
        updateLevelOne("section");
	}, []);

	return (
		<h1 className="section-title" id={label}>
			{numbering["section"]&&numbering["section"]["_value"]}. {props.children}
		</h1>
	);
}

function Subsection({
	label, ...props
}) {
	const { updateSectionChildren } = useContext(TestContext);
	const [sec, setSec] = useState(0);
    const [num, setNum] = useState(0);

	useEffect(() => {
		const [sec, num] = updateSectionChildren("subsection");
        setSec(sec);
        setNum(num);
	}, []);

	return (
		<h2 className="subsection-title" id={label}>
			{sec}.{num}. {props.children}
		</h2>
	);
}

function Test() {

	return (
        <TestCotnextProvider>
            <div className="" style={{backgroundColor: "white"}}>
                <Section label="intro">Introduction</Section>
                <Section label="pre">Preliminary</Section>
                <Section label="alg">Algorithm</Section>
                <Section label="proof">Proof</Section>
            </div>
        </TestCotnextProvider>
	);
}

export default Test;