import { registration, setToken, setUserName, token } from "./api.js";
import { renderLogin } from "./loginAuth.js";
import { renderComments } from "./renderComments.js";
import { getApi, renderAll } from "./main.js";

export const renderReg = () => {
  const appElement = document.getElementById("app");

  const regHtml = `
    <div class="comment">
      <h3 class="form-title">Форма регистрации</h3>
      <div class="login-form">
      <input id="reg-name-input" type="text" class="add-form-name input-login" placeholder="Введите имя"/>
        <input type="text" id="reg-login-input" class="add-form-name input-login" placeholder="Введите логин" />
        <input
          type="password"
          id="reg-password-input"
          class="add-form-name input-login"
          placeholder="Введите пароль"
        />
      </div>
      <br />
      <div class="login-button"><button class="add-form-button" id="register-button">Зарегистрироваться</button>
      <a href="#" id="autorization"style ="display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      padding-top: 25px;
      font-family: Helvetica;
      color: #ffffff;
      font-size: 24px;">Войти</a></div>
    </div>`;

  appElement.innerHTML = regHtml;

  const loginPage = document.getElementById("autorization");
  loginPage.addEventListener("click", () => {
    renderAll('auth')
  });

  const nameRegInput = document.getElementById("reg-name-input");
  const loginRegInput = document.getElementById("reg-login-input");
  const passwordRegInput = document.getElementById("reg-password-input");

  const regButtonElement = document.getElementById("register-button");

  regButtonElement.addEventListener("click", () => {
    registration({
      name: nameRegInput.value,
      login: loginRegInput.value,
      password: passwordRegInput.value,
    })
      .then((responseData) => {
        setToken(responseData.user.token);
        setUserName(responseData.user.name);
      })
      .then(() => {
        renderAll();
      })
  })
}
