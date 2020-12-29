import styled from '@emotion/styled'

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`

export const Section = styled.div`
  margin-top: ${({ theme, size = 0 }) => theme.sizes[size]};
`

export default Flex
