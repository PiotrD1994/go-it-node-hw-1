const {Command} = require("commander")
const contactService = require("./contacts")
const program = new Command()

program
.option("-a, --action <type>", "choose action")
.option("-i, --id <type>", "user id")
.option("-n, --name <type>", "user name")
.option("-e, --email <type>", "user email")
.option("-p, --phone <type>", "user phone")

program.parse(process.argv)

const args = program.opts();

function invokeAction({action, id, name, email, phone}) {
    switch (action) {
        case "list":
            console.log(contactService.listContacts())
            break;

        case "get":
            console.log(contactService.getContactById(id))
            break;

        case "add":
            console.log(contactService.addContact(name, email, phone))
            break;
        
        case "remove":
            console.log(contactService.removeContact(id))
           break;

        default:
        console.warn("\x1B[31m Unknown action type!")
        }
}
module.exports = invokeAction(args);