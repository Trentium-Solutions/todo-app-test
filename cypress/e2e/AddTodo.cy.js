describe('todolist addTodo', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })
  it('should close add modal on click of close button and x button', () => {
    cy.findByTestId('addButton').click()
    cy.findByRole('button', {name: /Close/}).click()
    cy.findByTestId('addButton').click()
    cy.findByTestId('addTodoCloseX').click()
  })
  it('can add new todo items', () => {
    const newTodo = 'Code'
    cy.findByTestId('addButton').click()
    cy.findByTestId('addTodoTextbox').type(newTodo)
    cy.findByTestId('addTodoSave').click()
    cy.get('.todolist label')
      .should('have.length', 4)
      .first()
      .should('have.text', newTodo)
  })
})
