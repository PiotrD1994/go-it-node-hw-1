const contactService = require('./contacts.js');

console.log('Lista wszystkich kontaktów:', contactService.listContacts());

const contactIdToFind = 'AeHIrLTr6JkxGE6SN-0Rw';
console.log(`Szukanie kontaktu o ID ${contactIdToFind}:`, contactService.getContactById(contactIdToFind));

const contactIdToRemove = 'qdggE76Jtbfd9eWJHrssH';
console.log(`Usunięcie kontaktu o ID ${contactIdToRemove}:`, contactService.removeContact(contactIdToRemove));

const newContact = {
  name: 'Nowy Użytkownik',
  email: 'nowy@example.com',
  phone: '123-456-7890',
};
console.log('Dodawanie nowego kontaktu:', contactService.addContact(newContact.name, newContact.email, newContact.phone));


console.time('listContacts');
contactService.listContacts();
console.timeEnd('listContacts');

const contactIdForPerformance = 'AeHIrLTr6JkxGE6SN-0Rw';
console.time('getContactById');
contactService.getContactById(contactIdForPerformance);
console.timeEnd('getContactById');

const contactIdToRemoveForPerformance = 'qdggE76Jtbfd9eWJHrssH';
console.time('removeContact');
contactService.removeContact(contactIdToRemoveForPerformance);
console.timeEnd('removeContact');

const newContactForPerformance = {
  name: 'Nowy Użytkownik',
  email: 'nowy@example.com',
  phone: '123-456-7890',
};
console.time('addContact');
contactService.addContact(newContactForPerformance.name, newContactForPerformance.email, newContactForPerformance.phone);
console.timeEnd('addContact');