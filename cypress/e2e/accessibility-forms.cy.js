describe('Accessibility: Profile Edit Form', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/profile/edit')
    cy.injectAxe()
  })

  it('has no critical or serious a11y violations', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    }, cy.logAndStoreViolations)
  })

  it('has all required data-testid elements', () => {
    cy.get('[data-testid=profile-form]').should('exist')
    cy.get('[data-testid=name-input]').should('exist')
    cy.get('[data-testid=email-input]').should('exist')
    cy.get('[data-testid=bio-textarea]').should('exist')
    cy.get('[data-testid=color-preference-select]').should('exist')
    cy.get('[data-testid=save-button]').should('exist')
    cy.get('[data-testid=cancel-button]').should('exist')
  })

  it('all inputs have associated labels', () => {
    cy.get('[data-testid=name-input]').should('have.attr', 'id')
    cy.get('label[for=name-input]').should('exist')
    cy.get('[data-testid=email-input]').should('have.attr', 'id')
    cy.get('label[for=email-input]').should('exist')
  })

  it('shows success message on save with role=alert', () => {
    cy.get('[data-testid=save-button]').click()
    cy.get('[data-testid=success-message]')
      .should('exist')
      .and('have.attr', 'role', 'alert')
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] }, cy.logAndStoreViolations)
  })
})