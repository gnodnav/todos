var app = angular.module('app.todos', ['xeditable']);
app.controller('todoController', ['$scope', function ($scope) {
	$scope.appName = 'Todo Dashboard ';
	$scope.todoList = [
		{
			text: 'Khởi Tạo',
			isDone: true
		},
		{
			text: 'Học nodejs',
			isDone: false
		}
	];
	
	$scope.createTodo = function () {
		var todo = {
			text: $scope.todoText,
			isDone: false
		};
		$scope.todoList.push(todo);
		$scope.todoText ='';
	}
	$scope.updateTodo = function (todo) {
		console.log(todo);
	}
	$scope.deleteTodo = function (todo) {

	}
}]);
