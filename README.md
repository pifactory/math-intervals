[![MIT License][license-image]][license-url]

TypeScript/JavaScript library for working with intervals of real numbers, including intersections, joins, disjoint sets etc

## Install

```sh
$ npm install --save math-intervals
```

## Usage

```js
import intervals from 'math-intervals';

// [2, 10)
const interval1 = intervals.leftClosedRightOpen(2, 10)

// [10, 20)
const interval2 = intervals.leftClosedRightOpen(10, 20)

console.log(intervals.intersect(interval1, interval2)) // false
console.log(intervals.continuous(interval1, interval2)) // true

const partitionedInterval = intervals.partitioned(interval1, interval2)
console.log(intervals.intersect(partitionedInterval, interval1)) // true
console.log(intervals.intersect(partitionedInterval, interval2)) // true
console.log(intervals.intersect(partitionedInterval, partitionedInterval)) // true
```
## Constructors

TODO

## Functions

TODO

## License

math-intervals is freely distributable under the terms of the [MIT license](https://github.com/pi-factory/math-intervals/blob/master/LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

