///////transformers:

//robots in disguise

// Imagine we're a top-end cyber researcher for DARPA.
// The military has given us a list of robots.
// We also have a manifest of all known Decepticon robot names.
// Our job is to go through the list of robots,
// and set their alliance accordingly.

const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];


// The Object.assign() method is used to
// copy the values of all enumerable own properties
// from one or more source objects to a target object.
// It will return the target object.

var sortedRobots = robots.map(function(oneBot) {
  if (knownDecepticons.includes(oneBot.name)) {
    return Object.assign({}, oneBot, {alliance: 'decepticon'})
  } else {
    return Object.assign({}, oneBot, {alliance: 'autobot'})
    }
})


///////zebra:

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

// A zebra without stripes is just a silly looking horse.
// We have a zebraStripes array that represents the
// stripes of our dancing friend up here,
// but the stripes don't have any color yet.
// Let's fix that!

var coloredZebraStripes = zebraStripes.map(function(stripe) { //stripe is our callback, could be called anything
    if (zebraStripes.indexOf(stripe) % 2 === 0) { //if the index of the zebraStripes array of objects is even...
      return Object.assign({}, stripe, {color: 'black'}) ///...make that stripe black
    } else {
      return Object.assign({}, stripe, {color: 'white'})
    }
})

///almost:::::
// var coloredZebraStripes = zebraStripes.map(function(odd, even) {
//   var arrayOfKeys = Object.keys(zebraStripes);
//   for (var i = 0; i < arrayOfKeys.length; i++) {
//       if (arrayOfKeys[i] % 2 === 0) { //if 'index', AKA key of zebraStripes, is even...
//       return Object.assign({}, even, {color: 'black'}) ///make that strike black
//     } else {
//       return Object.assign({}, odd, {color: 'white'})
//     }
//   }
// })
