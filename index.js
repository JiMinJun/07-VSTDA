var myApp = angular.module('myApp', ['ui.sortable', 'xeditable']);

myApp.controller("toDoCtrl", [
	'$scope', 
	'$filter', 
	function($scope, $filter){


	$scope.toDoList = [
		{
			title: "eat dinner",
		 	priority: "1. Urgent"
		},
		{
			title: "have fun",
			priority: "2. Very High"
		},
		{
			title: "buy milk",
			priority : "3. High"
		},
		{
			title: "buy eggs",
			priority : "4. Moderate"
		},
		{
			title: "finish project",
			priority : "5. Low"
		}
	];

	$scope.addNewItem = function(newItem) {
		$scope.toDoList.forEach(function(element) {
			if(newItem.title === element.title) {
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

/*
<select ng-options="priority as item.priority for item in toDoList" ng-show="editing" ng-model="item.priority"></select>*/