import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TileContainer = ({ 
    children, 
    columns = 1, 
    animationonscroll = true, 
    offset = "300", 
    gap = '0.5vw', 
    marginBottom = '2vh', 
    marginTop = '0vh' 
}) => {
    
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap,
        marginBottom,
        marginTop,
        justifyContent: 'space-between',
    };

    const blockWidth = `calc((100% / ${columns}) - ${gap})`;

    return animationonscroll ? (
        <AnimationOnScroll offset={offset} duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
            <div style={containerStyle} className="tileContainer">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { width: child.props.width || blockWidth })
                )}
            </div>
        </AnimationOnScroll>
    ) : (
        <div style={containerStyle} className="tileContainer">
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { width: child.props.width || blockWidth })
            )}
        </div>
    );
};

TileContainer.propTypes = {
    children: PropTypes.node.isRequired,
    columns: PropTypes.number,
    gap: PropTypes.string,
    marginBottom: PropTypes.string,
    marginTop: PropTypes.string
};

export default TileContainer;
