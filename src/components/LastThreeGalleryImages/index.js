import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';
import * as styles from './styles.module.scss'

const LastThreeGalleryImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "gallery" }
        }
        sort: { birthtime: DESC }
        limit: 3
      ) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 720
              height: 720
              quality: 90
            )
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      {data.allFile.nodes.map(file => {
        const imageData = getImage(file.childImageSharp)
        return (
            <Link to="/gallery">
                <div
                    key={file.id}
                    className={styles.image}
                        style={{
                        width: '100%',
                        height: '30vh',
                        overflow: 'hidden',
                    }}
                >
                    <GatsbyImage
                        image={imageData}
                        alt="Gallery"
                        style={{ width: '100%', height: '100%' }}
                        imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
            </Link>
        )
      })}
    </div>
  )
}

export default LastThreeGalleryImages