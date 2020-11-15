import styled from '@emotion/styled'
import { Link } from 'gatsby'

const A = styled.a`
  color: #ff6aa5;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const LinkColor = styled(Link)`
  color: ${({theme}) => theme.colors.primary};
`;

export default A
