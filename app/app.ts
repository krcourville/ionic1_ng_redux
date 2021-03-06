import {ShellDirective} from './shell/shell.directive';
import {DashController} from './pages/dash/dash.controller';
import {ContactListDirective} from './components/contact-list/contact-list.directive';

import 'ng-redux';
import rootReducer from './data/root-reducer';
// import { default as DevTools, runDevTools} from 

angular
    .module('crm', ['ionic', 'jett.ionic.filter.bar', 'ngRedux'])

    .directive('crmShell', ShellDirective)
    .directive('crmContactList', ContactListDirective)
    
    .config(function($ngReduxProvider){  
        $ngReduxProvider.createStoreWith(rootReducer); 
        //[thunk], [DevTools.instrument()]);
    })
    // .run(runDevTools)

    .config(function($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/build/pages/dash/dash.html',
                controller: DashController,
                controllerAs: 'dashCtrl'
            });

        $urlRouterProvider.otherwise("/");
    })

    .run(function($ionicPlatform: ionic.platform.IonicPlatformService) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    ;
