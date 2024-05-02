import {BasePage} from './BasePage'

export class InboxPage extends BasePage{

 
public allowNotificationsPopUp=this.page.locator("app-allow-notification")
public closeNotificationPopUpButton=this.page.locator("//button[contains(@class,'btn-default')]")
public paymentTabMenuItem=this.page.locator("//span[text()=' Payments ']")

async closePopUpNotification(){
   await this.closeNotificationPopUpButton.click()
}

   async waitUntillAllowedNotificationToBeVisible(){
  await  this.allowNotificationsPopUp.waitFor({state: "visible"})

   }


async openPaymentTab(){
  await  this.paymentTabMenuItem.click()
}
}