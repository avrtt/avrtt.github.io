/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import PostsLastNext from '../PostsLastNext';
import { TelegramComments } from 'react-telegram-comments';
import ChannelPreview from '../ChannelPreview';
import PostDonate from '../PostDonate';
import VenturingforthPicture from '../../images/posts/venturingforth.jpg';
import AvheuristicsPicture from '../../images/posts/avheuristics.jpg';
import * as stylesCommentsSections from '../../styles/comments_sections.module.scss';

const PostBottom: React.FC<PostBottomProps> = ({ nextPost, lastPost, keyCurrent, section }) => {

  var tgLink, ytLink, tgChannelPicture, tgChannelName, tgChannelDesc

  if (section === "adventures") {
    tgLink = "venturingforth"; 
    ytLink = "UUSGEQmkFLhS29sTSaFhqCIQ";
    tgChannelPicture = VenturingforthPicture;
    tgChannelName = "Venturing forth!";
    tgChannelDesc = "Subscribe to my Telegram channel for updates in the Adventures section and more travel content";
  } else if (section === "research") {
    tgLink = "avheuristics";  
    ytLink = "UUpPtaqqxzFqm9rZAh2xC5OA";
    tgChannelPicture = AvheuristicsPicture;
    tgChannelName = "Averett's Heuristics";
    tgChannelDesc = "Subscribe to my Telegram channel for updates in the Research section and more tech content";
  } else if (section === "thoughts") {
    tgLink = "venturingforth";  
    ytLink = "UUSGEQmkFLhS29sTSaFhqCIQ";
    tgChannelPicture = VenturingforthPicture;
    tgChannelName = "Venturing forth!";
    tgChannelDesc = "Subscribe to my Telegram channel for updates in the Thoughts section and more content";
}

  return (
	  <>
      <PostsLastNext nextPost={nextPost} lastPost={lastPost} section={section} />
      <PostDonate />
      <div className={stylesCommentsSections.chatWrapper}>
        <TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId={keyCurrent} showDislikes={true} />
      </div>
	    <ChannelPreview tgLink={tgLink} ytLink={ytLink} tgChannelPicture={tgChannelPicture} tgChannelName={tgChannelName} tgChannelDesc={tgChannelDesc} />
	  </>
  );
};

export default PostBottom;


