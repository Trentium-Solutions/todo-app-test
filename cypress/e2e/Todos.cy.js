describe('todolist todos', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })
  it('can complete a todo', () => {
    cy.findByRole('button', {name: /Active/}).click()
    cy.findByText('Sleep').click()
    cy.findByRole('button', {name: /Completed/}).click()
  })
  it('can uncomplete a todo', () => {
    cy.findByRole('button', {name: /Complete/}).click()
    cy.findByText('Eat').click()
    cy.findByRole('button', {name: /Active/}).click()
  })
  it('should delete a completed todo', () => {
    const todo = 'Eat'
    cy.findByTestId(`${todo} Delete`).click()
    cy.findByRole('button', {name: /Deleted/}).click()
  })
  it('should show alert for deleting incomplete todo', () => {
    const todo = 'Sleep'
    cy.findByTestId(`${todo} Delete`).click()
  })

  it('should permanently delete a deleted todo and show a alert', () => {
    const todo = 'Eat'
    cy.findByTestId(`${todo} Delete`).click()
    cy.findByRole('button', {name: /Deleted/}).click()
    cy.findByTestId(`${todo} DeleteP`).click()
  })
  it('should recover a deleted todo', () => {
    const todo = 'Eat'
    cy.findByTestId(`${todo} Delete`).click()
    cy.findByRole('button', {name: /Deleted/}).click()
    cy.findByTestId(`${todo} Recover`).click()
    cy.findByRole('button', {name: /Completed/}).click()
  })
})
