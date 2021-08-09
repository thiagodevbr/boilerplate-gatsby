import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the reading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /gatsby do zero ao avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
