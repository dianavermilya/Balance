angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('GroceryList', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var groceryList = [
    { id: 0, name: '1 dozen eggs' },
    { id: 1, name: '1 gal 2% milk' },
    { id: 2, name: '4 lbs potatoes' },
    { id: 3, name: '1 qt yogurt' },
    { id: 4, name: '1 pt blueberries' }
  ];

  return {
    all: function() {
      return groceryList;
    },
    get: function(itemId) {
      // Simple index lookup
      return groceryList[itemId];
    }
  }
});
