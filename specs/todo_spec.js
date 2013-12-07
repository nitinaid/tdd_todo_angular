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
		expect($scope.todoList[0].description).toEqual('เรียน Angular')
	})
	
	it('should have second element equal to เรียน TDD', function() {
		expect($scope.todoList[1].description).toEqual('เรียน TDD')
	})
	
	it('should have third element equal to กลับบ้าน', function() {
		expect($scope.todoList[2].description).toEqual('กลับบ้าน')
	})
	
	it('should able to add new todo', function() {
		$scope.description = "new item"
		$scope.addTodo($scope.description)
		expect($scope.todoList[3].description).toEqual('new item')
		expect($scope.description).toEqual('')
	})
	
	it('should set default status of new item to false', function() {
		$scope.description = "new item"
		$scope.addTodo($scope.description)
		expect($scope.todoList[3].status).toEqual(false)	
	})
	
	it('should have status', function() {
		expect($scope.todoList[0].status).not.toBeUndefined();
	})
		
})