/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from "./styles.module.scss";

interface TileContainerLinkProps {
    children: React.ReactNode;
    columns?: number;
    animationonscroll?: boolean;
    offset?: number;
    gap?: string;
    marginBottom?: string;
    marginTop?: string;
}

const TileContainerLink: React.FC<TileContainerLinkProps> = ({ 
    children, 
    columns = 1, 
    animationonscroll = true, 
    offset = 300,
    gap = '0.5em', 
    marginBottom = '0.5em', 
    marginTop = '0.5em',
}) => {

    const containerStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap,
        marginBottom,
        marginTop,
    }

    return animationonscroll ? (
        <AnimationOnScroll offset={offset} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
            <div style={containerStyle} className={styles.tileContainerLink}>{children}</div>
        </AnimationOnScroll>
    ) : (
        <div style={containerStyle} className={styles.tileContainerLink}>{children}</div>
    )
}

TileContainerLink.propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    gap: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
} as any;

export default TileContainerLink;
