var app = angular.module('ALog', ['smart-table']);

app.controller('Ctrl', function ($scope, $http) {
    
    $http.get('MOCK_DATA.json').success(function(data) {
       $scope.safeFiles = data; 
    });
    
    $scope.displayFiles = [].concat($scope.safeFiles);
    
    $scope.Source = function (value)
    {
        return "Audio/" + value + ".mp3";
    };
    
    $scope.download = function (path) 
    {
       window.open("Audio/" + path + ".mp3", '_blank', ''); 
    };
    
    $scope.itemsByPage= 4;
    $scope.numPages = $scope.displayFiles/$scope.itemsByPage;
    
    $scope.hidingLog = true;
    $scope.hidingWel = false;
    $scope.ShowLog = function () 
    {
        $scope.hidingLog = false;
        $scope.hidingWel = true;
    };
    $scope.ShowWel = function () 
    {
        $scope.hidingWel = false;
        $scope.hidingLog = true;
    };
});