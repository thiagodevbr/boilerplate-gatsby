import { Meta, Story } from '@storybook/react/types-6-0'
import { Main, MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    header: 'Gatsby Avançado',
    title:
      'Construindo um site com Gastby, graphQL, Storybook e testes automatizados',
    description:
      'Seja bem vindo ao curso de Gatsby: Do zero ao avançado, onde vamos aprender a configurar o Gatsby com Typescript, Storybook, TDD, graphQL e styled components'
  }
} as Meta

export const Basic: Story<MainProps> = args => <Main {...args} />
