import React, { lazy, Suspense } from 'react';
// import { RouteConfig, RouteConfigComponentProps } from './react-router-config';

const HomeDom = lazy(() => import('application/home'));
const Home = (props: any) => {
  return (
    <Suspense fallback={null}>
      <HomeDom {...props} />
    </Suspense>
  );
};

const SearchDom = lazy(() => import('application/search'));
const Search = (props: any) => {
  return (
    <Suspense fallback={null}>
      <SearchDom {...props} />
    </Suspense>
  );
};

const MyDom = lazy(() => import('application/my'));
const My = (props: any) => {
  return (
    <Suspense fallback={null}>
      <MyDom {...props} />
    </Suspense>
  );
};

const routes = [
  {
    path: '/',
    exact: true,
    key: 'default',
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    key: 'home',
    component: Home,
  },
  {
    path: '/search',
    exact: true,
    key: 'search',
    component: Search,
  },
  {
    path: '/my',
    exact: true,
    key: 'my',
    component: My,
  },
];

export default routes;
