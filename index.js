const contactsOptions = require("./contacts");

const contactsAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contactsOptions.listContacts();
      return console.log("allContacts", contactsList);
    case "getById":
      const oneContact = await contactsOptions.getContactById(id);
      return console.log("oneContact:", oneContact);
    case "addContact":
      const newItem = await contactsOptions.addContact({ name, email, phone });
      return console.log("newContact:", newItem);
    case "deleteContact":
      const contactToDelete = await contactsOptions.removeContact(id);
      return console.log("deletedContact:", contactToDelete);

    default:
      console.log("Unknown action");
      break;
  }
};

// contactsAction({ action: "list" });

// contactsAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });

// contactsAction({
//   action: "addContact",
//   name: "Jack",
//   email: "jack@mail.com",
//   phone: "5555555",
// });

contactsAction({ action: "deleteContact", id: "AeHIrLTr6JkxGE6SN-0Rw" });
