/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import * as React from "react"
import SEO from '../components/seo'
import Home from './main/home'

const App = () => {
  return (
      <Home />
  )
}

export default App

export const Head = () => (
	<SEO 
		title="Home - avrtt.blog"
		description="Vlad Averett's personal all-in-one website — a reinvention of old school blogging, a community hub, an info page and a course platform dedicated to artificial intelligence, research, travel, nomadic lifestyle, observations, reflections and daily life notes."
		keywords={["personal blog", "community", "course", "data science", "machine learning", "deep learning", "couchsurfing", "course platform", "study notes", "thoughts", "research", "machine learning research", "artificial intelligence", "AI research", "freelancer blog", "info page", "travel blog"]}
		image={""}
		canonicalUrl="https://avrtt.github.io/"
		schemaType="WebPage"
	/>
)

