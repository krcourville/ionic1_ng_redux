import { Contact } from '../models/Contact';
import { ARCHIVE_CONTACT, ContactAction } from './contacts-actions';

const defaultdata: Array<Contact> = [
    { firstName: 'John', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Joe' }
];

export default function counter(state: Array<Contact> = defaultdata, action: any) {
        console.log({action:action});
    switch (action.type) {
        // case ARCHIVE_CONTACT:
        //     return state.filter(s => s !== action.contact);
        // case SELECT_CONTACT:
        //     const result = state.slice().map((m, idx)=>{
        //         if(idx == action.targetIndex){
        //           return angular.extend({}, m, {
        //               isSelected:true
        //           });
        //         } else {
        //             return m;
        //         }
        //     });
        //     console.log({result});
        //     return result;
            // return [
            //     ...state.slice(0, action.targetIndex),
            //     //
            //     // TODO: Don't use angular.extend for this
            //     // Object.assign? or Immutable?
            //     angular.extend({}, state[action.targetIndex], {
            //         isSelected: true
            //     }),
            //     ...state.slice(action.targetIndex + 2)
            // ];

        default:
            return state;
    }
}