import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>The Star Wars API</h1>
      </header>
      {children}
    </div>
  );
};

export default Layout;