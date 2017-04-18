angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
   $scope.message = "Welcome to dragon Slayer";
   $scope.gameStarted = false;

   $scope.game = function(){
     $scope.gameStarted = true;
     console.log("game started");
     $scope.storyLine;
     $scope.introStory = ["You are hobbling down a dark road at night...", "You are naked and crusty from just being raped by a yeti..."];
     $scope.introStory1 = "You are hobbling down a dark road at night...";
     $scope.introStory2 = "You are naked and crusty from just being raped by a yeti...";
     $scope.introTimer();
   }
   $scope.introTimer = function(){
    //  for(x= 0; x < $scope.introStory.length){
    //    console.log($scope.introStory[x]);
    //    setTimeout(function(){
    //      $scope.storyLine = $scope.introStory[x];
    //      x ++;
    //    }, 3000);
    //  }
    //  $scope.introStory.forEach(function(line){
    //    var x = 0;
    //    console.log(line);
    //    $scope.storyLine = line;
    //     setTimeout(function(){
    //       x + 1;
    //       }, 3000);
    //  })
  //   x = 0;
  //    while(x < $scope.introStory.length){
  //      setTimeout(function(){
  //      $scope.storyLine = $scope.introStory[x];
   //
  //        x + 1;
  //        }, 3000);
  //    }
   }






})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
//
// .controller('HomeCtrl',function(){
// var message = "Nahn sucks at typing";
// })
