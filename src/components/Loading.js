import { useEffect, useState } from "react";

const Loading = ({ children }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	if (loading) {
		return null;
	}
	return (
		<div className="loading">
			{children}
		</div>
	);
}

export default Loading;