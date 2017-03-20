import 'jest'

import * as intervals from '../src/'

const allExamples = {
  empty: intervals.empty,
  degenerate: intervals.degenerate(3),
  leftUnboundRightClosed: intervals.leftUnboundRightClosed(6),
  leftUnboundRightOpen: intervals.leftUnboundRightOpen(6),
  unbound: intervals.leftUnboundRightUnbound,
  leftClosedRightUnbound: intervals.leftClosedRightUnbound(3),
  leftOpenRightUnbound: intervals.leftOpenRightUnbound(3),
  leftClosedRightOpen: intervals.leftClosedRightOpen(3, 6),
  leftClosedRightClosed: intervals.leftClosedRightClosed(3, 6),
  leftOpenRightOpen: intervals.leftOpenRightOpen(3, 6),
  leftOpenRightClosed: intervals.leftOpenRightClosed(3, 6)
}

describe('isEmpty', () => {

  const expectations = {
    empty: true,
    degenerate: false,
    leftUnboundRightClosed: false,
    leftUnboundRightOpen: false,
    unbound: false,
    leftClosedRightUnbound: false,
    leftOpenRightUnbound: false,
    leftClosedRightOpen: false,
    leftClosedRightClosed: false,
    leftOpenRightOpen: false,
    leftOpenRightClosed: false
  }

  for (const intervalType of Object.keys(allExamples)) {
    const interval = allExamples[intervalType]
    const expectation = expectations[intervalType]

    test(`${intervalType} is ${expectation ? '' : 'not '}empty`, () => {
      expect(intervals.isEmpty(interval)).toBe(expectation);
    })
  }

})

describe('includes', () => {

  const expectations = {
    '3': {
      empty: false,
      degenerate: true,
      leftUnboundRightClosed: true,
      leftUnboundRightOpen: true,
      unbound: true,
      leftClosedRightUnbound: true,
      leftOpenRightUnbound: false,
      leftClosedRightOpen: true,
      leftClosedRightClosed: true,
      leftOpenRightOpen: false,
      leftOpenRightClosed: false
    },
    '6': {
      empty: false,
      degenerate: false,
      leftUnboundRightClosed: true,
      leftUnboundRightOpen: false,
      unbound: true,
      leftClosedRightUnbound: true,
      leftOpenRightUnbound: true,
      leftClosedRightOpen: false,
      leftClosedRightClosed: true,
      leftOpenRightOpen: false,
      leftOpenRightClosed: true
    }
  }

  for (const arg2 of Object.keys(expectations)) {
    for (const intervalType of Object.keys(allExamples)) {
      const interval = allExamples[intervalType]
      const expectation = expectations[arg2][intervalType]

      test(`${intervalType} does ${expectation ? '' : 'not '}include ${arg2}`, () => {
        expect(intervals.includes(interval, +arg2)).toBe(expectation);
      })
    }
  }

})

describe('partitioned', () => {

  const expectations = {
    empty: [],
    degenerate: [allExamples.degenerate],
    leftUnboundRightClosed: [allExamples.leftUnboundRightClosed],
  }

  for (const intervalType of Object.keys(expectations)) {
    const interval = allExamples[intervalType]
    const expectation = expectations[intervalType]

    test(`partitioned ${intervalType} interval equals ${JSON.stringify(expectation)}`, () => {
      expect(intervals.partitioned(interval)).toEqual(expectation);
    })
  }

})
