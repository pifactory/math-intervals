import 'jest'

import * as intervals from '../src/'

import allExamples from './second-test-dataset'

describe('subtract', () => {

  const expectations = {
    empty: {
      empty: [],
      degenerate0: [],
      leftUnboundRightClosed2: [],
      leftClosedRightUnbound2: [],
      unbound: [],
      leftClosedRightClosed36: []
    },

    degenerate3: {
      degenerate0: [intervals.degenerate(3)],
      degenerate3: [],

      leftUnboundRightClosed2: [intervals.degenerate(3)],
      leftUnboundRightClosed3: [],
      leftUnboundRightClosed4: [],

      leftUnboundRightOpen2: [intervals.degenerate(3)],
      leftUnboundRightOpen3: [intervals.degenerate(3)],
      leftUnboundRightOpen4: [],

      leftClosedRightUnbound2: [],
      leftClosedRightUnbound3: [],
      leftClosedRightUnbound4: [intervals.degenerate(3)],

      leftOpenRightUnbound2: [],
      leftOpenRightUnbound3: [intervals.degenerate(3)],
      leftOpenRightUnbound4: [intervals.degenerate(3)],

      leftClosedRightOpen12: [intervals.degenerate(3)],
      leftOpenRightOpen12: [intervals.degenerate(3)],
      leftClosedRightClosed12: [intervals.degenerate(3)],
      leftOpenRightClosed12: [intervals.degenerate(3)],

      leftClosedRightOpen23: [intervals.degenerate(3)],
      leftOpenRightOpen23: [intervals.degenerate(3)],
      leftClosedRightClosed23: [],
      leftOpenRightClosed23: [],

      leftClosedRightOpen24: [],
      leftOpenRightOpen24: [],
      leftClosedRightClosed24: [],
      leftOpenRightClosed24: [],

      leftClosedRightOpen34: [],
      leftOpenRightOpen34: [intervals.degenerate(3)],
      leftClosedRightClosed34: [],
      leftOpenRightClosed34: [intervals.degenerate(3)],

      leftClosedRightOpen45: [intervals.degenerate(3)],
      leftOpenRightOpen45: [intervals.degenerate(3)],
      leftClosedRightClosed45: [intervals.degenerate(3)],
      leftOpenRightClosed45: [intervals.degenerate(3)],

      unbound: []
    },

    leftClosedRightOpen36: {
      unbound: [],

      leftUnboundRightClosed2: [intervals.leftClosedRightOpen(3, 6)],
      leftUnboundRightClosed3: [intervals.leftOpenRightOpen(3, 6)],
      leftUnboundRightClosed4: [intervals.leftOpenRightOpen(4, 6)],
      leftUnboundRightClosed6: [],
      leftUnboundRightClosed7: [],
      leftUnboundRightOpen2: [intervals.leftClosedRightOpen(3, 6)],
      leftUnboundRightOpen3: [intervals.leftClosedRightOpen(3, 6)],
      leftUnboundRightOpen4: [intervals.leftClosedRightOpen(4, 6)],
      leftUnboundRightOpen6: [],
      leftUnboundRightOpen7: [],

      leftClosedRightUnbound2: [],
      leftClosedRightUnbound3: [],
      leftClosedRightUnbound4: [intervals.leftClosedRightOpen(3, 4)],
      leftClosedRightUnbound6: [intervals.leftClosedRightOpen(3, 6)],
      leftClosedRightUnbound7: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightUnbound2: [],
      leftOpenRightUnbound3: [intervals.degenerate(3)],
      leftOpenRightUnbound4: [intervals.leftClosedRightClosed(3, 4)],
      leftOpenRightUnbound6: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightUnbound7: [intervals.leftClosedRightOpen(3, 6)],

      leftClosedRightOpen12: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightOpen12: [intervals.leftClosedRightOpen(3, 6)],
      leftClosedRightClosed12: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightClosed12: [intervals.leftClosedRightOpen(3, 6)],

      leftClosedRightOpen23: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightOpen23: [intervals.leftClosedRightOpen(3, 6)],
      leftClosedRightClosed23: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightClosed23: [intervals.leftOpenRightOpen(3, 6)],

      leftClosedRightOpen24: [intervals.leftClosedRightOpen(4, 6)],
      leftOpenRightOpen24: [intervals.leftClosedRightOpen(4, 6)],
      leftClosedRightClosed24: [intervals.leftOpenRightOpen(4, 6)],
      leftOpenRightClosed24: [intervals.leftOpenRightOpen(4, 6)],

      leftClosedRightOpen34: [intervals.leftClosedRightOpen(4, 6)],
      leftOpenRightOpen34: [intervals.degenerate(3), intervals.leftClosedRightOpen(4, 6)],
      leftClosedRightClosed34: [intervals.leftOpenRightOpen(4, 6)],
      leftOpenRightClosed34: [intervals.degenerate(3), intervals.leftOpenRightOpen(4, 6)],

      leftClosedRightOpen45: [intervals.leftClosedRightOpen(3, 4), intervals.leftClosedRightOpen(5, 6)],
      leftOpenRightOpen45: [intervals.leftClosedRightClosed(3, 4), intervals.leftClosedRightOpen(5, 6)],
      leftClosedRightClosed45: [intervals.leftClosedRightOpen(3, 4), intervals.leftOpenRightOpen(5, 6)],
      leftOpenRightClosed45: [intervals.leftClosedRightClosed(3, 4), intervals.leftOpenRightOpen(5, 6)],

      leftClosedRightOpen56: [intervals.leftClosedRightOpen(3, 5)],
      leftOpenRightOpen56: [intervals.leftClosedRightClosed(3, 5)],
      leftClosedRightClosed56: [intervals.leftClosedRightOpen(3, 5)],
      leftOpenRightClosed56: [intervals.leftClosedRightClosed(3, 5)],

      leftClosedRightOpen57: [intervals.leftClosedRightOpen(3, 5)],
      leftOpenRightOpen57: [intervals.leftClosedRightClosed(3, 5)],
      leftClosedRightClosed57: [intervals.leftClosedRightOpen(3, 5)],
      leftOpenRightClosed57: [intervals.leftClosedRightClosed(3, 5)],

      leftClosedRightOpen67: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightOpen67: [intervals.leftClosedRightOpen(3, 6)],
      leftClosedRightClosed67: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightClosed67: [intervals.leftClosedRightOpen(3, 6)],

      leftClosedRightOpen78: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightOpen78: [intervals.leftClosedRightOpen(3, 6)],
      leftClosedRightClosed78: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightClosed78: [intervals.leftClosedRightOpen(3, 6)],

      leftClosedRightOpen27: [],
      leftOpenRightOpen27: [],
      leftClosedRightClosed27: [],
      leftOpenRightClosed27: []
    },

    leftClosedRightClosed36: {
      unbound: [],

      leftUnboundRightClosed2: [intervals.leftClosedRightClosed(3, 6)],
      leftUnboundRightClosed3: [intervals.leftOpenRightClosed(3, 6)],
      leftUnboundRightClosed4: [intervals.leftOpenRightClosed(4, 6)],
      leftUnboundRightClosed6: [],
      leftUnboundRightClosed7: [],
      leftUnboundRightOpen2: [intervals.leftClosedRightClosed(3, 6)],
      leftUnboundRightOpen3: [intervals.leftClosedRightClosed(3, 6)],
      leftUnboundRightOpen4: [intervals.leftClosedRightClosed(4, 6)],
      leftUnboundRightOpen6: [intervals.degenerate(6)],
      leftUnboundRightOpen7: [],

      leftClosedRightUnbound2: [],
      leftClosedRightUnbound3: [],
      leftClosedRightUnbound4: [intervals.leftClosedRightOpen(3, 4)],
      leftClosedRightUnbound6: [intervals.leftClosedRightOpen(3, 6)],
      leftClosedRightUnbound7: [intervals.leftClosedRightClosed(3, 6)],
      leftOpenRightUnbound2: [],
      leftOpenRightUnbound3: [intervals.degenerate(3)],
      leftOpenRightUnbound4: [intervals.leftClosedRightClosed(3, 4)],
      leftOpenRightUnbound6: [intervals.leftClosedRightClosed(3, 6)],
      leftOpenRightUnbound7: [intervals.leftClosedRightClosed(3, 6)],

      leftClosedRightOpen12: [intervals.leftClosedRightClosed(3, 6)],
      leftOpenRightOpen12: [intervals.leftClosedRightClosed(3, 6)],
      leftClosedRightClosed12: [intervals.leftClosedRightClosed(3, 6)],
      leftOpenRightClosed12: [intervals.leftClosedRightClosed(3, 6)],

      leftClosedRightOpen23: [intervals.leftClosedRightClosed(3, 6)],
      leftOpenRightOpen23: [intervals.leftClosedRightClosed(3, 6)],
      leftClosedRightClosed23: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightClosed23: [intervals.leftOpenRightClosed(3, 6)],

      leftClosedRightOpen24: [intervals.leftClosedRightClosed(4, 6)],
      leftOpenRightOpen24: [intervals.leftClosedRightClosed(4, 6)],
      leftClosedRightClosed24: [intervals.leftOpenRightClosed(4, 6)],
      leftOpenRightClosed24: [intervals.leftOpenRightClosed(4, 6)],

      leftClosedRightOpen34: [intervals.leftClosedRightClosed(4, 6)],
      leftOpenRightOpen34: [intervals.degenerate(3), intervals.leftClosedRightClosed(4, 6)],
      leftClosedRightClosed34: [intervals.leftOpenRightClosed(4, 6)],
      leftOpenRightClosed34: [intervals.degenerate(3), intervals.leftOpenRightClosed(4, 6)],

      leftClosedRightOpen45: [intervals.leftClosedRightOpen(3, 4), intervals.leftClosedRightClosed(5, 6)],
      leftOpenRightOpen45: [intervals.leftClosedRightClosed(3, 4), intervals.leftClosedRightClosed(5, 6)],
      leftClosedRightClosed45: [intervals.leftClosedRightOpen(3, 4), intervals.leftOpenRightClosed(5, 6)],
      leftOpenRightClosed45: [intervals.leftClosedRightClosed(3, 4), intervals.leftOpenRightClosed(5, 6)],

      leftClosedRightOpen56: [intervals.leftClosedRightOpen(3, 5), intervals.degenerate(6)],
      leftOpenRightOpen56: [intervals.leftClosedRightClosed(3, 5), intervals.degenerate(6)],
      leftClosedRightClosed56: [intervals.leftClosedRightOpen(3, 5)],
      leftOpenRightClosed56: [intervals.leftClosedRightClosed(3, 5)],

      leftClosedRightOpen57: [intervals.leftClosedRightOpen(3, 5)],
      leftOpenRightOpen57: [intervals.leftClosedRightClosed(3, 5)],
      leftClosedRightClosed57: [intervals.leftClosedRightOpen(3, 5)],
      leftOpenRightClosed57: [intervals.leftClosedRightClosed(3, 5)],

      leftClosedRightOpen67: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightOpen67: [intervals.leftClosedRightClosed(3, 6)],
      leftClosedRightClosed67: [intervals.leftClosedRightOpen(3, 6)],
      leftOpenRightClosed67: [intervals.leftClosedRightClosed(3, 6)],

      leftClosedRightOpen78: [intervals.leftClosedRightClosed(3, 6)],
      leftOpenRightOpen78: [intervals.leftClosedRightClosed(3, 6)],
      leftClosedRightClosed78: [intervals.leftClosedRightClosed(3, 6)],
      leftOpenRightClosed78: [intervals.leftClosedRightClosed(3, 6)],

      leftClosedRightOpen27: [],
      leftOpenRightOpen27: [],
      leftClosedRightClosed27: [],
      leftOpenRightClosed27: []
    },

    leftOpenRightClosed36: {
      unbound: [],

      leftUnboundRightClosed2: [intervals.leftOpenRightClosed(3, 6)],
      leftUnboundRightClosed3: [intervals.leftOpenRightClosed(3, 6)],
      leftUnboundRightClosed4: [intervals.leftOpenRightClosed(4, 6)],
      leftUnboundRightClosed6: [],
      leftUnboundRightClosed7: [],
      leftUnboundRightOpen2: [intervals.leftOpenRightClosed(3, 6)],
      leftUnboundRightOpen3: [intervals.leftOpenRightClosed(3, 6)],
      leftUnboundRightOpen4: [intervals.leftClosedRightClosed(4, 6)],
      leftUnboundRightOpen6: [intervals.degenerate(6)],
      leftUnboundRightOpen7: [],

      leftClosedRightUnbound2: [],
      leftClosedRightUnbound3: [],
      leftClosedRightUnbound4: [intervals.leftOpenRightOpen(3, 4)],
      leftClosedRightUnbound6: [intervals.leftOpenRightOpen(3, 6)],
      leftClosedRightUnbound7: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightUnbound2: [],
      leftOpenRightUnbound3: [],
      leftOpenRightUnbound4: [intervals.leftOpenRightClosed(3, 4)],
      leftOpenRightUnbound6: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightUnbound7: [intervals.leftOpenRightClosed(3, 6)],

      leftClosedRightOpen12: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightOpen12: [intervals.leftOpenRightClosed(3, 6)],
      leftClosedRightClosed12: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightClosed12: [intervals.leftOpenRightClosed(3, 6)],

      leftClosedRightOpen23: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightOpen23: [intervals.leftOpenRightClosed(3, 6)],
      leftClosedRightClosed23: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightClosed23: [intervals.leftOpenRightClosed(3, 6)],

      leftClosedRightOpen24: [intervals.leftClosedRightClosed(4, 6)],
      leftOpenRightOpen24: [intervals.leftClosedRightClosed(4, 6)],
      leftClosedRightClosed24: [intervals.leftOpenRightClosed(4, 6)],
      leftOpenRightClosed24: [intervals.leftOpenRightClosed(4, 6)],

      leftClosedRightOpen34: [intervals.leftClosedRightClosed(4, 6)],
      leftOpenRightOpen34: [intervals.leftClosedRightClosed(4, 6)],
      leftClosedRightClosed34: [intervals.leftOpenRightClosed(4, 6)],
      leftOpenRightClosed34: [intervals.leftOpenRightClosed(4, 6)],

      leftClosedRightOpen45: [intervals.leftOpenRightOpen(3, 4), intervals.leftClosedRightClosed(5, 6)],
      leftOpenRightOpen45: [intervals.leftOpenRightClosed(3, 4), intervals.leftClosedRightClosed(5, 6)],
      leftClosedRightClosed45: [intervals.leftOpenRightOpen(3, 4), intervals.leftOpenRightClosed(5, 6)],
      leftOpenRightClosed45: [intervals.leftOpenRightClosed(3, 4), intervals.leftOpenRightClosed(5, 6)],

      leftClosedRightOpen56: [intervals.leftOpenRightOpen(3, 5), intervals.degenerate(6)],
      leftOpenRightOpen56: [intervals.leftOpenRightClosed(3, 5), intervals.degenerate(6)],
      leftClosedRightClosed56: [intervals.leftOpenRightOpen(3, 5)],
      leftOpenRightClosed56: [intervals.leftOpenRightClosed(3, 5)],

      leftClosedRightOpen57: [intervals.leftOpenRightOpen(3, 5)],
      leftOpenRightOpen57: [intervals.leftOpenRightClosed(3, 5)],
      leftClosedRightClosed57: [intervals.leftOpenRightOpen(3, 5)],
      leftOpenRightClosed57: [intervals.leftOpenRightClosed(3, 5)],

      leftClosedRightOpen67: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightOpen67: [intervals.leftOpenRightClosed(3, 6)],
      leftClosedRightClosed67: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightClosed67: [intervals.leftOpenRightClosed(3, 6)],

      leftClosedRightOpen78: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightOpen78: [intervals.leftOpenRightClosed(3, 6)],
      leftClosedRightClosed78: [intervals.leftOpenRightClosed(3, 6)],
      leftOpenRightClosed78: [intervals.leftOpenRightClosed(3, 6)],

      leftClosedRightOpen27: [],
      leftOpenRightOpen27: [],
      leftClosedRightClosed27: [],
      leftOpenRightClosed27: []
    },

    leftOpenRightOpen36: {
      unbound: [],

      leftUnboundRightClosed2: [intervals.leftOpenRightOpen(3, 6)],
      leftUnboundRightClosed3: [intervals.leftOpenRightOpen(3, 6)],
      leftUnboundRightClosed4: [intervals.leftOpenRightOpen(4, 6)],
      leftUnboundRightClosed6: [],
      leftUnboundRightClosed7: [],
      leftUnboundRightOpen2: [intervals.leftOpenRightOpen(3, 6)],
      leftUnboundRightOpen3: [intervals.leftOpenRightOpen(3, 6)],
      leftUnboundRightOpen4: [intervals.leftClosedRightOpen(4, 6)],
      leftUnboundRightOpen6: [],
      leftUnboundRightOpen7: [],

      leftClosedRightUnbound2: [],
      leftClosedRightUnbound3: [],
      leftClosedRightUnbound4: [intervals.leftOpenRightOpen(3, 4)],
      leftClosedRightUnbound6: [intervals.leftOpenRightOpen(3, 6)],
      leftClosedRightUnbound7: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightUnbound2: [],
      leftOpenRightUnbound3: [],
      leftOpenRightUnbound4: [intervals.leftOpenRightClosed(3, 4)],
      leftOpenRightUnbound6: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightUnbound7: [intervals.leftOpenRightOpen(3, 6)],

      leftClosedRightOpen12: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightOpen12: [intervals.leftOpenRightOpen(3, 6)],
      leftClosedRightClosed12: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightClosed12: [intervals.leftOpenRightOpen(3, 6)],

      leftClosedRightOpen23: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightOpen23: [intervals.leftOpenRightOpen(3, 6)],
      leftClosedRightClosed23: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightClosed23: [intervals.leftOpenRightOpen(3, 6)],

      leftClosedRightOpen24: [intervals.leftClosedRightOpen(4, 6)],
      leftOpenRightOpen24: [intervals.leftClosedRightOpen(4, 6)],
      leftClosedRightClosed24: [intervals.leftOpenRightOpen(4, 6)],
      leftOpenRightClosed24: [intervals.leftOpenRightOpen(4, 6)],

      leftClosedRightOpen34: [intervals.leftClosedRightOpen(4, 6)],
      leftOpenRightOpen34: [intervals.leftClosedRightOpen(4, 6)],
      leftClosedRightClosed34: [intervals.leftOpenRightOpen(4, 6)],
      leftOpenRightClosed34: [intervals.leftOpenRightOpen(4, 6)],

      leftClosedRightOpen45: [intervals.leftOpenRightOpen(3, 4), intervals.leftClosedRightOpen(5, 6)],
      leftOpenRightOpen45: [intervals.leftOpenRightClosed(3, 4), intervals.leftClosedRightOpen(5, 6)],
      leftClosedRightClosed45: [intervals.leftOpenRightOpen(3, 4), intervals.leftOpenRightOpen(5, 6)],
      leftOpenRightClosed45: [intervals.leftOpenRightClosed(3, 4), intervals.leftOpenRightOpen(5, 6)],

      leftClosedRightOpen56: [intervals.leftOpenRightOpen(3, 5)],
      leftOpenRightOpen56: [intervals.leftOpenRightClosed(3, 5)],
      leftClosedRightClosed56: [intervals.leftOpenRightOpen(3, 5)],
      leftOpenRightClosed56: [intervals.leftOpenRightClosed(3, 5)],

      leftClosedRightOpen57: [intervals.leftOpenRightOpen(3, 5)],
      leftOpenRightOpen57: [intervals.leftOpenRightClosed(3, 5)],
      leftClosedRightClosed57: [intervals.leftOpenRightOpen(3, 5)],
      leftOpenRightClosed57: [intervals.leftOpenRightClosed(3, 5)],

      leftClosedRightOpen67: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightOpen67: [intervals.leftOpenRightOpen(3, 6)],
      leftClosedRightClosed67: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightClosed67: [intervals.leftOpenRightOpen(3, 6)],

      leftClosedRightOpen78: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightOpen78: [intervals.leftOpenRightOpen(3, 6)],
      leftClosedRightClosed78: [intervals.leftOpenRightOpen(3, 6)],
      leftOpenRightClosed78: [intervals.leftOpenRightOpen(3, 6)],

      leftClosedRightOpen27: [],
      leftOpenRightOpen27: [],
      leftClosedRightClosed27: [],
      leftOpenRightClosed27: []
    }
  }

  for (const intervalType1 of Object.keys(expectations)) {
    for (const intervalType2 of Object.keys(expectations[intervalType1])) {
      const interval1 = allExamples[intervalType1]
      const interval2 = allExamples[intervalType2]
      const expectation = expectations[intervalType1][intervalType2]

      test(`${intervalType1} subtract ${intervalType2} equals ${JSON.stringify(expectation)}`, () => {
        expect(intervals.subtract(interval1, interval2)).toEqual(expectation);
      })
    }
  }

})