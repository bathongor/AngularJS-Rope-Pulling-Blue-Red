
    //INITIALIZE FIREBASE
    var config = {
            apiKey: "AIzaSyByiVZCx2lMwJerAGR6TkgLXhozKvEwrO8",
            authDomain: "silent-relic-219002.firebaseapp.com",
            databaseURL: "https://silent-relic-219002.firebaseio.com",
            projectId: "silent-relic-219002",
            storageBucket: "silent-relic-219002.appspot.com",
            messagingSenderId: "515739637546"
  	};
    firebase.initializeApp(config);

    //Create AngularJS Database Ref
            angular
                 .module('myModule',['firebase'])
                 .controller('myController',['$scope', '$firebaseObject', function($scope, $firebaseObject){
                        var ref = firebase.database().ref();
                        var obj = $firebaseObject(ref); 
                        function updateWidth(){
                            var sumRedBlue = $scope.data.red + $scope.data.blue;
                            var redPercent = $scope.data.red/sumRedBlue * 100;
                            var bluePercent = $scope.data.blue/sumRedBlue * 100;
                            document.getElementById('boxRed').style.width = redPercent + "%";
                            document.getElementById('boxBlue').style.width = bluePercent + "%";
                        }

                        obj.$bindTo($scope, 'data').then(function(){
                            updateWidth();
                        });

                        $scope.incrementRed = function(){
                            $scope.data.red++;
                            updateWidth();
                        }
                        
                        $scope.incrementBlue = function(){
                            $scope.data.blue++;
                            updateWidth();
                        }
                }]);
     
   
   




