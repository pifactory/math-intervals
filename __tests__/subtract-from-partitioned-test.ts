import 'jest'

import * as intervals from '../src/'
import allExamples from './first-test-dataset'

describe('subtract from partitioned', () => {

  describe('empty', () => {
    const empty = intervals.partitioned(allExamples.empty)

    for (const intervalType of Object.keys(allExamples)) {
      const interval = allExamples[intervalType]
      const partitioned = intervals.partitioned(interval)

      test(`subtract ${intervalType} from empty interval produces empty interval`, () => {
        expect(intervals.subtract(empty, interval)).toEqual(empty)
      })

      test(`subtract empty interval from ${intervalType} produces ${intervalType} interval`, () => {
        expect(intervals.subtract(partitioned, allExamples.empty)).toEqual(partitioned)
      })

      test(`subtract partitioned(${intervalType}) from empty interval produces empty interval`, () => {
        expect(intervals.subtract(empty, ...partitioned)).toEqual(empty)
      })

      test(`subtract empty interval from partitioned(${intervalType}) produces  ${intervalType} interval`, () => {
        expect(intervals.subtract(partitioned, ...empty)).toEqual(partitioned)
      })
    }
  })

  describe('unbound', () => {
    const unbound = intervals.partitioned(allExamples.unbound)

    for (const intervalType of Object.keys(allExamples)) {
      const interval = allExamples[intervalType]
      test(`subtract ${intervalType} from unbound interval produces subtracted interval`, () => {
        expect(intervals.subtract(unbound, interval))
          .toEqual(intervals.subtract(allExamples.unbound, interval))
      })

      const partitioned = intervals.partitioned(interval)
      test(`subtract unbound interval from ${intervalType} produces empty interval`, () => {
        expect(intervals.subtract(partitioned, allExamples.unbound)).toEqual([])
      })

      test(`subtract partitioned(${intervalType}) from unbound interval produces unbound interval`, () => {
        expect(intervals.subtract(unbound, ...partitioned))
          .toEqual(intervals.subtract(allExamples.unbound, interval))
      })

      test(`subtract unbound interval from partitioned(${intervalType}) produces unbound interval`, () => {
        expect(intervals.subtract(partitioned, ...unbound)).toEqual([])
      })
    }
  })
})