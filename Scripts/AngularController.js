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
    
    $scope.hidingALog = false;
    $scope.hidingAbout = true;
    $scope.hidingLog = true;
    $scope.ShowALog = function()
    {
        $scope.hidingALog = false;
        $scope.hidingAbout = true;
        $scope.hidingLog = true;
        $("#navPageALog").addClass("active");
        $("#navPageAbout").removeClass("active");
        $("#navPageLog").removeClass("active");                        
    };
    
    $scope.ShowAbout = function () 
    {
        $scope.hidingALog = true;
        $scope.hidingAbout = false;
        $scope.hidingLog = true;
        $("#navPageALog").removeClass("active");
        $("#navPageAbout").addClass("active");
        $("#navPageLog").removeClass("active"); 
    };
    
    $scope.ShowLog = function () 
    {
        $scope.hidingALog = true;
        $scope.hidingAbout = true;
        $scope.hidingLog = false;
        $("#navPageALog").removeClass("active");
        $("#navPageAbout").removeClass("active");
        $("#navPageLog").addClass("active"); 
    };
});