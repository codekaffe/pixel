import React from 'react';

const Header: React.FC = ({ children }) => {
  return (
    <>
      <style jsx>{`
        h1 {
          font-family: 'Patrick Hand', impact, cursive;
          font-size: 3rem;
          color: #ffffff;
          margin: 0;
        }
      `}</style>
      <h1>{children}</h1>
    </>
  );
};

export default Header;
