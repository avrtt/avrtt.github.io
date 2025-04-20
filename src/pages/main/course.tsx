/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useRef } from 'react';
import RemoveMarkdown from 'remove-markdown';
import SEO from '../../components/seo'
import { Link, graphql } from "gatsby";
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import S from '../../components/Shine';
import H from '../../components/Highlight';
import Notice from '../../components/Notice';
import MoreCoursesNotice from '../../components/MoreCoursesNotice';
import StickerPack from '../../components/StickerPack';
import { courseLastUpdated } from '../../data/lastUpdated';
import { wordsPerMinuteResearch } from '../../data/commonVariables';
import * as stylesSpoilers from "../../styles/spoilers.module.scss"
import 'animate.css/animate.min.css';

interface PostFrontmatter {
	indexCourse: number;
	titleCourse: string;
	courseCategoryName: string;
	slug: string;
	difficultyLevel: number;
	flagMindfuckery?: boolean;
	extraReadTimeMin?: number;
	readTime?: string;
}

interface PostNode {
	frontmatter: PostFrontmatter;
	body: string;
}

interface CourseData {
	allMdx: {
		nodes: PostNode[];
		group?: Array<{
			fieldValue: string;
		}>;
	};
}

interface CategoryGroup {
	category: string;
	posts: PostFrontmatter[];
}

function formatReadTime(minutes: number): string {
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

function calculateReadTime(body: string, extraTime: number = 0): string {
	const plainText = RemoveMarkdown(body)
		.replace(/import .*? from .*?;/g, '')
		.replace(/<.*?>/g, '')
		.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
		.trim();
	const wordCount = plainText.split(/\s+/).length;
	const baseReadTime = Math.ceil(wordCount / wordsPerMinute);
	return formatReadTime(baseReadTime + extraTime);
}

var difficultyColor: string;

function parseDifficulty(difficultyLevel: number, isMindfuckery?: boolean): string {
	if (isMindfuckery) {
		difficultyColor = "rgb(30, 30, 30)"
	} else {
		if (difficultyLevel === 1) {
			difficultyColor = "rgb(255, 255, 255)"
		} else if (difficultyLevel === 2) {
			difficultyColor = "rgb(255, 206, 71)"
		} else if (difficultyLevel === 3) {
			difficultyColor = "rgb(238, 16, 16)"
		} 
	}
	return difficultyColor
}

const wordsPerMinute = wordsPerMinuteResearch;

// define a custom event handler type for the DOM event
type ToggleContentHandler = (this: HTMLButtonElement, event: MouseEvent) => void;

const Course = ({ data }: { data: CourseData }) => {

	const posts = data.allMdx.nodes
    	.filter(post => post.frontmatter.indexCourse !== null && post.frontmatter.indexCourse !== undefined)
		.map(post => ({...post.frontmatter, readTime: calculateReadTime(post.body, post.frontmatter.extraReadTimeMin || 0)}))
    	.sort((a, b) => a.indexCourse - b.indexCourse);

	const postsWithCategory = posts.map(post => ({
		...post,
		courseCategoryName: post.courseCategoryName || "Uncategorized"
	}));
	
	const sortedPosts = postsWithCategory.sort((a, b) => a.indexCourse - b.indexCourse);

	const groupedSequentially = sortedPosts.reduce((groups: CategoryGroup[], post) => {
		const lastGroup = groups[groups.length - 1];
		if (lastGroup && lastGroup.category === post.courseCategoryName) {
		  lastGroup.posts.push(post);
		} else {
		  groups.push({ category: post.courseCategoryName, posts: [post] });
		}
		return groups;
	}, [] as CategoryGroup[]);

	const collRef = useRef<HTMLButtonElement[]>([]);

    // create toggle function for DOM events
    const toggleContent: ToggleContentHandler = function(this: HTMLButtonElement, event: MouseEvent) {
        const button = this;
        const content = button.nextElementSibling as HTMLElement;
        button.classList.toggle(stylesSpoilers.activeSpoiler);
        if (content.style.maxHeight) {
            content.style.maxHeight = "";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    useEffect(() => {
        const coll = collRef.current;
        coll.forEach((element) => {
            if (element) {
                element.addEventListener("click", toggleContent);
            }
        });
        
        return () => {
            coll.forEach((element) => {
                if (element) {
                    element.removeEventListener("click", toggleContent);
                }
            });
        };
    }, []);

	// still needed for the React event handler in case it's used directly in JSX
	const handleToggleContent = (event: React.MouseEvent<HTMLButtonElement>) => {
        const content = event.currentTarget.nextElementSibling as HTMLElement;
        event.currentTarget.classList.toggle(stylesSpoilers.activeSpoiler);
        if (content.style.maxHeight) {
            content.style.maxHeight = "";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="courseBody">
				
				<MoreCoursesNotice/>
				<Notice title="☝️ FYI" text="This course was revised in **March 2025**. However, there are still a considerable amount of **gaps** and **bland narration**. I'm still working hard to make this course engaging, so please be patient."/>
				
				<M text="Here you can find tutorials on machine learning, data science and several other fields organized as a sequential, in-depth theoretical course presented in modules. I've created it single-handedly by studying and summarizing a huge amount of material, and launched together with this blog as open source."/>
				<p>I also have plans to make video tutorials based on <Link to="/research">Research</Link> posts for my YouTube channel <Link to="https://www.youtube.com/@avheuristics">@avheuristics</Link> in the future.</p>
				<div>
					<button className={`noselect ${stylesSpoilers.spoilerButton}`} ref={(el) => { if(el) collRef.current.push(el); }}>
						&nbsp;&nbsp;
						<span className={stylesSpoilers.spoilerText}></span>
						More about this course
						&nbsp;&nbsp;
					</button>
					<div className={stylesSpoilers.spoilerContentWrapper}>
						<div className={stylesSpoilers.spoilerContentGoals}>
							<M text="So far, the course is **completely theoretical** and covers a wide range of advanced topics taken from different online lectures, textbooks, articles and my university classes, including sophisticated concepts of AI algorithms, data analysis and statistics. This is a fully-fledged textbook designed to help students, but it doesn't feature homework or quizzes."/>
							<M text="Fundamental concepts are covered superficially. For better understanding, it's recommended to first familiarize yourself with the basics of **linear algebra**, **calculus**, **statistics** and **programming**, even though it's not necessary."/>
							<M text="I decided to integrate the course into this personal website to achieve better popularization, but it will probably be moved to a separate one in the future."/>
							<p>The course content is largely compiled from texts of the <Link to="/research">Research</Link>, or simply pulled as posts automatically, however, the contents may reference any sources.</p>
						</div>
					</div>
					<div className="mobileOnlySupport"><br/></div>
				</div>
			</div>
			<br/>
			<div className="courseBody noselect">
				<M text="# 📋 CONTENTS"/>
				<M text="0. [Where the course began: an introduction about AI and research](/research/on_research)"/>
				{groupedSequentially.map(group => (
					<div key={group.category} className="courseCategoryName">
						<h2>{group.category}</h2>
						<ul className="courseContents">
							{group.posts.map(post => (
								<div key={post.indexCourse}>
									<span style={{ borderLeft: "solid", marginLeft: "-15px", borderWidth: "0.3em", borderColor: parseDifficulty(post.difficultyLevel, post.flagMindfuckery) }}><span style={{ marginLeft: "10px" }}>{post.indexCourse}</span>. </span>
									<Link to={post.slug}>{post.titleCourse}</Link>
									<span style={{ opacity: 0.4 }}>&nbsp;{post.readTime}</span>
								</div>
							))}
						</ul>
					</div>
				))}
			</div>
			<br/>
			<div className="courseBody">
				<M text="# 🌱 UPDATES & CONTRIBUTION"/>
				<M text="The course keeps expanding while outdated information gets revised. Writing new chapters is a fairly time-consuming process, so if you'd like to see this educational project evolve, you're welcome to contribute. There are plenty of ways:"/>
				<M text={`
- **Report** bugs, typos, grammar, syntax errors (LaTeX, Markdown, code blocks), semantic and logical inaccuracies, narrative mistakes, etc.
- **Suggest** improvements or ideas (code optimization, readability, UX, content to include, etc.)
- **Modify** the source code by opening a pull request (expand topics, add details, fix something, etc.)
- **Create** new pages, sub-chapters, practical exercises, code notebooks, homework, quizzes, etc.
				`}/>
				<M text="Please use [GitHub Issues](https://github.com/avrtt/avrtt.github.io/issues/new) for reports and suggestions. You can open a new PR [here](https://github.com/avrtt/avrtt.github.io/compare) and check accepted changes [here](https://github.com/avrtt/avrtt.github.io/pulls?q=is%3Aclosed). For more information, see the repository's [README.md](https://github.com/avrtt/avrtt.github.io/blob/main/README.md)."/>
				<p>Your contributions are important in building accessible education in AI (and beyond). GitHub profiles of people who contribute significantly will be listed on this page (and, probably, in the <S style={{}} className={""}><Link to="/hall_of_fame">Hall of fame</Link></S>).</p>
				<M text="Questions? [Text me](/contact)!"/>
				<br/>
				<M text="### Adding new pages"/>
				<p>If you're going to add a new article (lesson), you may link to a third-party resource. The content of the article doesn't have to be a part of <Link to="/research">Research</Link>, but it must comply with copyright and coherence in the context of the entire course.</p>
				<M text="Research posts are written in `.mdx` format and located [here](https://github.com/avrtt/avrtt.github.io/tree/main/src/pages/posts/research), while images (banners and post content) are stored [here](https://github.com/avrtt/avrtt.github.io/tree/main/src/images/posts/research). Gatsby's frontmatter must include `indexCourse`, `titleCourse` and `courseCategoryName` to properly display your page in the table of contents."/>
				<br/>
				<M text="### Licensing"/>
				<p><b>TL;DR</b>: you're free to use, distribute and modify [only] the course-related content of this website, <i>as long as you attribute</i>. <StickerPack sticker="dog_nerd"/></p>
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
			<div className="courseBody">
				<M text="# ❤️ SUPPORT"/>
				<p>The course is <H>free forever</H>. I've put a huge amount of my free time into this work, wished to make something enormous and helpful for people, and never sought to profit from this endeavor, as I believe that educational materials should be open to everyone. I also believe that earning the people's love is the only right way to earn coins from such projects, so if you found it useful — please consider support beyond contributing.</p>
				<p>The easiest way to thank me and speed up development of the course is to <Link to="/donate"><S style={{}} className={""}>donate right here</S></Link>. <StickerPack sticker="hedgehog"/></p>
			</div>
			<br/>
			<div className="courseBody">
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
			<div className="lastUpdatedCourse">UPDATED ON {courseLastUpdated}</div>

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
					difficultyLevel
					flagMindfuckery
					slug
        		}
				body
      		}
			group(field: {frontmatter: {courseCategoryName: SELECT}}) {
				fieldValue
			}
    	}
	}
`;

export const Head = ({ data }: { data: CourseData }) => {

	const categories = data.allMdx.nodes
		.map(g => g.frontmatter.courseCategoryName)
		.filter((category): category is string => !!category && category !== "Uncategorized");
	const categoriesString = categories.join(", ");
	
	return (
		<SEO 
			title="Course"
			description={`Educational content about machine learning and data science organized as a sequential theoretical course with modules. Categories: ${categoriesString}.`}
			keywords={categoriesString}
			image={""}
			canonicalUrl="https://avrtt.github.io/course"
			schemaType="Course"
		>
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Course",
					"name": "Machine Learning and Data Science Course",
					"description": "Free educational content about machine learning and data science organized as a sequential theoretical course with modules.",
					"provider": {
						"@type": "Person",
						"name": "Vladislav Averett",
						"url": "https://avrtt.github.io/about"
					},
					"educationalLevel": "Intermediate",
					"hasCourseInstance": {
						"@type": "CourseInstance",
						"courseMode": ["online", "self-paced"]
					}
				})}
			</script>
		</SEO>
	);
};

export default Course;
