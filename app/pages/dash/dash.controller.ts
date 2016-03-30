import {Contact} from '../../models/Contact';

export class DashController {
    static $inject: Array<string> = ['$ionicFilterBar'];

    contacts: Array<Contact> = [
        { firstName: 'John', lastName: 'Smith' },
        { firstName: 'Sally', lastName: 'Joe' },
    ];
    constructor(private $ionicFilterBar) {

    }

    showFilterBar() {
        this.$ionicFilterBar.show();
    }
}