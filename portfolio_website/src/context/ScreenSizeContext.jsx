import React, { createContext, useContext, useEffect, useState } from 'react';

const ScreenSizeContext = createContext();

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};

export const ScreenSizeProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={dimensions}>
      {children}
    </ScreenSizeContext.Provider>
  );
};