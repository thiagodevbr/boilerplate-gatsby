import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global'
import { theme } from '../../styles/theme'
import * as S from './styles'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>{children}</S.Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default Layout
