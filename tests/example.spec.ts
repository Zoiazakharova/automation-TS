import { test, expect } from '@playwright/test';
import{LoginPage} from './pageobjectmodel/LoginPage';
import { InboxPage } from './pageobjectmodel/InboxPage';
import { PaymentsTabPage } from './pageobjectmodel/PaymentsTabPage';


test.beforeEach(async ({page})=>{
await page.goto('https://office.stg-modento.io/eaglesoft-stg/login')
let loginPage=new LoginPage(page)
  await loginPage.fillEmail("")
  await loginPage.fillPassword("")
  await loginPage.clickLoginButton()

})
test('Login', async ({page}) =>{
 
  let inboxPage=new InboxPage(page)
  await expect(inboxPage.waitUntillAllowedNotificationToBeVisible()).toBeTruthy 
  await inboxPage.closePopUpNotification()
  await inboxPage.openPaymentTab()
  let paymentPage=new PaymentsTabPage(page)
  await expect(paymentPage.paymentTab).toBeTruthy()
})
 test('PaymentsTabs', async({page}) =>{

  let inboxPage=new InboxPage(page)
  await expect(inboxPage.waitUntillAllowedNotificationToBeVisible()).toBeTruthy 
  await inboxPage.closePopUpNotification()
  await inboxPage.openPaymentTab()
  let paymentPage=new PaymentsTabPage(page)
  await page.waitForTimeout(3000)
  await expect(paymentPage.waitForTransactionsTabText).toBeTruthy
  await expect (paymentPage.waitForDepositsTabText()).toBeTruthy
  await expect(paymentPage.waitForPaymentRequestTabText()).toBeTruthy

  
  await expect(paymentPage.waitForAccountsReceivableText()).toBeTruthy
  await expect(paymentPage.waitForPaymentPlansText()).toBeTruthy
 })
 test('SearchBar Transactions tab', async({page})=>{
  let inboxPage=new InboxPage(page)
  let paymentPage=new PaymentsTabPage(page)
  await expect(inboxPage.waitUntillAllowedNotificationToBeVisible()).toBeTruthy 
  await inboxPage.closePopUpNotification()
  await inboxPage.openPaymentTab()
 // await page.locator("//button[contains(@class,'btn-default')]").click({timeout: 10000})
 // await page.locator("//span[text()=' Payments ']").click({timeout: 10000})
 await paymentPage.searchBarPaymentsTab.fill("Post Malone")
 await expect(paymentPage.searchBarIntup).toContainText("Post Malone")
})

 test('ClickOnCollectButton', async({page}) =>{
  let inboxPage=new InboxPage(page)
  let paymentPage=new PaymentsTabPage(page)
  await expect(inboxPage.waitUntillAllowedNotificationToBeVisible()).toBeTruthy 
  await inboxPage.closePopUpNotification()
  await inboxPage.openPaymentTab()
  await paymentPage.collectPaymentButton.click()
  await expect(paymentPage.collectPaymentPhysicalTerminal).toBeVisible()
  await expect(paymentPage.collectPaymentVirtualTerminal).toBeVisible()
  await expect(paymentPage.collectPaymentSinglePaymentRequest).toBeVisible()
  await expect(paymentPage.collectPaymentBulkPaymentRequest).toBeVisible()
  await expect(paymentPage.collectPaymentPreparePaymentPlan).toBeVisible()

 })




test.afterEach(async({page})=>{
  await page.close()

 })