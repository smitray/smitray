import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

type SEOProperties = {
  description?: string;
  lang?: string;
  meta?: MetaArray[];
  title?: string;
} & typeof defaultProperty;

type MetaArray = {
  name: string;
  content: string;
};

const defaultProperty = {
  description: '',
  lang: 'en',
  meta: [],
  title: '',
};

const SEO = ({ description, lang, meta, title }: SEOProperties) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata?.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={title ? `%s | ${defaultTitle}` : ''}
      meta={[
        ...meta,
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

SEO.defaultProps = defaultProperty;

export default SEO;
