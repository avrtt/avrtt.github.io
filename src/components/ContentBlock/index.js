import React from 'react';
import PropTypes from 'prop-types';

const ContentBlock = ({
    title,
    description,
    backgroundColor = '#ffffff',
    textColor = '#000000',
    padding = '0px',
    alignment = 'left',
    borderRadius = '2vh',
    width = '100%',
    height = 'auto',
}) => {
    const blockStyle = {
        backgroundColor,
        color: textColor,
        padding,
        textAlign: alignment,
        borderRadius,
        width,
        height,
    };

  return (
    <div style={blockStyle} className="contentBlock">
        {title && <p>{title}</p>}
        {description && <p>{description}</p>}
    </div>
  );
};

ContentBlock.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    padding: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    borderRadius: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default ContentBlock;
