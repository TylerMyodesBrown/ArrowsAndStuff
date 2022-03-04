//Refractoring Functions into function arrows
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//the above becomes

const doubl = (arr) => arr.map( val => val * 2)


//Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//the above becomes

const sqAndFindEv = nums => nums.map(val => val ** 2).filter(sq => sq % 2 === 0)