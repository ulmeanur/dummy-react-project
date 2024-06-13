/* 

React Context API
We provided some simple React template code. Your goal is to modify 
the application so that when you click the toggle button, the 
favorite programming language toggles between the items in the 
languages array. The default value should be the first item 
in the array.

You must use the Context API for this challenge, which means you 
have to use the React.createContext and Context.Provider functions. 
You are free to add classes and styles, but make sure you leave 
the component ID's and clases provided as they are.


*/

import React, { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];

// Create a context for the favorite language
const FavoriteLanguageContext = createContext();

function App() {
  // Set up state to manage the favorite language
  const [favoriteLanguageIndex, setFavoriteLanguageIndex] = useState(0);

  // Define a function to toggle the favorite language
  const toggleFavoriteLanguage = () => {
    setFavoriteLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  // Provide the favorite language context value to the child components
  return (
    <FavoriteLanguageContext.Provider value={{ favoriteLanguageIndex, toggleFavoriteLanguage }}>
      <MainSection />
    </FavoriteLanguageContext.Provider>
  );
}

function MainSection() {
  // Access the favorite language context
  const { favoriteLanguageIndex, toggleFavoriteLanguage } = useContext(FavoriteLanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">Favorite programming language: {languages[favoriteLanguageIndex]}</p>
      <button id="changeFavorite" onClick={toggleFavoriteLanguage}>Toggle language</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
