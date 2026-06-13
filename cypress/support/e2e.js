import './commands'
import 'cypress-axe'
import 'cypress-plugin-tab'

// Custom command: log a11y violations to console AND write to JSON
Cypress.Commands.add('logAndStoreViolations', (violations) => {
  violations.forEach(v => {
    Cypress.log({
      name: 'A11y violation',
      message: `${v.id} [${v.impact}]: ${v.help}`,
      consoleProps: () => v,
    })
  })

  cy.readFile('cypress/reports/accessibility-report.json', { log: false })
    .then(existing => {
      const updated = [...(existing || []), ...violations]
      cy.writeFile('cypress/reports/accessibility-report.json', updated)
    })
    .catch(() => {
      cy.writeFile('cypress/reports/accessibility-report.json', violations)
    })
})