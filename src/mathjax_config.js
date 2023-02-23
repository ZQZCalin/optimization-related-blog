import macro from "macro";

const config = {
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