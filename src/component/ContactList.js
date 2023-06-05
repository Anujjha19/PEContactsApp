import React, { useState } from "react";
import "../styles/ContactList.css";

const contactsData = [
  { id: 1, name: "Arjun", number: "1234567890" },
  { id: 2, name: "John", number: "9876543210" },
  { id: 3, name: "Jane", number: "5678901234" },
  { id: 4, name: "Arjun", number: "1231231234" },
  { id: 5, name: "Bob", number: "4564564567" }
  // Add more contacts here
];

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list">
      <input
        type="text"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} onClick={() => handleContactClick(contact)}>
            {contact.name} - {contact.number}
          </li>
        ))}
      </ul>
      {selectedContact && (
        <div className="popup">
          <h2>{selectedContact.name}</h2>
          <p>{selectedContact.number}</p>
          <button onClick={() => setSelectedContact(null)}> X </button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
