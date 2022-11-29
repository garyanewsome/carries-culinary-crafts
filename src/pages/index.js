import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

import { YouTube } from '../icons/youtube'
import '../styles/index.css'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 1.5rem;
  background-color: var(--background);
  color: var(--text);
`

const Heading = styled.h1`
  margin-bottom: 16px;
  padding: 8px 16px;
  text-align: center;
  letter-spacing: 0.25rem;
  background-color: var(--brand-color);
  color: var(--background);
`

const A = styled.a`
  margin: 8px;
  text-align: center;
  font-size: 2rem;
  color: #129490;
`

export const Home = () => {
  return (
    <Container>
      <Helmet title="Carrie's Culinary Crafts" defer={false} />
      <Heading>Carrie's Culinary Crafts</Heading>
      <p>Visit us on</p>
      <A href="https://www.youtube.com/@CarriesCulinaryCrafts">
        <YouTube />
      </A>
    </Container>
  )
}

export default Home
