import 'jest'

import * as intervals from '../src/'

describe('gaps', () => {

  test('find 1 gap', () => {
    let pi = intervals.partitioned(
      intervals.leftUnboundRightClosed(-2),
      intervals.leftOpenRightUnbound(1),
    )

    expect(intervals.gaps((pi))).toEqual([intervals.leftOpenRightClosed(-2, 1)])
  })

  test('find 2 gaps', () => {
    let pi = intervals.partitioned(
      intervals.leftOpenRightUnbound(7),
      intervals.degenerate(3),
      intervals.leftUnboundRightClosed(-2),
    )

    const gaps = intervals.gaps((pi))
    expect(gaps.length).toBe(2)
    expect(gaps).toContainEqual(intervals.leftOpenRightOpen(-2, 3))
    expect(gaps).toContainEqual(intervals.leftOpenRightClosed(3, 7))
  })
})