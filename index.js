var myApp = angular.module('myApp', ['ui.sortable', 'xeditable', 'angular-click-outside']);

myApp.controller("toDoCtrl", [
	'$scope', 
	'$filter', 
	function($scope, $filter){

	$scope.isBeingEdited = false;

	$scope.toDoList = [
		{
			id: 1,
			title: "eat dinner",
		 	priority: 1
		},
		{
			id: 2,
			title: "have fun",
			priority: 2
		},
		{
			id: 3,
			title: "buy milk",
			priority : 3
		},
		{
			id: 4,
			title: "buy eggs",
			priority : 4
		},
		{
			id: 5,
			title: "finish project",
			priority : 5
		}
	];

	var id = $scope.toDoList.length;

	$scope.addNewItem = function(newItem) {
		$scope.toDoList.forEach(function(element) {
			if(newItem.title === element.title) {
				alert('ToDo item already exists');
				return;
			}
			newItem.id = id++;
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
    
    $scope.closeTable = function() {
    	$scope.toDoList.forEach(function(element) {
    		element.isBeingEdited = false;
    		element.titleProgress = element.title;
    	});
    };

    $scope.closeAllOtherItems = function(id) {
    	$scope.toDoList.forEach(function(element) {
    		if(element.id !== id) {
    			element.isBeingEdited = false;
    			element.titleProgress = element.title;
    		}
    	});
    };

    $scope.saveTitle = function(id, newTitle) {
    	$scope.toDoList.find(function(element){
    		return element.id === id;
    	}).title = newTitle;
     };

}]);

/*
<select ng-options="priority as item.priority for item in toDoList" ng-show="editing" ng-model="item.priority"></select>*/