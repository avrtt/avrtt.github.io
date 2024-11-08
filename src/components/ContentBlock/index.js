import React from 'react';
import PropTypes from 'prop-types';
import M from '../Markdown';

const ContentBlock = ({
    title,
    emoji,
    description,
    fontSize = '24px',
    fontSizeTitle = '26px',
    fontSizeEmoji = '45px',
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
    textAlignEmoji = 'left',
}) => {
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
    }

    const titleStyle = {
        fontSize: fontSizeTitle,
        textAlign: textAlignTitle,
        color: titleColor,
        fontWeight: 'bold',
    }

    const emojiStyle = {
        fontSize: fontSizeEmoji,
        textAlign: textAlignEmoji,
        transform: 'translateY(50%)',
        marginBottom: '0.4em',
        marginTop: '-1.4em',
        marginLeft: '-0.2em',
        marginRight: '-0.2em',
    }

    const descriptionStyle = {
        padding: paddingDescription,
    }

  return (
    <div style={blockStyle} className="contentBlock">
        {title && <p style={titleStyle}>{title}</p>}
        {emoji && <p style={emojiStyle}>{emoji}</p>}
        {description && <span style={descriptionStyle}><M text={description}/></span>}
    </div>
  );
};

ContentBlock.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    fontSize: PropTypes.string,
    fontSizeTitle: PropTypes.string,
    fontSizeEmoji: PropTypes.string,
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
