import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading and the paragraph', () => {
    const { container } = render(<Main />)

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
