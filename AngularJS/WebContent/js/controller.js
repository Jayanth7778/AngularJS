/**
 * Controller
 * 1st parameter - name of the controller
 * 2nd parameter - function definition
 * $scope - predefined object in Angular JS, acts like a glue b/t controller and view
 */
app.controller('MessageController',function($scope)
		{
			$scope.message="Welcome to Angular JS!!!"
			$scope.user="Hello!!!"
			$scope.intValue=10;
			$scope.floatValue=100.9;
	
			$scope.person={'id':10,'name':'John','age':10};
	
			$scope.employees=[{'empno':100,'empname':'James','dept':'HR'},
							  {'empno':101,'empname':'Smith','dept':'Traning'},
							  {'empno':102,'empname':'Adam','dept':'IT Support'}]
		})