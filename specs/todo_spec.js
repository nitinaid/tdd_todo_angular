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
	
	it('should have first element equal to เรียน Angular', function() {
		expect($scope.todoList[0]).toEqual('เรียน Angular')
	})
	
	it('should have first element equal to เรียน TDD', function() {
		expect($scope.todoList[1]).toEqual('เรียน TDD')
	})
	
	it('should have first element equal to กลับบ้าน', function() {
		expect($scope.todoList[2]).toEqual('กลับบ้าน')
	})
		
})