describe('todolist main', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })
  it('displays three todo items by default', () => {
    cy.get('.todolist label').should('have.length', 3)
    cy.get('.todolist label').first().should('have.text', 'Eat')
    cy.get('.todolist label').last().should('have.text', 'Repeat')
  })
  it('can click on all filters', () => {
    cy.findByRole('button', {name: /Active/}).click()
    cy.findByRole('button', {name: /Completed/}).click()
    cy.findByRole('button', {name: /Deleted/}).click()
    cy.findByRole('button', {name: /All/}).click()
  })

  it('should filter active tasks', () => {
    cy.findByRole('button', {name: /Active/}).click()
    cy.get('.todolist label')
      .should('have.length', 2)
      .first()
      .should('have.text', 'Sleep')
    cy.contains('Eat').should('not.exist')
  })

  it('should filter completed tasks', () => {
    cy.findByRole('button', {name: /Completed/}).click()
    cy.get('.todolist label')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Eat')

    cy.contains('Sleep').should('not.exist')
    cy.contains('Repeat').should('not.exist')
  })
})
