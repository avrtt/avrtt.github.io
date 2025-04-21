/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from "./styles.module.scss";

interface TileContainerProps {
    children: React.ReactNode;
    columns?: number;
    animationonscroll?: boolean;
    offset?: number;
    gap?: string;
    marginBottom?: string;
    marginTop?: string;
}

interface ChildProps {
    width?: string;
    [key: string]: any;
}

const TileContainer: React.FC<TileContainerProps> = ({ 
    children, 
    columns = 1, 
    animationonscroll = true, 
    offset = 300, 
    gap = '0.5vw', 
    marginBottom = '2vh', 
    marginTop = '0vh' 
}) => {
    
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap,
        marginBottom,
        marginTop,
        justifyContent: 'space-between',
    };

    const blockWidth = `calc((100% / ${columns}) - ${gap})`;
    
    const renderChildren = (child: React.ReactNode) => {
        if (React.isValidElement(child)) {
            const props: ChildProps = {
                width: child.props.width || blockWidth
            };
            return React.cloneElement(child, props);
        }
        return child;
    };

    return animationonscroll ? (
        <AnimationOnScroll offset={offset} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
            <div className={styles.tileContainer} style={containerStyle}>
                {React.Children.map(children, renderChildren)}
            </div>
        </AnimationOnScroll>
    ) : (
        <div className={styles.tileContainer} style={containerStyle}>
            {React.Children.map(children, renderChildren)}
        </div>
    );
};

TileContainer.propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    gap: PropTypes.string,
    marginBottom: PropTypes.string,
    marginTop: PropTypes.string
} as any;

export default TileContainer;
