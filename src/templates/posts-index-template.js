import React from 'react';
import { graphql } from 'gatsby';
import Feed from '../components/feed';
import Pagination from '../components/pagination';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexTemplate = ({ data, pageContext }) => {
  const { hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO />
      <Feed edges={edges} />
      <Pagination
        prevPagePath={prevPagePath}
        nextPagePath={nextPagePath}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
