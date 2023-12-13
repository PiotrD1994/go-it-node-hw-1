const fs = require('fs').promises;
const path = require('path');


const contactsPath = path.join(__dirname, 'db', 'contacts.json');

  @returns {Promise<Array>}

async function listContacts() {
  try {

    const data = await fs.readFile(contactsPath, 'utf-8');

    return JSON.parse(data);
  } catch (error) {

    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}


 @param {string} contactId 
 @returns {Promise<Object|null>} 
 
async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find(contact => contact.id === contactId) || null;
}


 @param {string} contactId 
@returns {Promise<void>} 
 
async function removeContact(contactId) {
  const contacts = await listContacts();

  const updatedContacts = contacts.filter(contact => contact.id !== contactId);

  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
}


 @param {string} name 
 @param {string} email
 @param {string} phone 
 @returns {Promise<void>} 
 
async function addContact(name, email, phone) {
  const newContact = { id: Date.now().toString(), name, email, phone };
  const contacts = await listContacts();
  const updatedContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
}


module.exports = { listContacts, getContactById, removeContact, addContact };



