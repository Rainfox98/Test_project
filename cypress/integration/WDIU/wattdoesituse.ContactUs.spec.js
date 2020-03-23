context('WattDoesItUse test', () => {
  it('Open contact us page and fill in form', () => {
    cy.fillInContactUsForm()
  })

  it('Request Device Power Consumption fill in form', () => {
    cy.fillInDevicePowerConsumptionForm()
  })

  it('Test links on tail part of page', () => {
    cy.testPageTailLinks()
  })
})
