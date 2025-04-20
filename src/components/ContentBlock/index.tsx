/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import M from '../Markdown';
import * as styles from "./styles.module.scss";

interface ContentBlockProps {
    title?: string;
    emoji?: string;
    emojiGif?: string | null;
    description?: React.ReactNode;
    fontSize?: string;
    fontSizeTitle?: string;
    fontSizeEmoji?: string;
    gifSizeEmoji?: string;
    backgroundColor?: string;
    textColor?: string;
    titleColor?: string;
    padding?: string;
    paddingDescription?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    alignItems?: string;
    justifyContent?: string;
    textAlign?: string;
    textAlignTitle?: string;
    emojiAlign?: 'left' | 'center' | 'right';
    divAnimation?: boolean;
    isMarkdown?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
    title,
    emoji,
    emojiGif = null,
    description,
    fontSize = 'clamp(0.9rem, 2.5vw, 1.3rem)',
    fontSizeTitle = '1.625rem',
    fontSizeEmoji = '2.8125rem',
    gifSizeEmoji = '3.275rem',
    backgroundColor = '#ffffff',
    textColor = '#000000',
    titleColor = '#000000',
    padding = '1.8rem 0 0 0',
    paddingDescription = '1.8rem 2rem',
    borderRadius = '2vh',
    width = '100%',
    height = 'auto',
    alignItems = 'left',
    justifyContent = 'center',
    textAlign = 'left',
    textAlignTitle = 'left',
    emojiAlign = 'left',
    divAnimation = true,
    isMarkdown = true
}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [showGif, setShowGif] = useState(false);

    useEffect(() => {
        let gifTimeout: NodeJS.Timeout | undefined;

        if (isHovered) {
            setShowGif(true);
        } else {
            gifTimeout = setTimeout(() => {
                setShowGif(false);
            }, 200);
        }

        return () => {
            if (gifTimeout) clearTimeout(gifTimeout);
        };
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const blockStyle = {
        fontSize,
        backgroundColor,
        color: textColor,
        padding,
        paddingDescription,
        textAlign: textAlign as 'left' | 'center' | 'right',
        borderRadius,
        width,
        height,
        alignItems,
        justifyContent,
        position: 'relative' as const,
        transform: `scale(${isHovered && divAnimation ? 1.01 : 1})`,
        transition: 'transform 0.1s ease',
    }

    const titleStyle = {
        fontSize: fontSizeTitle,
        textAlign: textAlignTitle as 'left' | 'center' | 'right',
        color: titleColor,
        fontWeight: 'bold',
    }

    const emojiStyle = {
        fontSize: fontSizeEmoji,
        textAlign: emojiAlign as 'left' | 'center' | 'right',
        transform: 'translateY(1rem)',
        marginBottom: '0em',
        marginTop: '-1.4em',
        marginLeft: '-0.2em',
        marginRight: '-0.2em',
        opacity: showGif ? '0' : '1',
        transition: 'transform 0.3s ease, opacity 0.2s ease',
    }

    let emojiGifStyle

    if (emojiAlign === "center") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: `translateY(2.4rem) scale(${isHovered ? 1.2 : 1})`,
            marginBottom: '0em',
            marginTop: '-3em',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            opacity: showGif ? 1 : 0,
        }
    } else if (emojiAlign === "left") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: `translateY(2.4rem) scale(${isHovered ? 1.2 : 1})`,
            marginBottom: '0em',
            marginTop: '-3em',
            marginLeft: '-0.3em',
            marginRight: 'auto',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            opacity: showGif ? 1 : 0,
        }
    } else if (emojiAlign === "right") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: `translateY(2.4rem) scale(${isHovered ? 1.2 : 1})`,
            marginBottom: '0em',
            marginTop: '-3em',
            marginLeft: 'auto',
            marginRight: '-0.3em',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            opacity: showGif ? 1 : 0,
        }
    }

    const descriptionStyle = {
        padding: paddingDescription,
    }

    return isMarkdown ? (
        <div
            style={blockStyle}
            className={styles.contentBlock}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title && <p style={titleStyle}>{title}</p>}
            {emoji && <p className={`noselect ${styles.emoji}`} style={emojiStyle}>{emoji}</p>}
            {emojiGif && <img className="noselect desktopOnlySupport" style={emojiGifStyle} src={emojiGif} alt={emoji} />}
            {description && (
                <span style={descriptionStyle}>
                    <M text={typeof description === 'string' ? description : ''} />
                </span>
            )}
        </div>
    ) : (
        <div
            style={blockStyle}
            className={styles.contentBlock}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title && <p style={titleStyle}>{title}</p>}
            {emoji && <p className={`noselect ${styles.emoji}`} style={emojiStyle}>{emoji}</p>}
            {emojiGif && <img className="noselect desktopOnlySupport" style={emojiGifStyle} src={emojiGif} alt={emoji} />}
            {description && (
                <span style={descriptionStyle}>
                    {description}
                </span>
            )}
        </div>
    );
};

ContentBlock.propTypes = {
    title: PropTypes.string,
    emoji: PropTypes.string,
    emojiGif: PropTypes.string,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    fontSize: PropTypes.string,
    fontSizeTitle: PropTypes.string,
    fontSizeEmoji: PropTypes.string,
    gifSizeEmoji: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    titleColor: PropTypes.string,
    padding: PropTypes.string,
    paddingDescription: PropTypes.string,
    borderRadius: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    textAlign: PropTypes.string,
    textAlignTitle: PropTypes.string,
    emojiAlign: PropTypes.oneOf(['left', 'center', 'right']),
    divAnimation: PropTypes.bool,
    isMarkdown: PropTypes.bool
};

export default ContentBlock;
