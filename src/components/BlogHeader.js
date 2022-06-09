import { publicURL, dateParser } from "../utils";

function BlogHeader({
	title, author, date
}) {
	return (
		<header className="blog-header">
			<h1>{title}</h1>
			<p>
				<span id="blog-author">by {author}</span>
				<img src={publicURL("/icons/time.svg")} className="inline-svg"/>
				<span id="blog-date">
					posted on <i>{dateParser(date)}</i>
				</span>
			</p>
			<hr className="blog-header-hr"/>
		</header>
	);
}

export default BlogHeader;