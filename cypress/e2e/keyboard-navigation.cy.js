describe('Keyboard Navigation', () => {
  it('can tab through login form and submit with Enter', () => {
    cy.visit('/login')
    cy.get('[data-testid=skip-to-main]').focus()
    cy.focused().should('have.attr', 'data-testid', 'skip-to-main')

    cy.get('[data-testid=username-input]').focus()
    cy.focused().should('have.attr', 'data-testid', 'username-input')
    cy.focused().type('testuser')

    cy.tab()
    cy.focused().should('have.attr', 'data-testid', 'password-input')
    cy.focused().type('password')

    cy.tab()
    cy.focused().should('have.attr', 'data-testid', 'login-button')
    cy.focused().type('{enter}')

    cy.url().should('include', '/dashboard')
  })

  it('can tab through dashboard nav links', () => {
    cy.login()
    cy.get('[data-testid=main-navigation] a').first().focus()
    cy.focused().should('exist')
    cy.tab()
    cy.focused().should('exist')
  })

  it('logout button is reachable by keyboard', () => {
    cy.login()
    cy.get('[data-testid=logout-button]').focus()
    cy.focused().should('have.attr', 'data-testid', 'logout-button')
    cy.focused().type('{enter}')
    cy.url().should('include', '/login')
  })

  it('can tab through profile edit form fields', () => {
    cy.login()
    cy.visit('/profile/edit')

    cy.get('[data-testid=name-input]').focus()
    cy.focused().should('have.attr', 'data-testid', 'name-input')

    cy.tab()
    cy.focused().should('have.attr', 'data-testid', 'email-input')

    cy.tab()
    cy.focused().should('have.attr', 'data-testid', 'bio-textarea')

    cy.tab()
    cy.focused().should('have.attr', 'data-testid', 'color-preference-select')

    cy.tab()
    cy.focused().should('have.attr', 'data-testid', 'save-button')
  })
})