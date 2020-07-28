import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

function SEO({ description, lang, meta, title }) {
  const siteMetadata = useSiteMetadata();
  const metaTitle = `${title} | ${siteMetadata.title}`;
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:image`,
          content: `${siteMetadata.url}/photo.png`
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:image`,
          content: `${siteMetadata.url}/photo.png`
        },
        {
          name: `twitter:site`,
          content: `@${siteMetadata.author.contacts.twitter}`
        },
        {
          name: `twitter:creator`,
          content: `@${siteMetadata.author.contacts.twitter}`
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    ></Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``
};

export default SEO;
