/**
 * See {@link https://en.wikipedia.org/wiki/Interval_(mathematics)|Wikipedia: Interval (mathematics)}
 */
export declare type Interval = LeftBound & RightBound;
/**
 * Set of non-intersecting intervals
 */
export declare type PartitionedInterval = Array<Interval>;
export declare type LeftBound = LeftClosed | LeftOpen | LeftUnbound;
/**
 * [a, ...
 */
export interface LeftClosed {
    min: number;
}
export declare function isLeftClosed(i: LeftBound): i is LeftClosed;
/**
 * (a, ...
 */
export interface LeftOpen {
    left: number;
}
export declare function isLeftOpen(i: LeftBound): i is LeftOpen;
/**
 * (-∞, ...
 */
export interface LeftUnbound {
}
export declare function isLeftUnbound(i: LeftBound): i is LeftUnbound;
export declare type RightBound = RightClosed | RightOpen | RightUnbound;
/**
 * ..., b]
 */
export interface RightClosed {
    max: number;
}
export declare function isRightClosed(i: RightBound): i is RightClosed;
/**
 * ..., b)
 */
export interface RightOpen {
    right: number;
}
export declare function isRightOpen(i: RightBound): i is RightOpen;
/**
 * ..., +∞)
 */
export interface RightUnbound {
}
export declare function isRightUnbound(i: RightBound): i is RightUnbound;
/**
 * [min, +∞)
 *
 * @param min
 * @returns {{min: number}}
 */
export declare function leftClosedRightUnbound(min: number): LeftClosed & RightUnbound;
/**
 * [min, right)
 *
 * @param min
 * @param right
 * @returns {{min: number, right: number}}
 */
export declare function leftClosedRightOpen(min: number, right: number): LeftClosed & RightOpen;
/**
 * [min, max]
 *
 * @param min
 * @param max
 * @returns {{min: number, max: number}}
 */
export declare function leftClosedRightClosed(min: number, max: number): LeftClosed & RightClosed;
/**
 * (left, +∞)
 *
 * @param left
 * @returns {{left: number}}
 */
export declare function leftOpenRightUnbound(left: number): LeftOpen & RightUnbound;
/**
 * (left, right)
 *
 * @param left
 * @param right
 * @returns {{left: number, right: number}}
 */
export declare function leftOpenRightOpen(left: number, right: number): LeftOpen & RightOpen;
/**
 * (left, max]
 *
 * @param left
 * @param max
 * @returns {{left: number, max: number}}
 */
export declare function leftOpenRightClosed(left: number, max: number): LeftOpen & RightClosed;
/**
 * (-∞, +∞)
 *
 * @returns {{}}
 */
export declare const leftUnboundRightUnbound: LeftUnbound & RightUnbound;
/**
 * (-∞, right)
 *
 * @param right
 * @returns {{right: number}}
 */
export declare function leftUnboundRightOpen(right: number): LeftUnbound & RightOpen;
/**
 * (-∞, max]
 *
 * @param max
 * @returns {{max: number}}
 */
export declare function leftUnboundRightClosed(max: number): LeftUnbound & RightClosed;
/**
 * ∅, no number falls within the interval boundaries
 *
 * @returns {{left: number, right: number}}
 */
export declare const empty: LeftOpen & RightOpen;
/**
 * {value}, only 1 given number is included in the interval
 *
 * @param value
 * @returns {{min: number, max: number}}
 */
export declare function degenerate(value: number): LeftClosed & RightClosed;
/**
 * Tests if interval includes any numbers
 *
 * @param i interval
 * @returns {boolean} true if given set is empty
 */
export declare function isEmpty(i: Interval): boolean;
/**
 * Test if given number is within the interval boundaries
 *
 * @param pi (partitioned) interval interval
 * @param value number
 * @returns {boolean} true if given number within the interval
 */
export declare function includes(pi: Interval | Interval[], value: number): boolean;
/**
 * Test if 2 intervals have at least one point which belongs to both intervals
 *
 * @param pi first (partitioned) interval
 * @param is second interval (or more)
 * @returns {boolean} true if they overlap
 */
export declare function intersect(pi: Interval | PartitionedInterval, ...is: Interval[]): boolean;
/**
 * Test if there are no gaps between intervals
 *
 * @param i1 first interval
 * @param i2 second interval
 * @returns {boolean} true if there are no gaps
 */
export declare function continuous(i1: Interval, i2: Interval): boolean;
/**
 * Biggest interval which is included by both intervals
 *
 * @param i1 interval 1
 * @param i2 interval 2
 * @returns {Interval} intersection (may be empty
 */
export declare function intersection(i1: Interval, i2: Interval): Interval;
/**
 * Smallest interval which includes both intervals
 *
 * @param i1 interval 1
 * @param i2 interval 2
 * @returns {Interval} join of the two
 */
export declare function join(i1: Interval, i2: Interval): Interval;
/**
 * Computes 0..2 intervals which include all numbers from first interval but not from second
 *
 * @param pi first (partitioned) interval
 * @param is second and following intervals
 * @returns {Interval[]}
 */
export declare function subtract(pi: Interval | PartitionedInterval, ...is: Interval[]): Interval[];
/**
 * Create new partitioned interval
 *
 * @param is interval
 * @returns {PartitionedInterval}
 */
export declare function partitioned(...is: Interval[]): PartitionedInterval;
/**
 * Computes smallest partitioned interval which includes all numbers from both function arguments
 *
 * @param pi partitioned interval
 * @param is intervals to be added
 * @returns {PartitionedInterval} sum of both
 */
export declare function add(pi: PartitionedInterval, ...is: Interval[]): PartitionedInterval;
export declare function gaps(pi: PartitionedInterval): PartitionedInterval;
