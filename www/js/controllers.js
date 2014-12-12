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
  
  var totalPrice = 0;
  for (var i=0; i<groceryList.length; i++){
    totalPrice += groceryList[i].price;
    console.log(groceryList[i].price);
  }
  $scope.totalPrice = totalPrice;
  $scope.groceryList = groceryList;
})

.controller('ItemDetailCtrl', function($scope, $stateParams, GroceryItems) {
  $scope.item = GroceryItems.get($stateParams.itemId);
})

.controller('BalanceCtrl', function($scope, $stateParams) {
  //$scope.item = GroceryItems.get($stateParams.itemId);
  $scope.title = "FOOD";
  console.log("hello??")
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
