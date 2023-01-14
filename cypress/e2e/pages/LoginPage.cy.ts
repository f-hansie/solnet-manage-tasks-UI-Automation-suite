/// <reference types="cypress" />

class login{
   
    visit(){
        cy.visit("http://localhost:4200/login")
    }

        public async inputEmail(value: string):Promise<void>{    
        const emailField =  cy.get('input#mat-input-0').should('be.enabled')
        emailField.type(value)
        
     }

        public async inputpassword(value: string):Promise<void>{    
        const passwordField =  cy.get('input#mat-input-1').should('be.enabled')
        passwordField.type(value)

    }

        public async clickLogin():Promise<void>{    
        const loginBtn = cy.get('[type=submit]').should('be.enabled')
        loginBtn.click()
      }

        public async getTitle():Promise<void>  {
        cy.location('pathname').should('eq', '/nav/home')      
        const txtTitle = cy.get('.mat-card-title').contains(' Login to manage your tasks ').should('be.visible')
        
    }

        public async landingPageTitle():Promise<void>  {
        const txtTitle = cy.get('html>body>app-root>div>app-nav>mat-sidenav-container>mat-sidenav-content>app-nav-toolbar>mat-toolbar>div').should('be.visible')
    }


        public async Logout():Promise<void>{    
        const logoutBtn = cy.get('html>body>app-root>div>app-nav>mat-sidenav-container>mat-sidenav-content>app-nav-toolbar>mat-toolbar>button:nth-of-type(2)').should('be.enabled')
        logoutBtn.click()
        }
}
export default login