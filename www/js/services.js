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

.factory('Constraints', function() {
  var constraints = {
    lowSugar: {
      name: "Low Sugar",
      selected: false
    },
    noGluten: {
      name: "No Gluten",
      selected: false
    },
    noRedMeet: {
      name: "No Red Meat",
      selected: false
    },
    noDairy: {
      name: "No Dairy",
      selected: false
    },
    noNuts: {
      name: "No Nuts",
      selected: false
    },
    noFish: {
      name: "No Fish",
      selected: false
    }
  };

  return {
    all: function() {
      return constraints;
    },
    get: function(key) {
      return constraints[key];
    }
  }


})

.factory('FoodGroupTree', function() {

  var tree = {
    fruits: {
      id: "fruits",
      name: "Fruits",
      children: {}
    },
    veggies: {
      id: "veggies",
      name: "Veggies",
      children: {}
    },
    grains: {
      id: "grains",
      name: "Grains",
      children: {}
    },
    proteins: {
      id: "proteins",
      name: "Proteins",
      children: {
        eggsAndDairy: {
          id: "eggsAndDairy",
          name: "Eggs and Dairy",
          children: {}
        },
        poultry: {
          id: "poultry",
          name: "Poultry",
          children: {}
        },
        redMeat: {
          id: "redMeat",
          name: "Red Meat",
          children: {}
        },
        seafood: {
          id: 'seafood',
          name: "Seafood",
          children: {}
        },
        nutAndSeed: {
          id: 'nutAndSeed',
          name: "Nut and Seed",
          children: {}
        },
        supplement: {
          id: 'supplement',
          name: "Supplement",
          children: {},
          items: [10,11,12]
        }
      }
    },
    dairy: {
      id: 'dairy',
      name: "Dairy",
      children: {}
    },
    desserts: {
      id: 'desserts',
      name: "Desserts",
      children: {}
    }
  };

  return {
    all: function() {
      return tree;
    }
  }
})

.factory('NutritionTree', function() {
  var tree = {
    a: {
      name: "Vitamin A",
      items: [1]
    },
    b6: {
      name: "Vitamin B6",
      items: [1]
    },
    b12: {
      name: "Vitamin B12",
      items: [1]
    },
    c: {
      name: "Vitamin C",
      items: [1]
    },
    d: {
      name: "Vitamin D",
      items: [1]
    },
    e: {
      name: "Vitamin E",
      items: [1]
    },
    iron: {
      name: "Iron",
      items: [1]
    },
    K: {
      name: "Potassium",
      items: [1]
    },
    Mg: {
      name: "Magnesium",
      items: [1]
    },
    riboflavin: {
      name: "Riboflavin",
      items: [1]
    }
  };

  return {
    all: function() {
      return tree;
    }
  }
});
