describe('Accessibility: Dashboard Page', () => {
  beforeEach(() => {
    cy.login()
    cy.injectAxe()
  })

  it('has no critical or serious a11y violations', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    }, cy.logAndStoreViolations)
  })

  it('has all required data-testid elements', () => {
    cy.get('[data-testid=main-navigation]').should('exist')
    cy.get('[data-testid=user-table]').should('exist')
    cy.get('[data-testid=user-row-0]').should('exist')
    cy.get('[data-testid=user-row-1]').should('exist')
    cy.get('[data-testid=user-row-2]').should('exist')
    cy.get('[data-testid=page-heading]').should('exist').and('match', 'h1')
    cy.get('[data-testid=logout-button]').should('exist')
  })

  it('table has proper headers', () => {
    cy.get('[data-testid=user-table] th').should('have.length.at.least', 2)
    cy.get('[data-testid=user-table] th').each($th => {
      expect($th.attr('scope')).to.equal('col')
    })
  })
})