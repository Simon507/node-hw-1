const path = require('path');
const contactsModulePath = path.resolve('contacts.js');

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
      console.warn(
        `\x1b[32m The contact ${name} with email ${email} and phone ${phone} succefully create!`
      );
      break;
    case 'remove':
      const removeContact = await contactsServices.removeContact(id);

      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
      break;
  }
};

invokeAction({
  action: 'remove',
  id: 'qdggE76Jtbfd9eWJHrssH',
});
