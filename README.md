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

      const result1 = _.assertArraysEqual([1, 2, 3], [1, 2, 3]); // Logs: Assertion Passed: 1,2,3 === 1,2,3
      const result2 = _.assertArraysEqual([1, 2, 3], [1, 2, 4]); // Logs: Assertion Failed: 1,2,3 !== 1,2,4
      
_________________________________________________________________________
* `assertEqual(actual, expected)`:
      Compares two primitive values for strict equality and logs an appropriate message to the console.

      const result1 = _.assertEqual("Lighthouse", "Lighthouse"); // Logs: Assertion Passed: Lighthouse === Lighthouse
      const result2 = _.assertEqual("Lighthouse Labs", "Bootcamp"); // Logs: Assertion Failed: Lighthouse Labs !== Bootcamp

_________________________________________________________________________
* `assertObjectsEqual(actual, expected)`:
       Checks if two objects are deeply equal and logs an appropriate message to the console.

      const result = _.assertObjectsEqual(obj1, obj2);  // // Logs: Assertion Passed: { a: 1, b: 2 } === { b: 2, a: 1 }
      const result2 = _.assertObjectsEqual(obj1, obj3);  // // Logs: Assertion Failed: { a: 1, b: 2 } !== { a: 1, b: 3 }

_________________________________________________________________________
* `countLetters(sentence)`:
      Counts the number of occurrences for each letter in the given sentence and returns an object representation.

      const result = _.countLetters("Lighthouse Labs");
      // Should return { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 }

_________________________________________________________________________
* `countOnly(allItems, itemsToCount)`:
      Counts the occurrences of specific items in an array (`allItems`) based on the criteria specified in the `itemsToCount` object and returns an object representation.

      const result1 = _.countOnly(["a", "b", "a", "c", "b", "a"], { a: true, b: false, c: true });
      // returns { a: 3, c: 1 }
      
      const result2 = _.countOnly(["apple", "banana", "apple", "cherry", "banana", "apple"], { apple: true, banana: false, cherry: true });
      // returns { apple: 3, cherry: 1 }

_________________________________________________________________________ 
* `eqArrays(arr1, arr2)`: 
      eqArrays(arr1, arr2): Compares two arrays for strict equality and returns true or false.

      const result1 = _.eqArrays([1, 2, 3], [1, 2, 3]); //  returns true
      const result2 = _.eqArrays([1, 2, 3], [3, 2, 1]); //  returns false
      const result3 = _.eqArrays(["1", "2", "3"], ["1", "2", "3"]); //  returns true
      const result4 = _.eqArrays(["1", "2", "3"], ["1", "2", 3]);   //  returns false

_________________________________________________________________________
* `eqObjects(obj1, obj2)`:
      Compares two objects for equality, including nested arrays and objects, and returns `true` if they are equal, and `false` otherwise.

      const obj1 = { a: 1, b: 2, c: [1, 2, 3] };
      const obj2 = { b: 2, a: 1, c: [1, 2, 3] };
      const obj3 = { a: 1, b: 2, c: [1, 2, 4] };

      console.log(_.eqObjects(obj1, obj2)); // Should return true
      console.log(_.eqObjects(obj1, obj3)); // Should return false

_________________________________________________________________________
* `findKey(object, callback)`
      Finds the first key in the provided object where the callback function returns a truthy value and returns that key. If no key is found, it returns `undefined`.

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
  - `object`: The object to search within.
  - `value`: The value to search for within the object.
  - Returns the first key in the provided object whose corresponding value matches the given `value`. If no key is found, it returns `undefined`.
  
      const bestTVShowsByGenre = {
            sciFi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama: "Breaking Bad",
      };

      const result1 = _.findKeyByValue(bestTVShowsByGenre, "Breaking Bad"); // Should return "drama"
      const result2 = _.findKeyByValue(bestTVShowsByGenre, "The Expanse"); // Should return "sciFi"
      const result3 = _.findKeyByValue(bestTVShowsByGenre, "Friends"); // Should return undefined


_________________________________________________________________________
* `flatten(arr)`:
  - `arr`: An array that may contain nested arrays.
  - Returns a new array with all the elements from the input array `arr`, but flattened, meaning that any nested arrays are recursively expanded so that the resulting array contains only non-array elements.

      const nestedArray = [1, [2, 3], [4, [5, 6]]];
      const flattenedArray = _.flatten(nestedArray);
      console.log(flattenedArray); // Should return [1, 2, 3, 4, 5, 6]

_________________________________________________________________________
* `head(arr)`: 
      head(arr): Returns the first element of the array.

      const result = _.head([1, 2, 3]); //  returns 1

_________________________________________________________________________
* `middle(arr)`: 
      middle(arr): Returns the middle element(s) of the array.

      const result1 = _.middle([1, 2, 3, 5, 7, 11, 13 ]) //  returns [5]
      const result2 = _.middle([1, 2, 3, 5, 7, 11, ]) //  returns [3, 5]

_________________________________________________________________________
* `tail(arr)`: 
      tail(arr): Returns all elements of the array excluding the first one.

      const result = _.tail([1, 2, 3]) // returns [2, 3]


