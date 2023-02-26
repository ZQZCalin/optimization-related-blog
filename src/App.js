import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MathJaxContext } from 'better-react-mathjax';
import Home from './pages/Home';
import Blog, { BlogList, BlogContent } from './pages/Blog';
import './App.css';
import BlogContextProvider from './contexts/BlogContextProvider';
import config from 'mathjax_config';
import ReviewPage, { Review, ReviewList } from 'pages/Review';
import { DataProvider } from 'contexts/DataContext';

function App() {
  return (
    <MathJaxContext config={config}>
      <BlogContextProvider>
        <DataProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="blogs" element={<Blog />}>
                <Route path="" element={<BlogList />} />
                <Route path=":blogId" element={<BlogContent />} />
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
