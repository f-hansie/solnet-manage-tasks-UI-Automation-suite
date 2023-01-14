/// <reference types="cypress" />

class alltasks{

    Visit(){
        cy.visit("http://localhost:4200/login")
    }

        public async clickAllTasks():Promise<void>{    
        const loginBtn = cy.get('html>body>app-root>div>app-nav>mat-sidenav-container>mat-sidenav>div>mat-nav-list>app-nav-menu-item:nth-of-type(2)>a>div>div:nth-of-type(4)').should('be.visible')
        loginBtn.click()
        
      }

        public async allTasksTitle():Promise<void>{   
        cy.location('pathname').should('eq', '/nav/all-tasks')  
        cy.get('html>body>app-root>div>app-nav>mat-sidenav-container>mat-sidenav-content>app-nav-toolbar>mat-toolbar>div').should('be.visible')
        
      }
}
export default alltasks