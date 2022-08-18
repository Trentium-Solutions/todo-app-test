describe('todolist editTodo', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })

  it('should close edit modal on click of close button and x button', () => {
    const todo = 'Sleep'
    cy.findByTestId(`${todo} Edit`).click()
    cy.findByRole('button', {name: /Close/}).click()
    cy.findByTestId(`${todo} Edit`).click()
    cy.findByTestId('editTodoCloseX').click()
  })
  it('should edit a particular todo', () => {
    const todo = 'Sleep'
    const newText = 'Code'
    cy.findByTestId(`${todo} Edit`).click()
    cy.findByTestId('editTodoTextbox').clear().type(newText)
    cy.findByTestId('editTodoSave').click()
    cy.get('.todolist label')
      .should('have.length', 3)
      .should('contain', newText)
  })
})
