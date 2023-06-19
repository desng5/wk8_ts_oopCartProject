/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart/Item.ts":
/*!**************************!*\
  !*** ./src/cart/Item.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/cart/index.ts\");\n\n\nclass Item {\n    constructor(_name, _price, _desc, _id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()) {\n        this._name = _name;\n        this._price = _price;\n        this._desc = _desc;\n        this._id = _id;\n        // Methods\n        this.itemElement = (item) => {\n            const div = document.createElement('div');\n            let itemNameH3 = document.createElement('h3');\n            let itemDesc = document.createElement('p');\n            let itemPriceP = document.createElement('p');\n            let addToCart = document.createElement('button');\n            itemNameH3.innerText = item.name;\n            itemDesc.innerText = item.desc;\n            itemPriceP.innerText = `$${item.price.toString()}`;\n            addToCart.id = `btnAddToCart-${item.id}`;\n            addToCart.innerText = \"Add to Cart\";\n            div.append(itemNameH3, itemDesc, itemPriceP, addToCart);\n            // @ts-ignore\n            addToCart.addEventListener('click', (e) => {\n                e.preventDefault();\n                console.log(_index__WEBPACK_IMPORTED_MODULE_0__.Shop.myUser);\n                if (_index__WEBPACK_IMPORTED_MODULE_0__.Shop.myUser !== undefined) {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Shop.myUser.addToCart(item);\n                }\n                else {\n                    console.log(\"Can't addEventListener to AddToCart button\");\n                }\n            });\n            const productStyle = {\n                width: \"100%\",\n                padding: \"10px\"\n            };\n            Object.assign(div.style, productStyle);\n            return div;\n        };\n    }\n    get desc() {\n        return this._desc;\n    }\n    set desc(value) {\n        this._desc = value;\n    }\n    get price() {\n        return this._price;\n    }\n    set price(value) {\n        this._price = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    get id() {\n        return this._id;\n    }\n    set id(value) {\n        this._id = value;\n    }\n}\n\n\n//# sourceURL=webpack://tspp_oopcart/./src/cart/Item.ts?");

/***/ }),

/***/ "./src/cart/Shop.ts":
/*!**************************!*\
  !*** ./src/cart/Shop.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/cart/index.ts\");\n\n\nclass Shop {\n    constructor(_shopName, _parent, _id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), _products = []) {\n        this._shopName = _shopName;\n        this._parent = _parent;\n        this._id = _id;\n        this._products = _products;\n        // Methods\n        this.showItems = () => {\n            const div = document.createElement('div');\n            for (let productItem of this.products) {\n                div.append(productItem.itemElement(productItem));\n            }\n            const productsContainerStyle = {\n                width: \"50%\"\n            };\n            Object.assign(div.style, productsContainerStyle);\n            return div;\n        };\n        /* @ts-ignore */\n        this.updateCart = () => {\n            if (Shop.myUser) {\n                const div = document.createElement('div');\n                div.id = \"cartDivElement\";\n                if (Shop.myUser.cart.length > 0) {\n                    div.appendChild(Shop.myUser.cartHTMLElement());\n                }\n                else {\n                    const noItems = document.createElement('p');\n                    noItems.innerText = \"Cart is empty.\";\n                    div.appendChild(noItems);\n                }\n                const cartContainerStyle = {\n                    width: \"50%\"\n                };\n                Object.assign(div.style, cartContainerStyle);\n                return div;\n            }\n        };\n        this.addDefaultItems = () => {\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Monstera Deliciosa\", 200, \"Swiss Cheese Leaves, Indirect sunlight\"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Pothos\", 55, \"Trailing heart shape leaves, Indirect sunlight\"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Money Tree\", 100, \"Braided trunck, Low light, Indirect sunlight\"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Bunny Ear Cactus\", 35, \"Slowing growing desert plant, Direct Sunlight\"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Palm Tree\", 85, \"Indoor Palm, Indirect sunlight\"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Peace Lilies\", 55, \"Brilliant white flowers, full sunlight \"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Fiddle Leaf Fig\", 150, \"Tall, dramatic plant, Sensitive plant\"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Snake\", 50, \"Sword like leaves, Indirect sunlight\"));\n            this._products.push(new _index__WEBPACK_IMPORTED_MODULE_0__.Item(\"Cereis Cactis\", 35, \"Flowering Cactus, Direct sunlight\"));\n        };\n        this.addDefaultItems();\n        this.parent.innerHTML = \"\";\n        this.parent.id = \"shopContainer\";\n        const shopContainerStyle = {\n            margin: \"40px auto\",\n            width: \"60%\",\n            minWidth: \"700px\",\n            display: \"flex\",\n            flexDirection: \"row\",\n        };\n        Object.assign(this.parent.style, shopContainerStyle);\n        this.parent.append(this.showItems(), this.updateCart());\n    }\n    get products() {\n        return this._products;\n    }\n    set products(value) {\n        this._products = value;\n    }\n    get id() {\n        return this._id;\n    }\n    set id(value) {\n        this._id = value;\n    }\n    get parent() {\n        return this._parent;\n    }\n    set parent(value) {\n        this._parent = value;\n    }\n    get shopName() {\n        return this._shopName;\n    }\n    set shopName(value) {\n        this._shopName = value;\n    }\n}\n// Static Methods\n/*  @ts-ignore */\nShop.loginUser = (e) => {\n    e.preventDefault();\n    const userInput = document.getElementById('userInput');\n    const emailInput = document.getElementById('emailInput');\n    const cartContainer = document.getElementById('cartContainer');\n    const loginForm = document.getElementById('loginForm');\n    const loginText = document.getElementById('loginText');\n    const disappear = { display: 'none' };\n    Object.assign(loginForm.style, disappear);\n    loginText.innerText = `Welcome, ${userInput.value}! Happy shopping!`;\n    Shop.myUser = _index__WEBPACK_IMPORTED_MODULE_0__.User.loginInUser(userInput.value, emailInput.value);\n    Shop.currentCart = new Shop(\"Regalis\", cartContainer);\n};\nShop.refreshCart = () => {\n    var _a;\n    (_a = document.getElementById('cartDivElement')) === null || _a === void 0 ? void 0 : _a.replaceChildren(Shop.currentCart.updateCart());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);\n\n\n//# sourceURL=webpack://tspp_oopcart/./src/cart/Shop.ts?");

/***/ }),

/***/ "./src/cart/User.ts":
/*!**************************!*\
  !*** ./src/cart/User.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/cart/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/cart/types.ts\");\n\n\n\nclass User {\n    constructor(_name, _email, _cart = [], _id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()) {\n        this._name = _name;\n        this._email = _email;\n        this._cart = _cart;\n        this._id = _id;\n        this.cartHTMLElement = () => {\n            const div = document.createElement('div');\n            const cartItemStyle = {\n                width: \"100%\",\n                padding: \"10px\"\n            };\n            for (let cartItem of this.cart) {\n                let itemLine = document.createElement('div');\n                let itemNameH3 = document.createElement('h3');\n                let itemQtyP = document.createElement('p');\n                let itemPriceP = document.createElement('p');\n                let btnRmAll = document.createElement('button');\n                let btnRmOne = document.createElement('button');\n                itemLine.className = \"itemLine\";\n                itemNameH3.innerText = cartItem.name;\n                itemQtyP.innerText = \"Qty: 1\";\n                itemPriceP.innerText = `$${cartItem.price.toString()}`;\n                btnRmAll.id = `btnRmAll-${cartItem.id}`;\n                btnRmAll.innerText = \"Remove All\";\n                btnRmOne.id = `btnRmOne-${cartItem.id}`;\n                btnRmOne.innerText = \"Remove One\";\n                btnRmAll.addEventListener('click', (e) => {\n                    e.preventDefault();\n                    this.removeFromCart(cartItem);\n                });\n                btnRmOne.addEventListener('click', (e) => {\n                    e.preventDefault();\n                    this.removeQuantityFromCart(cartItem, 1);\n                });\n                itemLine.append(itemNameH3, itemQtyP, itemPriceP, btnRmAll, btnRmOne);\n                Object.assign(itemLine.style, cartItemStyle);\n                div.appendChild(itemLine);\n            }\n            const cartContainer2Style = {\n                width: \"100%\"\n            };\n            Object.assign(div.style, cartContainer2Style);\n            return div;\n        };\n        // Class Methods \n        this.addToCart = (item) => {\n            this.cart.push(item);\n            _index__WEBPACK_IMPORTED_MODULE_0__.Shop.refreshCart();\n            console.log(`Added 1 ${item.name} to cart.`);\n        };\n        this.removeFromCart = (item) => {\n            let countItems = 0;\n            this.cart.forEach(e => e == item ? countItems++ : '');\n            for (let i = 0; i < countItems; i++) {\n                let idx = this.cart.indexOf(item);\n                this.cart.splice(idx, 1);\n            }\n            _index__WEBPACK_IMPORTED_MODULE_0__.Shop.refreshCart();\n            console.log(`Removed all (${countItems}) ${item.name} from Cart.`);\n        };\n        this.removeQuantityFromCart = (item, qtyRemove) => {\n            for (let i = 0; i < qtyRemove; i++) {\n                let idx = this.cart.indexOf(item);\n                this.cart.splice(idx, 1);\n            }\n            _index__WEBPACK_IMPORTED_MODULE_0__.Shop.refreshCart();\n            console.log(`Removed ${qtyRemove} ${item.name} from Cart.`);\n        };\n        this.cartTotal = () => {\n            let totalCart = 0;\n            for (let item of this.cart) {\n                totalCart += item.price;\n            }\n            // Optional: Just to know if totalCart is correct\n            // formatterUSD imported from types.ts \n            console.log(`Cart Total: ${_types__WEBPACK_IMPORTED_MODULE_1__.formatterUSD.format(totalCart)}`);\n            //console.log(`Cart Total: ${totalCart}`)\n            return totalCart;\n        };\n        this.printCart = () => {\n            // idxSign interface imported from types.ts \n            let cartItems = {};\n            for (let cartItem of this.cart) {\n                if (cartItem.name in cartItems) {\n                    cartItems[cartItem.name] += 1;\n                }\n                else {\n                    cartItems[cartItem.name] = 1;\n                }\n            }\n            console.log(\"Cart:\", cartItems);\n        };\n    }\n    get cart() {\n        return this._cart;\n    }\n    set cart(value) {\n        this._cart = value;\n    }\n    get email() {\n        return this._email;\n    }\n    set email(value) {\n        this._email = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    get id() {\n        return this._id;\n    }\n    set id(value) {\n        this._id = value;\n    }\n}\n// Static Method\nUser.loginInUser = (inputName, inputEmail) => {\n    if (inputName && inputEmail) {\n        const loginUser = new User(inputName, inputEmail);\n        return loginUser;\n    }\n    return undefined;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n\n//# sourceURL=webpack://tspp_oopcart/./src/cart/User.ts?");

/***/ }),

/***/ "./src/cart/index.ts":
/*!***************************!*\
  !*** ./src/cart/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: () => (/* reexport safe */ _Item__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Shop: () => (/* reexport safe */ _Shop__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   User: () => (/* reexport safe */ _User__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./src/cart/Item.ts\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/cart/User.ts\");\n/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shop */ \"./src/cart/Shop.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://tspp_oopcart/./src/cart/index.ts?");

/***/ }),

/***/ "./src/cart/types.ts":
/*!***************************!*\
  !*** ./src/cart/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatterUSD: () => (/* binding */ formatterUSD)\n/* harmony export */ });\nconst formatterUSD = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n});\n\n\n\n//# sourceURL=webpack://tspp_oopcart/./src/cart/types.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/index */ \"./src/cart/index.ts\");\n\nconst loginForm = document.getElementById('loginForm');\nloginForm.addEventListener(\"submit\", _cart_index__WEBPACK_IMPORTED_MODULE_0__.Shop.loginUser);\n\n\n//# sourceURL=webpack://tspp_oopcart/./src/index.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://tspp_oopcart/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://tspp_oopcart/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://tspp_oopcart/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://tspp_oopcart/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://tspp_oopcart/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://tspp_oopcart/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;