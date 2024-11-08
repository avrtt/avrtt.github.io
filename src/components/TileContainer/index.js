import React from 'react';
import PropTypes from 'prop-types';

const TileContainer = ({ children, columns = 1, gap = '10px', marginBottom = '20px' }) => {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap,
        marginBottom,
        justifyContent: 'space-between',
    };

  const blockWidth = `calc((100% / ${columns}) - ${gap})`;

  return (
    <div style={containerStyle} className="tileContainer">
        {React.Children.map(children, (child) =>
            React.cloneElement(child, { width: blockWidth })
        )}
    </div>
  );
};

TileContainer.propTypes = {
    children: PropTypes.node.isRequired,
    columns: PropTypes.number,
    gap: PropTypes.string,
};

export default TileContainer;
