"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function isLeftClosed(i) {
    return i.min !== undefined;
}
exports.isLeftClosed = isLeftClosed;
function isLeftOpen(i) {
    return i.left !== undefined;
}
exports.isLeftOpen = isLeftOpen;
var leftUnbound = {};
function isLeftUnbound(i) {
    return !isLeftClosed(i) && !isLeftOpen(i);
}
exports.isLeftUnbound = isLeftUnbound;
function isRightClosed(i) {
    return i.max !== undefined;
}
exports.isRightClosed = isRightClosed;
function isRightOpen(i) {
    return i.right !== undefined;
}
exports.isRightOpen = isRightOpen;
var rightUnbound = {};
function isRightUnbound(i) {
    return !isRightClosed(i) && !isRightOpen(i);
}
exports.isRightUnbound = isRightUnbound;
//
// Constructors
//
/**
 * [min, +∞)
 *
 * @param min
 * @returns {{min: number}}
 */
function leftClosedRightUnbound(min) {
    return { min: min };
}
exports.leftClosedRightUnbound = leftClosedRightUnbound;
/**
 * [min, right)
 *
 * @param min
 * @param right
 * @returns {{min: number, right: number}}
 */
function leftClosedRightOpen(min, right) {
    return { min: min, right: right };
}
exports.leftClosedRightOpen = leftClosedRightOpen;
/**
 * [min, max]
 *
 * @param min
 * @param max
 * @returns {{min: number, max: number}}
 */
function leftClosedRightClosed(min, max) {
    return { min: min, max: max };
}
exports.leftClosedRightClosed = leftClosedRightClosed;
/**
 * (left, +∞)
 *
 * @param left
 * @returns {{left: number}}
 */
function leftOpenRightUnbound(left) {
    return { left: left };
}
exports.leftOpenRightUnbound = leftOpenRightUnbound;
/**
 * (left, right)
 *
 * @param left
 * @param right
 * @returns {{left: number, right: number}}
 */
function leftOpenRightOpen(left, right) {
    return { left: left, right: right };
}
exports.leftOpenRightOpen = leftOpenRightOpen;
/**
 * (left, max]
 *
 * @param left
 * @param max
 * @returns {{left: number, max: number}}
 */
function leftOpenRightClosed(left, max) {
    return { left: left, max: max };
}
exports.leftOpenRightClosed = leftOpenRightClosed;
/**
 * (-∞, +∞)
 *
 * @returns {{}}
 */
exports.leftUnboundRightUnbound = {};
/**
 * (-∞, right)
 *
 * @param right
 * @returns {{right: number}}
 */
function leftUnboundRightOpen(right) {
    return { right: right };
}
exports.leftUnboundRightOpen = leftUnboundRightOpen;
/**
 * (-∞, max]
 *
 * @param max
 * @returns {{max: number}}
 */
function leftUnboundRightClosed(max) {
    return { max: max };
}
exports.leftUnboundRightClosed = leftUnboundRightClosed;
/**
 * ∅, no number falls within the interval boundaries
 *
 * @returns {{left: number, right: number}}
 */
exports.empty = { left: 0, right: 0 };
/**
 * {value}, only 1 given number is included in the interval
 *
 * @param value
 * @returns {{min: number, max: number}}
 */
function degenerate(value) {
    return { min: value, max: value };
}
exports.degenerate = degenerate;
//
// Functions
//
function copyLeftAsLeft(l) {
    if (isLeftClosed(l)) {
        return { min: l.min };
    }
    else if (isLeftOpen(l)) {
        return { left: l.left };
    }
    else {
        // left unbound
        return leftUnbound;
    }
}
function copyLeftAsRight(l) {
    if (isLeftClosed(l)) {
        return { right: l.min };
    }
    else if (isLeftOpen(l)) {
        return { max: l.left };
    }
    else {
        return rightUnbound;
    }
}
function leftmostLeftBound(i1, i2) {
    if (isLeftClosed(i1)) {
        if (isLeftClosed(i2)) {
            return (i1.min < i2.min) ? { min: i1.min } : { min: i2.min };
        }
        else if (isLeftOpen(i2)) {
            return (i1.min <= i2.left) ? { min: i1.min } : { left: i2.left };
        }
        else {
            // isLeftUnbound(i2)
            return leftUnbound;
        }
    }
    else if (isLeftOpen(i1)) {
        if (isLeftClosed(i2)) {
            return (i1.left < i2.min) ? { left: i1.left } : { min: i2.min };
        }
        else if (isLeftOpen(i2)) {
            return (i1.left < i2.left) ? { left: i1.left } : { left: i2.left };
        }
        else {
            // isLeftUnbound(i2)
            return leftUnbound;
        }
    }
    else {
        // isLeftUnbound(i1)
        return leftUnbound;
    }
}
function rightmostLeftBound(i1, i2) {
    if (isLeftClosed(i1)) {
        if (isLeftClosed(i2)) {
            return (i1.min < i2.min) ? { min: i2.min } : { min: i1.min };
        }
        else if (isLeftOpen(i2)) {
            return (i1.min <= i2.left) ? { left: i2.left } : { min: i1.min };
        }
        else {
            // isLeftUnbound(i2)
            return copyLeftAsLeft(i1);
        }
    }
    else if (isLeftOpen(i1)) {
        if (isLeftClosed(i2)) {
            return (i1.left < i2.min) ? { min: i2.min } : { left: i1.left };
        }
        else if (isLeftOpen(i2)) {
            return (i1.left < i2.left) ? { left: i2.left } : { left: i1.left };
        }
        else {
            // isLeftUnbound(i2)
            return copyLeftAsLeft(i1);
        }
    }
    else {
        // isLeftUnbound(i1)
        return copyLeftAsLeft(i2);
    }
}
function copyRightAsRight(i) {
    if (isRightClosed(i)) {
        return { max: i.max };
    }
    else if (isRightOpen(i)) {
        return { right: i.right };
    }
    else {
        // isRightUnbound(i)
        return rightUnbound;
    }
}
function copyRightAsLeft(i) {
    if (isRightClosed(i)) {
        return { left: i.max };
    }
    else if (isRightOpen(i)) {
        return { min: i.right };
    }
    else {
        // isRightUnbound(i)
        return leftUnbound;
    }
}
function rightmostBound(i1, i2) {
    if (isRightClosed(i1)) {
        if (isRightClosed(i2)) {
            return (i1.max > i2.max) ? { max: i1.max } : { max: i2.max };
        }
        else if (isRightOpen(i2)) {
            return (i1.max >= i2.right) ? { max: i1.max } : { right: i2.right };
        }
        else {
            // isRightUnbound(i2)
            return rightUnbound;
        }
    }
    else if (isRightOpen(i1)) {
        if (isRightClosed(i2)) {
            return (i1.right > i2.max) ? { right: i1.right } : { max: i2.max };
        }
        else if (isRightOpen(i2)) {
            return (i1.right > i2.right) ? { right: i1.right } : { right: i2.right };
        }
        else {
            // isRightUnbound(i2)
            return rightUnbound;
        }
    }
    else {
        // isRightUnbound(i1)
        return rightUnbound;
    }
}
function leftmostRightBound(i1, i2) {
    if (isRightClosed(i1)) {
        if (isRightClosed(i2)) {
            return (i1.max > i2.max) ? { max: i2.max } : { max: i1.max };
        }
        else if (isRightOpen(i2)) {
            return (i1.max >= i2.right) ? { right: i2.right } : { max: i1.max };
        }
        else {
            // isRightUnbound(i2)
            return copyRightAsRight(i1);
        }
    }
    else if (isRightOpen(i1)) {
        if (isRightClosed(i2)) {
            return (i1.right > i2.max) ? { max: i2.max } : { right: i1.right };
        }
        else if (isRightOpen(i2)) {
            return (i1.right > i2.right) ? { right: i2.right } : { right: i1.right };
        }
        else {
            // isRightUnbound(i2)
            return copyRightAsRight(i1);
        }
    }
    else {
        // isRightUnbound(i1)
        return copyRightAsRight(i2);
    }
}
/**
 * Tests if interval includes any numbers
 *
 * @param i interval
 * @returns {boolean} true if given set is empty
 */
function isEmpty(i) {
    return (isLeftOpen(i) && isRightOpen(i) && i.left === i.right);
}
exports.isEmpty = isEmpty;
function withinLeftBound(i, value) {
    if (isLeftClosed(i)) {
        return i.min <= value;
    }
    else if (isLeftOpen(i)) {
        return i.left < value;
    }
    else {
        // left unbound
        return true;
    }
}
function withinLeftOpenBound(i, value) {
    if (isLeftClosed(i)) {
        return i.min < value;
    }
    else if (isLeftOpen(i)) {
        return i.left < value;
    }
    else {
        // left unbound
        return true;
    }
}
function withinLeftClosedBound(i, value) {
    if (isLeftClosed(i)) {
        return i.min <= value;
    }
    else if (isLeftOpen(i)) {
        return i.left <= value;
    }
    else {
        // left unbound
        return true;
    }
}
function withinRightBound(i, value) {
    if (isRightClosed(i)) {
        return value <= i.max;
    }
    else if (isRightOpen(i)) {
        return value < i.right;
    }
    else {
        // right unbound
        return true;
    }
}
function withinRightOpenBound(i, value) {
    if (isRightClosed(i)) {
        return value < i.max;
    }
    else if (isRightOpen(i)) {
        return value < i.right;
    }
    else {
        // right unbound
        return true;
    }
}
function withinRightClosedBound(i, value) {
    if (isRightClosed(i)) {
        return value <= i.max;
    }
    else if (isRightOpen(i)) {
        return value <= i.right;
    }
    else {
        // right unbound
        return true;
    }
}
/**
 * leftBound(i2) <= rightBound(i1)
 */
function rightIsRighterOrEqualThanLeft(i1, i2) {
    if (isRightClosed(i1)) {
        return withinLeftBound(i2, i1.max);
    }
    else if (isRightOpen(i1)) {
        return withinLeftOpenBound(i2, i1.right);
    }
    else {
        // unbound
        return true;
    }
}
function rightHasNoGapWithLeft(i1, i2) {
    if (isRightClosed(i1)) {
        return withinLeftClosedBound(i2, i1.max);
    }
    else if (isRightOpen(i1)) {
        return withinLeftBound(i2, i1.right);
    }
    else {
        // unbound
        return true;
    }
}
/**
 * rightBound(i2) < rightBound(i1)
 */
function rightIsRighter(i1, i2) {
    if (isRightClosed(i2)) {
        return withinRightOpenBound(i1, i2.max);
    }
    else if (isRightOpen(i2)) {
        return withinRightBound(i1, i2.right);
    }
    else {
        return false;
    }
}
/**
 * leftBound(i1) <= rightBound(i2)
 */
function leftIsLefterOrEqualThanRight(i1, i2) {
    if (isLeftClosed(i1)) {
        return withinRightBound(i2, i1.min);
    }
    else if (isLeftOpen(i1)) {
        return withinRightOpenBound(i2, i1.left);
    }
    else {
        // unbound
        return true;
    }
}
function leftHasNoGapWithRight(i1, i2) {
    if (isLeftClosed(i1)) {
        return withinRightClosedBound(i2, i1.min);
    }
    else if (isLeftOpen(i1)) {
        return withinRightBound(i2, i1.left);
    }
    else {
        // unbound
        return true;
    }
}
/**
 * leftBound(i1) < leftBound(i2)
 */
function leftIsLefter(i1, i2) {
    return isLeftClosed(i2) && withinLeftOpenBound(i1, i2.min) ||
        isLeftOpen(i2) && withinLeftBound(i1, i2.left);
}
/**
 * Test if given number is within the interval boundaries
 *
 * @param pi (partitioned) interval interval
 * @param value number
 * @returns {boolean} true if given number within the interval
 */
function includes(pi, value) {
    if (pi instanceof Array) {
        for (var _i = 0, pi_1 = pi; _i < pi_1.length; _i++) {
            var i = pi_1[_i];
            if (includesInterval(i, value)) {
                return true;
            }
        }
        return false;
    }
    else {
        return includesInterval(pi, value);
    }
}
exports.includes = includes;
function includesInterval(i, value) {
    return withinLeftBound(i, value) && withinRightBound(i, value);
}
/**
 * Test if 2 intervals have at least one point which belongs to both intervals
 *
 * @param pi first (partitioned) interval
 * @param is second interval (or more)
 * @returns {boolean} true if they overlap
 */
function intersect(pi) {
    var is = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        is[_i - 1] = arguments[_i];
    }
    if (pi instanceof Array) {
        for (var _a = 0, pi_2 = pi; _a < pi_2.length; _a++) {
            var i1 = pi_2[_a];
            for (var _b = 0, is_1 = is; _b < is_1.length; _b++) {
                var i2 = is_1[_b];
                if (intervalsIntersect(i1, i2)) {
                    return true;
                }
            }
        }
        return false;
    }
    else {
        for (var _c = 0, is_2 = is; _c < is_2.length; _c++) {
            var i2 = is_2[_c];
            if (intervalsIntersect(pi, i2)) {
                return true;
            }
        }
        return false;
    }
}
exports.intersect = intersect;
function intervalsIntersect(i1, i2) {
    if (isEmpty(i1) || isEmpty(i2)) {
        return false;
    }
    return rightIsRighterOrEqualThanLeft(i1, i2) && leftIsLefterOrEqualThanRight(i1, i2);
}
/**
 * Test if there are no gaps between intervals
 *
 * @param i1 first interval
 * @param i2 second interval
 * @returns {boolean} true if there are no gaps
 */
function continuous(i1, i2) {
    if (isEmpty(i1) || isEmpty(i2)) {
        return true;
    }
    return rightHasNoGapWithLeft(i1, i2) && leftHasNoGapWithRight(i1, i2);
}
exports.continuous = continuous;
/**
 * Biggest interval which is included by both intervals
 *
 * @param i1 interval 1
 * @param i2 interval 2
 * @returns {Interval} intersection (may be empty
 */
function intersection(i1, i2) {
    if (!intersect(i1, i2)) {
        return exports.empty;
    }
    var leftBound = rightmostLeftBound(i1, i2);
    var rightBound = leftmostRightBound(i1, i2);
    return __assign({}, leftBound, rightBound);
}
exports.intersection = intersection;
/**
 * Smallest interval which includes both intervals
 *
 * @param i1 interval 1
 * @param i2 interval 2
 * @returns {Interval} join of the two
 */
function join(i1, i2) {
    if (isEmpty(i1)) {
        return i2;
    }
    if (isEmpty(i2)) {
        return i1;
    }
    var leftBound = leftmostLeftBound(i1, i2);
    var rightBound = rightmostBound(i1, i2);
    return __assign({}, leftBound, rightBound);
}
exports.join = join;
/**
 * Computes 0..2 intervals which include all numbers from first interval but not from second
 *
 * @param pi first (partitioned) interval
 * @param is second and following intervals
 * @returns {Interval[]}
 */
function subtract(pi) {
    var is = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        is[_i - 1] = arguments[_i];
    }
    if (pi instanceof Array) {
        return is.reduce(subtractIntervalFromPartitioned, pi);
    }
    else {
        return is.reduce(subtractIntervalFromPartitioned, [pi]);
    }
}
exports.subtract = subtract;
function subtractIntervalFromPartitioned(pi, i) {
    // if (isEmpty(i)) {
    //   return pi
    // }
    var result = [];
    for (var _i = 0, pi_3 = pi; _i < pi_3.length; _i++) {
        var existing = pi_3[_i];
        for (var _a = 0, _b = subtractInterval(existing, i); _a < _b.length; _a++) {
            var split = _b[_a];
            result.push(split);
        }
    }
    return result;
}
function subtractInterval(i1, i2) {
    if (isEmpty(i1)) {
        return [];
    }
    var result = [];
    if (!intersect(i1, i2)) {
        result.push(i1);
    }
    else {
        if (leftIsLefter(i1, i2) && leftIsLefterOrEqualThanRight(i2, i1)) {
            result.push(__assign({}, copyLeftAsLeft(i1), copyLeftAsRight(i2)));
        }
        if (rightIsRighter(i1, i2) && rightIsRighterOrEqualThanLeft(i2, i1)) {
            result.push(__assign({}, copyRightAsLeft(i2), copyRightAsRight(i1)));
        }
    }
    return result;
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
function partitioned() {
    var is = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        is[_i] = arguments[_i];
    }
    var result = [];
    for (var i = 0; i < is.length; i++) {
        result = add(result, is[i]);
    }
    return result;
}
exports.partitioned = partitioned;
/**
 * Computes smallest partitioned interval which includes all numbers from both function arguments
 *
 * @param pi partitioned interval
 * @param is intervals to be added
 * @returns {PartitionedInterval} sum of both
 */
function add(pi) {
    var is = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        is[_i - 1] = arguments[_i];
    }
    return is.reduce(addInterval, pi);
}
exports.add = add;
function addInterval(_pi, i) {
    var intervalToAdd = i;
    var result = [];
    for (var _i = 0, _pi_1 = _pi; _i < _pi_1.length; _i++) {
        var existing = _pi_1[_i];
        if (continuous(existing, intervalToAdd)) {
            intervalToAdd = join(existing, intervalToAdd);
        }
        else {
            result.push(existing);
        }
    }
    if (!isEmpty(intervalToAdd)) {
        result.push(intervalToAdd);
    }
    return result;
}
function gaps(pi) {
    var _gaps = partitioned(exports.leftUnboundRightUnbound);
    for (var _i = 0, pi_4 = pi; _i < pi_4.length; _i++) {
        var i = pi_4[_i];
        _gaps = subtract(_gaps, i);
    }
    return _gaps;
}
exports.gaps = gaps;
//# sourceMappingURL=index.js.map