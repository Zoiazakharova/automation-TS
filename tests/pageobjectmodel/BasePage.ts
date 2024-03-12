import {expect,type Page} from '@playwright/test'


export class BasePage{
  constructor (protected page:Page){

    }
}