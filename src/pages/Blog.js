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

function Blog() {
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

function BlogContent() {
	// get ip param
	const { blogId } = useParams();
	// read blog data from BlogContext
	const { getBlogById } = useContext(BlogContext);

	// content hook
	const [thisBlog, setThisBlog] = useState(null);
	useEffect(() => {
		if (blogId === "blog-template") {
			// render template
			setThisBlog(template);
		} else {
			setThisBlog(getBlogById(blogId));
		}
		return () => {
			setThisBlog(null);
		};
	}, [blogId]);

	// render
	if (!thisBlog) return null;
	const { title, author, date, content } = thisBlog;
	return (
		<NumberingContextProvider>
			<main className="blog">
				<BlogHeader title={title} author={author} date={date} />
				<TableOfContent />
				{content}
				<div className="blog-aside">Related Topics</div>
			</main>
		</NumberingContextProvider>
	);
}


function BlogList() {
	const { blogData } = useContext(BlogContext);
	blogData.sort((a, b) => b.date - a.date);
	return (
		<div className="blog-list">
			{/* descending sort by time */
				blogData.map(({ id, title }) => <BlogListItem id={id} title={title} key={id} />)}
		</div>
	);
}

function BlogListItem({
	id, title
}) {
	return (
		<Link to={`/blogs/${id}`} className="blog-list-item">
			{title}
		</Link>
	);
}

export default Blog;
export { BlogContent, BlogList };