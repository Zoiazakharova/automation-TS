import { test, expect } from '@playwright/test';
import{LoginPage} from './pageobjectmodel/LoginPage';
import { InboxPage } from './pageobjectmodel/InboxPage';
import { PaymentsTabPage } from './pageobjectmodel/PaymentsTabPage';


test.beforeEach(async ({page})=>{
await page.goto('https://office.stg-modento.io/eaglesoft-stg/login')

})
test('Login', async ({page}) =>{
 let loginPage=new LoginPage(page)
  await loginPage.fillEmail("zzakharova_grpadmin2@dentalintel.com")
  await loginPage.fillPassword("9476187Dom")
  await loginPage.clickLoginButton()
  let inboxPage=new InboxPage(page)
  await expect(inboxPage.waitUntillAllowedNotificationToBeVisible()).toBeTruthy 
  await inboxPage.closePopUpNotification()
  await inboxPage.openPaymentTab()
  let paymentPage=new PaymentsTabPage(page)
  await expect(paymentPage.paymentTab).toBeTruthy()
})
 test('PaymentsTabs', async({page}) =>{
 
  await page.locator("input[data-test-id='username-input']").fill("zzakharova_grpadmin2@dentalintel.com")
  await page.locator("input[data-test-id='password-input']").fill("9476187Dom")
  await page.locator("button[data-test-id='login-button']").click()
  await expect(page.locator("app-allow-notification")).toBeVisible({timeout: 10000,visible:true});
  await page.locator("//button[contains(@class,'btn-default')]").click({timeout: 10000})
  await page.locator("//span[text()=' Payments ']").click()
  await expect(page.locator("//span[contains(text(),'Transactions')]")).toBeVisible()
  await expect(page.locator("//span[contains(text(),'Deposits ')]")).toBeVisible()
  await expect(page.locator("//span[contains(text(),'Payment requests ')]")).toBeVisible()
  await expect(page.locator("//span[contains(text(),'Accounts receivable ')]")).toBeVisible()
  await expect(page.locator("//span[contains(text(),'Payment plans ')]")).toBeVisible()


 })
 test('SearchBar Transactions tab', async({page})=>{
 
  await page.locator("input[data-test-id='username-input']").fill("zzakharova_grpadmin2@dentalintel.com")
  await page.locator("input[data-test-id='password-input']").fill("9476187Dom")
  await page.locator("button[data-test-id='login-button']").click()
  await expect(page.locator("app-allow-notification")).toBeVisible({timeout: 10000,visible:true});
  //await expect(page.locator("//button[contains(@class,'btn-default')]")).toBeVisible({timeout: 10000})
  await page.locator("//button[contains(@class,'btn-default')]").click({timeout: 10000})
  await page.locator("//span[text()=' Payments ']").click({timeout: 10000})
  await page.locator("input[placeholder='Search']").fill("Post Malone")
  await expect(page.locator("span[class='name']")).toContainText("Post Malone")
})

test.afterEach(async({page})=>{
  await page.close()

 })