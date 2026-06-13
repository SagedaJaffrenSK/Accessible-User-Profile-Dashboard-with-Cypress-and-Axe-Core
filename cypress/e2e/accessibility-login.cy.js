describe('Accessibility: Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.injectAxe()
  })

  it('has no critical or serious a11y violations', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    }, cy.logAndStoreViolations)
  })

  it('has all required data-testid elements', () => {
    cy.get('[data-testid=login-form]').should('exist')
    cy.get('[data-testid=username-input]').should('exist')
    cy.get('[data-testid=password-input]').should('exist')
    cy.get('[data-testid=login-button]').should('exist')
    cy.get('[data-testid=skip-to-main]').should('exist')
  })

  it('shows error message with role=alert on bad login', () => {
    cy.get('[data-testid=username-input]').type('wrong')
    cy.get('[data-testid=password-input]').type('wrong')
    cy.get('[data-testid=login-button]').click()
    cy.get('[data-testid=login-error]').should('exist').and('have.attr', 'role', 'alert')
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] }, cy.logAndStoreViolations)
  })
})