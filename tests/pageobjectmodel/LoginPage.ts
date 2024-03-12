import {BasePage} from './BasePage'

export class LoginPage extends BasePage{
public emailImput = super.page.locator("input[data-test-id='username-input']")
public passwordImput = super.page.locator("input[data-test-id='password-input']")
public loginButton=super.page.locator("button[data-test-id='login-button']")


async fillEmail(email:string){
    this.emailImput.fill(email)
}
async fillPassword(password:string){
    this.passwordImput.fill(password)
}
async clickLoginButton(){
  this.loginButton.click()
}

}