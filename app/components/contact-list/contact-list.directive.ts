/**
 * ContactListController
 */
class ContactListController {
    constructor() {
    }
    
    onItemClicked(item){
        console.log('item', item);
    }
    
    itemSelected(item){}
}

export function ContactListDirective(): ng.IDirective {
    return {
        restrict: 'E',
        templateUrl: '/build/components/contact-list/contact-list.html',
        controller: ContactListController,
        controllerAs: 'contactListCtrl',
        scope: {            
        },
        bindToController: {
            'items' : '=',
            'itemSelected': '&'
        }
    };
}
