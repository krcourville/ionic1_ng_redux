import {ShellDirective} from './shell/shell.directive';
import {DashController} from './dash/dash.controller';

angular
    .module('crm', ['ionic'])

    .directive('crmShell', ShellDirective)

    .config(function($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/build/dash/dash.html',
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
