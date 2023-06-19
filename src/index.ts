import { Shop } from "./cart/index"

const loginForm: HTMLElement = document.getElementById('loginForm')!

loginForm.addEventListener("submit", Shop.loginUser)