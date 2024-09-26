import React from 'react';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element, props }) => {
  // prevent undefined pages from wrapping twice since 404.js redirects to NotFound component
  if (props.pageContext?.is404) {
    return element
  }
  // wrap all other pages with layout.jsx
  return <Layout {...props}>{element}</Layout>
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  // keep scroll position after reloading the same page, but move on top if page route changed
  if (location.pathname !== prevLocation?.pathname) {
    window.scrollTo(0, 0);
  }
};



