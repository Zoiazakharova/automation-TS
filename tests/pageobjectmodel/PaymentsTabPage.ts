import { BasePage } from "./BasePage";

export class PaymentsTabPage extends BasePage{
public paymentTab=super.page.locator("//span[text()='Payments']")    
public searchBar =super.page.locator("input[placeholder='Search']")
public subTextHeaderName=super.page.locator("h1[class='header-text']")
// 1 out of 2 public toolTipNotPostetToLedger=super.page.locator('mat-icon[cdk-describedby-host="fkt-1"]:nth-child(2)');

public PostedToLedgerText=super.page.locator("//span[text()='Posted to ledger']")
public NotPostedToLedgerText=super.page.locator("//span[text()='Not posted to ledger']")   
public DatePickerButton=super.page.locator("button[class='btn date-picker-trigger btn-default']")
public TotalRefundTransactions=super.page.locator("div[class='status']:nth-child(1)")

    

}