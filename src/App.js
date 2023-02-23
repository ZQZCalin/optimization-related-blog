import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MathJaxContext } from 'better-react-mathjax';
import Home from './pages/Home';
import Blog, { BlogList, BlogContent } from './pages/Blog';
import './App.css';
import BlogContextProvider from './contexts/BlogContextProvider';
import config from 'mathjax_config';
import ReviewPage, { Review, ReviewList } from 'pages/Review';

function App() {
  return (
    <MathJaxContext config={config} onStartup={(mathjax) => {
      console.log("reset numbering");
      mathjax.texReset(0);}
    }>
      <BlogContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="blogs" element={<Blog />}>
              <Route path="" element={<BlogList />} />
              <Route path=":blogId" element={<BlogContent />} />
            </Route>
            <Route path="reviews" element={<ReviewPage />}>
              <Route path="" element={<ReviewList />} />
              <Route path=":blogId" element={<Review />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </BlogContextProvider>
    </MathJaxContext>
  );
}

export default App;
