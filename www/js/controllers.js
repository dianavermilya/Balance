angular.module('starter.controllers', [])

.controller('GroceryListCtrl', function($scope, GroceryList, GroceryItems, Constraints, $ionicPopover) {
  var groceryListObjects = GroceryList.get("list");
  var groceryItems = GroceryItems.all();
  var groceryList = [];
  var groceryItem;
  var itemId;
  groceryListObjects.forEach(function (itemMetaData) {
    groceryItem = groceryItems[itemMetaData.id]
    console.log(groceryItem, itemMetaData)
    groceryItem.quantity = itemMetaData.quantity;
    groceryItem.checked = itemMetaData.checked;
    groceryList.push(groceryItem);
  });
  
  var totalPrice = 0;
  for (var i=0; i<groceryList.length; i++){
    totalPrice += groceryList[i].price;
    console.log(groceryList[i].price);
  }
  $scope.totalPrice = totalPrice;
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

  $scope.addToList = function(index) {
    $scope.groceryList[index].quantity++;
    GroceryList.save("list", $scope.groceryList);
  };
  $scope.removeFromList = function(index) {
    list = $scope.groceryList;
    var item = list[index];

    if (item.quantity > 1) {
      list[index].quantity--;
    } else {
      list.splice(index,1);
    }
    $scope.groceryList = list;
    GroceryList.save("list", list);
  };
})

.controller('ItemDetailCtrl', function($scope, $stateParams, GroceryItems, GroceryList) {
  var item = GroceryItems.get($stateParams.itemId);
  $scope.item = item;

  $scope.addToList = function() {
    var list = GroceryList.get("list");
    if (!(item.id in list)) {
      item.quantity = 1;
      list[item.id] = item;
    } else {
      list[item.id].quantity++;
    }
    GroceryList.save("list", list);
  };
})

.controller('BalanceCtrl', function($scope, $stateParams, GroceryList, GroceryItems) {

  



  //$scope.item = GroceryItems.get($stateParams.itemId);
  $scope.title = "FOOD";
  console.log("hello??")
})
.controller('SearchCtrl', function($scope, FoodGroupTree, NutritionTree, Constraints, GroceryItems) {
	$scope.foodGroupTree = FoodGroupTree.all();
	$scope.nutritionTree = NutritionTree.all();
	$scope.groceryItems = GroceryItems.all();
})

.controller('MidSearchCtrl', function($scope, $stateParams, FoodGroupTree, NutritionTree, Constraints, GroceryItems) {
  var items = [];

  $scope.groupId = $stateParams.group;

  var groupTree = FoodGroupTree.all()[$scope.groupId].children;
  var groupList = Object.getOwnPropertyNames(groupTree);
  var tempList = [];
  var groceryItems = GroceryItems.all();

  $scope.subFoodGroupTree = groupTree;

  for (var i=0; i<groupList.length; i++) {
  	tempList = groupTree[groupList[i]].items;
  	for (var j=0; j<tempList.length; j++) {
  		items.push(groceryItems[tempList[j]]);
  	}
  }

  $scope.selectItems = items;
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
  $scope.groupID = $stateParams.group;
  $scope.subGroupId = subGroupId;
  $scope.selectGroceryItems = selectGroceryItems;
});
