import React, { useState, useEffect } from 'react';
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import RemoveMarkdown from 'remove-markdown';
import { motion } from 'framer-motion';
import SEO from "../components/seo"
import PostBanner from '../components/PostBanner';
import PostBottom from'../components/PostBottom'; 
import { wordsPerMinuteAdventures, wordsPerMinuteResearch, wordsPerMinuteThoughts } from '../data/commonVariables';
import { graphql } from 'gatsby';
import NotFinishedNotice from "../components/NotFinishedNotice"
import MindfuckeryNotice from "../components/MindfuckeryNotice"
import RewriteNotice from "../components/RewriteNotice"
import OffensiveNotice from "../components/OffensiveNotice"
import ProfanityNotice from "../components/ProfanityNotice"
import MultilingualNotice from "../components/MultilingualNotice"
import UnreliablyNotice from "../components/UnreliablyNotice"
import PoliticsNotice from "../components/PoliticsNotice"
import CognitohazardNotice from "../components/CognitohazardNotice"
import HiddenNotice from "../components/HiddenNotice"
import PartOfCourseNotice from "../components/PartOfCourseNotice"
import * as stylesButtonsCommon from "../styles/buttons_common.module.scss"
import * as stylesCustomPostLayouts from "../styles/custom_post_layouts.module.scss"
import * as stylesTableOfContents from "../styles/table_of_contents.module.scss"
import * as stylesTagBadges from "../styles/tag_badges.module.scss";

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
    <nav className={stylesTableOfContents.toc}>
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
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLayout = () => {
    setIsWideLayout(!isWideLayout);
  };

  useEffect(() => {
    setIsAnimating(true);    
    const timer = setTimeout(() => setIsAnimating(false), 340);
    return () => clearTimeout(timer);
  }, [isWideLayout]);

  var wordsPerMinute
  if (section === "adventures") {
    wordsPerMinute = wordsPerMinuteAdventures
  } else if (section === "research") {
    wordsPerMinute = wordsPerMinuteResearch
  } else if (section === "thoughts") {
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
        isMindfuckery={frontmatter.flagMindfuckery}
        mainTag={frontmatter.mainTag}
      />

      <div style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        flexWrap: "wrap", 
        maxWidth: "75%", 
        marginLeft: "auto",
        paddingRight: "1vw",
        marginTop: "-6vh",
        marginBottom: "4vh",
      }}>
        {frontmatter.otherTags.map((tag, index) => (
          <span key={index} className={`noselect ${stylesTagBadges.tagPosts}`} style={{ margin: "0 5px 5px 0" }}>
            {tag}
          </span>
        ))}
      </div>

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
          class="noselect" className={stylesCustomPostLayouts.postButton}
          id={stylesCustomPostLayouts.postLayoutSwitchButton}
          onClick={toggleLayout}
          whileTap={{ scale: 0.93 }}
        >
          <motion.div
            className={stylesButtonsCommon.buttonTextWrapper}
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
          transition: "margin 1s ease, max-width 1s ease, padding 1s ease",
      }}>
        <div className={`${stylesCustomPostLayouts.textContent} ${isAnimating ? stylesCustomPostLayouts.fadeOut : stylesCustomPostLayouts.fadeIn}`}>
          {frontmatter.flagDraft ? <NotFinishedNotice/> : ""}
          {frontmatter.indexCourse ? <PartOfCourseNotice index={frontmatter.indexCourse} category={frontmatter.courseCategoryName} /> : "" }
          {frontmatter.flagMindfuckery ? <MindfuckeryNotice/> : ""}
          {frontmatter.flagRewrite ? <RewriteNotice/> : ""}
          {frontmatter.flagOffensive ? <OffensiveNotice/> : ""}
          {frontmatter.flagProfane ? <ProfanityNotice/> : ""}
          {frontmatter.flagMultilingual ? <MultilingualNotice/> : ""}
          {frontmatter.flagUnreliably ? <UnreliablyNotice/> : ""}
          {frontmatter.flagPolitical ? <PoliticsNotice/> : ""}
          {frontmatter.flagCognitohazard ? <CognitohazardNotice/> : ""}
          {frontmatter.flagHidden ? <HiddenNotice/> : ""}
          {children}
        </div>
      </div>

      <PostBottom nextPost={nextPost} lastPost={lastPost} keyCurrent={keyCurrent} section={section} />

    </motion.div>
  );
}

export default PostTemplate;

export function Head({ data }) {
  const { frontmatter } = data.mdx

  const title = frontmatter.titleSEO || frontmatter.title
  const titleOG = frontmatter.titleOG || title
  const titleTwitter = frontmatter.titleTwitter || title 
  const description = frontmatter.descSEO || frontmatter.desc
  const descriptionOG = frontmatter.descOG || description
  const descriptionTwitter = frontmatter.descTwitter || description
  const schemaType = frontmatter.schemaType || "BlogPosting"
  const keywords = frontmatter.keywordsSEO
  const datePublished = frontmatter.date
  const dateModified = frontmatter.updated || datePublished
  const imageOG = frontmatter.imageOG || frontmatter.banner?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
  const imageAltOG = frontmatter.imageAltOG || descriptionOG
  const imageTwitter = frontmatter.imageTwitter || imageOG
  const imageAltTwitter = frontmatter.imageAltTwitter || descriptionTwitter
  const canonicalUrl = frontmatter.canonicalURL
  const flagHidden = frontmatter.flagHidden || false
  const mainTag = frontmatter.mainTag || "Posts"
  const section = frontmatter.slug.split('/')[1] || "posts"
  const type = "article"

  const { siteUrl } = useSiteMetadata()

  const breadcrumbJSON = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": mainTag,
        "item": `${siteUrl}/${frontmatter.slug.split('/')[1]}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `${siteUrl}${frontmatter.slug}`
      }
    ]
  }

  return (
    <SEO
      title={title + " - avrtt.blog"}
      titleOG={titleOG}
      titleTwitter={titleTwitter}
      description={description}
      descriptionOG={descriptionOG}
      descriptionTwitter={descriptionTwitter}
      schemaType={schemaType}
      keywords={keywords}
      datePublished={datePublished}
      dateModified={dateModified}
      imageOG={imageOG}
      imageAltOG={imageAltOG}
      imageTwitter={imageTwitter}
      imageAltTwitter={imageAltTwitter}
      canonicalUrl={canonicalUrl}
      flagHidden={flagHidden}
      mainTag={mainTag}
      section={section}
      type={type}
    >
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJSON)}
      </script>
    </SEO>
  )
}

export const query = graphql`
  query($id: String!, $section: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        index
        indexCourse
        title
        titleSEO
        titleOG
        titleTwitter
        courseCategoryName
        desc
        descSEO
        descOG
        descTwitter
        date
        updated
        extraReadTimeMin
        difficultyLevel
        flagDraft
        flagMindfuckery
        flagRewrite
        flagOffensive
        flagProfane
        flagMultilingual
        flagUnreliably
        flagPolitical
        flagCognitohazard
        flagHidden
        flagWideLayoutByDefault
        schemaType
        mainTag
        otherTags
        keywordsSEO
        banner {
          childImageSharp {
            gatsbyImageData(
							formats: [JPG, WEBP], 
							placeholder: BLURRED, 
							quality: 100
						)
          }
        }
        imageOG
        imageAltOG
        imageTwitter
        imageAltTwitter
        canonicalURL
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


