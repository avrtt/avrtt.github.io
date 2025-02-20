import React, { useEffect } from "react";
import { navigate } from 'gatsby'
import NotFound from '../components/NotFound'
import SEO from '../components/seo'

const NotFoundRedirect = () => {
  useEffect(() => {
    navigate('/frog')
  }, [])
  return (
    <main>
      <NotFound/>
    </main>
  )
}

export default NotFoundRedirect

export const Head = () => (
  <SEO 
    title="404 - avrtt.blog"
    flagHidden={true}
  />
)
