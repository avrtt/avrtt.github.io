const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach((node) => {
    const PostTemplate = path.resolve(`./src/templates/post.js`);
    const section = `/${node.frontmatter.slug.split('/')[1]}/`;

    createPage({
      path: node.frontmatter.slug, 
      component: `${PostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { 
        id: node.id,
        section,
      },
    });
  });

  createPage({path: "/frog", component: path.resolve(`src/components/NotFound/index.js`)});
  createPage({path: "/adventures", component: path.resolve(`src/pages/main/adventures.js`)});
  createPage({path: "/research", component: path.resolve(`src/pages/main/research.js`)});
  createPage({path: "/thoughts", component: path.resolve(`src/pages/main/thoughts.js`)});
  createPage({path: "/goals", component: path.resolve(`src/pages/main/goals.js`)});
  createPage({path: "/exploration", component: path.resolve(`src/pages/main/exploration.js`)});
  createPage({path: "/freelance", component: path.resolve(`src/pages/main/freelance.js`)});
  createPage({path: "/freelance/ru", component: path.resolve(`src/pages/main/freelance_ru.js`)});
  createPage({path: "/freelance/projects/machine_learning", component: path.resolve(`src/pages/freelance-subpages/machine_learning.js`)});
  createPage({path: "/freelance/ru/projects/machine_learning", component: path.resolve(`src/pages/freelance-subpages/machine_learning_ru.js`)});
  createPage({path: "/freelance/projects/data_analysis", component: path.resolve(`src/pages/freelance-subpages/data_analysis.js`)});
  createPage({path: "/freelance/ru/projects/data_analysis", component: path.resolve(`src/pages/freelance-subpages/data_analysis_ru.js`)});
  createPage({path: "/freelance/projects/data_visualization", component: path.resolve(`src/pages/freelance-subpages/data_visualization.js`)});
  createPage({path: "/freelance/ru/projects/data_visualization", component: path.resolve(`src/pages/freelance-subpages/data_visualization_ru.js`)});
  createPage({path: "/freelance/projects/data_collection", component: path.resolve(`src/pages/freelance-subpages/data_collection.js`)});
  createPage({path: "/freelance/ru/projects/data_collection", component: path.resolve(`src/pages/freelance-subpages/data_collection_ru.js`)});
  createPage({path: "/freelance/projects/python_apps", component: path.resolve(`src/pages/freelance-subpages/python_apps.js`)});
  createPage({path: "/freelance/ru/projects/python_apps", component: path.resolve(`src/pages/freelance-subpages/python_apps_ru.js`)});
  createPage({path: "/freelance/projects/web_development", component: path.resolve(`src/pages/freelance-subpages/web_development.js`)});
  createPage({path: "/freelance/ru/projects/web_development", component: path.resolve(`src/pages/freelance-subpages/web_development_ru.js`)});
  createPage({path: "/freelance/projects/research", component: path.resolve(`src/pages/freelance-subpages/research.js`)});
  createPage({path: "/freelance/ru/projects/research", component: path.resolve(`src/pages/freelance-subpages/research.js`)});
  createPage({path: "/freelance/projects/technical_writing", component: path.resolve(`src/pages/freelance-subpages/technical_writing.js`)});
  createPage({path: "/freelance/ru/projects/technical_writing", component: path.resolve(`src/pages/freelance-subpages/technical_writing_ru.js`)});
  createPage({path: "/freelance/projects/post_production", component: path.resolve(`src/pages/freelance-subpages/post_production.js`)});
  createPage({path: "/freelance/ru/projects/post_production", component: path.resolve(`src/pages/freelance-subpages/post_production.js`)});
  createPage({path: "/freelance/projects/misc", component: path.resolve(`src/pages/freelance-subpages/misc.js`)});
  createPage({path: "/freelance/ru/projects/misc", component: path.resolve(`src/pages/freelance-subpages/misc_ru.js`)});
  createPage({path: "/cv", component: path.resolve(`src/pages/main/cv.js`)});
  createPage({path: "/about", component: path.resolve(`src/pages/main/about.js`)});
  createPage({path: "/information_for_business_inquiries", component: path.resolve(`src/pages/extras/information_for_business_inquiries.js`)});

};


