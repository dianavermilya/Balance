angular.module('starter.controllers', [])

.controller('PreferencesCtrl', function($scope) {
})

.controller('GroceryListCtrl', function($scope, GroceryList) {
  $scope.groceryList = GroceryList.all();
})

.controller('ItemDetailCtrl', function($scope, $stateParams, GroceryList) {
  $scope.item = GroceryList.get($stateParams.itemId);
})

.controller('SearchCtrl', function($scope) {
});
