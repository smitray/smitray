import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO />
    <p className="text-white bg-red-500 text-8xl font-brand">Hello world</p>
  </Layout>
);

export default IndexPage;
