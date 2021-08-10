import { screen } from '@testing-library/react'

import { Main } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  header: 'Gatsby Avançado',
  title:
    'Construindo um site com Gastby, graphQL, Storybook e testes automatizados',
  description:
    'Seja bem vindo ao curso de Gatsby: Do zero ao avançado, onde vamos aprender a configurar o Gatsby com Typescript, Storybook, TDD, graphQL e styled components'
}

describe('<Main />', () => {
  it('should render the heading and the paragraph', () => {
    const { container } = renderWithTheme(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: /gatsby avançado/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /construindo um site com Gastby, graphQL, Storybook e testes automatizados/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/seja bem vindo ao curso/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
