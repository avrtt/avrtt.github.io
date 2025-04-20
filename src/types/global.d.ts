// declare modules for packages without type definitions
declare module 'react-jvectormap' {
  import React from 'react';
  export const VectorMap: React.FC<{
    map: string;
    backgroundColor?: string;
    zoomOnScroll?: boolean;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    regionStyle?: any;
    regionLabelStyle?: any;
    markers?: any[];
    markerStyle?: any;
    markersSelectable?: boolean;
    selectedMarkers?: any[];
    onMarkerSelected?: (e: any, code: string, isSelected: boolean, selectedMarkers: any[]) => void;
    onRegionClick?: (e: any, code: string) => void;
    onViewportChange?: (e: any, scale: number) => void;
    onRegionTipShow?: (e: any, el: any, code: string) => void;
    onMarkerTipShow?: (e: any, el: any, code: string) => void;
    series?: any;
    regionsSelectable?: boolean;
    regionsSelectableOne?: boolean;
    selectedRegions?: any[];
    onRegionSelected?: (e: any, code: string, isSelected: boolean, selectedRegions: any[]) => void;
  }>;
}

declare module 'react-telegram-comments' {
  import React from 'react';
  export interface TelegramCommentsProps {
    dataWebsite?: string;
    dataLimit?: number;
    dataHeight?: number;
    dataColorful?: 0 | 1;
    dataCommentsColor?: string;
    dataAccentColor?: string;
    dataWebpageUrl?: string;
    dataDarkTheme?: 0 | 1;
    websiteKey?: string;
    customColor?: string;
    commentsNumber?: number;
    pageId?: string;
    showDislikes?: boolean;
  }
  export const TelegramComments: React.FC<TelegramCommentsProps>;
}

declare module 'react-animation-on-scroll' {
  import React from 'react';
  export interface AnimationOnScrollProps {
    animateIn?: string;
    animateOut?: string;
    offset?: number;
    delay?: number;
    animateOnce?: boolean;
    duration?: number;
    animatePreScroll?: boolean;
    initiallyVisible?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export default class AnimationOnScroll extends React.Component<AnimationOnScrollProps> {}
}

// add module declarations for imported assets
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.mp4';
declare module '*.scss';
declare module '*.css';

// add module declarations for MDX files
declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

// global interfaces for the project
interface PageProps {
  path: string;
  location: Location;
  children?: React.ReactNode;
}

interface Location {
  pathname: string;
  search: string;
  hash: string;
  href: string;
  origin: string;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  state: any;
  key: string;
}

// PostBanner props
interface PostBannerProps {
  postNumber: string | number;
  date: string;
  updated?: string;
  readTime: string;
  difficulty?: number;
  title: string;
  desc: string;
  banner: any; // Gatsby image
  section: string;
  postKey: string;
  isMindfuckery?: boolean;
  mainTag: string;
}

// PostBottom props
interface PostBottomProps {
  nextPost: any;
  lastPost: any;
  keyCurrent: string;
  section: string;
}

// PostsLastNext props
interface PostsLastNextProps {
  nextPost: any;
  lastPost: any;
  section: string;
}

// PostImage props
interface PostImageProps {
  path: string;
  alt: string;
  caption?: string;
  zoom?: boolean;
  offset?: number;
}

// Shine props
interface ShineProps {
  children: React.ReactNode;
  duration?: number;
  interval?: number;
  style?: React.CSSProperties;
  className?: string;
}

// SpoilerServices props
interface SpoilerServicesProps {
  title: string;
  services?: any[];
  spoilerExtraDesc?: string;
  isEnglish?: boolean;
}

// Tooltip props
interface TooltipProps {
  text: React.ReactNode;
  isBadge?: boolean;
}

// StickerPack props
interface StickerPackProps {
  sticker: string;
  marginLeft?: string;
  marginRight?: string;
}

// PostDonate props
interface PostDonateProps {
  address?: string;
  caption1?: string;
  caption2?: string;
}

