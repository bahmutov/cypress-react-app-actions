/// <reference types="cypress" />

// watch the video "Solve Phrasle Using Cypress"
// https://youtu.be/b2SDRH2_faE
describe(
  'Phrasle',
  { baseUrl: 'https://phrasle.com/', viewportHeight: 800 },
  () => {
    it('has the answer', () => {
      const isVowel = (c) => ['a', 'e', 'i', 'o', 'u'].includes(c)
      const seenVowels = []
      const hasSeenVowel = (c) => seenVowels.includes(c)

      cy.visit('/')
        .its('__remixContext.routeData.routes/index.answer')
        .then((s) => atob(s))
        .then(JSON.parse)
        .then(cy.log)
        .then((list) => list.map((c) => String.fromCharCode(c - 15)))
        .then(cy.log)
        .invoke('join', '')
        .then((answer) => {
          const letters = answer
            .split('')
            .filter((c) => c.match(/[a-z]/))
          letters.forEach((letter) => {
            cy.contains('.Key', letter).click()
            if (isVowel(letter) && !hasSeenVowel(letter)) {
              seenVowels.push(letter)
              cy.contains('button', 'Continue').click()
              cy.get('[data-testid=overlay]').should('not.exist')
            }
          })
        })
      cy.contains('.stat-todaysGame-info', 'PERFECT').should(
        'be.visible',
      )
    })
    // TODO can we get to the React state from the component?
  },
)
