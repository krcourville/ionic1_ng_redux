import {Contact} from '../../models/Contact'
import * as DashActions from '../../data/dash-actions'
// import * as CounterActions from '../../actions/counter';

export class DashController {

    private items: Contact[];
    private selectedItemIndex: number;

    static $inject = ['$scope', '$ionicFilterBar', '$ngRedux'];
    constructor(private $scope, private $ionicFilterBar, private $ngRedux) {
        // console.log('CounterActions', CounterActions);
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, DashActions)(this);
        $scope.$on('$destroy', unsubscribe);
        console.log({list : this});
    }

    showFilterBar() {
        this.$ionicFilterBar.show();
    }

    mapStateToThis(state) {
        console.log({ state });
        return {
            selectedItemIndex: state.dash.selectedContactIndex,
            items: state.contacts
        };
    }
}