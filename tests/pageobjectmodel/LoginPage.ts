import {BasePage} from './BasePage'

export class LoginPage extends BasePage{
public emailImput = "input[data-test-id='username-input']"
public passwordImput = this.page.locator("input[data-test-id='password-input']")
public loginButton=this.page.locator("button[data-test-id='login-button']")


async fillEmail(email:string){
 await  this.page.locator(this.emailImput).fill(email)
}
async fillPassword(password:string){
   await this.passwordImput.fill(password)
}
async clickLoginButton(){
 await this.loginButton.click()
}

}