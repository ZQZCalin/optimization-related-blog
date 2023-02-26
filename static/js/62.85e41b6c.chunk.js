"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[62],{62:function(t,a,e){e.r(a);var n=e(773),l=e(713),s=e(721),r=e(834),i=e(184),o=(0,i.jsxs)(n.Z,{children:[(0,i.jsx)("h3",{children:"History and Innovation"}),"This paper improves prior results and have the following contributions:",(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["With momentum, NSGD no longer requires large batch size / small variance. Instead, one stochastic gradient per round is sufficient for ","$O(T^{-1/4})$","rate in the base case."]}),(0,i.jsxs)("li",{children:["With second-order-smooth assumption, this paper proves improved rate of ","$O(T^{-2/7})$","for general loss besides linear regression."]}),(0,i.jsx)("li",{children:"This paper also provides adaptive learning rate schedule similar to AdaGrad that adapts to variance automatically."})]}),(0,i.jsx)("hr",{}),(0,i.jsx)(s.$,{label:"sec:base-case",children:"Base Case"}),"In the base case, this paper proves that NSGD with momentum achieves ","$O(1/T^{1/4})$"," convergence rate without requiring large batch gradients. The algorithm updates as follows:","\\begin{equation*}\n\t\t\t\tm_t = \\beta_t m_{t-1} + (1-\\beta_t) g_t, \\quad\n\t\t\t\tw_{t+1} = w_t - \\eta_t \\frac{m_t}{\\|m_t\\|},\n\t\t\\end{equation*}","where ","$g_t=\\nabla\\ell(w_t,z_t)$ and $m_0=g_1$",". The proof sketch is as follows. We first prove the one-step inequality:",(0,i.jsx)(r.Z,{type:"Lemma",label:"lem:1",children:"Suppose loss $\\L$ is $H$-smooth, then for any sequence $g_t$ and $w_t$ such that \n\t\t\t$w_{t+1}=w_t-\\eta_t\\frac{g_t}{\\|g_t\\|}$, and define $\\epsilon_t = g_t-\\nabla\\L(w_t)$,\n\t\t\t\\begin{equation*}\n\t\t\t\t\\L(w_{t+1}) - \\L(w_t) \\leq -\\frac{\\eta_t}{3}\\|\\nabla\\L(w_t)\\| + \n\t\t\t\t\t\t\\frac{8\\eta_t}{3}\\|\\epsilon_t\\| + \\frac{H\\eta_t^2}{2}.\n\t\t\t\\end{equation*}"}),(0,i.jsx)(l.Z,{children:"By smoothness,\n\t\t\t\\begin{align*}\n\t\t\t\t\t\\L(w_{t+1}) - \\L(w_t)\n\t\t\t\t\t&\\le \\frac{-\\eta_t\\langle \\nabla\\L(w_t), g_t\\rangle}{\\|g_t|} + \\frac{H\\eta_t^2}{2} \\\\\n\t\t\t\t\t&= \\frac{-\\eta_t\\langle \\nabla\\L(w_t), \\nabla\\L(w_t)+\\epsilon_t\\rangle}{\\|\\nabla\\L(w_t)+\\epsilon_t\\|} + \\frac{H\\eta_t^2}{2}.\n\t\t\t\\end{align*}\n\t\t\tConsider the following two cases: (1) If $\\|\\nabla\\L(w_t)\\| \\geq 2\\|\\epsilon_t\\|$,\n\t\t\t\\begin{align*}\n\t\t\t\t\t\\frac{-\\eta_t\\langle \\nabla\\L(w_t), \\nabla\\L(w_t)+\\epsilon_t\\rangle}{\\|\\nabla\\L(w_t)+\\epsilon_t\\|}\n\t\t\t\t\t&\\le \\frac{-\\eta_t\\|\\nabla\\L(w_t)\\|^2 + \\eta_t\\|\\nabla\\L(w_t)\\|\\|\\epsilon_t\\|}{\\|\\nabla\\L(w_t)\\epsilon_t\\|} \\\\\n\t\t\t\t\t&\\le \\frac{-\\frac{1}{2}\\eta_t\\|\\nabla\\L(w_t)\\|^2}{\\|\\nabla\\L(w_t)\\|+\\|\\epsilon_t\\|} \\le -\\frac{\\eta_t}{3} \\|\\nabla\\L(w_t)\\|.\n\t\t\t\\end{align*}\n\t\t\t(2) If $\\|\\nabla\\L(w_t)\\|\\leq 2\\|\\epsilon_t\\|$,\n\t\t\t\\begin{align*}\n\t\t\t\t\t\\frac{-\\eta_t\\langle \\nabla\\L(w_t), g_t\\rangle}{\\|g_t\\|}\n\t\t\t\t\t&\\le \\eta_t\\|\\nabla\\L(w_t)\\|\n\t\t\t\t\t\\le -\\frac{\\eta_t}{3}\\|\\nabla\\L(w_t)\\| + \\frac{8\\eta_t}{3}\\|\\epsilon_t\\|.\n\t\t\t\\end{align*}\n\t\t\tCombining two cases gives the inequality."}),(0,i.jsx)(r.Z,{type:"Theorem",label:"thm:1",children:"Fix $\\eta_t=\\eta$ and $\\beta_t=1-\\alpha$, and assume $\\L(w_1)-\\inf\\L\\leq \\Delta$ and $\\E[\\|g_t-\\nabla\\L(w_t)\\|^2]\\le \\sigma^2$. Then\n\t\t\t\\begin{equation*}\n\t\t\t\t\t\\sum_{t=1}^T\\E[\\|\\nabla\\L(w_t)\\|] \\leq O\\left(\\frac{\\Delta}{\\eta} + \\frac{\\sigma+H\\eta T}{\\alpha} + \\sigma\\sqrt{\\alpha} T\\right). \n\t\t\t\\end{equation*}\n\t\t\tMoreover, if we choose $\\eta=\\sqrt{\\frac{\\Delta\\alpha}{HT}}$ and $\\alpha=\\min(1, \\frac{\\sqrt{\\Delta H}}{\\sigma\\sqrt{T}})$, then\n\t\t\t\\begin{equation*}\n\t\t\t\t\t\\frac{1}{T}\\sum_{t=1}^T\\E[\\|\\nabla\\L(w_t)\\|] \\leq O\\left( \\frac{\\sqrt{\\Delta H}}{\\sqrt{T}} + \\frac{\\sqrt{\\sigma\\sqrt{\\Delta H}}}{T^{1/4}} + \\frac{\\sigma^2}{\\sqrt{\\Delta HT}} \\right). \n\t\t\t\\end{equation*}"}),"As a remark, in the proof of Theorem \\ref{thm:base}, it's proved that $\\E[\\|m_t-\\nabla\\L(w_t)\\|] \\leq (1-\\alpha)^{t-1}\\sigma + \\sqrt{\\alpha}\\sigma +\\frac{H\\eta}{\\alpha}$, \n\t\twhich is $O((1-\\alpha)^{t-1}\\sigma + \\frac{\\sqrt{\\sigma}}{T^{1/4}}+\\frac{1}{\\sqrt{T}})$ under the proper choice of $\\eta$ and $\\alpha$. Compared to the standard SGD with \n\t\t$\\E[\\|g_t-\\nabla\\L(w_t)\\|] \\leq \\sigma$, NSGD with momentum effectively reduces the variance.",(0,i.jsx)("hr",{}),(0,i.jsx)(s.$,{label:"sec:2",children:"Second-Order Smoothness"}),"\n\t\tWe say a function $\\L:\\RR^d\\to\\L$ is $\\rho$-second-order-smooth if\n\t\t\\begin{equation}\n\t\t\\|\\nabla^2\\L(x)-\\nabla^2\\L(y)\\|_{\\mathrm{op}} \\leq \\rho\\|x-y\\|, \\ \\forall x,y.\n\t\t\\label{eq:second-order-smooth}\n\t\t\\end{equation}\n\t\t",(0,i.jsx)(r.Z,{type:"Lemma",label:"lem:2",children:"If $\\L:\\RR^d\\to\\L$ is $\\rho$-second-order-smooth \\eqref{eq:second-order-smooth}, then\n\t\t\t\\begin{equation*}\n\t\t\t\t\t\\|Z(x,y)\\| \\leq \\rho\\|x-y\\|^2, \\quad Z(x,y) = \\nabla\\L(x)-\\nabla\\L(y)-\\nabla^2\\L(y)(x-y).\n\t\t\t\\end{equation*}"}),(0,i.jsx)(l.Z,{children:"Define $f:[0,1]\\to\\RR^d$ by $f(t) = \\nabla\\L(y+t(x-y)) - \\nabla^2\\L(y)(y+t(x-y))$. Then by the mean value theorem, for some $t\\in[0,1]$ and $z=y+t(x-y)$,\n\t\t\t\\begin{align*}\n\t\t\t\t\t\\|Z(x,y)\\| = \\|f(1) - f(0)\\|\n\t\t\t\t\t&\\le \\|f'(t)\\| \\\\\n\t\t\t\t\t&= \\|\\nabla^2\\L(z)(x-y) - \\nabla^2\\L(y)(x-y)\\| \\\\\n\t\t\t\t\t&\\leq \\rho\\|z-y\\|\\|x-y\\| \\\\\n\t\t\t\t\t&= \\rho t\\|x-y\\|^2 \\leq \\rho\\|x-y\\|^2.\n\t\t\t\\end{align*}"})]});a.default=o}}]);
//# sourceMappingURL=62.85e41b6c.chunk.js.map