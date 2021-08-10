import * as S from './styles'

export type MainProps = {
  header: string
  title: string
  description: string
}

export const Main: React.FC<MainProps> = ({ description, header, title }) => {
  return (
    <S.Wrapper>
      <S.Header>{header}</S.Header>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}
