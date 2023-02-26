import { MathJax } from "better-react-mathjax";
import Proof from "../components/Proof";
import { Section } from "../components/Section";
import Theorem from "../components/Theorem";

const content = (
	<>
		<h3>History and Innovation</h3>
		This paper improves prior results and have the following contributions:
		<ol>
			<li>
				With momentum, NSGD no longer requires large batch size / small variance.
				Instead, one stochastic gradient per round is sufficient for {`$O(T^{-1/4})$`}
				rate in the base case.
			</li>
			<li>
				With second-order-smooth assumption, this paper proves improved rate of {`$O(T^{-2/7})$`}
				for general loss besides linear regression.
			</li>
			<li>
				This paper also provides adaptive learning rate schedule similar to AdaGrad
				that adapts to variance automatically.
			</li>
		</ol>

		<hr />

		<Section label="sec:base-case">Base Case</Section>

		In the base case, this paper proves that NSGD with momentum achieves {`$O(1/T^{1/4})$`} convergence rate
		without requiring large batch gradients. The algorithm updates as follows:
		{`\\begin{equation*}
				m_t = \\beta_t m_{t-1} + (1-\\beta_t) g_t, \\quad
				w_{t+1} = w_t - \\eta_t \\frac{m_t}{\\|m_t\\|},
		\\end{equation*}`}
		where {`$g_t=\\nabla\\ell(w_t,z_t)$ and $m_0=g_1$`}. The proof sketch is as follows.
		We first prove the one-step inequality:

		<Theorem type="Lemma" label="lem:1">
			{`Suppose loss $\\L$ is $H$-smooth, then for any sequence $g_t$ and $w_t$ such that 
			$w_{t+1}=w_t-\\eta_t\\frac{g_t}{\\|g_t\\|}$, and define $\\epsilon_t = g_t-\\nabla\\L(w_t)$,
			\\begin{equation*}
				\\L(w_{t+1}) - \\L(w_t) \\leq -\\frac{\\eta_t}{3}\\|\\nabla\\L(w_t)\\| + 
						\\frac{8\\eta_t}{3}\\|\\epsilon_t\\| + \\frac{H\\eta_t^2}{2}.
			\\end{equation*}`}
		</Theorem>

		<Proof>
			{`By smoothness,
			\\begin{align*}
					\\L(w_{t+1}) - \\L(w_t)
					&\\le \\frac{-\\eta_t\\langle \\nabla\\L(w_t), g_t\\rangle}{\\|g_t\|} + \\frac{H\\eta_t^2}{2} \\\\
					&= \\frac{-\\eta_t\\langle \\nabla\\L(w_t), \\nabla\\L(w_t)+\\epsilon_t\\rangle}{\\|\\nabla\\L(w_t)+\\epsilon_t\\|} + \\frac{H\\eta_t^2}{2}.
			\\end{align*}
			Consider the following two cases: (1) If $\\|\\nabla\\L(w_t)\\| \\geq 2\\|\\epsilon_t\\|$,
			\\begin{align*}
					\\frac{-\\eta_t\\langle \\nabla\\L(w_t), \\nabla\\L(w_t)+\\epsilon_t\\rangle}{\\|\\nabla\\L(w_t)+\\epsilon_t\\|}
					&\\le \\frac{-\\eta_t\\|\\nabla\\L(w_t)\\|^2 + \\eta_t\\|\\nabla\\L(w_t)\\|\\|\\epsilon_t\\|}{\\|\\nabla\\L(w_t)\\epsilon_t\\|} \\\\
					&\\le \\frac{-\\frac{1}{2}\\eta_t\\|\\nabla\\L(w_t)\\|^2}{\\|\\nabla\\L(w_t)\\|+\\|\\epsilon_t\\|} \\le -\\frac{\\eta_t}{3} \\|\\nabla\\L(w_t)\\|.
			\\end{align*}
			(2) If $\\|\\nabla\\L(w_t)\\|\\leq 2\\|\\epsilon_t\\|$,
			\\begin{align*}
					\\frac{-\\eta_t\\langle \\nabla\\L(w_t), g_t\\rangle}{\\|g_t\\|}
					&\\le \\eta_t\\|\\nabla\\L(w_t)\\|
					\\le -\\frac{\\eta_t}{3}\\|\\nabla\\L(w_t)\\| + \\frac{8\\eta_t}{3}\\|\\epsilon_t\\|.
			\\end{align*}
			Combining two cases gives the inequality.`}
		</Proof>

		<Theorem type="Theorem" label="thm:1">
			{`Fix $\\eta_t=\\eta$ and $\\beta_t=1-\\alpha$, and assume $\\L(w_1)-\\inf\\L\\leq \\Delta$ and $\\E[\\|g_t-\\nabla\\L(w_t)\\|^2]\\le \\sigma^2$. Then
			\\begin{equation*}
					\\sum_{t=1}^T\\E[\\|\\nabla\\L(w_t)\\|] \\leq O\\left(\\frac{\\Delta}{\\eta} + \\frac{\\sigma+H\\eta T}{\\alpha} + \\sigma\\sqrt{\\alpha} T\\right). 
			\\end{equation*}
			Moreover, if we choose $\\eta=\\sqrt{\\frac{\\Delta\\alpha}{HT}}$ and $\\alpha=\\min(1, \\frac{\\sqrt{\\Delta H}}{\\sigma\\sqrt{T}})$, then
			\\begin{equation*}
					\\frac{1}{T}\\sum_{t=1}^T\\E[\\|\\nabla\\L(w_t)\\|] \\leq O\\left( \\frac{\\sqrt{\\Delta H}}{\\sqrt{T}} + \\frac{\\sqrt{\\sigma\\sqrt{\\Delta H}}}{T^{1/4}} + \\frac{\\sigma^2}{\\sqrt{\\Delta HT}} \\right). 
			\\end{equation*}`}
		</Theorem>

		{`As a remark, in the proof of Theorem ${1}, it's proved that $\\E[\\|m_t-\\nabla\\L(w_t)\\|] \\leq (1-\\alpha)^{t-1}\\sigma + \\sqrt{\\alpha}\\sigma +\\frac{H\\eta}{\\alpha}$, 
		which is $O((1-\\alpha)^{t-1}\\sigma + \\frac{\\sqrt{\\sigma}}{T^{1/4}}+\\frac{1}{\\sqrt{T}})$ under the proper choice of $\\eta$ and $\\alpha$. Compared to the standard SGD with 
		$\\E[\\|g_t-\\nabla\\L(w_t)\\|] \\leq \\sigma$, NSGD with momentum effectively reduces the variance.`}

		<hr />

		<Section label="sec:2">Second-Order Smoothness</Section>

		{`
		We say a function $\\L:\\RR^d\\to\\L$ is $\\rho$-second-order-smooth if
		\\begin{equation}
		\\|\\nabla^2\\L(x)-\\nabla^2\\L(y)\\|_{\\mathrm{op}} \\leq \\rho\\|x-y\\|, \\ \\forall x,y.
		\\label{eq:second-order-smooth}
		\\end{equation}
		`}

		<Theorem type="Lemma" label="lem:2">
			{`If $\\L:\\RR^d\\to\\L$ is $\\rho$-second-order-smooth \\eqref{eq:second-order-smooth}, then
			\\begin{equation*}
					\\|Z(x,y)\\| \\leq \\rho\\|x-y\\|^2, \\quad Z(x,y) = \\nabla\\L(x)-\\nabla\\L(y)-\\nabla^2\\L(y)(x-y).
			\\end{equation*}`}
		</Theorem>

		<Proof>
			{`Define $f:[0,1]\\to\\RR^d$ by $f(t) = \\nabla\\L(y+t(x-y)) - \\nabla^2\\L(y)(y+t(x-y))$. Then by the mean value theorem, for some $t\\in[0,1]$ and $z=y+t(x-y)$,
			\\begin{align*}
					\\|Z(x,y)\\| = \\|f(1) - f(0)\\|
					&\\le \\|f'(t)\\| \\\\
					&= \\|\\nabla^2\\L(z)(x-y) - \\nabla^2\\L(y)(x-y)\\| \\\\
					&\\leq \\rho\\|z-y\\|\\|x-y\\| \\\\
					&= \\rho t\\|x-y\\|^2 \\leq \\rho\\|x-y\\|^2.
			\\end{align*}`}
		</Proof>

	</>
);

export default content;