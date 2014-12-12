angular.module('starter.controllers', [])

.controller('GroceryListCtrl', function($scope, GroceryList, GroceryItems, Constraints, $ionicPopover) {
  var groceryListObjects = GroceryList.get("list");
  var groceryItems = GroceryItems.all();
  var groceryList = [];
  var groceryItem;
  for (var i=0;i<groceryListObjects.length; i++){
    groceryItem = groceryItems[groceryListObjects[i].id];
    groceryItem.quantity = groceryListObjects[i].quantity;
    groceryItem.checked = groceryListObjects[i].checked;
  	groceryList.push(groceryItem);
  };
  $scope.groceryList = groceryList;

  $ionicPopover.fromTemplateUrl('templates/preferences-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    console.log($event);
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  var constraintsList = Constraints.all();
  $scope.constraintsList = constraintsList;
  $scope.updateConstraint = function (key) {
    var constraint = Constraints.get(key);
    constraint.selected = !constraint.selected;
    Constraints.save(key, constraint);
    $scope.constraintsList[key] = constraint;
  };

})

.controller('ItemDetailCtrl', function($scope, $stateParams, GroceryItems, GroceryList) {
  $scope.item = GroceryItems.get($stateParams.itemId);

  $scope.addToList = function() {
    var list = GroceryList.get("list");
    if (list.indexOf('Sam') === -1) {
      list.push($scope.item);
    }
    GroceryList.save("list", list);
  };
})

.controller('SearchCtrl', function($scope, FoodGroupTree, NutritionTree, Constraints, GroceryItems) {
	$scope.foodGroupTree = FoodGroupTree.all();
	$scope.nutritionTree = NutritionTree.all();
	$scope.groceryItems = GroceryItems.all();
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