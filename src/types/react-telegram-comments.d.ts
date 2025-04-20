declare module 'react-telegram-comments' {
  import { Component, ReactNode } from 'react';

  export interface TelegramCommentsProps {
    dataWebAppId: string;
    dataColorScheme?: 'dark' | 'light';
    dataHeight?: number;
    dataCommentsNumber?: number;
    dataDarkColorScheme?: string;
    dataColorAccent?: string;
    dataColorBackground?: string;
    dataColorHeaderBackground?: string;
    dataColorHeader?: string;
    dataColorPrimaryText?: string;
    dataColorSecondaryText?: string;
    dataColorAccentButton?: string;
    dataColorButtonText?: string;
    dataColorBorder?: string;
    dataPageId?: string;
    dataAcl?: string;
    dataWebsite?: string;
    dataLimit?: number;
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
    style?: React.CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export class TelegramComments extends Component<TelegramCommentsProps> {}
} 