import React from "react";
import ContactList from "./ContactList";
import "../styles/ContactList.css";

const App = () => {
  return (
    <div className="app">
      <h1>Contacts App</h1>
      <ContactList />
    </div>
  );
};

export default App;
