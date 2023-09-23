const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = (contactId) => {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
};

const removeContact = (contactId) => {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
};

const addContact = (name, email, phone) => {
  // ...твой код. Возвращает объект добавленного контакта.
};

const contactsOptions = {
  listContacts,
  //   getContactById,
  //   removeContact,
  //   addContact,
};

module.exports = contactsOptions;
