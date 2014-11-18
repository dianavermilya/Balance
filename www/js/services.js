angular.module('starter.services', [])


.factory('GroceryItems', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var groceryItems = [
    { id: 0, name: '1 dozen eggs' },
    { id: 1, name: '1 gal 2% milk' },
    { id: 2, name: '4 lbs potatoes' },
    { id: 3, name: '1 qt yogurt' },
    { id: 4, name: '1 pt blueberries' },
    { id: 5, name: 'ribeye steak' },
    { id: 6, name: 'lean chicken breast' },
    { id: 7, name: 'Peanut butter clif bar' },
    { id: 8, name: 'Vanilla Protein Shake' },
    { id: 9, name: 'Tofu' }
  ];

  return {
    all: function() {
      return groceryItems;
    },
    get: function(itemId) {
      // Simple index lookup
      return groceryItems[itemId];
    }
  }
})


.factory('GroceryList', function() {

  var groceryList = [0,1,3,6,9];

  return {
    all: function() {
      return groceryList;
    },
    get: function(index) {
      return groceryList[index];
    }
  }
});
