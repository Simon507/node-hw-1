const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, '/db/contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
};

const getContactById = async contactId => {
  const allcontacts = await listContacts();
  const data = allcontacts.find(item => item.id === contactId);
  return data;
};

const removeContact = async contactId => {
  console.warn(`\x1b[32m The contact with id ${contactId} succefully deleted!`);
};

const addContact = async data => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  console.warn(
    `\x1b[32m The contact ${name} with email ${email} and phone ${phone} succefully create!`
  );
  console.table(allContacts);
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
