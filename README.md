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

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(example)`: compares two arrays if they are equal.



* `tail(arr)`: Returns an array consisting of all elements from index 1 onwards in the input array arr. 
              It effectively excludes the first element from the array.

      `const results = _.tail([1, 2, 3]) // => [2, 3]`

* `middle(arr)`: Returns an array consisting of the middle element of the even numbered array arr.
              In the event that array.arris odd, it returns 2 elements.

      `const results = _.middle([1, 2, 3, 5, 7, 11, 13 ]) // => [5]` 
      `const results = _.middle([1, 2, 3, 5, 7, 11, ]) // => [3, 5]`




* `function3(...)`: description