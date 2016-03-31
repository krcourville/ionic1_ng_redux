import {Contact} from '../models/Contact';

export const ARCHIVE_CONTACT = 'ARCHIVE_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';

export interface ContactAction {
    type: string,
    contact: Contact
};

export function archive(contact: Contact) {
    return {
        type: ARCHIVE_CONTACT,
        contact: contact
    };
}

export function select(contact: Contact) {
    return {
        type: ARCHIVE_CONTACT,
        contact: contact
    };
}