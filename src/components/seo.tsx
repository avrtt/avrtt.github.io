/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import icon from "../images/icon.png"
import photoAbout from "../images/about/photoAbout.jpg";

function convertToISO(dateString: string): string {
  const [day, month, year] = dateString.split('.').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toISOString();
}

interface SchemaProps {
  schemaType: "Article" | "BlogPosting" | "WebPage" | "ContactPage" | "Course";
  title: string;
  description: string;
  author: string;
  photo: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
  image?: string;
  siteName: string;
  siteUrl: string;
  siteLogo: string;
  keywords: string[] | string;
  section: string;
}

const generateSchema = ({
  schemaType,
  title,
  description,
  author,
  photo,
  datePublished,
  dateModified,
  url,
  image,
  siteName,
  siteUrl,
  siteLogo,
  keywords,
  section,
}: SchemaProps): Record<string, any> => {

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    url,
    description,
  }

  if (schemaType === "Article" || schemaType === "BlogPosting") {
    return {
      ...baseSchema,
      headline: title,
      image: image ? [image] : undefined,
      datePublished: datePublished || undefined,
      dateModified: dateModified || datePublished || undefined,
      articleSection: section,
      author: {
        "@type": "Person",
        name: author,
        image: photo,
        description: "Traveler, content creator, data scientist, AI researcher, developer, musician.",
        url: `${siteUrl}/about`,
        sameAs: [
          "https://youtube.com/@vladaverett",
          "https://instagram.com/avrttv",
          "https://twitter.com/vladaverett",
          "https://tiktok.com/@vladaverett",
          "https://github.com/avrtt",
          "https://facebook.com/vladaverett",
          "https://youtube.com/@avheuristics",
          "https://t.me/venturingforth",
          "https://t.me/avheuristics",
          "https://kaggle.com/lenferdetroud",
          "https://couchsurfing.com/people/averett",
          "https://youtube.com/@noiserett",
          "https://facebook.com/averett.freelance",
          "https://facebook.com/avrttblog",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: siteLogo,
        },
      },
      mainEntityOfPage: url,
      keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords
    }
  }

  return {
    ...baseSchema,
    name: title,
  }
}

interface SEOProps {
  title?: string;
  titleOG?: string;
  titleTwitter?: string;
  description?: string;
  descriptionOG?: string;
  descriptionTwitter?: string;
  schemaType?: "Article" | "BlogPosting" | "WebPage" | "CollectionPage" | "Person" | "ContactPage" | "Course";
  keywords?: string[] | string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  siteUrl?: string;
  siteName?: string;
  author?: string;
  twitterUsername?: string;
  facebookUsername?: string;
  imageOG?: string;
  imageAltOG?: string;
  imageTwitter?: string;
  imageAltTwitter?: string;
  imageWidth?: string;
  imageHeight?: string;
  canonicalUrl?: string;
  flagHidden?: boolean;
  section?: string;
  mainTag?: string;
  type?: string; // for og
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  titleOG,
  titleTwitter,
  description,
  descriptionOG,
  descriptionTwitter,
  schemaType = "WebPage",
  keywords,
  datePublished,
  dateModified,
  image,
  siteUrl,
  siteName,
  author,
  twitterUsername,
  facebookUsername,
  imageOG,
  imageAltOG,
  imageTwitter,
  imageAltTwitter,
  imageWidth,
  imageHeight,
  canonicalUrl,
  flagHidden = false,
  section,
  mainTag,
  type = "website", // for og
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl: defaultSiteUrl,
    siteName: defaultSiteName,
    author: defaultAuthor,
    twitterUsername: defaultTwitterUsername,
    facebookUsername: defaultFacebookUsername,
  } = useSiteMetadata()

  // fallbacks
  const seoTitle = title || defaultTitle
  const ogTitle = titleOG || seoTitle
  const twTitle = titleTwitter || seoTitle
  const seoDescription = description || defaultDescription
  const ogDescription = descriptionOG || seoDescription
  const twDescription = descriptionTwitter || seoDescription
  const seoImage = image
    ? (image.startsWith("http") ? image : `${defaultSiteUrl}${image}`)
    : `${defaultSiteUrl}${defaultImage}`
  const ogImage = imageOG || seoImage
  const ogImageAlt = imageAltOG || ogDescription
  const twImage = imageTwitter || seoImage
  const twImageAlt = imageAltTwitter || twDescription
  const seoSiteUrl = siteUrl || defaultSiteUrl
  const seoSiteName = siteName || defaultSiteName
  const seoCanonical = canonicalUrl || seoSiteUrl
  const seoAuthor = author || defaultAuthor
  const seoDatePublished = datePublished ? convertToISO(datePublished) : new Date().toISOString()
  const seoDateModified = dateModified ? convertToISO(dateModified) : seoDatePublished
  const seoTwitterUsername = twitterUsername || defaultTwitterUsername
  const seoFacebookUsername = facebookUsername || defaultFacebookUsername
  const seoKeywords = keywords || [""]
  const seoTag = mainTag || ""
  const seoSection = section || ""
  
  let seoSectionClarified = "";
  if (section === "adventures") { 
    seoSectionClarified = "Travel";
  } else if (section === "research") { 
    seoSectionClarified = "Technology";
  } else if (section === "thoughts") { 
    seoSectionClarified = "Thoughts";
  }

  const schemaJSON = generateSchema({
    schemaType,
    title: seoTitle,
    description: seoDescription,
    author: seoAuthor,
    photo: photoAbout,
    datePublished: seoDatePublished,
    dateModified: seoDateModified,
    url: seoCanonical,
    image: seoImage,
    siteName: seoSiteName,
    siteUrl: seoSiteUrl,
    siteLogo: icon,
    keywords: seoKeywords,
    section: seoSection,
  })

  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />

      {seoCanonical && <link rel="canonical" href={seoCanonical} />}

      {seoKeywords && (
        <meta
          name="keywords"
          content={Array.isArray(seoKeywords) ? seoKeywords.join(", ") : seoKeywords}
        />
      )}

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:updated_time" content={seoDateModified} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:site_name" content={seoSiteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
      <meta property="og:image:alt" content={ogImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      {seoTwitterUsername && (<meta name="twitter:creator" content={seoTwitterUsername} />)}
      {seoTwitterUsername && (<meta name="twitter:site" content={seoTwitterUsername} />)}
      <meta name="twitter:title" content={twTitle} />
      <meta name="twitter:description" content={twDescription} />
      {twImage && <meta name="twitter:image" content={twImage} />}
      <meta name="twitter:image:alt" content={twImageAlt} />

      {type === "article" && (<meta property="article:published_time" content={seoDatePublished} />)}
      {type === "article" && (<meta property="article:modified_time" content={seoDateModified} />)}
      {type === "article" && seoSectionClarified && (<meta property="article:section" content={seoSectionClarified} />)}
      {type === "article" && seoAuthor && (<meta property="article:author" content={seoAuthor} />)}
      {type === "article" && seoFacebookUsername && (<meta property="article:publisher" content={`https://www.facebook.com/${seoFacebookUsername}`} />)}
      {type === "article" && seoTag && (<meta property="article:tag" content={seoTag} />)}
      {type === "article" && Array.isArray(seoKeywords) && 
        seoKeywords.map((keyword, i) => (
          <meta key={i} property="article:tag" content={keyword} />
        ))
      }

      <meta name="robots" content={flagHidden ? "noindex, nofollow" : "index, follow"} />

      <script type="application/ld+json">
        {JSON.stringify(schemaJSON)}
      </script>

      {children}
    </>
  )
}

export default SEO
