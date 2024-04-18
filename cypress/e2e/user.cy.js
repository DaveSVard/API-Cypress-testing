describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get("a").should("exist").eq(0).click()
    cy.get('a').should('have.attr', 'href').then((href) => {
      const id = href.substring(href.lastIndexOf('/') + 1);
      
      cy.request("GET", "http://localhost:3000/api/users/" + id).then(response => {
        expect(response.status).to.eq(200);
        const user = response.body.data;
        cy.visit("http://localhost:3000/seeSingleUser/" + id)

        cy.get(".show__info").should("exist").within(() => {
          cy.get("p").eq(0).should("exist").should("have.text", `${user.first_name} ${user.last_name}`)
          cy.get("p").eq(1).should("exist").should("have.text", `Age: ${user.age}`)
          cy.get("p").eq(2).should("exist").should("have.text", `Email: ${user.email}`)
        })
        

      })
    });
    

  })
})