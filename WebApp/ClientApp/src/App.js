import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            if (route.children) {
              return (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children.map((childRoute, childIndex) => (
                    <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
                  ))}
                </Route>
              );
            } else {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            }
          })}
        </Routes>
      </Layout>
    );
  }
}
