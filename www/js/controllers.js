angular.module('starter.controllers', [])

.controller('PreferencesCtrl', function($scope) {
})

.controller('GroceryListCtrl', function($scope, GroceryList, GroceryItems) {
  var groceryListIndexes = GroceryList.all();
  var groceryItems = GroceryItems.all();
  var groceryList = {};
  for (var i=0;i<groceryListIndexes.length; i++){
  	groceryList.push(groceryItems[groceryListIndexes]);
  };
});

.controller('ItemDetailCtrl', function($scope, $stateParams, GroceryList) {
  $scope.item = GroceryList.get($stateParams.itemId);
});

.controller('AccountCtrl', function($scope) {
});