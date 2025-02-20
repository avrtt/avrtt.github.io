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
		keywords={["blog", "community", "course", "data science", "machine learning", "deep learning", "couchsurfing", "travel", "course platform", "study notes", "thoughts", "research", "machine learning research", "artificial intelligence", "AI research", "freelancer blog", "info page"]}
		image={""}
		canonicalUrl="https://avrtt.github.io/"
		schemaType="WebSite"
		children
	/>
)

