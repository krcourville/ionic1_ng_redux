import { Contact } from '../models/Contact';
import { ARCHIVE_CONTACT, SELECT_CONTACT, ContactAction } from './contacts-actions';

const defaultdata: Array<Contact> = [
    { firstName: 'John', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Joe' }
];

export default function counter(state: Array<Contact> = defaultdata, action: ContactAction) {
    switch (action.type) {
        case ARCHIVE_CONTACT:
            return state.filter(s => s !== action.contact);

        case SELECT_CONTACT:
            return state.map(c => {
                if (c = action.contact) {
                    c.isSelected = true;
                }
                return c;
            });

        default:
            return state;
    }
}