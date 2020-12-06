import styled from '@emotion/styled'
import { Link } from 'gatsby'

const A = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

export const LinkColor = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`

export default A
