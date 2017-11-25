/**
 * Even Or Odd
 */
app.controller('EvenOrOddController',function($scope,EvenOrOddService) {
	$scope.evenOrOdd=function(){
		$scope.result=EvenOrOddService.evenOrOdd($scope.num)
	}
})