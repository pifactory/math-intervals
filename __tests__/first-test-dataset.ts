import * as intervals from '../src/'

export default {
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
