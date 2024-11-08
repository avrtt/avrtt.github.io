import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import M from '../Markdown';

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
}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        const timeoutId = setTimeout(() => setIsHovered(false), 2000);
        setHoverTimeout(timeoutId);
    };

    useEffect(() => {
        return () => {
            if (hoverTimeout) clearTimeout(hoverTimeout);
        };
    }, [hoverTimeout]);

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
    }

    let emojiGifStyle

    if (emojiAlign === "center") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: 'translateY(50%)',
            marginBottom: '0.763em',
            marginTop: '-2.95em',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: isHovered ? 'block' : 'none',
        }
    } else if (emojiAlign === "left") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: 'translateY(50%)',
            marginBottom: '0.763em',
            marginTop: '-2.95em',
            display: 'block',
            marginLeft: '-0.3em',
            marginRight: 'auto',
            display: isHovered ? 'block' : 'none',
        }
    } else if (emojiAlign === "right") {
        emojiGifStyle = {
            width: gifSizeEmoji,
            transform: 'translateY(50%)',
            marginBottom: '0.763em',
            marginTop: '-2.95em',
            display: 'block',
            marginLeft: 'auto',
            marginRight: '-0.3em',
            display: isHovered ? 'block' : 'none',
        }
    }

    const descriptionStyle = {
        padding: paddingDescription,
    }

    return (
        <div
            style={blockStyle}
            className="contentBlock"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title && <p style={titleStyle}>{title}</p>}
            {emoji && <p style={emojiStyle}>{emoji}</p>}
            {emojiGif && <img style={emojiGifStyle} src={emojiGif} alt={emoji} />}
            {description && (
                <span style={descriptionStyle}>
                    <M text={description} />
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
