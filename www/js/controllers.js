angular.module('starter.controllers', [])

.controller('PreferencesCtrl', function($scope) {
})

.controller('GroceryListCtrl', function($scope, GroceryList, GroceryItems) {
  var groceryListIndexes = GroceryList.all();
  var groceryItems = GroceryItems.all();
  console.log("grocery items", groceryItems);
  var groceryList = [];
  for (var i=0;i<groceryListIndexes.length; i++){
  	groceryList.push(groceryItems[groceryListIndexes[i]]);
  };
  $scope.groceryList = groceryList;
})

.controller('ItemDetailCtrl', function($scope, $stateParams, GroceryItems) {
  $scope.item = GroceryItems.get($stateParams.itemId);
})

.controller('SearchCtrl', function($scope, FoodGroupTree, NutritionTree, Constraints) {
	$scope.foodGroupTree = FoodGroupTree.all();
	$scope.nutritionTree = NutritionTree.all();
	$scope.constraints = Constraints.all();
	console.log("constraints", $scope.constraints);
})

.controller('MidSearchCtrl', function($scope, $stateParams, FoodGroupTree, NutritionTree, Constraints) {
  var group = $stateParams.group;
  $scope.group = group;
  $scope.subFoodGroupTree = FoodGroupTree.all()[group].children;
});