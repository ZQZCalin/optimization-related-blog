import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import TableOfContent from "../components/TableOfContent";
import BlogContent from "../components/BlogContent";
import NumberingContextProvider from "../contexts/NumberingContextProvider";
import { DataContext } from "../contexts/DataContext";

// Page Container
function ReviewPage() {
	return (
		<div className="RootContainer">
			<div className="ContentContainer">
				<Header />
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}


// Content
function Review() {
	// get ip parameter
	const { reviewId } = useParams();

	// get meta data
	const { data } = useContext(DataContext);

	// initialize review content
	const [content, setContent] = useState(null);

	// fetch reveiw content once reviewId changes
	useEffect(() => {
		if (data) {
			// update content
			import(`../reviews/${reviewId}.js`)
				.then((module) => {
					setContent(module.default);
				})
				.catch((error) => {
					console.error("Failed to load dynamic component", error);
				});
			// testing
			// console.log("review page loaded");
		}
	}, [data]);

	// render
	if (!content) {
		return (
			<Loading>This blog doesn't exist.</Loading>
		);
	}

	return (
		<NumberingContextProvider>
			<main className="blog">
				<header className="blog-header">
					<h1>{data.find(entry => entry.key === reviewId).fields.title}</h1>
					<hr className="blog-header-hr" />
				</header>

				<TableOfContent />

				<BlogContent>{content}</BlogContent>
			</main>
		</NumberingContextProvider>
	);
}


// List
function ReviewList() {
	const { data } = useContext(DataContext);

	if (!data) {
		return (
			<Loading>Loading Data...</Loading>
		);
	}

	return (
		<div className="blog-list">
			{/* descending sort by time */
				data.map(({ key, fields }) => <ReviewItem key={key} id={key} title={fields.title} />)}
		</div>
	);
}


function ReviewItem({
	id, title
}) {
	return (
		<Link to={`/reviews/${id}`} className="blog-list-item">
			{title}
		</Link>
	);
}

export default ReviewPage;
export { ReviewList, Review };