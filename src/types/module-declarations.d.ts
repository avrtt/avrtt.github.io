// declare CSS module types
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// declare asset modules for static files
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.mp4' {
  const content: string;
  export default content;
}

// declare modules for third-party libraries that don't have TypeScript typings
declare module 'react-animation-on-scroll' {
  import React from 'react';
  
  interface AnimationOnScrollProps {
    animateIn?: string;
    animateOut?: string;
    offset?: number;
    duration?: number;
    delay?: number;
    initiallyVisible?: boolean;
    animateOnce?: boolean;
    style?: React.CSSProperties;
    scrollableParentSelector?: string;
    afterAnimatedIn?: (visible: boolean) => void;
    afterAnimatedOut?: (visible: boolean) => void;
    className?: string;
    [key: string]: any;
  }
  
  export default class AnimationOnScroll extends React.Component<AnimationOnScrollProps> {}
}

declare module 'react-jvectormap' {
  import React from 'react';
  
  interface VectorMapProps {
    map: string;
    backgroundColor?: string;
    zoomOnScroll?: boolean;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    regionStyle?: Record<string, any>;
    regionLabelStyle?: Record<string, any>;
    markers?: Array<any>;
    markerStyle?: Record<string, any>;
    markersSelectable?: boolean;
    selectedMarkers?: Array<any>;
    onMarkerSelected?: (e: any, code: string, isSelected: boolean, selectedMarkers: any[]) => void;
    onRegionClick?: (e: any, code: string) => void;
    onViewportChange?: (e: any, scale: number) => void;
    onRegionTipShow?: (e: any, el: any, code: string) => void;
    onMarkerTipShow?: (e: any, el: any, code: string) => void;
    series?: Record<string, any>;
    regionsSelectable?: boolean;
    regionsSelectableOne?: boolean;
    selectedRegions?: Array<any>;
    onRegionSelected?: (e: any, code: string, isSelected: boolean, selectedRegions: any[]) => void;
    [key: string]: any;
  }
  
  export const VectorMap: React.FC<VectorMapProps>;
}

declare module 'react-telegram-comments' {
  import React from 'react';
  
  interface TelegramCommentsProps {
    dataWebsite?: string;
    dataLimit?: number;
    dataHeight?: number;
    dataColorful?: 0 | 1;
    dataCommentsColor?: string;
    dataAccentColor?: string;
    dataWebpageUrl?: string;
    dataDarkTheme?: 0 | 1;
    [key: string]: any;
  }
  
  const TelegramComments: React.FC<TelegramCommentsProps>;
  export default TelegramComments;
}

