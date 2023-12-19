
import {contactService} from './contacts.js'


export function invokeAction({action, id, name, email, phone}) {
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
