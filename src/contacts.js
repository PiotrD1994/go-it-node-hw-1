import fs from 'fs'
import path from 'path'

const contactsPath = path.join(process.cwd(), "/routes/api/db/contacts.json");

const contactService = {
  listContacts: function () {
    try {
      const contactsData = fs.readFileSync(contactsPath, 'utf8');
      const contacts = JSON.parse(contactsData);
      return contacts;
    } catch (error) {
      console.error('Błąd odczytu kontaktów:', error.message);
      return [];
    }
  },

  getContactById: function (contactId) {
    const contacts = this.listContacts();
    const contact = contacts.find((c) => c.id === contactId);
    return contact || null;
  },

  removeContact: function (contactId) {
    let contacts = this.listContacts();
    const initialLength = contacts.length;
    contacts = contacts.filter((contact) => contact.id !== contactId);
    if (contacts.length < initialLength) {
      this.saveContacts(contacts);
      return true;
    }
    return false;
  },

  addContact: function (name, email, phone) {
    const contacts = this.listContacts();
    const newContact = {
      id: this.generateId(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    this.saveContacts(contacts);
    return newContact;
  },

  generateId: function () {
    return new Date().getTime().toString(36);
  },

  saveContacts: function (contacts) {
    try {
      const contactsData = JSON.stringify(contacts, null, 2);
      fs.writeFileSync(contactsPath, contactsData);
      console.log('Kontakty zostały zapisane.');
    } catch (error) {
      console.error('Błąd zapisu kontaktów:', error.message);
    }
  },
};

export default contactService