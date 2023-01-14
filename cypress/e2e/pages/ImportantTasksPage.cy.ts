/// <reference types="cypress" />

class importanttasks{

    visit(){
        cy.visit("http://localhost:4200/login")
    }

        public async clickImportantTasks():Promise<void>{   
        const loginBtn = cy.get('html>body>app-root>div>app-nav>mat-sidenav-container>mat-sidenav>div>mat-nav-list>app-nav-menu-item:nth-of-type(3)>a>div>div:nth-of-type(4)').should('be.visible')
        loginBtn.click()
      }

        public async importantTasksTitle():Promise<void>{  
        cy.location('pathname').should('eq', '/nav/important-tasks')    
        const loginBtn = cy.get('.Important Tasks').should('be.visible')
        loginBtn.click()
      }

}
export default importanttasks 

