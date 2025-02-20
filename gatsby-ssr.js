import React from 'react';
import Layout from './src/components/layout';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta key="charset" charSet="utf-8" />,
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />,
  ]);
};

export const wrapPageElement = ({ element, props }) => {
  // prevent undefined pages from wrapping twice since 404.js redirects to NotFound component
  if (props.pageContext?.is404) {
    return element
  }
  // wrap all other pages with layout.jsx
  return <Layout {...props}>{element}</Layout>
};



