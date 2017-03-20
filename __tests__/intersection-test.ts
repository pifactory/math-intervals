import 'jest'

import * as intervals from '../src/'

import allExamples from './second-test-dataset'

describe('intersect', () => {

  const expectations = {
    empty: {
      empty: intervals.empty,
      degenerate0: intervals.empty,
      leftUnboundRightClosed2: intervals.empty,
      leftClosedRightUnbound2: intervals.empty,
      unbound: intervals.empty,
      leftClosedRightClosed36: intervals.empty
    },

    degenerate3: {
      degenerate0: intervals.empty,
      degenerate3: intervals.degenerate(3),

      leftUnboundRightClosed2: intervals.empty,
      leftUnboundRightClosed3: intervals.degenerate(3),
      leftUnboundRightClosed4: intervals.degenerate(3),

      leftUnboundRightOpen2: intervals.empty,
      leftUnboundRightOpen3: intervals.empty,
      leftUnboundRightOpen4: intervals.degenerate(3),

      leftClosedRightUnbound2: intervals.degenerate(3),
      leftClosedRightUnbound3: intervals.degenerate(3),
      leftClosedRightUnbound4: intervals.empty,

      leftOpenRightUnbound2: intervals.degenerate(3),
      leftOpenRightUnbound3: intervals.empty,
      leftOpenRightUnbound4: intervals.empty,

      leftClosedRightOpen12: intervals.empty,
      leftOpenRightOpen12: intervals.empty,
      leftClosedRightClosed12: intervals.empty,
      leftOpenRightClosed12: intervals.empty,

      leftClosedRightOpen23: intervals.empty,
      leftOpenRightOpen23: intervals.empty,
      leftClosedRightClosed23: intervals.degenerate(3),
      leftOpenRightClosed23: intervals.degenerate(3),

      leftClosedRightOpen24: intervals.degenerate(3),
      leftOpenRightOpen24: intervals.degenerate(3),
      leftClosedRightClosed24: intervals.degenerate(3),
      leftOpenRightClosed24: intervals.degenerate(3),

      leftClosedRightOpen34: intervals.degenerate(3),
      leftOpenRightOpen34: intervals.empty,
      leftClosedRightClosed34: intervals.degenerate(3),
      leftOpenRightClosed34: intervals.empty,

      leftClosedRightOpen45: intervals.empty,
      leftOpenRightOpen45: intervals.empty,
      leftClosedRightClosed45: intervals.empty,
      leftOpenRightClosed45: intervals.empty,

      unbound: intervals.degenerate(3)
    },

    leftClosedRightOpen36: {
      unbound: intervals.leftClosedRightOpen(3, 6),

      leftUnboundRightClosed2: intervals.empty,
      leftUnboundRightClosed3: intervals.degenerate(3),
      leftUnboundRightClosed4: intervals.leftClosedRightClosed(3, 4),
      leftUnboundRightClosed6: intervals.leftClosedRightOpen(3, 6),
      leftUnboundRightClosed7: intervals.leftClosedRightOpen(3, 6),
      leftUnboundRightOpen2: intervals.empty,
      leftUnboundRightOpen3: intervals.empty,
      leftUnboundRightOpen4: intervals.leftClosedRightOpen(3, 4),
      leftUnboundRightOpen6: intervals.leftClosedRightOpen(3, 6),
      leftUnboundRightOpen7: intervals.leftClosedRightOpen(3, 6),

      leftClosedRightUnbound2: intervals.leftClosedRightOpen(3, 6),
      leftClosedRightUnbound3: intervals.leftClosedRightOpen(3, 6),
      leftClosedRightUnbound4: intervals.leftClosedRightOpen(4, 6),
      leftClosedRightUnbound6: intervals.empty,
      leftClosedRightUnbound7: intervals.empty,
      leftOpenRightUnbound2: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightUnbound3: intervals.leftOpenRightOpen(3, 6),
      leftOpenRightUnbound4: intervals.leftOpenRightOpen(4, 6),
      leftOpenRightUnbound6: intervals.empty,
      leftOpenRightUnbound7: intervals.empty,

      leftClosedRightOpen12: intervals.empty,
      leftOpenRightOpen12: intervals.empty,
      leftClosedRightClosed12: intervals.empty,
      leftOpenRightClosed12: intervals.empty,

      leftClosedRightOpen23: intervals.empty,
      leftOpenRightOpen23: intervals.empty,
      leftClosedRightClosed23: intervals.degenerate(3),
      leftOpenRightClosed23: intervals.degenerate(3),

      leftClosedRightOpen24: intervals.leftClosedRightOpen(3, 4),
      leftOpenRightOpen24: intervals.leftClosedRightOpen(3, 4),
      leftClosedRightClosed24: intervals.leftClosedRightClosed(3, 4),
      leftOpenRightClosed24: intervals.leftClosedRightClosed(3, 4),

      leftClosedRightOpen34: intervals.leftClosedRightOpen(3, 4),
      leftOpenRightOpen34: intervals.leftOpenRightOpen(3, 4),
      leftClosedRightClosed34: intervals.leftClosedRightClosed(3, 4),
      leftOpenRightClosed34: intervals.leftOpenRightClosed(3, 4),

      leftClosedRightOpen45: intervals.leftClosedRightOpen(4, 5),
      leftOpenRightOpen45: intervals.leftOpenRightOpen(4, 5),
      leftClosedRightClosed45: intervals.leftClosedRightClosed(4, 5),
      leftOpenRightClosed45: intervals.leftOpenRightClosed(4, 5),

      leftClosedRightOpen56: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightOpen56: intervals.leftOpenRightOpen(5, 6),
      leftClosedRightClosed56: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightClosed56: intervals.leftOpenRightOpen(5, 6),

      leftClosedRightOpen57: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightOpen57: intervals.leftOpenRightOpen(5, 6),
      leftClosedRightClosed57: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightClosed57: intervals.leftOpenRightOpen(5, 6),

      leftClosedRightOpen67: intervals.empty,
      leftOpenRightOpen67: intervals.empty,
      leftClosedRightClosed67: intervals.empty,
      leftOpenRightClosed67: intervals.empty,

      leftClosedRightOpen78: intervals.empty,
      leftOpenRightOpen78: intervals.empty,
      leftClosedRightClosed78: intervals.empty,
      leftOpenRightClosed78: intervals.empty
    },

    leftClosedRightClosed36: {
      unbound: intervals.leftClosedRightClosed(3, 6),

      leftUnboundRightClosed2: intervals.empty,
      leftUnboundRightClosed3: intervals.degenerate(3),
      leftUnboundRightClosed4: intervals.leftClosedRightClosed(3, 4),
      leftUnboundRightClosed6: intervals.leftClosedRightClosed(3, 6),
      leftUnboundRightClosed7: intervals.leftClosedRightClosed(3, 6),
      leftUnboundRightOpen2: intervals.empty,
      leftUnboundRightOpen3: intervals.empty,
      leftUnboundRightOpen4: intervals.leftClosedRightOpen(3, 4),
      leftUnboundRightOpen6: intervals.leftClosedRightOpen(3, 6),
      leftUnboundRightOpen7: intervals.leftClosedRightClosed(3, 6),

      leftClosedRightUnbound2: intervals.leftClosedRightClosed(3, 6),
      leftClosedRightUnbound3: intervals.leftClosedRightClosed(3, 6),
      leftClosedRightUnbound4: intervals.leftClosedRightClosed(4, 6),
      leftClosedRightUnbound6: intervals.degenerate(6),
      leftClosedRightUnbound7: intervals.empty,
      leftOpenRightUnbound2: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightUnbound3: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightUnbound4: intervals.leftOpenRightClosed(4, 6),
      leftOpenRightUnbound6: intervals.empty,
      leftOpenRightUnbound7: intervals.empty,

      leftClosedRightOpen12: intervals.empty,
      leftOpenRightOpen12: intervals.empty,
      leftClosedRightClosed12: intervals.empty,
      leftOpenRightClosed12: intervals.empty,

      leftClosedRightOpen23: intervals.empty,
      leftOpenRightOpen23: intervals.empty,
      leftClosedRightClosed23: intervals.degenerate(3),
      leftOpenRightClosed23: intervals.degenerate(3),

      leftClosedRightOpen24: intervals.leftClosedRightOpen(3, 4),
      leftOpenRightOpen24: intervals.leftClosedRightOpen(3, 4),
      leftClosedRightClosed24: intervals.leftClosedRightClosed(3, 4),
      leftOpenRightClosed24: intervals.leftClosedRightClosed(3, 4),

      leftClosedRightOpen34: intervals.leftClosedRightOpen(3, 4),
      leftOpenRightOpen34: intervals.leftOpenRightOpen(3, 4),
      leftClosedRightClosed34: intervals.leftClosedRightClosed(3, 4),
      leftOpenRightClosed34: intervals.leftOpenRightClosed(3, 4),

      leftClosedRightOpen45: intervals.leftClosedRightOpen(4, 5),
      leftOpenRightOpen45: intervals.leftOpenRightOpen(4, 5),
      leftClosedRightClosed45: intervals.leftClosedRightClosed(4, 5),
      leftOpenRightClosed45: intervals.leftOpenRightClosed(4, 5),

      leftClosedRightOpen56: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightOpen56: intervals.leftOpenRightOpen(5, 6),
      leftClosedRightClosed56: intervals.leftClosedRightClosed(5, 6),
      leftOpenRightClosed56: intervals.leftOpenRightClosed(5, 6),

      leftClosedRightOpen57: intervals.leftClosedRightClosed(5, 6),
      leftOpenRightOpen57: intervals.leftOpenRightClosed(5, 6),
      leftClosedRightClosed57: intervals.leftClosedRightClosed(5, 6),
      leftOpenRightClosed57: intervals.leftOpenRightClosed(5, 6),

      leftClosedRightOpen67: intervals.degenerate(6),
      leftOpenRightOpen67: intervals.empty,
      leftClosedRightClosed67: intervals.degenerate(6),
      leftOpenRightClosed67: intervals.empty,

      leftClosedRightOpen78: intervals.empty,
      leftOpenRightOpen78: intervals.empty,
      leftClosedRightClosed78: intervals.empty,
      leftOpenRightClosed78: intervals.empty
    },

    leftOpenRightClosed36: {
      unbound: intervals.leftOpenRightClosed(3, 6),

      leftUnboundRightClosed2: intervals.empty,
      leftUnboundRightClosed3: intervals.empty,
      leftUnboundRightClosed4: intervals.leftOpenRightClosed(3, 4),
      leftUnboundRightClosed6: intervals.leftOpenRightClosed(3, 6),
      leftUnboundRightClosed7: intervals.leftOpenRightClosed(3, 6),
      leftUnboundRightOpen2: intervals.empty,
      leftUnboundRightOpen3: intervals.empty,
      leftUnboundRightOpen4: intervals.leftOpenRightOpen(3, 4),
      leftUnboundRightOpen6: intervals.leftOpenRightOpen(3, 6),
      leftUnboundRightOpen7: intervals.leftOpenRightClosed(3, 6),

      leftClosedRightUnbound2: intervals.leftOpenRightClosed(3, 6),
      leftClosedRightUnbound3: intervals.leftOpenRightClosed(3, 6),
      leftClosedRightUnbound4: intervals.leftClosedRightClosed(4, 6),
      leftClosedRightUnbound6: intervals.degenerate(6),
      leftClosedRightUnbound7: intervals.empty,
      leftOpenRightUnbound2: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightUnbound3: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightUnbound4: intervals.leftOpenRightClosed(4, 6),
      leftOpenRightUnbound6: intervals.empty,
      leftOpenRightUnbound7: intervals.empty,

      leftClosedRightOpen12: intervals.empty,
      leftOpenRightOpen12: intervals.empty,
      leftClosedRightClosed12: intervals.empty,
      leftOpenRightClosed12: intervals.empty,

      leftClosedRightOpen23: intervals.empty,
      leftOpenRightOpen23: intervals.empty,
      leftClosedRightClosed23: intervals.empty,
      leftOpenRightClosed23: intervals.empty,

      leftClosedRightOpen24: intervals.leftOpenRightOpen(3, 4),
      leftOpenRightOpen24: intervals.leftOpenRightOpen(3, 4),
      leftClosedRightClosed24: intervals.leftOpenRightClosed(3, 4),
      leftOpenRightClosed24: intervals.leftOpenRightClosed(3, 4),

      leftClosedRightOpen34: intervals.leftOpenRightOpen(3, 4),
      leftOpenRightOpen34: intervals.leftOpenRightOpen(3, 4),
      leftClosedRightClosed34: intervals.leftOpenRightClosed(3, 4),
      leftOpenRightClosed34: intervals.leftOpenRightClosed(3, 4),

      leftClosedRightOpen45: intervals.leftClosedRightOpen(4, 5),
      leftOpenRightOpen45: intervals.leftOpenRightOpen(4, 5),
      leftClosedRightClosed45: intervals.leftClosedRightClosed(4, 5),
      leftOpenRightClosed45: intervals.leftOpenRightClosed(4, 5),

      leftClosedRightOpen56: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightOpen56: intervals.leftOpenRightOpen(5, 6),
      leftClosedRightClosed56: intervals.leftClosedRightClosed(5, 6),
      leftOpenRightClosed56: intervals.leftOpenRightClosed(5, 6),

      leftClosedRightOpen57: intervals.leftClosedRightClosed(5, 6),
      leftOpenRightOpen57: intervals.leftOpenRightClosed(5, 6),
      leftClosedRightClosed57: intervals.leftClosedRightClosed(5, 6),
      leftOpenRightClosed57: intervals.leftOpenRightClosed(5, 6),

      leftClosedRightOpen67: intervals.degenerate(6),
      leftOpenRightOpen67: intervals.empty,
      leftClosedRightClosed67: intervals.degenerate(6),
      leftOpenRightClosed67: intervals.empty,

      leftClosedRightOpen78: intervals.empty,
      leftOpenRightOpen78: intervals.empty,
      leftClosedRightClosed78: intervals.empty,
      leftOpenRightClosed78: intervals.empty
    },

    leftOpenRightOpen36: {
      unbound: intervals.leftOpenRightOpen(3, 6),

      leftUnboundRightClosed2: intervals.empty,
      leftUnboundRightClosed3: intervals.empty,
      leftUnboundRightClosed4: intervals.leftOpenRightClosed(3, 4),
      leftUnboundRightClosed6: intervals.leftOpenRightOpen(3, 6),
      leftUnboundRightClosed7: intervals.leftOpenRightOpen(3, 6),
      leftUnboundRightOpen2: intervals.empty,
      leftUnboundRightOpen3: intervals.empty,
      leftUnboundRightOpen4: intervals.leftOpenRightOpen(3, 4),
      leftUnboundRightOpen6: intervals.leftOpenRightOpen(3, 6),
      leftUnboundRightOpen7: intervals.leftOpenRightOpen(3, 6),

      leftClosedRightUnbound2: intervals.leftOpenRightOpen(3, 6),
      leftClosedRightUnbound3: intervals.leftOpenRightOpen(3, 6),
      leftClosedRightUnbound4: intervals.leftClosedRightOpen(4, 6),
      leftClosedRightUnbound6: intervals.empty,
      leftClosedRightUnbound7: intervals.empty,
      leftOpenRightUnbound2: intervals.leftOpenRightOpen(3, 6),
      leftOpenRightUnbound3: intervals.leftOpenRightOpen(3, 6),
      leftOpenRightUnbound4: intervals.leftOpenRightOpen(4, 6),
      leftOpenRightUnbound6: intervals.empty,
      leftOpenRightUnbound7: intervals.empty,

      leftClosedRightOpen12: intervals.empty,
      leftOpenRightOpen12: intervals.empty,
      leftClosedRightClosed12: intervals.empty,
      leftOpenRightClosed12: intervals.empty,

      leftClosedRightOpen23: intervals.empty,
      leftOpenRightOpen23: intervals.empty,
      leftClosedRightClosed23: intervals.empty,
      leftOpenRightClosed23: intervals.empty,

      leftClosedRightOpen24: intervals.leftOpenRightOpen(3, 4),
      leftOpenRightOpen24: intervals.leftOpenRightOpen(3, 4),
      leftClosedRightClosed24: intervals.leftOpenRightClosed(3, 4),
      leftOpenRightClosed24: intervals.leftOpenRightClosed(3, 4),

      leftClosedRightOpen34: intervals.leftOpenRightOpen(3, 4),
      leftOpenRightOpen34: intervals.leftOpenRightOpen(3, 4),
      leftClosedRightClosed34: intervals.leftOpenRightClosed(3, 4),
      leftOpenRightClosed34: intervals.leftOpenRightClosed(3, 4),

      leftClosedRightOpen45: intervals.leftClosedRightOpen(4, 5),
      leftOpenRightOpen45: intervals.leftOpenRightOpen(4, 5),
      leftClosedRightClosed45: intervals.leftClosedRightClosed(4, 5),
      leftOpenRightClosed45: intervals.leftOpenRightClosed(4, 5),

      leftClosedRightOpen56: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightOpen56: intervals.leftOpenRightOpen(5, 6),
      leftClosedRightClosed56: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightClosed56: intervals.leftOpenRightOpen(5, 6),

      leftClosedRightOpen57: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightOpen57: intervals.leftOpenRightOpen(5, 6),
      leftClosedRightClosed57: intervals.leftClosedRightOpen(5, 6),
      leftOpenRightClosed57: intervals.leftOpenRightOpen(5, 6),

      leftClosedRightOpen67: intervals.empty,
      leftOpenRightOpen67: intervals.empty,
      leftClosedRightClosed67: intervals.empty,
      leftOpenRightClosed67: intervals.empty,

      leftClosedRightOpen78: intervals.empty,
      leftOpenRightOpen78: intervals.empty,
      leftClosedRightClosed78: intervals.empty,
      leftOpenRightClosed78: intervals.empty
    }
  }

  for (const intervalType2 of Object.keys(expectations)) {
    for (const intervalType1 of Object.keys(expectations[intervalType2])) {
      const interval1 = allExamples[intervalType1]
      const interval2 = allExamples[intervalType2]
      const expectation = expectations[intervalType2][intervalType1]

      test(`intersection of ${intervalType1} and ${intervalType2} equals ${JSON.stringify(expectation)}`, () => {
        expect(intervals.intersection(interval1, interval2)).toEqual(expectation);
      })

      test(`intersection of ${intervalType2} and ${intervalType1} equals ${JSON.stringify(expectation)}`, () => {
        expect(intervals.intersection(interval2, interval1)).toEqual(expectation);
      })

    }
  }

})