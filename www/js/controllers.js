angular.module('starter.controllers', [])

.controller('PreferencesCtrl', function($scope, Constraints) {
	var constraintsList = Constraints.all();
	$scope.constraintsList = constraintsList;
  $scope.updateConstraint = function (key) {
    var constraint = Constraints.get(key);
    constraint.selected = !constraint.selected;
    Constraints.save(key, constraint);
    $scope.constraintsList[key] = constraint;
  };
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
})

.controller('MidSearchCtrl', function($scope, $stateParams, FoodGroupTree, NutritionTree, Constraints) {
  $scope.groupId = $stateParams.group;
  $scope.subFoodGroupTree = FoodGroupTree.all()[$scope.groupId].children;
})

.controller('LowerSearchCtrl', function($scope, $stateParams, FoodGroupTree, NutritionTree, Constraints, GroceryItems) {
  var groceryItems = GroceryItems.all();
  var groupId = $stateParams.group;
  var subGroupId = $stateParams.subGroup;
  var selectGroceryIndexes = FoodGroupTree.all()[groupId].children[subGroupId].items;

  var selectGroceryItems = [];
  var constraints = Constraints.all();

  function isAllowed(food) {
    var allowed = true
    food.constraintsViolated.every(function(violation) {
      if (constraints[violation].selected) {
        allowed = false;
        return false;        
      }
      else return true;
    });
    return allowed;
  }

  var groceryItem;
  for (var i=0;i<selectGroceryIndexes.length;i++){
    groceryItem = groceryItems[selectGroceryIndexes[i]]
    if (isAllowed(groceryItem)) {
      selectGroceryItems.push(groceryItem);
    }
  };
  $scope.selectGroceryItems = selectGroceryItems;
});