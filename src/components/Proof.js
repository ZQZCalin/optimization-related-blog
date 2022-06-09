import { useState, useEffect, useRef } from "react";
import { publicURL } from "../utils";

function Proof(props) {
	const [active, setActive] = useState(false);
	const [height, setHeight] = useState(0)
	const ref = useRef(null)

	useEffect(() => {
		setHeight(ref.current.clientHeight);
	})

	return (
		<div className="proof" style={{ maxHeight: active ? height : "1.5em" }}>
			<div className="dropdown-wrapper">
				<p ref={ref}>
					<i>Proof. </i>
					<span>{props.children}</span>
				</p>
			</div>
			<ProofBtn active={active} setActive={setActive} />
		</div >
	)
}

function ProofBtn({
	active, setActive
}) {
	const handleClick = () => setActive(!active);
	return (
		<div className="proof-btn" onClick={handleClick}>
			<img src={publicURL("/icons/up_triangle.svg")} style={{transform: active ? "scaleY(1)" : "scaleY(-1)"}} />
		</div>
	);
}

export default Proof;