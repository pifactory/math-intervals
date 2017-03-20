import 'jest'

import * as intervals from '../src/'

import allExamples from './second-test-dataset'

describe('join', () => {

  const expectations = {
    empty: {
      empty: intervals.empty,
      degenerate0: intervals.degenerate(0),
      leftUnboundRightClosed2: intervals.leftUnboundRightClosed(2),
      leftClosedRightUnbound2: intervals.leftClosedRightUnbound(2),
      unbound: intervals.leftUnboundRightUnbound,
      leftClosedRightClosed36: intervals.leftClosedRightClosed(3, 6)
    },

    degenerate3: {
      degenerate0: intervals.leftClosedRightClosed(0, 3),
      degenerate3: intervals.degenerate(3),

      leftUnboundRightClosed2: intervals.leftUnboundRightClosed(3),
      leftUnboundRightClosed3: intervals.leftUnboundRightClosed(3),
      leftUnboundRightClosed4: intervals.leftUnboundRightClosed(4),

      leftUnboundRightOpen2: intervals.leftUnboundRightClosed(3),
      leftUnboundRightOpen3: intervals.leftUnboundRightClosed(3),
      leftUnboundRightOpen4: intervals.leftUnboundRightOpen(4),

      leftClosedRightUnbound2: intervals.leftClosedRightUnbound(2),
      leftClosedRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound4: intervals.leftClosedRightUnbound(3),

      leftOpenRightUnbound2: intervals.leftOpenRightUnbound(2),
      leftOpenRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound4: intervals.leftClosedRightUnbound(3),

      leftClosedRightOpen12: intervals.leftClosedRightClosed(1, 3),
      leftOpenRightOpen12: intervals.leftOpenRightClosed(1, 3),
      leftClosedRightClosed12: intervals.leftClosedRightClosed(1, 3),
      leftOpenRightClosed12: intervals.leftOpenRightClosed(1, 3),

      leftClosedRightOpen23: intervals.leftClosedRightClosed(2, 3),
      leftOpenRightOpen23: intervals.leftOpenRightClosed(2, 3),
      leftClosedRightClosed23: intervals.leftClosedRightClosed(2, 3),
      leftOpenRightClosed23: intervals.leftOpenRightClosed(2, 3),

      leftClosedRightOpen24: intervals.leftClosedRightOpen(2, 4),
      leftOpenRightOpen24: intervals.leftOpenRightOpen(2, 4),
      leftClosedRightClosed24: intervals.leftClosedRightClosed(2, 4),
      leftOpenRightClosed24: intervals.leftOpenRightClosed(2, 4),

      leftClosedRightOpen34: intervals.leftClosedRightOpen(3, 4),
      leftOpenRightOpen34: intervals.leftClosedRightOpen(3, 4),
      leftClosedRightClosed34: intervals.leftClosedRightClosed(3, 4),
      leftOpenRightClosed34: intervals.leftClosedRightClosed(3, 4),

      leftClosedRightOpen45: intervals.leftClosedRightOpen(3, 5),
      leftOpenRightOpen45: intervals.leftClosedRightOpen(3, 5),
      leftClosedRightClosed45: intervals.leftClosedRightClosed(3, 5),
      leftOpenRightClosed45: intervals.leftClosedRightClosed(3, 5),

      unbound: intervals.leftUnboundRightUnbound
    },

    leftClosedRightOpen36: {
      unbound: intervals.leftUnboundRightUnbound,

      leftUnboundRightClosed2: intervals.leftUnboundRightOpen(6),
      leftUnboundRightClosed3: intervals.leftUnboundRightOpen(6),
      leftUnboundRightClosed4: intervals.leftUnboundRightOpen(6),
      leftUnboundRightClosed6: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed7: intervals.leftUnboundRightClosed(7),
      leftUnboundRightOpen2: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen3: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen4: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen6: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen7: intervals.leftUnboundRightOpen(7),

      leftClosedRightUnbound2: intervals.leftClosedRightUnbound(2),
      leftClosedRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound4: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound6: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound7: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound2: intervals.leftOpenRightUnbound(2),
      leftOpenRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound4: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound6: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound7: intervals.leftClosedRightUnbound(3),

      leftClosedRightOpen12: intervals.leftClosedRightOpen(1, 6),
      leftOpenRightOpen12: intervals.leftOpenRightOpen(1, 6),
      leftClosedRightClosed12: intervals.leftClosedRightOpen(1, 6),
      leftOpenRightClosed12: intervals.leftOpenRightOpen(1, 6),

      leftClosedRightOpen23: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightOpen23: intervals.leftOpenRightOpen(2, 6),
      leftClosedRightClosed23: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightClosed23: intervals.leftOpenRightOpen(2, 6),

      leftClosedRightOpen24: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightOpen24: intervals.leftOpenRightOpen(2, 6),
      leftClosedRightClosed24: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightClosed24: intervals.leftOpenRightOpen(2, 6),

      leftClosedRightOpen34: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightOpen34: intervals.leftClosedRightOpen(3, 6),
      leftClosedRightClosed34: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightClosed34: intervals.leftClosedRightOpen(3, 6),

      leftClosedRightOpen45: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightOpen45: intervals.leftClosedRightOpen(3, 6),
      leftClosedRightClosed45: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightClosed45: intervals.leftClosedRightOpen(3, 6),

      leftClosedRightOpen56: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightOpen56: intervals.leftClosedRightOpen(3, 6),
      leftClosedRightClosed56: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightClosed56: intervals.leftClosedRightClosed(3, 6),

      leftClosedRightOpen57: intervals.leftClosedRightOpen(3, 7),
      leftOpenRightOpen57: intervals.leftClosedRightOpen(3, 7),
      leftClosedRightClosed57: intervals.leftClosedRightClosed(3, 7),
      leftOpenRightClosed57: intervals.leftClosedRightClosed(3, 7),

      leftClosedRightOpen67: intervals.leftClosedRightOpen(3, 7),
      leftOpenRightOpen67: intervals.leftClosedRightOpen(3, 7),
      leftClosedRightClosed67: intervals.leftClosedRightClosed(3, 7),
      leftOpenRightClosed67: intervals.leftClosedRightClosed(3, 7),

      leftClosedRightOpen78: intervals.leftClosedRightOpen(3, 8),
      leftOpenRightOpen78: intervals.leftClosedRightOpen(3, 8),
      leftClosedRightClosed78: intervals.leftClosedRightClosed(3, 8),
      leftOpenRightClosed78: intervals.leftClosedRightClosed(3, 8)
    },

    leftClosedRightClosed36: {
      unbound: intervals.leftUnboundRightUnbound,

      leftUnboundRightClosed2: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed3: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed4: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed6: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed7: intervals.leftUnboundRightClosed(7),
      leftUnboundRightOpen2: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen3: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen4: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen6: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen7: intervals.leftUnboundRightOpen(7),

      leftClosedRightUnbound2: intervals.leftClosedRightUnbound(2),
      leftClosedRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound4: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound6: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound7: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound2: intervals.leftOpenRightUnbound(2),
      leftOpenRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound4: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound6: intervals.leftClosedRightUnbound(3),
      leftOpenRightUnbound7: intervals.leftClosedRightUnbound(3),

      leftClosedRightOpen12: intervals.leftClosedRightClosed(1, 6),
      leftOpenRightOpen12: intervals.leftOpenRightClosed(1, 6),
      leftClosedRightClosed12: intervals.leftClosedRightClosed(1, 6),
      leftOpenRightClosed12: intervals.leftOpenRightClosed(1, 6),

      leftClosedRightOpen23: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightOpen23: intervals.leftOpenRightClosed(2, 6),
      leftClosedRightClosed23: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightClosed23: intervals.leftOpenRightClosed(2, 6),

      leftClosedRightOpen24: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightOpen24: intervals.leftOpenRightClosed(2, 6),
      leftClosedRightClosed24: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightClosed24: intervals.leftOpenRightClosed(2, 6),

      leftClosedRightOpen34: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightOpen34: intervals.leftClosedRightClosed(3, 6),
      leftClosedRightClosed34: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightClosed34: intervals.leftClosedRightClosed(3, 6),

      leftClosedRightOpen45: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightOpen45: intervals.leftClosedRightClosed(3, 6),
      leftClosedRightClosed45: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightClosed45: intervals.leftClosedRightClosed(3, 6),

      leftClosedRightOpen56: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightOpen56: intervals.leftClosedRightClosed(3, 6),
      leftClosedRightClosed56: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightClosed56: intervals.leftClosedRightClosed(3, 6),

      leftClosedRightOpen57: intervals.leftClosedRightOpen(3, 7),
      leftOpenRightOpen57: intervals.leftClosedRightOpen(3, 7),
      leftClosedRightClosed57: intervals.leftClosedRightClosed(3, 7),
      leftOpenRightClosed57: intervals.leftClosedRightClosed(3, 7),

      leftClosedRightOpen67: intervals.leftClosedRightOpen(3, 7),
      leftOpenRightOpen67: intervals.leftClosedRightOpen(3, 7),
      leftClosedRightClosed67: intervals.leftClosedRightClosed(3, 7),
      leftOpenRightClosed67: intervals.leftClosedRightClosed(3, 7),

      leftClosedRightOpen78: intervals.leftClosedRightOpen(3, 8),
      leftOpenRightOpen78: intervals.leftClosedRightOpen(3, 8),
      leftClosedRightClosed78: intervals.leftClosedRightClosed(3, 8),
      leftOpenRightClosed78: intervals.leftClosedRightClosed(3, 8)
    },

    leftOpenRightClosed36: {
      unbound: intervals.leftUnboundRightUnbound,

      leftUnboundRightClosed2: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed3: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed4: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed6: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed7: intervals.leftUnboundRightClosed(7),
      leftUnboundRightOpen2: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen3: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen4: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen6: intervals.leftUnboundRightClosed(6),
      leftUnboundRightOpen7: intervals.leftUnboundRightOpen(7),

      leftClosedRightUnbound2: intervals.leftClosedRightUnbound(2),
      leftClosedRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound4: intervals.leftOpenRightUnbound(3),
      leftClosedRightUnbound6: intervals.leftOpenRightUnbound(3),
      leftClosedRightUnbound7: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound2: intervals.leftOpenRightUnbound(2),
      leftOpenRightUnbound3: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound4: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound6: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound7: intervals.leftOpenRightUnbound(3),

      leftClosedRightOpen12: intervals.leftClosedRightClosed(1, 6),
      leftOpenRightOpen12: intervals.leftOpenRightClosed(1, 6),
      leftClosedRightClosed12: intervals.leftClosedRightClosed(1, 6),
      leftOpenRightClosed12: intervals.leftOpenRightClosed(1, 6),

      leftClosedRightOpen23: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightOpen23: intervals.leftOpenRightClosed(2, 6),
      leftClosedRightClosed23: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightClosed23: intervals.leftOpenRightClosed(2, 6),

      leftClosedRightOpen24: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightOpen24: intervals.leftOpenRightClosed(2, 6),
      leftClosedRightClosed24: intervals.leftClosedRightClosed(2, 6),
      leftOpenRightClosed24: intervals.leftOpenRightClosed(2, 6),

      leftClosedRightOpen34: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightOpen34: intervals.leftOpenRightClosed(3, 6),
      leftClosedRightClosed34: intervals.leftClosedRightClosed(3, 6),
      leftOpenRightClosed34: intervals.leftOpenRightClosed(3, 6),

      leftClosedRightOpen45: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightOpen45: intervals.leftOpenRightClosed(3, 6),
      leftClosedRightClosed45: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightClosed45: intervals.leftOpenRightClosed(3, 6),

      leftClosedRightOpen56: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightOpen56: intervals.leftOpenRightClosed(3, 6),
      leftClosedRightClosed56: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightClosed56: intervals.leftOpenRightClosed(3, 6),

      leftClosedRightOpen57: intervals.leftOpenRightOpen(3, 7),
      leftOpenRightOpen57: intervals.leftOpenRightOpen(3, 7),
      leftClosedRightClosed57: intervals.leftOpenRightClosed(3, 7),
      leftOpenRightClosed57: intervals.leftOpenRightClosed(3, 7),

      leftClosedRightOpen67: intervals.leftOpenRightOpen(3, 7),
      leftOpenRightOpen67: intervals.leftOpenRightOpen(3, 7),
      leftClosedRightClosed67: intervals.leftOpenRightClosed(3, 7),
      leftOpenRightClosed67: intervals.leftOpenRightClosed(3, 7),

      leftClosedRightOpen78: intervals.leftOpenRightOpen(3, 8),
      leftOpenRightOpen78: intervals.leftOpenRightOpen(3, 8),
      leftClosedRightClosed78: intervals.leftOpenRightClosed(3, 8),
      leftOpenRightClosed78: intervals.leftOpenRightClosed(3, 8)
    },

    leftOpenRightOpen36: {
      unbound: intervals.leftUnboundRightUnbound,

      leftUnboundRightClosed2: intervals.leftUnboundRightOpen(6),
      leftUnboundRightClosed3: intervals.leftUnboundRightOpen(6),
      leftUnboundRightClosed4: intervals.leftUnboundRightOpen(6),
      leftUnboundRightClosed6: intervals.leftUnboundRightClosed(6),
      leftUnboundRightClosed7: intervals.leftUnboundRightClosed(7),
      leftUnboundRightOpen2: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen3: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen4: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen6: intervals.leftUnboundRightOpen(6),
      leftUnboundRightOpen7: intervals.leftUnboundRightOpen(7),

      leftClosedRightUnbound2: intervals.leftClosedRightUnbound(2),
      leftClosedRightUnbound3: intervals.leftClosedRightUnbound(3),
      leftClosedRightUnbound4: intervals.leftOpenRightUnbound(3),
      leftClosedRightUnbound6: intervals.leftOpenRightUnbound(3),
      leftClosedRightUnbound7: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound2: intervals.leftOpenRightUnbound(2),
      leftOpenRightUnbound3: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound4: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound6: intervals.leftOpenRightUnbound(3),
      leftOpenRightUnbound7: intervals.leftOpenRightUnbound(3),

      leftClosedRightOpen12: intervals.leftClosedRightOpen(1, 6),
      leftOpenRightOpen12: intervals.leftOpenRightOpen(1, 6),
      leftClosedRightClosed12: intervals.leftClosedRightOpen(1, 6),
      leftOpenRightClosed12: intervals.leftOpenRightOpen(1, 6),

      leftClosedRightOpen23: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightOpen23: intervals.leftOpenRightOpen(2, 6),
      leftClosedRightClosed23: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightClosed23: intervals.leftOpenRightOpen(2, 6),

      leftClosedRightOpen24: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightOpen24: intervals.leftOpenRightOpen(2, 6),
      leftClosedRightClosed24: intervals.leftClosedRightOpen(2, 6),
      leftOpenRightClosed24: intervals.leftOpenRightOpen(2, 6),

      leftClosedRightOpen34: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightOpen34: intervals.leftOpenRightOpen(3, 6),
      leftClosedRightClosed34: intervals.leftClosedRightOpen(3, 6),
      leftOpenRightClosed34: intervals.leftOpenRightOpen(3, 6),

      leftClosedRightOpen45: intervals.leftOpenRightOpen(3, 6),
      leftOpenRightOpen45: intervals.leftOpenRightOpen(3, 6),
      leftClosedRightClosed45: intervals.leftOpenRightOpen(3, 6),
      leftOpenRightClosed45: intervals.leftOpenRightOpen(3, 6),

      leftClosedRightOpen56: intervals.leftOpenRightOpen(3, 6),
      leftOpenRightOpen56: intervals.leftOpenRightOpen(3, 6),
      leftClosedRightClosed56: intervals.leftOpenRightClosed(3, 6),
      leftOpenRightClosed56: intervals.leftOpenRightClosed(3, 6),

      leftClosedRightOpen57: intervals.leftOpenRightOpen(3, 7),
      leftOpenRightOpen57: intervals.leftOpenRightOpen(3, 7),
      leftClosedRightClosed57: intervals.leftOpenRightClosed(3, 7),
      leftOpenRightClosed57: intervals.leftOpenRightClosed(3, 7),

      leftClosedRightOpen67: intervals.leftOpenRightOpen(3, 7),
      leftOpenRightOpen67: intervals.leftOpenRightOpen(3, 7),
      leftClosedRightClosed67: intervals.leftOpenRightClosed(3, 7),
      leftOpenRightClosed67: intervals.leftOpenRightClosed(3, 7),

      leftClosedRightOpen78: intervals.leftOpenRightOpen(3, 8),
      leftOpenRightOpen78: intervals.leftOpenRightOpen(3, 8),
      leftClosedRightClosed78: intervals.leftOpenRightClosed(3, 8),
      leftOpenRightClosed78: intervals.leftOpenRightClosed(3, 8)
    }
  }

  for (const intervalType2 of Object.keys(expectations)) {
    for (const intervalType1 of Object.keys(expectations[intervalType2])) {
      const interval1 = allExamples[intervalType1]
      const interval2 = allExamples[intervalType2]
      const expectation = expectations[intervalType2][intervalType1]

      test(`join of ${intervalType1} and ${intervalType2} equals ${JSON.stringify(expectation)}`, () => {
        expect(intervals.join(interval1, interval2)).toEqual(expectation);
      })

      test(`join of ${intervalType2} and ${intervalType1} equals ${JSON.stringify(expectation)}`, () => {
        expect(intervals.join(interval2, interval1)).toEqual(expectation);
      })
    }
  }

})