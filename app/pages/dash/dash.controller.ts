import {Contact} from '../../models/Contact';
import * as ContactsActions from '../../app-state/contacts-actions';
// import * as CounterActions from '../../actions/counter';

export class DashController {

    private contactlist = {};

    static $inject = ['$scope', '$ionicFilterBar', '$ngRedux'];
    constructor(private $scope, private $ionicFilterBar, private $ngRedux) {
        // console.log('CounterActions', CounterActions);
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, ContactsActions)(this.contactlist);
        $scope.$on('$destroy', unsubscribe);
    }

    showFilterBar() {
        this.$ionicFilterBar.show();
    }

    mapStateToThis(state) {
        console.log({ state });
        return {
            items: state.contacts
        };
    }
}