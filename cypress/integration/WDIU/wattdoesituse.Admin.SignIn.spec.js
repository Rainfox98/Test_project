context('Admin side test', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
  })

  it('Sign im test', () => {
    cy.wdiuLoginTest()
  })
})
