import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                dribbble
                rss
                angel
                codepen
                youtube
                email
              }
            }
            url
            title
            description
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
