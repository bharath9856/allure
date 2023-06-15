
const User = require("../fixtures/users.json")

describe("User Test Suite", () => {
    beforeEach(() => {
      // cy.fixture("users").then((usersData) => {
      //   const users = usersData.users;

        
      //   });
      
    });
    User.users.forEach((user,index) => {
      // `Test case - ${user.username}`;

        it(`testcase ${index}`, function() {
          cy.log(user.username)
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
          cy.get('#txtUsername').type(user.username);
          cy.get('#txtPassword').type(user.password);
          cy.get('#btnLogin').click();
          // Add more test steps
        
        });
    
  });
});
