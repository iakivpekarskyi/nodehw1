const contactsOptions = require("./contacts");
const yargs = require("yargs");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contactsOptions.listContacts();
      return console.log("allContacts", contactsList);
    case "get":
      const oneContact = await contactsOptions.getContactById(id);
      return console.log("oneContact:", oneContact);
    case "add":
      const newItem = await contactsOptions.addContact({ name, email, phone });
      return console.log("newContact:", newItem);
    case "remove":
      const contactToDelete = await contactsOptions.removeContact(id);
      return console.log("deletedContact:", contactToDelete);

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);

// invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });

// invokeAction({
//   action: "add",
//   name: "Jack",
//   email: "jack@mail.com",
//   phone: "5555555",
// });

// invokeAction({ action: "remove", id: "AeHIrLTr6JkxGE6SN-0Rw" });
