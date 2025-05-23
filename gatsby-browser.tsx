import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import Layout from './src/components/layout';
//import { LocationProvider } from '@reach/router';

export const onRenderBody = ({ setHeadComponents }: { setHeadComponents: (components: React.ReactNode[]) => void }): void => {
  setHeadComponents([
    <meta key="charset" charSet="utf-8" />,
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />,
  ]);
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  // prevent undefined pages from wrapping twice since 404.tsx redirects to NotFound component
  if (props.pageContext?.is404) {
    return element
  }
  // wrap all other pages with layout.tsx
  return <Layout {...props}>{element}</Layout>
};

/*export const wrapRootElement = ({ element, props }) => {
  // wrap all other pages with layout and provide useLocation for Navbar
  return (
    <LocationProvider>
      <Layout {...props}>{element}</Layout>
    </LocationProvider>
  );
};*/

export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = () => false;

export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = ({ location }) => {
  const exemptPaths = [
    '/adventures', 
    '/research', 
    '/thoughts'
  ];
  // prevent from scrolling on top on specific pages to save position after reload
  const shouldScroll = !exemptPaths.some(path => location.pathname.startsWith(path));
  if (shouldScroll && typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

/*export const onRouteUpdate = ({ location, prevLocation }) => {
  // keep scroll position after reloading the same page, but move on top if page route changed
  if (location.pathname !== prevLocation?.pathname) {
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};*/

