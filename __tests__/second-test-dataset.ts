import * as intervals from '../src/'

export default {
  empty: intervals.empty,

  degenerate0: intervals.degenerate(0),
  degenerate3: intervals.degenerate(3),
  degenerate6: intervals.degenerate(6),

  leftUnboundRightClosed2: intervals.leftUnboundRightClosed(2),
  leftUnboundRightClosed3: intervals.leftUnboundRightClosed(3),
  leftUnboundRightClosed4: intervals.leftUnboundRightClosed(4),
  leftUnboundRightClosed6: intervals.leftUnboundRightClosed(6),
  leftUnboundRightClosed7: intervals.leftUnboundRightClosed(7),
  leftUnboundRightOpen2: intervals.leftUnboundRightOpen(2),
  leftUnboundRightOpen3: intervals.leftUnboundRightOpen(3),
  leftUnboundRightOpen4: intervals.leftUnboundRightOpen(4),
  leftUnboundRightOpen6: intervals.leftUnboundRightOpen(6),
  leftUnboundRightOpen7: intervals.leftUnboundRightOpen(7),

  unbound: intervals.leftUnboundRightUnbound,

  leftClosedRightUnbound2: intervals.leftClosedRightUnbound(2),
  leftClosedRightUnbound3: intervals.leftClosedRightUnbound(3),
  leftClosedRightUnbound4: intervals.leftClosedRightUnbound(4),
  leftClosedRightUnbound6: intervals.leftClosedRightUnbound(6),
  leftClosedRightUnbound7: intervals.leftClosedRightUnbound(7),
  leftOpenRightUnbound2: intervals.leftOpenRightUnbound(2),
  leftOpenRightUnbound3: intervals.leftOpenRightUnbound(3),
  leftOpenRightUnbound4: intervals.leftOpenRightUnbound(4),
  leftOpenRightUnbound6: intervals.leftOpenRightUnbound(6),
  leftOpenRightUnbound7: intervals.leftOpenRightUnbound(7),

  leftClosedRightOpen12: intervals.leftClosedRightOpen(1, 2),
  leftOpenRightOpen12: intervals.leftOpenRightOpen(1, 2),
  leftClosedRightClosed12: intervals.leftClosedRightClosed(1, 2),
  leftOpenRightClosed12: intervals.leftOpenRightClosed(1, 2),

  leftClosedRightOpen23: intervals.leftClosedRightOpen(2, 3),
  leftOpenRightOpen23: intervals.leftOpenRightOpen(2, 3),
  leftClosedRightClosed23: intervals.leftClosedRightClosed(2, 3),
  leftOpenRightClosed23: intervals.leftOpenRightClosed(2, 3),

  leftClosedRightOpen24: intervals.leftClosedRightOpen(2, 4),
  leftOpenRightOpen24: intervals.leftOpenRightOpen(2, 4),
  leftClosedRightClosed24: intervals.leftClosedRightClosed(2, 4),
  leftOpenRightClosed24: intervals.leftOpenRightClosed(2, 4),

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

  leftClosedRightOpen36: intervals.leftClosedRightOpen(3, 6),
  leftOpenRightOpen36: intervals.leftOpenRightOpen(3, 6),
  leftClosedRightClosed36: intervals.leftClosedRightClosed(3, 6),
  leftOpenRightClosed36: intervals.leftOpenRightClosed(3, 6),

  leftClosedRightOpen57: intervals.leftClosedRightOpen(5, 7),
  leftOpenRightOpen57: intervals.leftOpenRightOpen(5, 7),
  leftClosedRightClosed57: intervals.leftClosedRightClosed(5, 7),
  leftOpenRightClosed57: intervals.leftOpenRightClosed(5, 7),

  leftClosedRightOpen67: intervals.leftClosedRightOpen(6, 7),
  leftOpenRightOpen67: intervals.leftOpenRightOpen(6, 7),
  leftClosedRightClosed67: intervals.leftClosedRightClosed(6, 7),
  leftOpenRightClosed67: intervals.leftOpenRightClosed(6, 7),

  leftClosedRightOpen78: intervals.leftClosedRightOpen(7, 8),
  leftOpenRightOpen78: intervals.leftOpenRightOpen(7, 8),
  leftClosedRightClosed78: intervals.leftClosedRightClosed(7, 8),
  leftOpenRightClosed78: intervals.leftOpenRightClosed(7, 8),

  leftClosedRightOpen27: intervals.leftClosedRightOpen(2, 7),
  leftOpenRightOpen27: intervals.leftOpenRightOpen(2, 7),
  leftClosedRightClosed27: intervals.leftClosedRightClosed(2, 7),
  leftOpenRightClosed27: intervals.leftOpenRightClosed(2, 7),
}
