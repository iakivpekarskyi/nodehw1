const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve(__dirname, "db", "contacts.json");

const updateContacts = (allContacts) =>
  fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();

  const contact = allContacts.find((item) => item.id === contactId);
  return contact || null;
};

const addContact = async ({ name, email, phone }) => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  const existingContact = allContacts.find(
    (contact) => contact.name === name && contact.email === email
  );

  if (existingContact) {
    console.log("Contact already exists.");
    return null;
  }

  allContacts.push(newContact);
  await updateContacts(allContacts);
  return newContact;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();

  const indexToRemove = allContacts.findIndex((item) => item.id === contactId);

  if (indexToRemove === -1) {
    return null;
  }
  const removedContact = allContacts.splice(indexToRemove, 1)[0];
  await updateContacts(allContacts);
  return removedContact;
};

const contactsOptions = {
  listContacts,
  addContact,
  getContactById,
  removeContact,
};

module.exports = contactsOptions;
