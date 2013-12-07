describe('TodoController', function(){
    var $scope;
    beforeEach(inject(function($rootScope, $controller) {
		var configuration;
        $scope = $rootScope.$new() 
		configuration = {$scope: $scope}
        $controller('TodoController', configuration)
    }))
	
	it('should have 3 existing items', function(){
		expect($scope.todoList.length).toEqual(3)
	})
		
})