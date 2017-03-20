/**
 * See {@link https://en.wikipedia.org/wiki/Interval_(mathematics)|Wikipedia: Interval (mathematics)}
 */
export type Interval = LeftBound & RightBound

/**
 * Set of non-intersecting intervals
 */
export type PartitionedInterval = Array<Interval>

//
// Left bound
//

export type LeftBound = LeftClosed | LeftOpen | LeftUnbound

/**
 * [a, ...
 */
export interface LeftClosed {
  min: number
}
export function isLeftClosed(i: LeftBound): i is LeftClosed {
  return (<LeftClosed> i).min !== undefined
}

/**
 * (a, ...
 */
export interface LeftOpen {
  left: number
}
export function isLeftOpen(i: LeftBound): i is LeftOpen {
  return (<LeftOpen> i).left !== undefined
}

/**
 * (-∞, ...
 */
export interface LeftUnbound {
}
const leftUnbound: LeftUnbound = {}
export function isLeftUnbound(i: LeftBound): i is LeftUnbound {
  return !isLeftClosed(i) && !isLeftOpen(i)
}

//
// Right bound
//

export type RightBound = RightClosed | RightOpen | RightUnbound

/**
 * ..., b]
 */
export interface RightClosed {
  max: number
}
export function isRightClosed(i: RightBound): i is RightClosed {
  return (<RightClosed> i).max !== undefined
}

/**
 * ..., b)
 */
export interface RightOpen {
  right: number
}
export function isRightOpen(i: RightBound): i is RightOpen {
  return (<RightOpen> i).right !== undefined
}

/**
 * ..., +∞)
 */
export interface RightUnbound {
}
const rightUnbound: RightBound = {}
export function isRightUnbound(i: RightBound): i is RightUnbound {
  return !isRightClosed(i) && !isRightOpen(i)
}


//
// Constructors
//

/**
 * [min, +∞)
 *
 * @param min
 * @returns {{min: number}}
 */
export function leftClosedRightUnbound(min: number): LeftClosed & RightUnbound {
  return {min}
}

/**
 * [min, right)
 *
 * @param min
 * @param right
 * @returns {{min: number, right: number}}
 */
export function leftClosedRightOpen(min: number, right: number): LeftClosed & RightOpen {
  return {min, right}
}

/**
 * [min, max]
 *
 * @param min
 * @param max
 * @returns {{min: number, max: number}}
 */
export function leftClosedRightClosed(min: number, max: number): LeftClosed & RightClosed {
  return {min, max}
}

/**
 * (left, +∞)
 *
 * @param left
 * @returns {{left: number}}
 */
export function leftOpenRightUnbound(left: number): LeftOpen & RightUnbound {
  return {left}
}

/**
 * (left, right)
 *
 * @param left
 * @param right
 * @returns {{left: number, right: number}}
 */
export function leftOpenRightOpen(left: number, right: number): LeftOpen & RightOpen {
  return {left, right}
}

/**
 * (left, max]
 *
 * @param left
 * @param max
 * @returns {{left: number, max: number}}
 */
export function leftOpenRightClosed(left: number, max: number): LeftOpen & RightClosed {
  return {left, max}
}

/**
 * (-∞, +∞)
 *
 * @returns {{}}
 */
export const leftUnboundRightUnbound: LeftUnbound & RightUnbound = {}

/**
 * (-∞, right)
 *
 * @param right
 * @returns {{right: number}}
 */
export function leftUnboundRightOpen(right: number): LeftUnbound & RightOpen {
  return {right}
}

/**
 * (-∞, max]
 *
 * @param max
 * @returns {{max: number}}
 */
export function leftUnboundRightClosed(max: number): LeftUnbound & RightClosed {
  return {max}
}

/**
 * ∅, no number falls within the interval boundaries
 *
 * @returns {{left: number, right: number}}
 */
export const empty: LeftOpen & RightOpen = {left: 0, right: 0}

/**
 * {value}, only 1 given number is included in the interval
 *
 * @param value
 * @returns {{min: number, max: number}}
 */
export function degenerate(value: number): LeftClosed & RightClosed {
  return {min: value, max: value}
}

//
// Functions
//

function copyLeftAsLeft(l: LeftBound): LeftBound {
  if (isLeftClosed(l)) {
    return {min: l.min}
  } else if (isLeftOpen(l)) {
    return {left: l.left}
  } else {
    // left unbound
    return leftUnbound
  }
}

function copyLeftAsRight(l: LeftBound): RightBound {
  if (isLeftClosed(l)) {
    return {right: l.min}
  } else if (isLeftOpen(l)) {
    return {max: l.left}
  } else {
    return rightUnbound
  }
}

function leftmostLeftBound(i1: LeftBound, i2: LeftBound): LeftBound {
  if (isLeftClosed(i1)) {
    if (isLeftClosed(i2)) {
      return (i1.min < i2.min) ? {min: i1.min} : {min: i2.min}
    } else if (isLeftOpen(i2)) {
      return (i1.min <= i2.left) ? {min: i1.min} : {left: i2.left}
    } else {
      // isLeftUnbound(i2)
      return leftUnbound
    }
  } else if (isLeftOpen(i1)) {
    if (isLeftClosed(i2)) {
      return (i1.left < i2.min) ? {left: i1.left} : {min: i2.min}
    } else if (isLeftOpen(i2)) {
      return (i1.left < i2.left) ? {left: i1.left} : {left: i2.left}
    } else {
      // isLeftUnbound(i2)
      return leftUnbound
    }
  } else {
    // isLeftUnbound(i1)
    return leftUnbound
  }
}

function rightmostLeftBound(i1: LeftBound, i2: LeftBound): LeftBound {
  if (isLeftClosed(i1)) {
    if (isLeftClosed(i2)) {
      return (i1.min < i2.min) ? {min: i2.min} : {min: i1.min}
    } else if (isLeftOpen(i2)) {
      return (i1.min <= i2.left) ? {left: i2.left} : {min: i1.min}
    } else {
      // isLeftUnbound(i2)
      return copyLeftAsLeft(i1)
    }
  } else if (isLeftOpen(i1)) {
    if (isLeftClosed(i2)) {
      return (i1.left < i2.min) ? {min: i2.min} : {left: i1.left}
    } else if (isLeftOpen(i2)) {
      return (i1.left < i2.left) ? {left: i2.left} : {left: i1.left}
    } else {
      // isLeftUnbound(i2)
      return copyLeftAsLeft(i1)
    }
  } else {
    // isLeftUnbound(i1)
    return copyLeftAsLeft(i2)
  }
}

function copyRightAsRight(i: RightBound): RightBound {
  if (isRightClosed(i)) {
    return {max: i.max}
  } else if (isRightOpen(i)) {
    return {right: i.right}
  } else {
    // isRightUnbound(i)
    return rightUnbound
  }
}
function copyRightAsLeft(i: RightBound): LeftBound {
  if (isRightClosed(i)) {
    return {left: i.max}
  } else if (isRightOpen(i)) {
    return {min: i.right}
  } else {
    // isRightUnbound(i)
    return leftUnbound
  }
}

function rightmostBound(i1: RightBound, i2: RightBound): RightBound {
  if (isRightClosed(i1)) {
    if (isRightClosed(i2)) {
      return (i1.max > i2.max) ? {max: i1.max} : {max: i2.max}
    } else if (isRightOpen(i2)) {
      return (i1.max >= i2.right) ? {max: i1.max} : {right: i2.right}
    } else {
      // isRightUnbound(i2)
      return rightUnbound
    }
  } else if (isRightOpen(i1)) {
    if (isRightClosed(i2)) {
      return (i1.right > i2.max) ? {right: i1.right} : {max: i2.max}
    } else if (isRightOpen(i2)) {
      return (i1.right > i2.right) ? {right: i1.right} : {right: i2.right}
    } else {
      // isRightUnbound(i2)
      return rightUnbound
    }
  } else {
    // isRightUnbound(i1)
    return rightUnbound
  }
}

function leftmostRightBound(i1: RightBound, i2: RightBound): RightBound {
  if (isRightClosed(i1)) {
    if (isRightClosed(i2)) {
      return (i1.max > i2.max) ? {max: i2.max} : {max: i1.max}
    } else if (isRightOpen(i2)) {
      return (i1.max >= i2.right) ? {right: i2.right} : {max: i1.max}
    } else {
      // isRightUnbound(i2)
      return copyRightAsRight(i1)
    }
  } else if (isRightOpen(i1)) {
    if (isRightClosed(i2)) {
      return (i1.right > i2.max) ? {max: i2.max} : {right: i1.right}
    } else if (isRightOpen(i2)) {
      return (i1.right > i2.right) ? {right: i2.right} : {right: i1.right}
    } else {
      // isRightUnbound(i2)
      return copyRightAsRight(i1)
    }
  } else {
    // isRightUnbound(i1)
    return copyRightAsRight(i2)
  }
}

/**
 * Tests if interval includes any numbers
 *
 * @param i interval
 * @returns {boolean} true if given set is empty
 */
export function isEmpty(i: Interval): boolean {
  return (isLeftOpen(i) && isRightOpen(i) && i.left === i.right)
}

function withinLeftBound(i: LeftBound, value: number): boolean {
  if (isLeftClosed(i)) {
    return i.min <= value
  } else if (isLeftOpen(i)) {
    return i.left < value
  } else {
    // left unbound
    return true
  }
}

function withinLeftOpenBound(i: LeftBound, value: number): boolean {
  if (isLeftClosed(i)) {
    return i.min < value
  } else if (isLeftOpen(i)) {
    return i.left < value
  } else {
    // left unbound
    return true
  }
}

function withinLeftClosedBound(i: LeftBound, value: number): boolean {
  if (isLeftClosed(i)) {
    return i.min <= value
  } else if (isLeftOpen(i)) {
    return i.left <= value
  } else {
    // left unbound
    return true
  }
}

function withinRightBound(i: RightBound, value: number): boolean {
  if (isRightClosed(i)) {
    return value <= i.max
  } else if (isRightOpen(i)) {
    return value < i.right
  } else {
    // right unbound
    return true
  }
}

function withinRightOpenBound(i: RightBound, value: number): boolean {
  if (isRightClosed(i)) {
    return value < i.max
  } else if (isRightOpen(i)) {
    return value < i.right
  } else {
    // right unbound
    return true
  }
}

function withinRightClosedBound(i: RightBound, value: number): boolean {
  if (isRightClosed(i)) {
    return value <= i.max
  } else if (isRightOpen(i)) {
    return value <= i.right
  } else {
    // right unbound
    return true
  }
}

/**
 * leftBound(i2) <= rightBound(i1)
 */
function rightIsRighterOrEqualThanLeft(i1: RightBound, i2: LeftBound): boolean {
  if (isRightClosed(i1)) {
    return withinLeftBound(i2, i1.max)
  } else if (isRightOpen(i1)) {
    return withinLeftOpenBound(i2, i1.right)
  } else {
    // unbound
    return true
  }
}

function rightHasNoGapWithLeft(i1: RightBound, i2: LeftBound): boolean {
  if (isRightClosed(i1)) {
    return withinLeftClosedBound(i2, i1.max)
  } else if (isRightOpen(i1)) {
    return withinLeftBound(i2, i1.right)
  } else {
    // unbound
    return true
  }
}

/**
 * rightBound(i2) < rightBound(i1)
 */
function rightIsRighter(i1: RightBound, i2: RightBound): boolean {
  if (isRightClosed(i2)) {
    return withinRightOpenBound(i1, i2.max)
  } else if (isRightOpen(i2)) {
    return withinRightBound(i1, i2.right)
  } else {
    return false
  }
}

/**
 * leftBound(i1) <= rightBound(i2)
 */
function leftIsLefterOrEqualThanRight(i1: LeftBound, i2: RightBound): boolean {
  if (isLeftClosed(i1)) {
    return withinRightBound(i2, i1.min)
  } else if (isLeftOpen(i1)) {
    return withinRightOpenBound(i2, i1.left)
  } else {
    // unbound
    return true
  }
}

function leftHasNoGapWithRight(i1: LeftBound, i2: RightBound): boolean {
  if (isLeftClosed(i1)) {
    return withinRightClosedBound(i2, i1.min)
  } else if (isLeftOpen(i1)) {
    return withinRightBound(i2, i1.left)
  } else {
    // unbound
    return true
  }
}

/**
 * leftBound(i1) < leftBound(i2)
 */
function leftIsLefter(i1: LeftBound, i2: LeftBound): boolean {
  return isLeftClosed(i2) && withinLeftOpenBound(i1, i2.min) ||
    isLeftOpen(i2) && withinLeftBound(i1, i2.left)
}

/**
 * Test if given number is within the interval boundaries
 *
 * @param pi (partitioned) interval interval
 * @param value number
 * @returns {boolean} true if given number within the interval
 */
export function includes(pi: Interval | Interval[], value: number): boolean {
  if (pi instanceof Array) {
    for (const i of pi) {
      if (includesInterval(i, value)) {
        return true
      }
    }
    return false
  } else {
    return includesInterval(pi, value)
  }
}
function includesInterval(i: Interval, value: number): boolean {
  return withinLeftBound(i, value) && withinRightBound(i, value)
}


/**
 * Test if 2 intervals have at least one point which belongs to both intervals
 *
 * @param pi first (partitioned) interval
 * @param is second interval (or more)
 * @returns {boolean} true if they overlap
 */
export function intersect(pi: Interval | PartitionedInterval, ...is: Interval[]): boolean {
  if (pi instanceof Array) {
    for (const i1 of pi) {
      for (const i2 of is) {
        if (intervalsIntersect(i1, i2)) {
          return true
        }
      }
    }
    return false
  } else {
    for (const i2 of is) {
      if (intervalsIntersect(pi, i2)) {
        return true
      }
    }
    return false
  }
}
function intervalsIntersect(i1: Interval, i2: Interval): boolean {
  if (isEmpty(i1) || isEmpty(i2)) {
    return false
  }

  return rightIsRighterOrEqualThanLeft(i1, i2) && leftIsLefterOrEqualThanRight(i1, i2)
}


/**
 * Test if there are no gaps between intervals
 *
 * @param i1 first interval
 * @param i2 second interval
 * @returns {boolean} true if there are no gaps
 */
export function continuous(i1: Interval, i2: Interval): boolean {
  if (isEmpty(i1) || isEmpty(i2)) {
    return true
  }

  return rightHasNoGapWithLeft(i1, i2) && leftHasNoGapWithRight(i1, i2)
}

/**
 * Biggest interval which is included by both intervals
 *
 * @param i1 interval 1
 * @param i2 interval 2
 * @returns {Interval} intersection (may be empty
 */
export function intersection(i1: Interval, i2: Interval): Interval {
  if (!intersect(i1, i2)) {
    return empty
  }

  const leftBound = rightmostLeftBound(i1, i2)
  const rightBound = leftmostRightBound(i1, i2)
  return {
    ...leftBound,
    ...rightBound
  }
}

/**
 * Smallest interval which includes both intervals
 *
 * @param i1 interval 1
 * @param i2 interval 2
 * @returns {Interval} join of the two
 */
export function join(i1: Interval, i2: Interval): Interval {
  if (isEmpty(i1)) {
    return i2
  }

  if (isEmpty(i2)) {
    return i1
  }

  const leftBound = leftmostLeftBound(i1, i2)
  const rightBound = rightmostBound(i1, i2)
  return {
    ...leftBound,
    ...rightBound
  }
}

/**
 * Computes 0..2 intervals which include all numbers from first interval but not from second
 *
 * @param pi first (partitioned) interval
 * @param is second and following intervals
 * @returns {Interval[]}
 */
export function subtract(pi: Interval | PartitionedInterval, ...is: Interval[]): Interval[] {
  if (pi instanceof Array) {
    return is.reduce<PartitionedInterval>(subtractIntervalFromPartitioned, pi)
  } else {
    return is.reduce<PartitionedInterval>(subtractIntervalFromPartitioned, [pi])
  }
}
function subtractIntervalFromPartitioned(pi: PartitionedInterval, i: Interval): PartitionedInterval {
  // if (isEmpty(i)) {
  //   return pi
  // }

  let result = []
  for (const existing of pi) {
    for (const split of subtractInterval(existing, i)) {
      result.push(split)
    }
  }

  return result
}
function subtractInterval(i1: Interval, i2: Interval): Interval[] {
  if (isEmpty(i1)) {
    return []
  }

  let result: Interval[] = []
  if (!intersect(i1, i2)) {
    result.push(i1)
  } else {
    if (leftIsLefter(i1, i2) && leftIsLefterOrEqualThanRight(i2, i1)) {
      result.push({
        ...copyLeftAsLeft(i1),
        ...copyLeftAsRight(i2)
      })
    }

    if (rightIsRighter(i1, i2) && rightIsRighterOrEqualThanLeft(i2, i1)) {
      result.push({
        ...copyRightAsLeft(i2),
        ...copyRightAsRight(i1)
      })
    }
  }

  return result
}


//
// Partitioned intervals
//

/**
 * Create new partitioned interval
 *
 * @param is interval
 * @returns {PartitionedInterval}
 */
export function partitioned(...is: Interval[]): PartitionedInterval {
  let result = []
  for (let i = 0; i < is.length; i++) {
    result = add(result, is[i])
  }

  return result
}

/**
 * Computes smallest partitioned interval which includes all numbers from both function arguments
 *
 * @param pi partitioned interval
 * @param is intervals to be added
 * @returns {PartitionedInterval} sum of both
 */
export function add(pi: PartitionedInterval, ...is: Interval[]): PartitionedInterval {
  return is.reduce<PartitionedInterval>(addInterval, pi)
}
function addInterval(_pi: PartitionedInterval, i: Interval) {
  let intervalToAdd = i
  let result = []
  for (const existing of _pi) {
    if (continuous(existing, intervalToAdd)) {
      intervalToAdd = join(existing, intervalToAdd)
    } else {
      result.push(existing)
    }
  }

  if (!isEmpty(intervalToAdd)) {
    result.push(intervalToAdd)
  }

  return result
}

export function gaps(pi: PartitionedInterval): PartitionedInterval {
  let _gaps = partitioned(leftUnboundRightUnbound)
  for (const i of pi) {
    _gaps = subtract(_gaps, i)
  }
  return _gaps
}