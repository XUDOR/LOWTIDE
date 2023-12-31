# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @roderickshoolbraid/lotide`

**Require it:**

`const _ = require('@roderickshoolbraid/lotide');`

**Call it:**

`const result = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: 

      Compares two arrays for equality and logs an appropriate message to the console.

      const result1 = _.assertArraysEqual([1, 2, 3], [1, 2, 3]); 
      // Logs: Assertion Passed: 1,2,3 === 1,2,3
      const result2 = _.assertArraysEqual([1, 2, 3], [1, 2, 4]); 
      // Logs: Assertion Failed: 1,2,3 !== 1,2,4
      
_________________________________________________________________________
* `assertEqual(actual, expected)`:

Compares two primitive values for strict equality and logs an appropriate message to the console.

      const result1 = _.assertEqual("Lighthouse", "Lighthouse"); 
      // Logs: Assertion Passed: Lighthouse === Lighthouse
      const result2 = _.assertEqual("Lighthouse Labs", "Bootcamp"); 
      // Logs: Assertion Failed: Lighthouse Labs !== Bootcamp

_________________________________________________________________________
* `assertObjectsEqual(actual, expected)`:

Checks if two objects are deeply equal and logs an appropriate message to the console.

      const result = _.assertObjectsEqual(obj1, obj2); 
      // Logs: Assertion Passed: { a: 1, b: 2 } === { b: 2, a: 1 }
      const result2 = _.assertObjectsEqual(obj1, obj3);
      // Logs: Assertion Failed: { a: 1, b: 2 } !== { a: 1, b: 3 }

_________________________________________________________________________
* `countLetters(sentence)`:

Counts the number of occurrences for each letter in the given sentence 
 and returns an object representation.

      const result = _.countLetters("Lighthouse Labs");
      // Should return { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 }

_________________________________________________________________________
* `countOnly(allItems, itemsToCount)`:

Counts the occurrences of specific items in an array (`allItems`) 
based on the criteria specified in the `itemsToCount` object and returns an object
representation.

      const result1 = _.countOnly(
            ["a", "b", "a", "c", "b", "a"], 
            { a: true, b: false, c: true });
      // returns { a: 3, c: 1 }
      
      const result2 = _.countOnly(
            ["apple", "banana", "apple", "cherry", "banana", "apple"], 
            { apple: true, banana: false, cherry: true });
      // returns { apple: 3, cherry: 1 }

_________________________________________________________________________ 
* `eqArrays(arr1, arr2)`: 

Compares two arrays for strict equality and returns true or false.

      const result1 = _.eqArrays([1, 2, 3], [1, 2, 3]); //  returns true
      const result2 = _.eqArrays([1, 2, 3], [3, 2, 1]); //  returns false
      const result3 = _.eqArrays(["1", "2", "3"], ["1", "2", "3"]); //  returns true
      const result4 = _.eqArrays(["1", "2", "3"], ["1", "2", 3]);   //  returns false

_________________________________________________________________________
* `eqObjects(obj1, obj2)`:

 Compares two objects for equality, including nested arrays and objects, 
and returns `true` if they are equal, and `false` otherwise.

      const obj1 = { a: 1, b: 2, c: [1, 2, 3] };
      const obj2 = { b: 2, a: 1, c: [1, 2, 3] };
      const obj3 = { a: 1, b: 2, c: [1, 2, 4] };

      console.log(_.eqObjects(obj1, obj2)); // Should return true
      console.log(_.eqObjects(obj1, obj3)); // Should return false

_________________________________________________________________________
* `findKey(object, callback)`

 Finds the first key in the provided object where the callback function 
returns a truthy value and returns that key. If no key is found, it returns `undefined`.

      const data = {
             "Blue Hill": { stars: 1 },
            "Akaleri":   { stars: 3 },
            "noma":      { stars: 2 },
            "elBulli":   { stars: 3 },
            "Ora":       { stars: 2 },
            "Akelarre":  { stars: 3 }
            };

      const result = _.findKey(data, restaurant => restaurant.stars === 2);
      // Should return 'noma'

_________________________________________________________________________
* `findKeyByValue(object, value)`:

`object`: The object to search within.
`value`: The value to search for within the object.
Returns the first key in the provided object whose corresponding 
value matches the given `value`. If no key is found, it returns `undefined`.
  
      const bestTVShowsByGenre = {
            sciFi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama: "Breaking Bad",
      };

      const result1 = _.findKeyByValue(bestTVShowsByGenre, "Breaking Bad"); 
      // Should return "drama"
      const result2 = _.findKeyByValue(bestTVShowsByGenre, "The Expanse"); 
      // Should return "sciFi"
      const result3 = _.findKeyByValue(bestTVShowsByGenre, "Friends"); 
      // Should return undefined

_________________________________________________________________________
* `flatten(arr)`:
`arr`: An array that may contain nested arrays.
Returns a new array with all the elements from the input array `arr`, 
but flattened, meaning that any nested arrays are recursively expanded 
so that the resulting array contains only non-array elements.

      const nestedArray = [1, [2, 3], [4, [5, 6]]];
      const flattenedArray = _.flatten(nestedArray);
      console.log(flattenedArray); // Should return [1, 2, 3, 4, 5, 6]

_________________________________________________________________________
* `head(arr)`: 
Returns the first element of the array.

      const result = _.head([1, 2, 3]); //  returns 1
_________________________________________________________________________
* `letterPositions(sentence)`: 

letterPositions(sentence): Returns an object that maps each unique character 
in the given `sentence` to an array of the indices at which it appears.

      const result = _.letterPositions("hello"); 
      // Should return { h: [0], e: [1], l: [2, 3], o: [4] }

The `letterPositions` function is useful for analyzing the positions of 
characters within a string. It returns an object where the keys are unique 
characters in the `sentence`, and the values are arrays of indices where 
those characters can be found. In the example provided, the letter "h" appears 
at index 0, "e" at index 1, "l" at indices 2 and 3, and "o" at index 4 in the 
input string "hello."

_________________________________________________________________________
* `map(array, callback)`

The `map` function applies a provided `callback` function to each element 
of the `array` and returns a new array containing the results of applying 
the callback.

      const numbers = [1, 2, 3, 4, 5];

      // Double each number in the array
      const doubledNumbers = _.map(numbers, (num) => num * 2);
      console.log(doubledNumbers); // Should return [2, 4, 6, 8, 10]

      // Square each number in the array
      const squaredNumbers = _.map(numbers, (num) => num * num);
      console.log(squaredNumbers); // Should return [1, 4, 9, 16, 25]

_________________________________________________________________________
* `middle(arr)`: 
Returns the middle element(s) of the array.

      const result1 = _.middle([1, 2, 3, 5, 7, 11, 13 ]) //  returns [5]
      const result2 = _.middle([1, 2, 3, 5, 7, 11, ]) //  returns [3, 5]

_________________________________________________________________________
* `tail(arr)`: 
 Returns all elements of the array excluding the first one.

      const result = _.tail([1, 2, 3]) // returns [2, 3]


_________________________________________________________________________
* `takeUntil(array, callback)`

The `takeUntil` function returns a slice of the `array` with elements taken 
from the beginning until the `callback` returns a truthy value. 
Once the `callback` returns true for an element, the `takeUntil` function stops 
and returns the sliced portion of the `array` up to that point.

      const numbers = [1, 2, 3, 4, 5];
      
      const result = _.takeUntil(numbers, (num) => num > 3);
      // Take elements from the beginning until a number greater than 3 is found.
      console.log(result); // Should return [1, 2, 3]

_________________________________________________________________________
* `without(source, itemsToRemove)`

The `without` function removes specified items from an array and returns a new 
array with the remaining elements. It takes two arguments:

The `without` function uses the `filter` method to iterate through the `source` 
array and includes only the elements that are not found in the `itemsToRemove` 
array. The result is a new array containing the remaining elements.


      const result = _.without([1, 2, 3, 4, 5], [2, 4]); 
      // Should return [1, 3, 5]
