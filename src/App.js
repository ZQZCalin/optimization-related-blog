import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MathJaxContext } from 'better-react-mathjax';
import Home from './pages/Home';
import Blog, { BlogList, BlogContent } from './pages/Blog';
import './App.css';
import BlogContextProvider from './contexts/BlogContextProvider';

// MathJax configuration
const config = {
  loader: { load: ['[tex]/ams'] },
  tex: {
    packages: {
      '[+]': ['ams']
    },
    macros: {
      // define macros (\newcommand{}{}) here
      RR: "\\mathbb{R}",
      NN: "\\mathbb{N}",
      L: "\\mathcal{L}",
      E: "\\mathop{\\textrm{E}}",
      bold: ["{\\mathbf #1}", 1]
    },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ],
  },
};

function App() {
  return (
    <MathJaxContext config={config}>
      <BlogContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="blogs" element={<Blog />}>
              <Route path="" element={<BlogList />} />
              <Route path=":blogId" element={<BlogContent />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </BlogContextProvider>
    </MathJaxContext>
  );
}

export default App;
