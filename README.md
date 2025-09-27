<a href="">
  <img
    height="23"
    src="https://api.visitorbadge.io/api/daily?path=https%3A%2F%2Favrtt.github.io%2F&label=%E2%9A%A1%EF%B8%8F%20Today&labelColor=%23383b40&countColor=%230d1117&style=flat-square&labelStyle=none"
    alt="visits-today-badge"
  />
</a>
<br/>
<a href="">
  <img
    height="23"
    src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Favrtt.github.io%2F&label=%F0%9F%97%93%EF%B8%8F%20Total&labelColor=%23383b40&countColor=%230d1117&style=flat-square&labelStyle=none"
    alt="visits-total-badge"
  />
</a>
<br/>
<a href="https://github.com/avrtt/avrtt.github.io/commits/main/">
  <img
    height="24"
    src="https://img.shields.io/github/commit-activity/t/avrtt/avrtt.github.io/main?style=flat-square&label=%F0%9F%A7%A9%20Commits%20(main)&labelColor=%23383b40&color=%230d1117"
    alt="commit-activity-badge"
  />
</a>
<br/>
<a href="">
  <img
    height="24"
    src="https://img.shields.io/github/repo-size/avrtt/avrtt.github.io?style=flat-square&label=%F0%9F%93%A6%20Repo%20size&labelColor=%23383b40&color=%230d1117"
    alt="repository-size-badge"
  />
</a>
<br/>
<a href="https://github.com/avrtt/avrtt.github.io/deployments">
    <img
      height="24"
      src="https://img.shields.io/github/last-commit/avrtt/avrtt.github.io/gh-pages?style=flat-square&label=%F0%9F%9A%80%20Last%20deploy&labelColor=%23ffb938&color=%230d1117"
      alt="last-deploy-badge"
    />
</a>

<br/><br/>

# [avrtt.blog](https://avrtt.github.io/)

Here you can find the code and documentation of my minimalist, static, agent-powered, MDX-based (and simply based) personal website. The site is **entirely custom**, designed only for my needs and **not meant to be a universal blog template**.

> [!IMPORTANT] 
> Please, read the **[Licensing](#licensing)** section carefully before forking this repo.

- [Introduction](#introduction)
  - [Stack](#stack)
- [Course](#avrttcourse)
- [Project details](#project-details)
  - [Structure](#structure)
  - [Main components](#main-components)
  - [SEO](#seo)
  - [Responsiveness](#responsiveness)
  - [Sass modules](#sass-modules)
  - [Configs](#configs)
  - [Utils](#utils)
  - [Page creation](#page-creation)
  - [Rendering](#rendering)
  - [Frontmatter](#frontmatter)
  - [Page templates](#page-templates)
  - [Geo data](#geo-data)
  - [Web agents](#web-agents)
- [Contribution](#contribution)
  - [To do](#to-do)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
  - [Type checking](#type-checking)
  - [Type errors with third-party libraries](#type-errors-with-third-party-libraries)
  - [JSX errors](#jsx-errors)
- [Copyright](#copyright)
  - [Licensing](#licensing)
  - [Animated emojis](#animated-emojis)


## Introduction

I started building this site from scratch (literally from the white page) after a course on web development at university. It eventually grew into a serious personal project with several types of audience. Still has a lot of bugs, but at least it's made with love; I keep slowly developing it, devoting a couple hours a week to learning webdev.

The project was originally a plain HTML/CSS/JS thing, with no component libraries or ready-made styles. After weeks of crappy code, I gave it up for ~two years, but then decided to put it on GitHub. I redesigned the architecture and started making [clean & granular commits](https://github.com/avrtt/avrtt.github.io/commits/main/) along with learning frontend properly.

> [!NOTE] 
> Legacy repository (plain React): [avrtt.blog-legacy](https://github.com/avrtt/avrtt.blog-legacy).

The site left quite a bit of deprecated code behind. For styles, I tried to fix it by splitting them into local modules. I'm a customization freak, so TailwindCSS is a no go.

I first rewrote it to React without SSG (a very bad idea for a blog), then tried Jekyll, but eventually gave a try to Gatsby/GraphQL because it's easy to extend with plugins and optimize for small static blogs. Next.js would be overkill here.


### Stack

&nbsp;&nbsp;&nbsp; 🚀 Frontend: **React**  
&nbsp;&nbsp;&nbsp; 🛠️ Language: **TypeScript**  
&nbsp;&nbsp;&nbsp; 📝 Content: **MDX**  
&nbsp;&nbsp;&nbsp; ⚙️ SSG & logic: **Gatsby**  
&nbsp;&nbsp;&nbsp; 🛢 CMS: not implemented  
&nbsp;&nbsp;&nbsp; 🎨 Styles: modular **Sass**  
&nbsp;&nbsp;&nbsp; ⚡ Server environment: **Node.js**  
&nbsp;&nbsp;&nbsp; 📦 CI/CD: not implemented  
&nbsp;&nbsp;&nbsp; 🗺️ 2D maps: **Leaflet**  
&nbsp;&nbsp;&nbsp; 🌍 3D maps: **D3.js**  
&nbsp;&nbsp;&nbsp; 🍃 Animations: **Framer Motion**  
&nbsp;&nbsp;&nbsp; ♾️ Formulas: **LaTeX**  
&nbsp;&nbsp;&nbsp; 💬 Comments: **Telegram** (comments.app API)  
&nbsp;&nbsp;&nbsp; 🤖 Agents: **[avrtt/avrtt.blog-agents](https://github.com/avrtt/avrtt.blog-agents)**

See other plugins and dependencies in **[package.json](https://github.com/avrtt/avrtt.github.io/blob/main/package.json)**. 


## [avrtt.course](https://avrtt.github.io/course)

Currently, this personal blog is also serving as a platform for my free course on machine learning, data science and related areas. It's likely that the course will be moved to a separate platform in the future.

You can find more information about the course (including course licensing, contributing and plans) on the main [course page](https://avrtt.github.io/course).


## Project details

### Structure

<!-- Описания папок с гиперссылками на них в репозитории, где основные фичи находятся, структура проекта в общем. -->


### Main components

<!-- Про наиболее интересные компоненты. -->


### SEO

<!-- Реализовано SEO, включающее ... sitemap, robots.txt, cross linking, keywords, Gatsby's Head API and [SEO component](ссылка на файл) for organizing metadata and social cards preview (Twitter, Open Graph), rich snippets, different schemas, breadcrumps for [post template](ссылка), etc. SEO-тесты здесь. useSiteMetadata hook. -->


### Responsiveness

<!-- Responsive design is a bit clunky as the site wasn't originally designed as mobile-first. I did some basic fluid typography, mobile navbar and breakpoints, but several pages still require revision. -->


### Sass modules

<!-- 
Какие бывают стили в этом проекте:
- глобальные стили: в папке styles, импортируются в gatsby-browser.js ([name].scss)
- общие, но не относящиеся к компонентам: в папке styles, импортируются в index.js
- несамостоятельные (_[name].scss): в папке styles, импортируются в другом .scss-файле
- те, что относятся к компонентам: в папках компонент (styles.module.scss локально в каждой папке), импортируются в компоненте
-->


### Configs

<!-- Глобальные конфигурации в gatsby-config.js: дефолтные настройки, robots, исключения, импорты плагинов и их настройки. -->


### Utils

<!-- fetchers/, utils/ -->


### Page creation

<!-- Страницы создаются в gatsby-node.js (гиперссылка), там пояснения. -->


### Rendering

<!-- Server-side rendering, gatsby browser (просто сослаться, там комментарии) -->


### Frontmatter

<!-- Типичный frontmatter поста выглядит так:

```
index:
indexCourse:
indexFavorites:
title: "Brief title in sentence case for gallery views"
titleDetailed: "Informative title in sentence case for list views"
titleSEO: "Same Title, but in Capitalized Case"
titleOG: ""
titleTwitter: ""
titleCourse: ""
courseCategoryName: ""
desc: "Usually a quote or ironic expression"
descSEO: "Longer and more informative description"
descOG: "Call to action"
descTwitter: ""
date: "DD.MM.YYYY"
updated:
prioritySitemap: 0.6
changefreqSitemap: "monthly"
extraReadTimeMin: 0
difficultyLevel: 1
flagDraft: false
flagMindfuckery: false
flagRewrite: false
flagOffensive: false
flagProfane: false
flagMultilingual: false
flagUnreliably: false
flagPolitical: false
flagCognitohazard: false
flagHidden: true
flagWideLayoutByDefault: true
schemaType: "Article"
mainTag: ""
otherTags: [""]
keywordsSEO: [""]
banner: "../../../images/posts/research/banners/IMAGE.jpg"
imageOG: "../../../images/posts/research/banners/IMAGE.jpg"
imageAltOG: ""
imageTwitter: "../../../images/posts/research/banners/IMAGE.jpg"
imageAltTwitter: ""
canonicalURL: "https://avrtt.github.io/research/POST_URL"
slug: "/research/POST_URL"
```

Он содержит флаги для Notice-компонент, данные для SEO и индексы для сортировки по сайту. 

[Шаблоны файлов постов](https://github.com/avrtt/avrtt.github.io/tree/main/src/pages/posts) содержат необходимые поля для разных категорий, а также прочие настройки. 
-->


### Page templates

<!-- Про темплейт поста, ImageContext, как всё работает внутри. -->


### Geo data

<!-- This section is under development. -->


### Web agents

Please refer to **[avrtt/avrtt.blog-agents](https://github.com/avrtt/avrtt.blog-agents)**.


## Contribution

<!-- 
Feature suggestions and especially bug/typo reports are very welcome. Feel free to create pull requests. Особенно ценны замечания/контрибуции касательно грамматических ошибок или опечаток, т.к. английский не мой родной язык. Если вы хотите предложить фичу, исправить баг или улучшить стиль, то всегда велком, пожалуйста открывайте ПР.
Если вы собираетесь внести вклад в [курс](avrtt.github.io/course), смотрите дополнительную информацию и to-do на странице курса.
Описать, как вносить изменения по шагам.

> [!TIP]
> Helpful advice for doing things better or more easily.
-->


### To do

<!-- В основном я храню задачи по сайту локально, но иногда выкладываю открытые проблемы в Issues. -->


## Development

<!-- 
Как запустить и отладить development build.
Про development mode (убирает многое в постах на development-стадии для сохранения памяти), про post_development.js.
Про выделение памяти для Node и как избежать проблем с памятью (ссылка на гайд Gatsby).

> [!WARNING]
> (про выделение памяти и что по умолчанию 5 GB, как избежать проблем) -->


## Troubleshooting

### Type checking

Run `npm run check-types` for tracking TypeScript-specific errors.

TypeScript config is strict, with `noImplicitAny` option enabled.

### Type errors with third-party libraries

When encountering type errors with third-party libraries, it's probably useful to:
1. check if @types packages are available: `npm install --save-dev @types/package-name`
2. add custom type declarations in `src/types/module-declarations.d.ts`

### JSX errors

In case of JSX-related errors, verify that:
1. the TS configuration has `jsx` set correctly
2. files using JSX have `.tsx` extension
3. React is imported in files using JSX


## Copyright

### Licensing

> [!CAUTION]
> I do keep an eye on my works. Do not copy any content from this website/repository without complying with the terms below OR my permission (via email). The following describes why this might be a bad idea.

The **website's content** is dual-licensed depending on the type:  
- Course content: the `/course` page and posts/articles in its table of contents, including `/research` posts (MDX files) appearing in the course, are licensed under **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)** to encourage community contributions (see [LICENSE_COURSE](https://github.com/avrtt/avrtt.github.io/blob/main/LICENSE_COURSE)).  
- Content of other MDX files (i.e., content not appearing in the course) is licenced under **[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en)**, which is a strict control over plagiarism (see [LICENSE_POSTS](https://github.com/avrtt/avrtt.github.io/blob/main/LICENSE_POSTS)).  

The **website's code** is licensed under **GNU AGPLv3** to prevent proprietary forks and ensure openness (see [LICENSE](https://github.com/avrtt/avrtt.github.io/blob/main/LICENSE)).  

That means you're free to use, distribute and modify **[only]** the [course](#avrttcourse)-related content (text, images) of this website as long as you retain attribution under the same license (**CC BY-SA 4.0**), and you can use, distribute and modify the website's source code (which is everything in this repository except MDX files and the `/course` page component) under the conditions of open source **GNU AGPLv3** license. Content outside of the course cannot be modified or used commercially, only distributed with attribution. 

For attribution-free copying (i.e., avoiding license requirements) of substantial portions of content/code from this repository, contact me by email: **avrtt@tuta.io**.

I don't provide any support for your code copied from this repo. If you copy, be prepared for silly bugs. I'm too lazy to fix legacy.

> [!WARNING] 
> If you're a bad guy, be warned that your copied version may possibly be blocked upon request because it's plagiarism (depending on your hosting platform), and the copied site won't be ranked by search engines nearly as much as the original. Putting plagiarized content/code on GitHub makes things worse for you: copied repository content can be recognized pretty easily, which will lead to a copyright infringement notice, followed by removal of the content. GitHub often terminates accounts that violate DMCA. See. [DMCA takedown policy](https://docs.github.com/en/site-policy/content-removal-policies/dmca-takedown-policy) for more information.

<!--

Указать, что при атрибуции считается appropriate credit, а что нет.

-->


### Animated emojis

Animated emojis appearing on some pages of this site are taken from [here](https://googlefonts.github.io/noto-emoji-animation/) and distributed under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) license.
