describe('todolist changetheme', () => {
  it('can toggle theme', () => {
    cy.visit('localhost:3000/')
    cy.findByTestId('changeTheme').click()
  })
})
