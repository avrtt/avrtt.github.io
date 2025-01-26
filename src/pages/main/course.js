import React, { useEffect, useRef } from 'react';
import RemoveMarkdown from 'remove-markdown';
import { Helmet } from 'react-helmet';
import { Link, graphql } from "gatsby";
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import StickerPack from '../../components/StickerPack';
import { courseLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const TITLE = 'Course - avrtt.blog'

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

const wordsPerMinute = 180;

function calculateReadTime(body, extraTime = 0) {
	const plainText = RemoveMarkdown(body)
		.replace(/import .*? from .*?;/g, '')
		.replace(/<.*?>/g, '')
		.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
		.trim();
	const wordCount = plainText.split(/\s+/).length;
	const baseReadTime = Math.ceil(wordCount / wordsPerMinute);
	return formatReadTime(baseReadTime + extraTime);
}

const Course = ({ data }) => {

	const posts = data.allMdx.nodes
    	.filter(post => post.frontmatter.indexCourse !== null && post.frontmatter.indexCourse !== undefined)
		.map(post => ({...post.frontmatter, readTime: calculateReadTime(post.body, post.frontmatter.extraReadTimeMin || 0)}))
    	.sort((a, b) => a.indexCourse - b.indexCourse);

	const groupedByCategory = posts.reduce((acc, post) => {
		const category = post.courseCategoryName || "Uncategorized"
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
									<span>{post.indexCourse}. </span>
									<Link to={post.slug}>{post.titleCourse}</Link>
									<span style={{ opacity: 0.4 }}>&nbsp;{post.readTime}</span>
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
				<M text="Please use [GitHub Issues](https://github.com/avrtt/avrtt.github.io/issues/new) for reports and suggestions. You can open a new PR [here](https://github.com/avrtt/avrtt.github.io/compare) and check accepted changes [here](https://github.com/avrtt/avrtt.github.io/pulls?q=is%3Aclosed). For more information, see the repository's [README.md](https://github.com/avrtt/avrtt.github.io/blob/main/README.md)."/>
				<p>Your contributions are important in building accessible education in AI (and beyond). GitHub profiles of people who contribute significantly will be listed on this page. <StickerPack sticker="dog_nerd"/></p>
				<M text="Questions? [Text me](/contact)!"/>
				<br/>
				<M text="### Adding new pages"/>
				<p>If you're going to add a new article (lesson), you may link to a third-party resource. The content of the article doesn't have to be a part of <Link to="/research">Research</Link>, but it must comply with copyright and coherence in the context of the entire course.</p>
				<M text="Research posts are written in `.mdx` format and located [here](https://github.com/avrtt/avrtt.github.io/tree/main/src/pages/posts/research), while images (banners and post content) are stored [here](https://github.com/avrtt/avrtt.github.io/tree/main/src/images/posts/research). Gatsby's frontmatter must include `indexCourse`, `titleCourse` and `courseCategoryName` to properly display your page in the table of contents."/>
				<br/>
				<M text="### Licensing"/>
				<M text="**TL;DR**: you're free to use, distribute and modify [only] the course-related content of this website, as long as you attribute."/>
				<span style={{opacity: "0.5"}}><M text="---"/></span>
				<M text="The *course material* is distributed under a separate [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license, which is a special sublicense extending the permissions of the main website's content protection [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) license. This sublicense allows you to copy and redistribute the *course material* in any medium or format for any purpose (even commercially) and adapt it (remix, transform and build upon the material for any purpose, even commercially) with attribution under the same license (CC BY-SA 4.0)."/>
				<M text="The *course material* covers all the internal pages **referenced** in the table of contents above (i.e., `.mdx` files of the referenced posts located in the [website's GitHub repository](https://github.com/avrtt/avrtt.github.io), including all the `/research` category posts covered in the course), as well as the current page (`/course`). The sublicense applies to the text of the mentioned pages and to the media files on these pages (except for those already copyrighted by someone else)."/>
				<M text="To summarize, you are not permitted to distribute the content of this website's posts either commercially or in a modified form, **but this rule does not apply to course-related content** (as long as you credit, of course)."/>
				<M text="Please note that the source code of the website (i.e. basically all the content of the website's GitHub repository excluding `.mdx` files and the `/course` page) is distributed under a separate (software) license. For more information, refer to the repository's [README.md](https://github.com/avrtt/avrtt.github.io/blob/main/README.md)."/>
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
				<p>The easiest way to thank me and speed up development of the course is to <Link to="/donate">donate right here</Link>. <StickerPack sticker="hedgehog"/></p>
			</div>
			<br/>
			<div class="courseBody">
				<M text="# 🙏 ACKNOWLEDGMENTS"/>
				<M text="Many nights — in the light of a dim lamp — I've explored a completely new discipline, which at first seemed unfeasible to me. I must, therefore, express my gratitude to those who guided me through this arduous journey of learning:"/>
				<M text={`
- **Andrew Ng** — for the greatest classic ML course, excellent deep learning Coursera specialization and online lectures at Stanford
- **Peter Norvig** and **Stuart Russell** — for my favorite & one of the greatest textbooks on AI
- **Victor Kantor**, **Evgeniy Riabenko**, **Evgeniy Sokolov**, **Emeli Dral** — my first lecturers who got me into data science
- **Josh Starmer** — for being the best statistics teacher ever
- **Radoslav Neychev** and **Vladislav Goncharenko** — for excellent and clear lectures and practices at MIPT
- **Ian Goodfellow**, **Yoshua Bengio** and **Aaron Courville** — for their clear deep learning textbook
- **Marc Deisenroth**, **Aldo Faisal** and **Cheng Soon Ong** — for their clear textbook on mathematics for ML
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
Data Science from Scratch (Grus)
Python Data Science Handbook: Essential Tools for Working with Data (VanderPlas)
Deep Learning with Python (Chollet)
Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow (Geron)
Practical Deep Learning for Coders (Howard)
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
					extraReadTimeMin
					slug
        		}
				body
      		}
    	}
	}
`;

export default Course;
