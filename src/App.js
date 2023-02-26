import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MathJaxContext } from 'better-react-mathjax';

import './App.css';
import Home from './pages/Home';
import BlogPage, { Blog, BlogList } from './pages/Blog';
import ReviewPage, { Review, ReviewList } from './pages/Review';
import BlogContextProvider from './contexts/BlogContextProvider';
import { DataProvider } from './contexts/DataContext';
import config from './configMathJax';

function App() {
  return (
    <MathJaxContext config={config}>
      <BlogContextProvider>
        <DataProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="blogs" element={<BlogPage />}>
                <Route path="" element={<BlogList />} />
                <Route path=":blogId" element={<Blog />} />
              </Route>
              <Route path="reviews" element={<ReviewPage />}>
                <Route path="" element={<ReviewList />} />
                <Route path=":reviewId" element={<Review />} />
              </Route>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </BlogContextProvider>
    </MathJaxContext>
  );
}

export default App;
