declare module 'react-animation-on-scroll' {
  import { Component, ReactNode } from 'react';

  export interface AnimationOnScrollProps {
    animateIn?: string;
    animateOut?: string;
    offset?: number;
    duration?: number;
    delay?: number;
    animateOnce?: boolean;
    style?: React.CSSProperties;
    initiallyVisible?: boolean;
    afterAnimatedIn?: (props: { visible: boolean }) => void;
    afterAnimatedOut?: (props: { visible: boolean }) => void;
    scrollableParentSelector?: string;
    className?: string;
    children?: ReactNode;
  }

  export class AnimationOnScroll extends Component<AnimationOnScrollProps> {}
} 