import { login, setToken, token, setUserName, } from "./api.js";
import { getApi, renderAll } from "./main.js";
import { renderReg } from "./renderReg.js";


export const renderLogin = () => {
  const appElement = document.getElementById("app")
  const loginHtml = `
    <div class="comment">
      <h3 class="form-title">Форма входа</h3>
      <div class="login-form">
        <input type="text" id="login-input" class="add-form-name input-login" placeholder="Введите логин" />
        <input
          type="password"
          id="password-input"
          class="add-form-name input-login"
          placeholder="Введите пароль"
        />
      </div>
      <br />
      <div class="login-button">
      <button class="add-form-button" id="login-button">Войти</button>
      <a href="#" id="registration" style ="display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      padding-top: 25px;
      font-family: Helvetica;
      color: #ffffff;
      font-size: 24px;">Зарегистрироваться</a>
      </div>
    </div>`;

  appElement.innerHTML = loginHtml;

  const buttonElementAuth = document.getElementById("login-button");
  const loginInputElement = document.getElementById("login-input");
  const passwordInputElement = document.getElementById("password-input");

  const linkRegistr = document.getElementById("registration");
  linkRegistr.addEventListener("click", () => {
    renderAll('reg');
  })

  buttonElementAuth.addEventListener("click", () => {
    login({
      login: loginInputElement.value,
      password: passwordInputElement.value,
    })
      .then((responseData) => {
        setToken(responseData.user.token);
        setUserName(responseData.user.name);

      })
      .then(() => {
        getApi();
      })
  })
}