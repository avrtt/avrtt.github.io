import React, { useEffect } from "react";
import { navigate } from 'gatsby'
import NotFound from '../components/NotFound'

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
export const Head = () => <title>404 - avrtt.blog</title>