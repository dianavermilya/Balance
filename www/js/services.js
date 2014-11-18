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
    { id: 9, name: 'Tofu' },
    { id: 10, name: 'Muscle-Man Choco-Chug' },
    { id: 11, name: 'Power Powder' },
    { id: 12, name: 'Mocho-Man Munchy Bar' }



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
    }
  }
})

.factory('FoodGroupTree', function() {

  var tree = {
    fruits: {
      name: "Fruits",
      children: {}
    },
    veggies: {
      name: "Veggies",
      children: {}
    },
    grains: {
      name: "Grains",
      children: {}
    },
    proteins: {
      name: "Proteins",
      children: {
        eggsAndDairy: {
          name: "Eggs and Dairy",
          children: {}
        },
        poultry: {
          name: "Poultry",
          children: {}
        },
        redMeat: {
          name: "Red Meat",
          children: {}
        },
        seafood: {
          name: "Seafood",
          children: {}
        },
        nutAndSeed: {
          name: "Nut and Seed",
          children: {}
        },
        supplement: {
          name: "Supplement",
          children: {},
          items: [10,11,12]
        }
      }
    },
    dairy: {
      name: "Dairy",
      children: {}
    },
    desserts: {
      name: "Desserts",
      children: {}
    }
  }

  return {
    all: function() {
      return tree;
    }
  }
});
