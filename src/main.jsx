import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css'
import Feeder from './components/Feeder.jsx';
import User from './components/User.jsx';
import Login from './components/Login.jsx';
import App from './App.jsx';
import Category from './components/Category.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Login />} />
      <Route path="feeder" element={<Feeder />} />
      <Route path="user" element={<User />} />
      <Route path="category/:categoryName" element={<Category />} />
    </Route>
  )
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
