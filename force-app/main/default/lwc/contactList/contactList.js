import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils'
import getContacts from '@salesforce/apex/ContactController.getContacts';
import CONTACT_FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';

const COLUMNS = [
    {label: 'First Name', fieldName: CONTACT_FIRST_NAME.fieldApiName, type: 'text'},
    {label: 'Last Name', fieldName: CONTACT_LAST_NAME.fieldApiName, type: 'text'},
    {label: 'Email', fieldName: CONTACT_EMAIL.fieldApiName, type: 'text'},
]

export default class ContactList extends LightningElement {
    columns = COLUMNS

    @wire(getContacts)
    contacts;

    get errors(){
        return this.contacts.error ? reduceErrors(this.contacts.error) : []
    }
}