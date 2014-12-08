angular.module('starter.controllers', [])

.controller('PreferencesCtrl', function($scope, Constraints) {
	var constraintsList = Constraints.all();
	$scope.constraintsList = constraintsList;
})

.controller('GroceryListCtrl', function($scope, GroceryList, GroceryItems) {
  var groceryListIndexes = GroceryList.all();
  var groceryItems = GroceryItems.all();
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
})

.controller('MidSearchCtrl', function($scope, $stateParams, FoodGroupTree, NutritionTree, Constraints) {
  $scope.groupId = $stateParams.group;
  $scope.subFoodGroupTree = FoodGroupTree.all()[$scope.groupId].children;
})

.controller('LowerSearchCtrl', function($scope, $stateParams, FoodGroupTree, NutritionTree, Constraints, GroceryItems) {
  var groceryItems = GroceryItems.all();
  var groupId = $stateParams.group;
  var subGroupId = $stateParams.subGroup;
  var selectGroceryIndexes = FoodGroupTree.all()[groupId].children[subGroupId].items
  var selectGroceryItems = [];
  for (var i=0;i<selectGroceryIndexes.length; i++){
    selectGroceryItems.push(groceryItems[selectGroceryIndexes[i]]);
  };
  $scope.selectGroceryItems = selectGroceryItems;
});