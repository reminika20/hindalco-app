import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsItems, setNewsItems] = useState([]);

  return (
    <NewsContext.Provider value={{ newsItems, setNewsItems }}>
      {children}
    </NewsContext.Provider>
  );
};