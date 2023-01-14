/// <reference types="cypress" />

class myDay{

    visit(){
        cy.visit("http://localhost:4200/login")
    }

        public async myDay():Promise<void>{   
        const mydayIcon =  cy.get('.mat-list-item-content').contains(' My day ').should('be.visible')
        mydayIcon.click()
     }


        public async taskTitle(value: string):Promise<void>{   
        cy.location('pathname').should('eq', '/nav/home')   
        const inputTitle =  cy.get('input#mat-input-2').should('be.enabled').should('be.visible')
        inputTitle.type(value)
     }

        public async taskDescription(value: string):Promise<void>{    
        const inputDescription =  cy.get('input#mat-input-3').should('be.enabled').should('be.visible')
        inputDescription.type(value)
      
     }

        public async clickCalenderIcon():Promise<void>{    
        const btnCalendar =  cy.get('html>body>app-root>div>app-nav>mat-sidenav-container>mat-sidenav-content>app-home-page>div>mat-card>mat-card-content>form>mat-form-field:nth-of-type(3)>div>div>div:nth-of-type(2)>mat-datepicker-toggle>button').should('be.visible').should('be.enabled')
        btnCalendar.click()
     }


        public async selectDate():Promise<void>{   
        const inputDate =  cy.get('#mat-datepicker-0 > div > mat-month-view > table > tbody > tr:nth-child(4) > td:nth-child(6) > div').should('be.visible').contains('20')
        inputDate.click()
     }


        public async addTaskBtn():Promise<void>{    
        const btnAdd =  cy.get('button#addTask').should('be.enabled').should('be.visible')
        btnAdd.click()
     }

        public async removeTaskBtn():Promise<void>{ 
        const btnRemove =  cy.get('body > app-root > div > app-nav > mat-sidenav-container > mat-sidenav-content > app-home-page > div > mat-card.home-card.task-card.mat-card.ng-star-inserted > mat-card-content > mat-icon.remove-icon.mat-icon.notranslate.material-icons.mat-icon-no-color').should('be.visible')
        btnRemove.click({multiple:true})
     }


        public async checkbox():Promise<void >{   
        const chkbox =  cy.get('mat-checkbox#mat-checkbox-2>label>div').should('be.visible')
        chkbox.click({multiple:true})
     }

        public async importantChkbox():Promise<void>{   
        const importantchkbox =  cy.get('#mat-checkbox-1 > label > div').should('be.visible')
        importantchkbox.click({force:true})
     }


     
}
export default myDay