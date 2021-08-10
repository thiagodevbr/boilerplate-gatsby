import Layout from '../components/Layout'
import { Main } from '../components/Main'

const IndexPage: React.FC = () => {
  const mainProps = {
    header: 'Gatsby avançado',
    title: 'Curso avançado de Gatsby',
    description: 'Curso avançado de gatsby de um site completo'
  }
  return (
    <Layout>
      <Main {...mainProps} />
    </Layout>
  )
}

export default IndexPage
