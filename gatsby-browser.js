import React from 'react';
import Layout from './src/components/layout';

// global styles
import "./src/styles/page_bodies.scss"
import "./src/styles/page_structure_utils.scss"
import "./src/styles/selection_general.scss"
import "./src/styles/headings_general.scss"
import "./src/styles/tables_general.scss"
import "./src/styles/media_general.scss"
import "./src/styles/scrollbar.scss"
import "./src/styles/last_updates.scss"
import "./src/styles/links.scss"
import "./src/styles/lists.scss"
import "./src/styles/compatibility.scss"

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



