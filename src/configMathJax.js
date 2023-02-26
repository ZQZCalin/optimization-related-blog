const macro = {
	// define macros (\newcommand{}{}) here
	
	// Probability
	P: "\\mathop{\\mathbb{P}}",
	Px: "\\mathop*{\\mathbb{P}}",
	E: "\\mathop{\\mathbb{E}}",
	Ex: "\\mathop*{\\mathbb{E}}",
	Var: "\\mathop{\\opearatorname{Var}}",
	Varx: "\\mathop*{\\opearatorname{Var}}",
	Cov: "\\mathop{\\opearatorname{Cov}}",
	Covx: "\\mathop*{\\opearatorname{Cov}}",

	// Optimization
	L: "\\mathcal{L}",

	// "Blackboard-fonted" letters
	RR: "\\mathbb{R}",
	NN: "\\mathbb{N}",
	ZZ: "\\mathbb{Z}",
	FF: "\\mathbb{F}",
	QQ: "\\mathbb{Q}",
	CC: "\\mathbb{C}",

	// Math operators
	argmax: "\\mathop{\\operatorname{arg\\,max}}",
	argmin: "\\mathop{\\operatorname{arg\\,min}}",

	bold: ["{\\mathbf #1}", 1],

	// Calligraphic letters
	calA: "\\mathcal{A}",
	calB: "\\mathcal{B}",
	calC: "\\mathcal{C}",
	calD: "\\mathcal{D}",
	calE: "\\mathcal{E}",
	calF: "\\mathcal{F}",
	calG: "\\mathcal{G}",
	calH: "\\mathcal{H}",
	calI: "\\mathcal{I}",
	calJ: "\\mathcal{J}",
	calK: "\\mathcal{K}",
	calL: "\\mathcal{L}",
	calM: "\\mathcal{M}",
	calN: "\\mathcal{N}",
	calO: "\\mathcal{O}",
	calP: "\\mathcal{P}",
	calQ: "\\mathcal{Q}",
	calR: "\\mathcal{R}",
	calS: "\\mathcal{S}",
	calT: "\\mathcal{T}",
	calU: "\\mathcal{U}",
	calV: "\\mathcal{V}",
	calW: "\\mathcal{W}",
	calX: "\\mathcal{X}",
	calY: "\\mathcal{Y}",
	calZ: "\\mathcal{Z}",

	// Bold letters
	a: "\\boldsymbol{a}",
	b: "\\boldsymbol{b}",
	c: "\\boldsymbol{c}",
	d: "\\boldsymbol{d}",
	e: "\\boldsymbol{e}",
	f: "\\boldsymbol{f}",
	g: "\\boldsymbol{g}",
	h: "\\boldsymbol{h}",
	i: "\\boldsymbol{i}",
	j: "\\boldsymbol{j}",
	k: "\\boldsymbol{k}",
	l: "\\boldsymbol{l}",
	m: "\\boldsymbol{m}",
	n: "\\boldsymbol{n}",
	o: "\\boldsymbol{o}",
	p: "\\boldsymbol{p}",
	q: "\\boldsymbol{q}",
	r: "\\boldsymbol{r}",
	s: "\\boldsymbol{s}",
	t: "\\boldsymbol{t}",
	u: "\\boldsymbol{u}",
	v: "\\boldsymbol{v}",
	w: "\\boldsymbol{w}",
	x: "\\boldsymbol{x}",
	y: "\\boldsymbol{y}",
	z: "\\boldsymbol{z}",
};

const config = {
	extensions: ["TeX/AMSmath.js", "TeX/AMSsymbols.js"],
    loader: { load: ['[tex]/ams'] },
    tex: {
      macros: macro,
      packages: {
        '[+]': ['ams']
      },
      inlineMath: [
        ["$", "$"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\[", "\]"]
      ],
      processEscapes: true,      // use \$ to produce a literal dollar sign
      processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
      processRefs: true,         // process \ref{...} outside of math mode
      digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
                                 // pattern for recognizing numbers
      tags: 'ams',              // or 'ams' or 'all'
      tagSide: 'right',          // side for \tag macros
      tagIndent: '0.8em',        // amount to indent tags
      useLabelIds: true,         // use label name rather than tag for ids
      maxMacros: 1000,           // maximum number of macro substitutions per expression
      maxBuffer: 5 * 1024,       // maximum size for the internal TeX string (5K)
      baseURL:                   // URL for use with links to tags (when there is a <base> tag in effect)
         (document.getElementsByTagName('base').length === 0) ?
          '' : String(document.location).replace(/#.*$/, ''),
      formatError:               // function called when TeX syntax errors occur
          (jax, err) => jax.formatError(err)
    },
  };

export default config;