import 'jest'

import * as intervals from '../src/'

import allExamples from './second-test-dataset'

describe('continuous', () => {

  const expectations = {
    empty: {
      empty: true,
      degenerate0: true,
      leftUnboundRightClosed2: true,
      leftClosedRightUnbound2: true,
      unbound: true,
      leftClosedRightClosed36: true
    },

    degenerate3: {
      degenerate0: false,
      degenerate3: true,

      leftUnboundRightClosed2: false,
      leftUnboundRightClosed3: true,
      leftUnboundRightClosed4: true,

      leftUnboundRightOpen2: false,
      leftUnboundRightOpen3: true,
      leftUnboundRightOpen4: true,

      leftClosedRightUnbound2: true,
      leftClosedRightUnbound3: true,
      leftClosedRightUnbound4: false,

      leftOpenRightUnbound2: true,
      leftOpenRightUnbound3: true,
      leftOpenRightUnbound4: false,

      leftClosedRightOpen12: false,
      leftOpenRightOpen12: false,
      leftClosedRightClosed12: false,
      leftOpenRightClosed12: false,

      leftClosedRightOpen23: true,
      leftOpenRightOpen23: true,
      leftClosedRightClosed23: true,
      leftOpenRightClosed23: true,

      leftClosedRightOpen24: true,
      leftOpenRightOpen24: true,
      leftClosedRightClosed24: true,
      leftOpenRightClosed24: true,

      leftClosedRightOpen34: true,
      leftOpenRightOpen34: true,
      leftClosedRightClosed34: true,
      leftOpenRightClosed34: true,

      leftClosedRightOpen45: false,
      leftOpenRightOpen45: false,
      leftClosedRightClosed45: false,
      leftOpenRightClosed45: false,

      unbound: true
    },

    leftClosedRightOpen36: {
      unbound: true,

      leftUnboundRightClosed2: false,
      leftUnboundRightClosed3: true,
      leftUnboundRightClosed4: true,
      leftUnboundRightClosed6: true,
      leftUnboundRightClosed7: true,
      leftUnboundRightOpen2: false,
      leftUnboundRightOpen3: true,
      leftUnboundRightOpen4: true,
      leftUnboundRightOpen6: true,
      leftUnboundRightOpen7: true,

      leftClosedRightUnbound2: true,
      leftClosedRightUnbound3: true,
      leftClosedRightUnbound4: true,
      leftClosedRightUnbound6: true,
      leftClosedRightUnbound7: false,
      leftOpenRightUnbound2: true,
      leftOpenRightUnbound3: true,
      leftOpenRightUnbound4: true,
      leftOpenRightUnbound6: false,
      leftOpenRightUnbound7: false,

      leftClosedRightOpen12: false,
      leftOpenRightOpen12: false,
      leftClosedRightClosed12: false,
      leftOpenRightClosed12: false,

      leftClosedRightOpen23: true,
      leftOpenRightOpen23: true,
      leftClosedRightClosed23: true,
      leftOpenRightClosed23: true,

      leftClosedRightOpen24: true,
      leftOpenRightOpen24: true,
      leftClosedRightClosed24: true,
      leftOpenRightClosed24: true,

      leftClosedRightOpen34: true,
      leftOpenRightOpen34: true,
      leftClosedRightClosed34: true,
      leftOpenRightClosed34: true,

      leftClosedRightOpen45: true,
      leftOpenRightOpen45: true,
      leftClosedRightClosed45: true,
      leftOpenRightClosed45: true,

      leftClosedRightOpen56: true,
      leftOpenRightOpen56: true,
      leftClosedRightClosed56: true,
      leftOpenRightClosed56: true,

      leftClosedRightOpen57: true,
      leftOpenRightOpen57: true,
      leftClosedRightClosed57: true,
      leftOpenRightClosed57: true,

      leftClosedRightOpen67: true,
      leftOpenRightOpen67: false,
      leftClosedRightClosed67: true,
      leftOpenRightClosed67: false,

      leftClosedRightOpen78: false,
      leftOpenRightOpen78: false,
      leftClosedRightClosed78: false,
      leftOpenRightClosed78: false
    },

    leftClosedRightClosed36: {
      unbound: true,

      leftUnboundRightClosed2: false,
      leftUnboundRightClosed3: true,
      leftUnboundRightClosed4: true,
      leftUnboundRightClosed6: true,
      leftUnboundRightClosed7: true,
      leftUnboundRightOpen2: false,
      leftUnboundRightOpen3: true,
      leftUnboundRightOpen4: true,
      leftUnboundRightOpen6: true,
      leftUnboundRightOpen7: true,

      leftClosedRightUnbound2: true,
      leftClosedRightUnbound3: true,
      leftClosedRightUnbound4: true,
      leftClosedRightUnbound6: true,
      leftClosedRightUnbound7: false,
      leftOpenRightUnbound2: true,
      leftOpenRightUnbound3: true,
      leftOpenRightUnbound4: true,
      leftOpenRightUnbound6: true,
      leftOpenRightUnbound7: false,

      leftClosedRightOpen12: false,
      leftOpenRightOpen12: false,
      leftClosedRightClosed12: false,
      leftOpenRightClosed12: false,

      leftClosedRightOpen23: true,
      leftOpenRightOpen23: true,
      leftClosedRightClosed23: true,
      leftOpenRightClosed23: true,

      leftClosedRightOpen24: true,
      leftOpenRightOpen24: true,
      leftClosedRightClosed24: true,
      leftOpenRightClosed24: true,

      leftClosedRightOpen34: true,
      leftOpenRightOpen34: true,
      leftClosedRightClosed34: true,
      leftOpenRightClosed34: true,

      leftClosedRightOpen45: true,
      leftOpenRightOpen45: true,
      leftClosedRightClosed45: true,
      leftOpenRightClosed45: true,

      leftClosedRightOpen56: true,
      leftOpenRightOpen56: true,
      leftClosedRightClosed56: true,
      leftOpenRightClosed56: true,

      leftClosedRightOpen57: true,
      leftOpenRightOpen57: true,
      leftClosedRightClosed57: true,
      leftOpenRightClosed57: true,

      leftClosedRightOpen67: true,
      leftOpenRightOpen67: true,
      leftClosedRightClosed67: true,
      leftOpenRightClosed67: true,

      leftClosedRightOpen78: false,
      leftOpenRightOpen78: false,
      leftClosedRightClosed78: false,
      leftOpenRightClosed78: false
    },

    leftOpenRightClosed36: {
      unbound: true,

      leftUnboundRightClosed2: false,
      leftUnboundRightClosed3: true,
      leftUnboundRightClosed4: true,
      leftUnboundRightClosed6: true,
      leftUnboundRightClosed7: true,
      leftUnboundRightOpen2: false,
      leftUnboundRightOpen3: false,
      leftUnboundRightOpen4: true,
      leftUnboundRightOpen6: true,
      leftUnboundRightOpen7: true,

      leftClosedRightUnbound2: true,
      leftClosedRightUnbound3: true,
      leftClosedRightUnbound4: true,
      leftClosedRightUnbound6: true,
      leftClosedRightUnbound7: false,
      leftOpenRightUnbound2: true,
      leftOpenRightUnbound3: true,
      leftOpenRightUnbound4: true,
      leftOpenRightUnbound6: true,
      leftOpenRightUnbound7: false,

      leftClosedRightOpen12: false,
      leftOpenRightOpen12: false,
      leftClosedRightClosed12: false,
      leftOpenRightClosed12: false,

      leftClosedRightOpen23: false,
      leftOpenRightOpen23: false,
      leftClosedRightClosed23: true,
      leftOpenRightClosed23: true,

      leftClosedRightOpen24: true,
      leftOpenRightOpen24: true,
      leftClosedRightClosed24: true,
      leftOpenRightClosed24: true,

      leftClosedRightOpen34: true,
      leftOpenRightOpen34: true,
      leftClosedRightClosed34: true,
      leftOpenRightClosed34: true,

      leftClosedRightOpen45: true,
      leftOpenRightOpen45: true,
      leftClosedRightClosed45: true,
      leftOpenRightClosed45: true,

      leftClosedRightOpen56: true,
      leftOpenRightOpen56: true,
      leftClosedRightClosed56: true,
      leftOpenRightClosed56: true,

      leftClosedRightOpen57: true,
      leftOpenRightOpen57: true,
      leftClosedRightClosed57: true,
      leftOpenRightClosed57: true,

      leftClosedRightOpen67: true,
      leftOpenRightOpen67: true,
      leftClosedRightClosed67: true,
      leftOpenRightClosed67: true,

      leftClosedRightOpen78: false,
      leftOpenRightOpen78: false,
      leftClosedRightClosed78: false,
      leftOpenRightClosed78: false
    },

    leftOpenRightOpen36: {
      unbound: true,

      leftUnboundRightClosed2: false,
      leftUnboundRightClosed3: true,
      leftUnboundRightClosed4: true,
      leftUnboundRightClosed6: true,
      leftUnboundRightClosed7: true,
      leftUnboundRightOpen2: false,
      leftUnboundRightOpen3: false,
      leftUnboundRightOpen4: true,
      leftUnboundRightOpen6: true,
      leftUnboundRightOpen7: true,

      leftClosedRightUnbound2: true,
      leftClosedRightUnbound3: true,
      leftClosedRightUnbound4: true,
      leftClosedRightUnbound6: true,
      leftClosedRightUnbound7: false,
      leftOpenRightUnbound2: true,
      leftOpenRightUnbound3: true,
      leftOpenRightUnbound4: true,
      leftOpenRightUnbound6: false,
      leftOpenRightUnbound7: false,

      leftClosedRightOpen12: false,
      leftOpenRightOpen12: false,
      leftClosedRightClosed12: false,
      leftOpenRightClosed12: false,

      leftClosedRightOpen23: false,
      leftOpenRightOpen23: false,
      leftClosedRightClosed23: true,
      leftOpenRightClosed23: true,

      leftClosedRightOpen24: true,
      leftOpenRightOpen24: true,
      leftClosedRightClosed24: true,
      leftOpenRightClosed24: true,

      leftClosedRightOpen34: true,
      leftOpenRightOpen34: true,
      leftClosedRightClosed34: true,
      leftOpenRightClosed34: true,

      leftClosedRightOpen45: true,
      leftOpenRightOpen45: true,
      leftClosedRightClosed45: true,
      leftOpenRightClosed45: true,

      leftClosedRightOpen56: true,
      leftOpenRightOpen56: true,
      leftClosedRightClosed56: true,
      leftOpenRightClosed56: true,

      leftClosedRightOpen57: true,
      leftOpenRightOpen57: true,
      leftClosedRightClosed57: true,
      leftOpenRightClosed57: true,

      leftClosedRightOpen67: true,
      leftOpenRightOpen67: false,
      leftClosedRightClosed67: true,
      leftOpenRightClosed67: false,

      leftClosedRightOpen78: false,
      leftOpenRightOpen78: false,
      leftClosedRightClosed78: false,
      leftOpenRightClosed78: false
    }
  }

  for (const intervalType2 of Object.keys(expectations)) {
    for (const intervalType1 of Object.keys(expectations[intervalType2])) {
      const interval1 = allExamples[intervalType1]
      const interval2 = allExamples[intervalType2]
      const expectation = expectations[intervalType2][intervalType1]

      test(`${intervalType1} is ${expectation ? '' : 'not '}continuous with ${intervalType2}`, () => {
        expect(intervals.continuous(interval1, interval2)).toBe(expectation);
      })

      test(`${intervalType2} does ${expectation ? '' : 'not '}continuous with ${intervalType1}`, () => {
        expect(intervals.continuous(interval2, interval1)).toBe(expectation);
      })

    }
  }

})