/**
 * Name Controller
 */
app.controller('NameController',function($scope){
$scope.welcome=function(){
	$scope.welcomeMessage="Welcome " + $scope.name;
	//this $scope.name getting as an input from html page
	//this $scope.welcomemessage is output from controller to view
}		
})