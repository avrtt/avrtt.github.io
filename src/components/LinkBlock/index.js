import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const LinkBlock = ({
    link,
    isExternalLink = true,
    icon,
    iconSize = '3vw',
    name = 'Untitled link',
    handle,
    description = '',
    fontSizeName = '0.8vw',
    fontSizeHandle = '0.8vw',
    fontSizeDescription = '0.76vw',
    textColorName = '#000000',
    textColorHandle = '#696969',
    textColorDescription = '#696969',
    justifyContent = 'center',
    backgroundColor = '#ffffff',
    padding = '1vw 1vw 0.5vw 1vw',
    marginRight = '0',
    marginLeft = '0',
    paddingDescription = '0 0.1vw',
    borderRadius = '2vh',
    blockWidth = 'auto',
    height = 'auto',
    divAnimation = true
}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const blockStyle = {
        backgroundColor,
        padding,
        marginRight,
        marginLeft,
        borderRadius,
        width: blockWidth,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent,
        transform: `scale(${isHovered && divAnimation ? 0.97 : 1})`,
        opacity: isHovered ? '0.8' : '1',
        transition: 'transform 0.1s ease, opacity 0.1s ease',
        flex: 1,
    };

    const blockContentStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const iconStyle = {
        width: iconSize,
        height: 'auto',
        marginRight: '0.8vw',
    };

    const textWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const nameStyle = {
        fontSize: fontSizeName,
        color: textColorName,
        fontWeight: 'bold',
        marginBottom: '-0.2vw',
    };

    const handleStyle = {
        fontSize: fontSizeHandle,
        color: textColorHandle,
        marginTop: '-0.2vw',
    };

    const descriptionStyle = {
        fontSize: fontSizeDescription,
        color: textColorDescription,
        marginTop: '0.5vw',
        padding: paddingDescription,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    };

    return isExternalLink ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div
                style={blockStyle}
                className="linkBlock noselect"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div style={blockContentStyle}>
                    <img style={iconStyle} className=".makeBlackAndWhite" src={icon} alt={`${name} icon`} />
                    <div style={textWrapperStyle}>
                        <span style={nameStyle}>{name}</span>
                        {handle && <span style={handleStyle}>{handle}</span>}
                    </div>
                </div>
                {description && <div style={descriptionStyle}>{description}</div>}
            </div>
        </a>
    ) : (
        <Link to={link}>
            <div
                style={blockStyle}
                className="linkBlock noselect"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div style={blockContentStyle}>
                    <img style={iconStyle} className=".makeBlackAndWhite" src={icon} alt={`${name} icon`} />
                    <div style={textWrapperStyle}>
                        <span style={nameStyle}>{name}</span>
                        {handle && <span style={handleStyle}>{handle}</span>}
                    </div>
                </div>
                {description && <div style={descriptionStyle}>{description}</div>}
            </div>
        </Link>
    );
};

LinkBlock.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string,
    handle: PropTypes.string,
    description: PropTypes.string,
    fontSizeName: PropTypes.string,
    fontSizeHandle: PropTypes.string,
    fontSizeDescription: PropTypes.string,
    textColorName: PropTypes.string,
    textColorHandle: PropTypes.string,
    textColorDescription: PropTypes.string,
    justifyContent: PropTypes.string,
    backgroundColor: PropTypes.string,
    padding: PropTypes.string,
    paddingDescription: PropTypes.string,
    borderRadius: PropTypes.string,
    height: PropTypes.string,
    divAnimation: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    isExternalLink: PropTypes.bool,
    blockWidth: PropTypes.string, 
};

export default LinkBlock;
