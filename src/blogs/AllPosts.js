// math components
import { MathJax } from "better-react-mathjax";
import Proof from "../components/Proof";
import { Section, Subsection } from "../components/Section";
import Theorem from "../components/Theorem";

export const database = {

  "blog-federated_learning": {
		title: "Federated Learning",
		date: new Date("2022/05/29"),
		author: "qinzi",
		content: (
			<main className="blog-content">
				<Section label="intro">Introduction</Section>
				<p>
					intro...
				</p>
			</main>
		),
	},
	
	"blog-raw-template": {
		title: "A Template and Guideline for Customizing Your Own Blog",
		author: "author",
		date: new Date(),
		content: (
			<main className="blog-content">
				<p><i>This is a basic guideline of how to write a customized blog.</i></p>
	
				<section>
					<Section label="intro">Introduction</Section>
					<p>
						This serves as a template of
					</p>
					<p>
						To do: add instruction of writing and storing blogs...
					</p>
					<ol>
						<li>Convert Latex file into an html file.</li>
						<li>...</li>
					</ol>
	
					<Subsection label="basics">Basic Layout</Subsection>
					<h3>Sections, subsections, and paragraphs</h3>
					<p>
						Every paragraph should be enclosed in a <code>{`<p>`}</code> tag.
						Use a <code>{`<br/>`}</code> tag to start a new line,
						<br />
						or start a new paragraph by starting a new <code>{`<p>`}</code> block.
					</p>
					<p>
						We implement customized components for section and subsection titles.
						These customized components enable the automatic numbering and the table of content to work properly.
					</p>
					<ul>
						<li>
							<code>{`<Section label="">Section Title</Section>`}</code>
						</li>
						<li>
							<code>{`<Subsection label="">Subsection Title</Subsection>`}</code>
						</li>
					</ul>
					<p>
						*The label is <b>required</b> and cannot be repeated.
					</p>
	
					<h3>Links to sections</h3>
					<p>
						To be updated...
					</p>
	
					<Subsection label="themes">Themes</Subsection>
					<p>
						You can change the theme settings in <code>theme.css</code>.
						These include colors, typography, sizes, etc.
					</p>
					<p>
						Text styles include <b>bold text</b>, <i>italic text</i> and <u>underlined text</u> (using <code>{`<b>, <i>, <u>`}</code> tags resp.).
						You can also change color of texts by adding a class to certain text, e.g. <code>className="color"</code>.
						Currently, we have these colors:
						<span className="red"> red</span>,
						<span className="orange"> orange</span>,
						<span className="green"> green</span>,
						<span className="blue"> blue</span>;
						and you can always add new colors to <code>theme.css</code>.
					</p>
					<p>
						Between sections, you can add a horizontal line break using <code>{`<hr/>`}</code>:
					</p>
				</section>
	
				<hr />
	
				<section>
					<Section label="math">Math Typing</Section>
					<Subsection label="syntax">Basics</Subsection>
					<p>
						To write math equations, we need to include a <code>{'<MathJax> {` ...math... `} <MathJax/>'}</code> tag.
						The main content should be inside the ` `.
						<br />
						<b>Caveat:</b> We should use double-slash <code>\\</code> for commands instead of single-slash.
						For more details, check <a href="https://docs.mathjax.org/en/latest/input/tex/differences.html" target="_blank">this documentation</a>.
					</p>
					<p>
						<MathJax>{`
							See this example: we can insert an inline math $y=x^2$ or \\(\\log y = \\frac{x}{3}\\).
							There's also the display math:
							$$
								\\ell(\\bold w;\\bold x,y) = (y-\\langle \\bold w, \\bold x\\rangle)^2, \\ \\bold w\\in \\RR^d.
							$$
							Or
							\\[
								\\langle \\nabla\\L(x), y-x \\rangle \\le \\L(y) - \\L(x).
							\\]
							MathJax also supports the quation and align environment:
							\\begin{equation}
								\\E[X] = \\int_{\\RR^d} x p(x) \\, dx.
							\\end{equation}
							\\begin{align}
								x^2 + 2x + 2
								&= (x^2+2x+1) + 1 \\\\
								&= (x+1)^2 + 1.
							\\end{align}
						`}</MathJax>
					</p>
	
					<Subsection label="macros">Macros</Subsection>
					<p>
						You can configure the macros in <code>App.js</code> (later this may be moved to a separate file).
						Add a key-value tupe in the macros object. For example,
					</p>
					<ol>
						<li><code>RR: {`"\\mathbb{R}"`}</code> for the latex command <code>{`\\newcommand{\\RR}{\\mathbb{R}}`}</code></li>
						<li><code>{`bold: ["\\mathbf{#1}", 1]`}</code> for <code>{`\\newcommand{\\bold}[1]{\\mathbf{#1}}`}</code></li>
					</ol>
	
					<Subsection label="env">Environments</Subsection>
					<p>
						We implement customized enviroments for theorems and proofs in <code>{`<Theorem>`}</code> tag: &nbsp;
						<code>{`<Theorem type="" name="" thmstyle="">...<Theorem/>`}</code>; and <code>{`<Proof>`}</code> tag.
					</p>
					<ol>
						<li>type: type of theorem (e.g., Theorem, Lemma, Definition, etc.) </li>
						<li>name: (optional) name of theorem</li>
						<li>thmstyle: (optional) either "plain" or "definition"</li>
					</ol>
					<Theorem type="Theorem" name="Placeholder" label="thm-1" style="plain">
						Custom theorem 1.
					</Theorem>
					<Theorem type="Definition" label="def-1" style="definition">
						Custom definition 1.
					</Theorem>
					<Proof>
						This is the proof of custom theorem 1.
						This environment is folded by default because the proof can be very
						long long long long long long long long long long long long long long
						long long long long long long long long long long long long long long.
					</Proof>
				</section>
			</main>
		),
	},
};