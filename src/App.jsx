import { Link } from "react-router-dom";
import HomePage from './Pages/Homepage';
import PostPage from './Pages/PostPage';
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/Profilepage";
import PostDetailPage from "./Pages/PostDetailPage";
import { Nav, NavProps, Navbar,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {

  const routes = [{
    path: '/',
    element: (<HomePage />)
  },
  {
    path: '/login',
    element: (<LoginPage />)
  },
  {
    path: '/posts',
    element: (<PostPage />)
  },
  {
    path: '/postdetail/:id',
    element: (<PostDetailPage />)
  },
  {
    path: '/profile',
    element: (<ProfilePage />)
  },
  ]

  return (
    <BrowserRouter >
      <Navbar bg="dark" variant="success">
    <Container >
    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/posts">Post</Nav.Link>
      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
      <Nav.Link as={Link} to="/login">login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <div style={{ margin:'50px'}}></div>
      
      <Routes>
        {routes.map(route => <Route key={route.path} path={route.path} element={route.element}></Route>)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
