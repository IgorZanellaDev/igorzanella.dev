import type {NextPage} from 'next'
import {Columns, Container} from "react-bulma-components";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";

const Home: NextPage = () => {
  return (
      <GlobalWrapper>
          <SEO title="Test"/>
          <Container>
              <Columns>
                  Test
              </Columns>
          </Container>
      </GlobalWrapper>
  )
}

export default Home
