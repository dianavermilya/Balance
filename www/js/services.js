angular.module('starter.services', [])


.factory('GroceryItems', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var groceryItems = [
    { id: 0,  name: '1 dozen eggs',           price: 5.89, constraintsViolated: []},
    { id: 1,  name: '1 gal 2% milk',          price: 5.89, constraintsViolated: ["noDairy"]},
    { id: 2,  name: '4 lbs potatoes',         price: 5.89, constraintsViolated: []},
    { id: 3,  name: '1 qt yogurt',            price: 5.89, constraintsViolated: ["noDairy"]},
    { id: 4,  name: '1 pt blueberries',       price: 5.89, constraintsViolated: []},
    { id: 5,  name: 'ribeye steak',           price: 5.89, constraintsViolated: ["noRedMeat"]},
    { id: 6,  name: 'lean chicken breast',    price: 5.89, constraintsViolated: []},
    { id: 7,  name: 'Peanut butter clif bar', price: 5.89, constraintsViolated: ["lowSugar", "noNuts"]},
    { id: 8,  name: 'Vanilla Protein Shake',  price: 5.89, constraintsViolated: ["noDairy"]},
    { id: 9,  name: 'Tofu',                   price: 5.89, constraintsViolated: []},
    { id: 10, name: 'Muscle-Man Choco-Chug',  price: 5.89, constraintsViolated: ["lowSugar", "noDairy"]},
    { id: 11, name: 'Power Powder',           price: 5.89, constraintsViolated: []},
    { id: 12, name: 'Mocho-Man Munchy Bar',   price: 5.89, constraintsViolated: ["noGluten"]},
    { id: 13, name: '1 box of Crab Cakes',    price: 5.89, constraintsViolated: ["noGluten", "noFish"]}
  ];

  return {
    all: function() {
      return groceryItems;
    },
    get: function(itemId) {
      return groceryItems[itemId];
    }
  }
})

.factory('GroceryList', function() {

  var groceryList = {list: [
    { id:0, checked: "false", quantity:1},
    { id:1, checked: "true", quantity:3},
    { id:3, checked: "false", quantity:1},
    { id:6, checked: "false", quantity:1},
    { id:9, checked: "false", quantity:1},
  ]};

  return {
    all: function() {
      return groceryList;
    },
    get: function(itemId) {
      return groceryList[itemId];
    },
    save: function(key, value) {
      groceryList[key] = value;
    }
  }
})

.factory('Constraints', function() {
  var constraints = {
    lowSugar: {
      id: "lowSugar",
      name: "Low Sugar",
      selected: false
    },
    noGluten: {
      id: "noGluten",
      name: "No Gluten",
      selected: false
    },
    noRedMeat: {
      id: "noRedMeat",
      name: "No Red Meat",
      selected: false
    },
    noDairy: {
      id: "noDairy",
      name: "No Dairy",
      selected: false
    },
    noNuts: {
      id: "noNuts",
      name: "No Nuts",
      selected: false
    },
    noFish: {
      id: "noFish",
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
    },
    save: function(key, value) {
      constraints[key] = value;
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
          children: {},
          items: []
        },
        poultry: {
          id: "poultry",
          name: "Poultry",
          children: {},
          items: []
        },
        redMeat: {
          id: "redMeat",
          name: "Red Meat",
          children: {},
          items: []
        },
        seafood: {
          id: 'seafood',
          name: "Seafood",
          children: {},
          items: []
        },
        nutAndSeed: {
          id: 'nutAndSeed',
          name: "Nut and Seed",
          children: {},
          items: []
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
