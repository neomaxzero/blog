export const breakpoints = { tablet: 769, desktop: 1024, fullhd: 1408 }

const mq = Object.keys(breakpoints).reduce(
  (leftovers, bp) => ({
    ...leftovers,
    [bp]: `@media (min-width: ${breakpoints[bp]}px)`,
  }),
  {}
)

export default mq
