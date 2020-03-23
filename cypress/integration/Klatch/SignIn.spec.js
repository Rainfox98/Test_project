context('Klatch test', () => {
  it('Sign in test', () => {
    cy.klatchLoginTest();
  })

  it('Header test', () => {
    cy.headerTest();
  })
})
