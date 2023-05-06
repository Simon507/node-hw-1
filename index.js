const path = require('path');
const contactsModulePath = path.resolve('contacts.js');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const contactsServices = require(contactsModulePath);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsServices.listContacts();
      console.table(allContacts || null);
      break;
    case 'get':
      const getContact = await contactsServices.getContactById(id);
      console.table(getContact || null);
      break;
    case 'add':
      const addContacts = await contactsServices.addContact({ name, email, phone });
      return console.warn(
        `\x1b[32m The contact ${addContacts.name} with email ${addContacts.email} and phone ${addContacts.phone} succefully create!`
      );
    case 'remove':
      const remContact = await contactsServices.removeContact(id);
      console.table(remContact);
      console.log(`\x1b[32m Deleted contact: ${remContact.name}`);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
      break;
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
