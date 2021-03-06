var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/landing');

    $stateProvider
        .state('landing', {
            url: '/landing',
            templateUrl: '../templates/landingTmpl.html',
        })
        .state('patientprofile', {
            url: '/patientprofile',
            templateUrl: '../templates/patientProfileTmpl.html',
            controller: 'patientProfileCtrl'
        })
            .state('patientprofileview', {
                parent: 'patientprofile',
                url: '/view/:id',
                templateUrl: '../templates/patientProfileViewTmpl.html',
                controller: 'patientProfileViewCtrl'
                })
        .state('neworder', {
            url: '/neworder',
            templateUrl: '../templates/newOrderTmpl.html',
            controller: 'newOrderCtrl'
        })
        .state('fillqueue', {
            url: '/fillqueue',
            templateUrl: '../templates/fillQueueTmpl.html',
            controller: 'fillQueueCtrl'
        })
            .state('fillqueueview', {
                parent: 'fillqueue',
                url: '/view/:id',
                templateUrl: '../templates/fillQueueViewTmpl.html',
                controller: 'fillQueueViewCtrl'
            })
        .state('finalverification', {
            url: '/finalverification',
            templateUrl: '../templates/finalVerificationTmpl.html',
            controller: 'finalVerificationCtrl'
        })
            .state('finalverificationview', {
                parent: 'finalverification',
                url: '/view/:id',
                templateUrl: '../templates/finalVerificationViewTmpl.html',
                controller: 'finalVerificationViewCtrl'
                });
});