function TodoController($scope){
	$scope.todoList = [{status: false, description: 'เรียน Angular'}, {status: false, description: 'เรียน TDD'}, {status: false, description: 'กลับบ้าน'}]
	
	$scope.addTodo = function(item) {
		$scope.todoList.push({status: false, description: item})
		$scope.description = ''
	}
}
	
