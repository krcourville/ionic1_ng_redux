export class DashController {
    static $inject: Array<string> = ['$ionicFilterBar'];
    constructor(private $ionicFilterBar) { 
        
    }
    
    showFilterBar(){
        this.$ionicFilterBar.show();
    }
}