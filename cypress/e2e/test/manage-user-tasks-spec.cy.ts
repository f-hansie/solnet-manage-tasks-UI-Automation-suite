/// <reference types="cypress"/>

import login from '../pages/LoginPage.cy'
import loginpage from  '../pages/LoginPage.cy'
import myday from '../pages/MyDayPage.cy'
import mydaypage from '../pages/MyDayPage.cy'
import alltasks from '../pages/AllTasksPage.cy'
import alltaskspage from '../pages/AllTasksPage.cy'
import importanttask from '../pages/ImportantTasksPage.cy'
import importanttaskpage from '../pages/ImportantTasksPage.cy'

const testData = require("../../testdata/testData")

describe ('Login to manage tasks app', function(){

    const login = new loginpage()
    const myday = new mydaypage()
    const alltasks = new alltaskspage()
    const importanttask = new importanttaskpage()

    it('Login in to the application with valid credentials', function(){
        login.visit()
        login.inputEmail(testData.username)
        login.inputpassword(testData.password)
        login.clickLogin()
    

    })

    it('Validate landing page', function(){
        login.visit()
        login.inputEmail(testData.username)
        login.inputpassword(testData.password)
        login.clickLogin()
        login.landingPageTitle()

    })

    it('Logout',function(){
        //login to manage tasks app
        login.visit()
        login.inputEmail('user')
        login.inputpassword('user')
        login.clickLogin()
        login.Logout()
        login.getTitle

    })


    it('Validate add and remove a task',function(){
        //login to manage tasks app
        login.visit()
        login.inputEmail(testData.username)
        login.inputpassword(testData.password)
        login.clickLogin()

        myday.myDay()
        myday.taskTitle('interview')
        myday.taskDescription('interview with Hansie and Phillip')
        myday.clickCalenderIcon()
        myday.selectDate()
        myday.addTaskBtn()
        myday.removeTaskBtn()

    })

    it('Validate marking or unmarking a task as done',function(){

        login.visit()
        login.inputEmail(testData.username)
        login.inputpassword(testData.password)
        login.clickLogin()

        myday.taskTitle('Job offer')
        myday.taskDescription('Discussion for employment')
        myday.clickCalenderIcon()
        myday.selectDate()
        myday.addTaskBtn()
        myday.checkbox()
    })

    it('Validate all tasks page',function(){
        login.visit()
        login.inputEmail(testData.username)
        login.inputpassword(testData.password)
        login.clickLogin()
        alltasks.clickAllTasks()
        alltasks.allTasksTitle()

    })

    it(' Validate favorites page',function(){
        login.visit()
        login.inputEmail(testData.username)
        login.inputpassword(testData.password)
        login.clickLogin()

        myday.taskTitle('validate favorite tasks')
        myday.taskDescription('validate description')
        myday.clickCalenderIcon()
        myday.selectDate()
        myday.importantChkbox()
        myday.addTaskBtn()
        importanttask.clickImportantTasks()


    })
})