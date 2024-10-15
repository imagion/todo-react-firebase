'use client';

import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { ThemeContextProps } from '@/types/Theme';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // check localStorage for a saved theme and set the state accordingly
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // reflect theme changes in localStorage and html class
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  // callback that ensures that the current state value is used for the update
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
