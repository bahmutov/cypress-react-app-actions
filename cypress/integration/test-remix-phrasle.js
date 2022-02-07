/// <reference types="cypress" />

// watch the video "Solve Phrasle Using Cypress"
// https://youtu.be/b2SDRH2_faE
describe(
  'Phrasle',
  { baseUrl: 'https://phrasle.com/', viewportHeight: 800 },
  () => {
    it('Ross says', () => {
      cy.visit('/')
        .its('__remixContext.routeData.routes/index.answer')
        .then((answer) => {
          const letters = answer
            .split('')
            .filter((c) => c.match(/[a-z]/))
          letters.forEach((letter) => {
            cy.contains('.Key', letter).click()
          })
        })
      cy.contains('.stat-todaysGame-info', 'PERFECT').should(
        'be.visible',
      )
    })
    // TODO can we get to the React state from the component?
  },
)
