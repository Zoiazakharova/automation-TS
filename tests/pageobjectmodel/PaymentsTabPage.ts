import { BasePage } from "./BasePage";

export class PaymentsTabPage extends BasePage{
  
public searchBar =this.page.locator("input[placeholder='Search']")
public subTextHeaderName=this.page.locator("h1[class='header-text']")
public transactionsTab=this.page.locator("xpath=//span[contains(text(),'Transactions')]")
public depositsTab="xpath=//span[contains(text(),'Deposits ')]"
public paymentRequestTab=this.page.locator("xpath=//span[contains(text(),'Payment requests ')]")
public paymentTab=this.page.locator("xpath=//span[text()='Payments']")   
// 1 out of 2 public toolTipNotPostetToLedger=super.page.locator('mat-icon[cdk-describedby-host="fkt-1"]:nth-child(2)');



public postedToLedgerText=this.page.locator("xpath=//span[text()='Posted to ledger']")
public notPostedToLedgerText=this.page.locator("xpath=//span[text()='Not posted to ledger']")   
public datePickerButton=this.page.locator("button[class='btn date-picker-trigger btn-default']")
public totalRefundTransactions=this.page.locator("div[class='status']:nth-child(1)")
public searchBarPaymentsTab=this.page.locator("input[placeholder='Search']")
public searchBarIntup=this.page.locator("span[class='search']")
public collectPaymentButton=this.page.locator("xpath=//button[@class='mat-menu-trigger btn btn-primary collect-payment ng-star-inserted']")//new 04/08/2024
public collectPaymentPhysicalTerminal=this.page.locator("xpath=//button[text()=' Physical terminal ']")//new 04/08/2024
public collectPaymentVirtualTerminal=this.page.locator("xpath=//button[text()=' Virtual terminal ']")//new 04/08/2024
public collectPaymentSinglePaymentRequest=this.page.locator("xpath=//button[text()=' Single payment request ']")//new 04/08/2024
public collectPaymentBulkPaymentRequest=this.page.locator("xpath=//button[text()=' Bulk payment request ']")//new 04/08/20
public collectPaymentPreparePaymentPlan=this.page.locator("xpath=//button[text()=' Prepare payment plan ']")//new 04/08/20

async waitForTransactionsTabText(){
  await  this.transactionsTab.waitFor({state: "visible",timeout:30000})

   }
   async waitForDepositsTabText(){
  await this.page.locator(this.depositsTab)
}
async waitForPaymentRequestTabText(){
   await this.page.locator("xpath=//span[contains(text(),'Payment requests ')]")

}
async waitForAccountsReceivableText(){
    await this.page.locator("xpath=//span[contains(text(),'Accounts receivable ')]")
}
async waitForPaymentPlansText(){
  await this.page.locator("xpath=//span[contains(text(),'Payment plans ')]")
}



}
