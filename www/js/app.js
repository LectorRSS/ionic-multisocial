// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.accounts', {
    url: '/accounts',
    views: {
      'menuContent': {
        templateUrl: 'templates/accounts.html'
      }
    }
  })

  .state('app.config', {
      url: '/config',
      views: {
        'menuContent': {
          templateUrl: 'templates/config.html'
        }
      }
    })

    .state('app.socials', {
      url: '/socials',
      views: {
        'menuContent': {
          templateUrl: 'templates/socials.html',
          controller: 'SocialsCtrl'
        }
      }
    })

  .state('app.facebook', {
    url: '/social/facebook',
    views: {
      'menuContent': {
        templateUrl: 'templates/social.facebook.html',
        controller: 'FacebookCtrl'
      }
    }
  })

  .state('app.facebook_chat', {
    url: '/social/facebook/chat/:fbid',
    views: {
      'menuContent': {
        templateUrl: 'templates/social.facebook.chat.html',
        controller: 'FacebookChatCtrl'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/socials');
});
