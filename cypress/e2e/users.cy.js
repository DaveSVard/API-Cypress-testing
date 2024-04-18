describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.request('GET', 'http://localhost:3000/api/users').then(response => {
      expect(response.status).to.eq(200);
      const users = response.body.data;
      console.log("users =>", users);
      cy.get('table') 
          .should('exist')
          .find('thead th')
          .should('have.length', 4)
          .and('contain', 'firstName')
          .and('contain', 'lastName')
          .and('contain', 'Age')
          .and('contain', 'Email');

      cy.get('table tbody tr') 
          .should('have.length', users.length)
          .each(($row, index) => {
            console.log($row);
              cy.wrap($row).find('td').then($cells => {
                  expect($cells.eq(0)).to.contain(users[index].first_name); 
                  expect($cells.eq(1)).to.contain(users[index].last_name); 
                  expect($cells.eq(2)).to.contain(users[index].age);
                  expect($cells.eq(3)).to.contain(users[index].email); 
              });
          });
  });
  })
})