import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from "gatsby";
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import { courseLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const TITLE = 'Course - avrtt.blog'

const Course = ({ data }) => {
	const posts = data.allMdx.nodes
    	.filter(post => post.frontmatter.indexCourse !== null && post.frontmatter.indexCourse !== undefined)
    	.sort((a, b) => a.frontmatter.indexCourse - b.frontmatter.indexCourse)

	const groupedByCategory = posts.reduce((acc, post) => {
		const category = post.frontmatter.courseCategoryName || "Uncategorized"
		if (!acc[category]) {
			acc[category] = []
		}
		acc[category].push(post)
		return acc
	}, {})

	const sortedCategories = Object.entries(groupedByCategory).sort(([categoryA], [categoryB]) => {
		if (categoryA === "Uncategorized") return 1;
		if (categoryB === "Uncategorized") return -1;
		return categoryA.localeCompare(categoryB);
	})

	const collRef = useRef([]);

    useEffect(() => {
        const coll = collRef.current;
        coll.forEach((element) => {
            if (element) {
                element.addEventListener("click", toggleContent)
            }
        })
        return () => {
            coll.forEach((element) => {
                if (element) {
                    element.removeEventListener("click", toggleContent)
                }
            })
        }
    }, [])

	const toggleContent = (event) => {
        const content = event.target.nextElementSibling;
        event.target.classList.toggle("activeSpoiler");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

	return (
		<motion.div className='noselect'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>
  
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>

			<div class="courseBody">
				<M text="# CONTENTS"/>
				{sortedCategories.map(([category, posts]) => (
					<div key={category} className="courseCategoryName">
						<h2>{category}</h2>
						<ul>
							{posts.map(post => (
								<div>
									<span>{post.frontmatter.indexCourse}. </span>
									<Link to={post.frontmatter.slug}>{post.frontmatter.titleCourse}</Link>
								</div>
							))}
						</ul>
					</div>
				))}
			</div>
			<div class="lastUpdatedCourse">UPDATED ON {courseLastUpdated}</div>

	  	</motion.div>
	);
};
  
export const query = graphql`
  	query CoursePosts {
		allMdx(
    		filter: {frontmatter: {slug: {regex: "/^/research//"}}}
    		sort: {frontmatter: {indexCourse: DESC}}
  		) {
      		nodes {
        		id
				frontmatter {
					indexCourse
					titleCourse
					courseCategoryName
					slug
        		}
      		}
    	}
	}
`;

export default Course;
