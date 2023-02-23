import { Link, Outlet, useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { template } from "../blogs/Template";
import BlogHeader from "../components/BlogHeader";
import TableOfContent from "../components/TableOfContent";
import NumberingContextProvider, { NumberingContext } from "../contexts/NumberingContextProvider";
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContextProvider";
import { content as Data } from "../reviews/cutkosky20storm";

import { MathJax } from "better-react-mathjax";
import Proof from "../components/Proof";
import { Section, Subsection } from "../components/Section";
import Theorem from "../components/Theorem";

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
	// get ip param
	const { blogId } = useParams();
	// read blog data from BlogContext
	const { getBlogById } = useContext(BlogContext);

	const [text, setText] = useState();

	// content hook
	const [thisBlog, setThisBlog] = useState(null);
	useEffect(() => {
		setThisBlog(getBlogById(blogId));
		setText(Data)
		return () => {
			setThisBlog(null);
			setText();
		};
	}, []);

	// render
	if (!thisBlog) return null;
	const { title, author, date, content } = thisBlog;
	return (
		<NumberingContextProvider>
			<main className="blog">
			<header className="blog-header">
				<h1>{title}</h1>
				<hr className="blog-header-hr"/>
			</header>
				<TableOfContent />
				<main className="blog-content">{text}</main>
				{/* <div className="blog-aside">Related Topics</div> */}
			</main>
		</NumberingContextProvider>
	);
}



// List
function ReviewList() {
	const { blogData } = useContext(BlogContext);
	blogData.sort((a, b) => b.date - a.date);
	return (
		<div className="blog-list">
			{/* descending sort by time */
				blogData.map(({ id, title }) => <ReviewItem id={id} title={title} key={id} />)}
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