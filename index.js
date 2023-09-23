const contactsOptions = require("./contacts");

const contactsAction = async ({ action, id }) => {
  switch (action) {
    case "list":
      const contactsList = await contactsOptions.listContacts();
      return console.log(contactsList);

    default:
      break;
  }
};

contactsAction({ action: "list" });
