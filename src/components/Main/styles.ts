import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Header = styled.h2`
  color: #9a9a9a;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  margin-bottom: 12px;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;

  margin-bottom: 40px;
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xsmall};
    line-height: ${theme.font.lineHeight.superaway};
    color: ${theme.color.gray900};
  `}
`
