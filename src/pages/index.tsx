import { graphql, PageProps } from 'gatsby';
import React from 'react';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProperties extends PageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { siteName },
    },
  },
}: IndexPageProperties) => (
  <p className="text-lg text-center bg-red-500">
    This site is named <strong>{siteName}</strong>
  </p>
);

export default IndexPage;
