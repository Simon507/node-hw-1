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
  const allcontacts = await listContacts();
  const index = allcontacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    console.warn('\x1B[31m Contact not found');
    return null;
  }
  const [data] = allcontacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allcontacts, null, 2));
  return data;
};

const addContact = async data => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  console.table(allContacts);
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
