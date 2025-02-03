import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import M from '../Markdown';
import * as styles from "./styles.module.scss";

const ContentBlock = ({
    title,
    emoji,
    emojiGif,
    description,
    fontSize = '24px',
    fontSizeTitle = '26px',
    fontSizeEmoji = '45px',
    gifSizeEmoji = '52.4px',
    backgroundColor = '#ffffff',
    textColor = '#000000',
    titleColor = '#000000',
    padding = '0px',
    paddingDescription = '0 30px',
    alignment = 'left',
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
        let gifTimeout;

        if (isHovered) {
            setShowGif(true);
        } else {
            gifTimeout = setTimeout(() => {
                setShowGif(false);
            }, 200);
        }

        return () => {
            clearTimeout(gifTimeout);
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
        textAlign: alignment,
        borderRadius,
        width,
        height,
        alignItems,
        justifyContent,
        textAlign,
        position: 'relative',
        transform: `scale(${isHovered && divAnimation ? 1.01 : 1})`,
        transition: 'transform 0.1s ease',
    }

    const titleStyle = {
        fontSize: fontSizeTitle,
        textAlign: textAlignTitle,
        color: titleColor,
        fontWeight: 'bold',
    }

    const emojiStyle = {
        fontSize: fontSizeEmoji,
        textAlign: emojiAlign,
        transform: 'translateY(50%)',
        marginBottom: '0.4em',
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
            transform: `translateY(50%) scale(${isHovered ? 1.2 : 1})`,
            marginBottom: '0.763em',
            marginTop: '-2.95em',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            opacity: showGif ? 1 : 0,
        }
    } else if (emojiAlign === "left") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: `translateY(50%) scale(${isHovered ? 1.2 : 1})`,
            marginBottom: '0.763em',
            marginTop: '-2.95em',
            marginLeft: '-0.3em',
            marginRight: 'auto',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            opacity: showGif ? 1 : 0,
        }
    } else if (emojiAlign === "right") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: `translateY(50%) scale(${isHovered ? 1.2 : 1})`,
            marginBottom: '0.763em',
            marginTop: '-2.95em',
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
            {emoji && <p class="noselect" style={emojiStyle}>{emoji}</p>}
            {emojiGif && <img class="noselect" style={emojiGifStyle} src={emojiGif} alt={emoji} />}
            {description && (
                <span style={descriptionStyle}>
                    <M text={description} />
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
            {emoji && <p class="noselect" style={emojiStyle}>{emoji}</p>}
            {emojiGif && <img class="noselect" style={emojiGifStyle} src={emojiGif} alt={emoji} />}
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
    description: PropTypes.string,
    fontSize: PropTypes.string,
    fontSizeTitle: PropTypes.string,
    fontSizeEmoji: PropTypes.string,
    gifSizeEmoji: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    titleColor: PropTypes.string,
    padding: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    borderRadius: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    textAlign: PropTypes.string,
    textAlignTitle: PropTypes.string
};

export default ContentBlock;
