import React, { ReactNode } from 'react';
import Header from '../Header';

type LayoutProperties = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProperties) => (
  <div className="font-brand">
    <Header />
    {children}
  </div>
);

export default Layout;
