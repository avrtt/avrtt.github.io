/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import russian from "../../images/flags/russia.svg"
import englishRussian from "../../images/flags/us_russia.svg"

interface LinkBlockProps {
    link: string;
    isExternalLink?: boolean;
    inactive?: boolean;
    isRussian?: boolean;
    isEnglishAndRussian?: boolean;
    icon: string;
    categoryEmoji?: string;
    categoryName?: string;
    iconSize?: string;
    name?: string;
    handle?: string;
    description?: string;
    fontSizeName?: string;
    fontSizeHandle?: string;
    fontSizeDescription?: string;
    textColorName?: string;
    textColorHandle?: string;
    textColorDescription?: string;
    justifyContent?: string;
    backgroundColor?: string;
    padding?: string;
    paddingDescription?: string;
    borderRadius?: string;
    divAnimation?: boolean;
    blockWidth?: string;
}

const LinkBlock = ({
    link,
    isExternalLink = true,
    inactive = false,
    isRussian = false,
    isEnglishAndRussian = false,
    icon,
    categoryEmoji = '',
    categoryName = '',
    iconSize = '55px',
    name = 'Untitled link',
    handle,
    description = '',
    fontSizeName = '18px',
    fontSizeHandle = '14px',
    fontSizeDescription = '14px',
    textColorName = '#000000',
    textColorHandle = '#696969',
    textColorDescription = '#696969',
    justifyContent = 'flex-start',
    backgroundColor = '#ffffff',
    padding = '20px 20px 10px 20px',
    paddingDescription = '0 5px',
    borderRadius = '2vh',
    divAnimation = true
}: LinkBlockProps) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const blockStyle: React.CSSProperties = {
        backgroundColor,
        padding,
        borderRadius,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent,
        transform: inactive ? (`scale(${isHovered && divAnimation ? 1 : 1})`) : (`scale(${isHovered && divAnimation ? 0.97 : 1})`),
        opacity: inactive ? '0.5' : (isHovered ? '0.9' : '1'),
        transition: 'transform 0.1s ease, opacity 0.1s ease',
        boxSizing: 'border-box' as const,
    }

    const blockContentStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
    }

    const iconStyle: React.CSSProperties = {
        width: iconSize,
        height: 'auto',
        marginRight: '0.8vw',
    }

    const textWrapperStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    }

    const nameStyle: React.CSSProperties = {
        fontSize: fontSizeName,
        color: textColorName,
        fontWeight: 'bold',
        marginBottom: '-0.2vw',
    }

    const handleStyle: React.CSSProperties = {
        fontSize: fontSizeHandle,
        color: textColorHandle,
        marginTop: '-0.2vw',
    }

    const descriptionStyle: React.CSSProperties = {
        fontSize: fontSizeDescription,
        color: textColorDescription,
        marginTop: "10px",
        padding: paddingDescription,
        wordWrap: "break-word",
        overflowWrap: "break-word" as const,
        lineHeight: "1.5",
    };

    const inactiveNoticeStyle: React.CSSProperties = {
        fontSize: '15px',
        position: 'absolute',
        right: '15px',
        top: '5px',
    }

    const categoryEmojiStyle: React.CSSProperties = {
        opacity: '1',
        marginLeft: '10px'
    }

    const flagStyle: React.CSSProperties = {
        width: '35px',
        position: 'absolute',
        right: '-8px',
        top: '-8px',
        borderRadius: '6px',
    }

    let isDonate
    if (link === "/donate") { isDonate = true }

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
                        <img title={!inactive ? (isRussian ? "Russian language mostly" : isEnglishAndRussian ? "Bilingual" : undefined) : undefined} style={flagStyle} src={!inactive ? (isRussian ? russian : isEnglishAndRussian ? englishRussian : undefined) : undefined}/>
                        <span style={nameStyle}>
                            {name}
                            <span title={categoryName} style={categoryEmojiStyle}>{inactive || categoryEmoji}</span>
                        </span>
                        <span style={inactiveNoticeStyle}>{inactive && "Inactive"}</span>
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
                        <img title={!inactive ? (isRussian ? "Russian language mostly" : isEnglishAndRussian ? "Bilingual" : undefined) : undefined} style={flagStyle} src={!inactive ? (isRussian ? russian : isEnglishAndRussian ? englishRussian : undefined) : undefined} alt={isDonate ? "" : "country-flag"}/>
                        <span style={nameStyle}>
                            {name}
                            <span title={categoryName} style={categoryEmojiStyle}>{inactive || categoryEmoji}</span>
                        </span>
                        <span style={inactiveNoticeStyle}>{inactive && "Inactive"}</span>
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
