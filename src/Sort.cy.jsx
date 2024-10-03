import React from 'react'
import Sort from './Sort'

describe('<Sort />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Sort />)
  })
})