import {BasePage} from './BasePage'

export class InboxPage extends BasePage{

public allowNotificationsPopUp=super.page.locator("app-allow-notification")
public closeNotificationPopUpButton=super.page.locator("//button[contains(@class,'btn-default')]")
public paymentTabMenuItem=super.page.locator("//span[text()=' Payments ']")

async closePopUpNotification(){
    this.closeNotificationPopUpButton.click()
}

   async waitUntillAllowedNotificationToBeVisible(){
    this.allowNotificationsPopUp.waitFor({state: "visible"})

   }


async openPaymentTab(){
    this.paymentTabMenuItem.click()
}
}