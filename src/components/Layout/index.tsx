import { GlobalStyles } from '../../styles/global'
import * as S from './styles'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <main>{children}</main>
    </S.Wrapper>
  )
}

export default Layout
