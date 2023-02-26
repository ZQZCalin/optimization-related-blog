import { MathJax } from "better-react-mathjax";

const BlogContent = ({ children }) => (
	<main className="blog-content">
		<MathJax onTypeset={() => {
			// testing
			// console.log("typeset refreshed");
			// reset MathJax numbering system
			window.MathJax.texReset([0]);
		}}>
			{children}
		</MathJax>
	</main>
);

export default BlogContent;