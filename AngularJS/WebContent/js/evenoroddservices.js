/**
 * Even Or Odd Services
 */
app.factory('EvenOrOddService',function(){
	var service={} //creating instance
	
	service.evenOrOdd=function(num){
		if(num%2==0)
			return num + " is Even"
			else
				return num + " is Odd"
	}
	return service
})