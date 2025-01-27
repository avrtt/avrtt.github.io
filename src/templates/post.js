import React, { useState } from 'react';
import RemoveMarkdown from 'remove-markdown';
import { motion } from 'framer-motion';
import PostBanner from '../components/PostBanner';
import PostBottom from'../components/PostBottom'; 
import { wordsPerMinuteAdventures, wordsPerMinuteResearch, wordsPerMinuteThoughts } from '../data/commonVariables';
import { graphql } from 'gatsby';
import NotFinishedNotice from "../components/NotFinishedNotice"
import MindfuckeryNotice from "../components/MindfuckeryNotice"
import RewriteNotice from "../components/RewriteNotice"
import OffensiveNotice from "../components/OffensiveNotice"
import ProfanityNotice from "../components/ProfanityNotice"
import PoliticsNotice from "../components/PoliticsNotice"
import CognitohazardNotice from "../components/CognitohazardNotice"
import HiddenNotice from "../components/HiddenNotice"

function formatReadTime(minutes) {
  if (minutes <= 10) return '~10 min';
  if (minutes <= 20) return '~20 min';
  if (minutes <= 30) return '~30 min';
  if (minutes <= 40) return '~40 min';
  if (minutes <= 50) return '~50 min';
  if (minutes <= 60) return '~1 h';

  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;

  if (remainder <= 30) {
    return `~${hours}${remainder > 0 ? '.5' : ''} h`;
  }
  return `~${hours + 1} h`;
}

const TableOfContents = ({ toc }) => {
  if (!toc || !toc.items) return null;

  const handleClick = (e, url) => {
    e.preventDefault();
    const targetId = url.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className="toc">
      <ul>
        {toc.items.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              onClick={(e) => handleClick(e, item.url)}
            >
              {item.title}
            </a>
            {item.items && <TableOfContents toc={{ items: item.items }} />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function PostTemplate({ data: { mdx, allMdx }, children }) {

  const { frontmatter, body, tableOfContents } = mdx;
  const index = frontmatter.index;
  const slug = frontmatter.slug;
  const section = slug.split('/')[1];
  const posts = allMdx.nodes.filter(post => post.frontmatter.slug.includes(`/${section}/`));
  const sortedPosts = posts.sort((a, b) => a.frontmatter.index - b.frontmatter.index);
  const currentIndex = sortedPosts.findIndex(post => post.frontmatter.index === index);
  const nextPost = sortedPosts[currentIndex + 1];
  const lastPost = sortedPosts[currentIndex - 1];
  const keyCurrent = /[^/]*$/.exec(frontmatter.slug)[0];
  
  const [isWideLayout, setIsWideLayout] = useState(frontmatter.flagWideLayoutByDefault);

  const toggleLayout = () => {
    setIsWideLayout(!isWideLayout);
  };

  var wordsPerMinute
  if (section == "adventures") {
    wordsPerMinute = wordsPerMinuteAdventures
  } else if (section == "research") {
    wordsPerMinute = wordsPerMinuteResearch
  } else if (section == "thoughts") {
    wordsPerMinute = wordsPerMinuteThoughts
  }

  // calculating read time
  const plainTextBody = RemoveMarkdown(body)
    .replace(/import .*? from .*?;/g, '') // don't count imports
    .replace(/<.*?>/g, '') // don't count html tags
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '') // don't count multi-line comments
    .trim();
  const wordCount = plainTextBody.split(/\s+/).length;
  const baseReadTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  const extraTime = frontmatter.extraReadTimeMin || 0; 
  const totalReadTime = baseReadTimeMinutes + extraTime;
  const readTime = formatReadTime(totalReadTime);

  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.15}}>
      
      <PostBanner
        postNumber={frontmatter.index} 
        date={frontmatter.date}
        updated={frontmatter.updated}
        readTime={readTime}
        difficulty={frontmatter.difficultyLevel}
        title={frontmatter.title}
        desc={frontmatter.desc}
        banner={frontmatter.banner}
        section={section}
        postKey={keyCurrent}
      />

      <div class="postBody">
        <TableOfContents toc={tableOfContents} />
      </div>
      <br/>
      <div  
        style={{ 
          margin: "0 10% -2vh 30%", 
          textAlign: "right"
        }}>
        <motion.button 
          className="postButton noselect" 
          onClick={toggleLayout}
          whileTap={{ scale: 0.93 }}
        >
          <motion.div
            className="buttonTextWrapper"
            key={isWideLayout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isWideLayout ? "Switch to default layout" : "Switch to wide layout"}
          </motion.div>
        </motion.button>
      </div>
      <br/>
      <div 
        class="postBody" 
        style={{ 
          margin: isWideLayout ? "0 -14%" : "",
          maxWidth: isWideLayout ? "200%" : "",
          transition: "margin 0.5s ease, max-width 0.5s ease",
      }}>
        {frontmatter.isDraft ? <NotFinishedNotice/> : ""}
        {frontmatter.flagMindfuckery ? <MindfuckeryNotice/> : ""}
        {frontmatter.flagRewrite ? <RewriteNotice/> : ""}
        {frontmatter.flagOffensive ? <OffensiveNotice/> : ""}
        {frontmatter.flagProfane ? <ProfanityNotice/> : ""}
        {frontmatter.flagPolitical ? <PoliticsNotice/> : ""}
        {frontmatter.flagCognitohazard ? <CognitohazardNotice/> : ""}
        {frontmatter.flagHidden ? <HiddenNotice/> : ""}
        {children}
      </div>

      <PostBottom nextPost={nextPost} lastPost={lastPost} keyCurrent={keyCurrent} section={section} />

    </motion.div>
  );
}

export default PostTemplate;

export const query = graphql`
  query($id: String!, $section: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        index
        title
        desc
        date
        updated
        extraReadTimeMin
        difficultyLevel
        isDraft
        flagMindfuckery
        flagRewrite
        flagOffensive
        flagProfane
        flagPolitical
        flagCognitohazard
        flagHidden
        flagWideLayoutByDefault
        banner {
          childImageSharp {
            gatsbyImageData(
							formats: [JPG, WEBP], 
							placeholder: BLURRED, 
							quality: 100
						)
          }
        }
        slug
      }
      body
      tableOfContents(maxDepth: 3)
    }
    allMdx(filter: {frontmatter: {slug: {regex: $section}}}) {
      nodes {
        frontmatter {
          index
          slug
          banner {
            childImageSharp {
              gatsbyImageData(
                formats: [JPG, WEBP],
                placeholder: BLURRED,
                quality: 100
              )
            }
          }
        }
      }
    }
  }
`;


