import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from "gatsby";
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import StickerPack from '../../components/StickerPack';
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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>
  
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>

			<div class="courseBody">
				<M text="Here you can find tutorials on machine learning, data science and several other fields organized as a sequential, in-depth theoretical course presented in modules. I've created it single-handedly by studying and summarizing a huge amount of material, and launched together with this blog as open source."/>
				<p>I also have plans to make video tutorials based on <Link to="/research">Research</Link> posts for my YouTube channel <Link to="https://www.youtube.com/@avheuristics">@avheuristics</Link> in the future.</p>
				<div>
					<button className="spoilerButton noselect" ref={(el) => collRef.current.push(el)}>
						&nbsp;&nbsp;
						<span className="spoilerText"></span>
						More about this course
						&nbsp;&nbsp;
					</button>
					<div className="spoilerContentWrapper">
						<div className="spoilerContentGoals">
							<M text="So far, the course is **completely theoretical** and covers a wide range of advanced topics taken from different online lectures, textbooks, articles and my university classes, including sophisticated concepts of AI algorithms, data analysis and statistics. This is a fully-fledged textbook designed to help students, but it doesn't feature homework or quizzes."/>
							<M text="Fundamental concepts are covered superficially. For better understanding, it's recommended to first familiarize yourself with the basics of **linear algebra**, **calculus**, **statistics** and **programming**, even though it's not necessary."/>
							<M text="I decided to integrate the course into this personal website to achieve better popularization, but it will probably be moved to a separate one in the future."/>
							<p>The course content is largely compiled from texts of the <Link to="/research">Research</Link>, or simply pulled as posts automatically, however, the contents may reference any sources.</p>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div class="courseBody noselect">
				<M text="# 📋 CONTENTS"/>
				<M text="0. [Where the course began: an introduction about AI and research](/research/on_research)"/>
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
			<br/>
			<div class="courseBody">
				<M text="# 🌱 UPDATES & CONTRIBUTION"/>
				<M text="The course keeps expanding while outdated information gets revised. Writing new chapters is a fairly time-consuming process, so if you'd like to see this educational project evolve, you're welcome to contribute. There are plenty of ways:"/>
				<M text={`
- **Report** bugs, typos, grammar, syntax errors (LaTeX, Markdown, code blocks), semantic and logical inaccuracies, narrative mistakes, etc.
- **Suggest** improvements or ideas (code optimization, readability, UX, content to include, etc.)
- **Modify** the source code by opening a pull request (expand topics, add details, fix something, etc.)
- **Create** new pages, sub-chapters, practical exercises, code notebooks, homework, quizzes, etc.
				`}/>
				<M text="Please use [GitHub Issues](https://github.com/avrtt/avrtt.github.io/issues/new) for reports and suggestions. You can open a new PR [here](https://github.com/avrtt/avrtt.github.io/compare) and check accepted changes [here](https://github.com/avrtt/avrtt.github.io/pulls?q=is%3Aclosed). For more information, see the website's [README.md](https://github.com/avrtt/avrtt.github.io/blob/main/README.md)."/>
				<p>Your contributions are important in building accessible education in AI (and beyond). GitHub profiles of people who contribute significantly will be listed on this page. <StickerPack sticker="dog_nerd" /></p>
				<M text="Questions? [Text me](/contact)!"/>
				<br/>
				<M text="### Adding new pages"/>
				<p>If you're going to add a new article (lesson), you may link to a third-party resource. The content of the article doesn't have to be a part of <Link to="/research">Research</Link>, but it must comply with copyright and coherence in the context of the entire course.</p>
				<M text="Research posts are written in `.mdx` format and located [here](https://github.com/avrtt/avrtt.github.io/tree/main/src/pages/posts/research), while images (banners and post content) are stored [here](https://github.com/avrtt/avrtt.github.io/tree/main/src/images/posts/research). Gatsby's frontmatter must include `indexCourse`, `titleCourse` and `courseCategoryName` to properly display your page in the table of contents."/>
				<br/>
				<M text="### Plans & to-do"/>
				<M text={`
- Finalize unfinished tutorials (with yellow notices)
- Add quizzes (as Quiz component)
- Add homework/practice sections to each tutorial
- Add Jupyter notebooks to each chapter (or most chapters)
- Integrate executable code blocks
- Add more chapters related to AI theory, information theory, statistics, big data processing, geometry estimation, knowledge representation, semi-supervised learning, and beyond!
				`}/>
			</div>
			<br/>
			<div class="courseBody">
				<M text="# ❤️ SUPPORT"/>
				<M text="The course is **free forever**. I've put a huge amount of my free time into this work, wished to make something enormous and helpful for people, and never sought to profit from this endeavor, as I believe that educational materials should be open to everyone. I also believe that earning the people's love is the only right way to earn coins from such projects, so if you found it useful — please consider support beyond contributing."/>
				<p>The easiest way to thank me and speed up development of the course is to <Link to="/donate">donate right here</Link>. <StickerPack sticker="hedgehog" /></p>
			</div>
			<br/>
			<div class="courseBody">
				<M text="# 🙏 ACKNOWLEDGMENTS"/>
				<M text="Many nights — in the light of a dim lamp — I've explored a completely new discipline, which at first seemed unfeasible to me. I must, therefore, express my gratitude to those who guided me through this arduous journey of learning:"/>
				<M text={`
- **Andrew Ng** — for the greatest classic ML course, excellent deep learning Coursera specialization and online lectures at Stanford
- **Victor Kantor**, **Evgeniy Riabenko**, **Evgeniy Sokolov**, **Emeli Dral** — my first lecturers who got me into data science
- **Josh Starmer** — for being the best statistics teacher ever
- **Radoslav Neychev** and **Vladislav Goncharenko** — for excellent and clear lectures and practices at MIPT
- **Konstantin Vorontsov** — for in-depth knowledge in machine learning
- **Sergey Balakirev** — for clearest CS/ML tutorials I've ever seen
- **Alexander Dyakonov** — for courses and his captivating easy-to-read data science blog
- **Yury Kashnitsky** — for his ML course platform with its inspiring community
- **Alexandr Boyko** & **Daniel Bourke** — for making awesome DS/ML roadmaps I've been using
- Wiki of **ITMO** students' notes, Department of Computer Science — for in-depth knowledge in various ML-related topics
- **machinelearning.ru** — for plenty of good classic ML and data mining literature
- and a lot of other teachers at **MIT**, **MIPT** and **Harvard** — for giving free online lectures
				`}/>
{/* 
Deep Learning, Adaptive Computation and Machine Learning series (Goodfellow)
Mathematics for Machine Learning (Deisenroth)
Data Science from Scratch (Grus)
Python Data Science Handbook: Essential Tools for Working with Data (VanderPlas)
Deep Learning with Python (Chollet)
Artificial Intelligence: A Modern Approach (Russell)
Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow (Geron)
*/}
				<M text="Thanks for educating, inspiring, or both."/>
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
