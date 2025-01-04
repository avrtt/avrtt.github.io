import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TileContainerLink = ({ 
    children, 
    columns = 1, 
    animationonscroll = true, 
    offset = "300",
    gap = '0.5em', 
    marginBottom = '0.5em', 
    marginTop = '0.5em',
}) => {

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap,
        marginBottom,
        marginTop,
    }

    return animationonscroll ? (
        <AnimationOnScroll offset={offset} duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
            <div style={containerStyle} className="tileContainerLink">{children}</div>
        </AnimationOnScroll>
    ) : (
        <div style={containerStyle} className="tileContainerLink">{children}</div>
    )
}

TileContainerLink.propTypes = {
    children: PropTypes.node.isRequired,
    columns: PropTypes.number,
    gap: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
};

export default TileContainerLink;
