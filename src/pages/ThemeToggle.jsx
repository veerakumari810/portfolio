import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') !== 'theme-light');

  useEffect(() => {
    const theme = isDark ? 'theme-dark' : 'theme-light';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [isDark]);

  return (
    <button id="theme-toggle" onClick={() => setIsDark(!isDark)}>
      <i className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  );
};

export default ThemeToggle;