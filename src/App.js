import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MyComponent from "./components/defaultTestSetup/defaultTestSetup";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div id="main">
        <MainContent />
        {/* <MyComponent /> */}
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
