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
            Compares two arrays for equality using the `eqArrays` function and logs a message to the console. 
            If the arrays are equal, it logs "Assertion Passed: arr1 === arr2"; if they are not equal, it logs "Assertion Failed: arr1 !== arr2".

      `const result1 = _.assertArraysEqual([1, 2, 3], [1, 2, 3]); // Logs: Assertion Passed: 1,2,3 === 1,2,3`
      `const result2 = _.assertArraysEqual([1, 2, 3], [1, 2, 4]); // Logs: Assertion Failed: 1,2,3 !== 1,2,4`
      
_________________________________________________________________________
* `assertEqual(actual, expected)`:
            Compares two primitive values (like strings or numbers) for strict equality and logs a message to the console.
            If the values are equal, it logs "Assertion Passed: actual === expected"; if they are not equal, it logs "Assertion Failed: actual !== expected".

      `const result1 = _.assertEqual("Lighthouse", "Lighthouse"); // Logs: Assertion Passed: Lighthouse === Lighthouse`
      `const result2 = _.assertEqual("Lighthouse Labs", "Bootcamp"); // Logs: Assertion Failed: Lighthouse Labs !== Bootcamp`

_________________________________________________________________________
* `eqArrays(arr1, arr2)`: 
            Compares two arrays for strict equality – both in terms of the order and type of elements. Returns `true` if the arrays are identical, and `false` otherwise.

      `const result1 = _.eqArrays([1, 2, 3], [1, 2, 3]); // Should return true`
      `const result2 = _.eqArrays([1, 2, 3], [3, 2, 1]); // Should return false`
      `const result3 = _.eqArrays(["1", "2", "3"], ["1", "2", "3"]); // Should return true`
      `const result4 = _.eqArrays(["1", "2", "3"], ["1", "2", 3]);   // Should return false`

_________________________________________________________________________
* `head(arr)`: 
            Returns the first element of the array arr.

      `const result = _.head([1, 2, 3]); // Should return 1`

_________________________________________________________________________
* `middle(arr)`: 
            Returns an array consisting of the middle element of the odd numbered array arr.
            In the event that the array length is even, it returns 2 elements.

      `const result1 = _.middle([1, 2, 3, 5, 7, 11, 13 ]) // Should return [5]` 
      `const result2 = _.middle([1, 2, 3, 5, 7, 11, ]) // Should return [3, 5]`

_________________________________________________________________________
* `tail(arr)`: 
            Returns an array consisting of all elements from index 1 onwards in the input array arr. 
            It effectively excludes the first element from the array.

      `const result = _.tail([1, 2, 3]) // Should return [2, 3]`


