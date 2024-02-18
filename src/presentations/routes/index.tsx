import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import { Root, Home, PostDetail, Search } from '@pages';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/search" element={<Search />} />
      <Route path="/:year/:month/:title" element={<PostDetail />} />
      <Route path="/" element={<Home />} errorElement={<div>Test Error</div>} />
    </Route>
  )
);
