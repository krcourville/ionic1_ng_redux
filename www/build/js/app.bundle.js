(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var shell_directive_1 = require('./shell/shell.directive');
var dash_controller_1 = require('./dash/dash.controller');
angular
    .module('crm', ['ionic'])
    .directive('crmShell', shell_directive_1.ShellDirective)
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
        url: '/',
        templateUrl: '/build/dash/dash.html',
        controller: dash_controller_1.DashController,
        controllerAs: 'dashCtrl'
    });
    $urlRouterProvider.otherwise("/");
})
    .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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
});
},{"./dash/dash.controller":2,"./shell/shell.directive":3}],2:[function(require,module,exports){
"use strict";
var DashController = (function () {
    function DashController() {
    }
    DashController.$inject = [];
    return DashController;
}());
exports.DashController = DashController;
},{}],3:[function(require,module,exports){
"use strict";
function ShellDirective() {
    return {
        restrict: 'E',
        templateUrl: '/build/shell/shell.html'
    };
}
exports.ShellDirective = ShellDirective;
},{}],4:[function(require,module,exports){

},{}]},{},[1,4])


//# sourceMappingURL=app.bundle.js.map
