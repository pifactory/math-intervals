import 'jest'

import * as intervals from '../src/'
import allExamples from './first-test-dataset'

describe('add to partitioned', () => {

  describe('empty', () => {
    const empty = intervals.partitioned(allExamples.empty)

    for (const intervalType of Object.keys(allExamples)) {
      const interval = allExamples[intervalType]
      const partitioned = intervals.partitioned(interval)

      test(`add ${intervalType} to empty interval produces ${intervalType} interval`, () => {
        expect(intervals.add(empty, interval)).toEqual(partitioned)
      })

      test(`add empty interval to ${intervalType} produces ${intervalType} interval`, () => {
        expect(intervals.add(partitioned, allExamples.empty)).toEqual(partitioned)
      })

      test(`add partitioned(${intervalType}) to empty interval produces ${intervalType} interval`, () => {
        expect(intervals.add(empty, ...partitioned)).toEqual(partitioned)
      })

      test(`add empty interval to partitioned(${intervalType}) produces  ${intervalType} interval`, () => {
        expect(intervals.add(partitioned, ...empty)).toEqual(partitioned)
      })
    }
  })

  describe('unbound', () => {
    const unbound = intervals.partitioned(allExamples.unbound)

    for (const intervalType of Object.keys(allExamples)) {
      const interval = allExamples[intervalType]
      test(`add ${intervalType} to unbound interval produces unbound interval`, () => {
        expect(intervals.add(unbound, interval)).toEqual(unbound)
      })

      const partitioned = intervals.partitioned(interval)
      test(`add unbound interval to ${intervalType} produces unbound interval`, () => {
        expect(intervals.add(partitioned, allExamples.unbound)).toEqual(unbound)
      })

      test(`add partitioned(${intervalType}) to unbound interval produces unbound interval`, () => {
        expect(intervals.add(unbound, ...partitioned)).toEqual(unbound)
      })

      test(`add unbound interval to partitioned(${intervalType}) produces unbound interval`, () => {
        expect(intervals.add(partitioned, ...unbound)).toEqual(unbound)
      })
    }
  })

  describe('disjoint', () => {
    let partitioned = intervals.partitioned(intervals.leftOpenRightOpen(1, 2))
    test('non-intersecting interval is added as new partition', () => {
      partitioned = intervals.add(partitioned, intervals.leftOpenRightClosed(2, 3))
      expect(partitioned.length).toBe(2)
      expect(partitioned).toContainEqual(intervals.leftOpenRightOpen(1, 2))
      expect(partitioned).toContainEqual(intervals.leftOpenRightClosed(2, 3))
    })

    test('intersecting interval is joined', () => {
      partitioned = intervals.add(partitioned, intervals.leftOpenRightUnbound(3))
      expect(partitioned.length).toBe(2)
      expect(partitioned).toContainEqual(intervals.leftOpenRightOpen(1, 2))
      expect(partitioned).toContainEqual(intervals.leftOpenRightUnbound(2))
    })

    test('intersecting interval is joined with all', () => {
      partitioned = intervals.add(partitioned, intervals.degenerate(2))
      expect(partitioned).toEqual([intervals.leftOpenRightUnbound(1)])
    })
  })

})