import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Container, Nav } from './SharedLayout.styled';
import { Loader } from 'services/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;

