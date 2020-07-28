const path = require('path');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
        totalCount
      }
    }
  `);

  const postsPerPage = 6;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/blog' : `/blog/page/${i}`,
      component: path.resolve('./src/templates/posts-index-template.js'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/blog' : `/blog/page/${i - 1}`,
        nextPagePath: `/blog/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
