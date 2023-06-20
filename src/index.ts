// import { Shop } from "./cart/index";

import Shop from "./cart/Shop";

const loginForm: HTMLElement = document.getElementById('loginForm')!;

loginForm.addEventListener("submit", Shop.loginUser);
