import {BrowserRouter as Router,  RouteProps, Route, Switch, } from 'react-router-dom';
import Home from '../pages/home/index';
import About from '../pages/about/index';

/**
 * 全局路由表
 */
export const routes:RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: () => <Home/>,
  },
  {
    path: '/home',
    exact: true,
    component: () => <Home/>,
  },
  {
    path: '/about',
    exact: true,
    component: () => <About/>,
  },
];

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((val, key) => (
          <Route
            {...val}
            key={`route_${key}`} />
        ))}
      </Switch>
    </Router>
  );
};