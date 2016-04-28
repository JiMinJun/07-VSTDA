var myApp = angular.module('myApp', ['ui.sortable']);

myApp.controller("toDoController", [
	'$scope', 
	'$filter', 
	function($scope, $filter){

	$scope.sorting = {
		current: 'priority'
	};

	$scope.toDoList = [
		{
			newToDo: "eat dinner",
		 	priority: 2
		},
		{
			newToDo: "have fun",
			priority: 3
		},
		{
			newToDo: "buy milk",
			priority : 1
		},
		{
			newToDo: "buy eggs",
			priority : 4
		},
		{
			newToDo: "finish project",
			priority :5
		}
	];

	$scope.addNewItem = function(newItem) {
		$scope.toDoList.forEach(function(element) {
			if(newItem.newToDo === element.newToDo) {
				alert('ToDo item already exists');
				return;
			}
		});

		newItem.priority = parseInt(newItem.priority);
		$scope.toDoList.push(newItem);
		$scope.toDo = {};
	};

	$scope.deleteItem = function(index) {
		$scope.toDoList.splice(index, 1)
	};

	$scope.sortToDo = function (order) {
        $scope.toDoList = $filter('orderBy')($scope.toDoList, order);
        console.log($scope.toDoList);
   
    };

}]);