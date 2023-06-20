import { v4 as uuidv4 } from "uuid"
import { Shop, Item } from "./index"
import { plantCost, formatterUSD } from "./types"


export default class User {
    constructor(
        private _name: string,
        private _email: string,
        private _cart: Item[] = [],
        private _id: string = uuidv4()
    ){}
    public get cart(): Item[] {
        return this._cart
    }
    public set cart(value: Item[]) {
        this._cart = value
    }
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }

    // Static Method 
    public static loginInUser = (inputName: string|null, inputEmail: string|null): User|undefined => {
        if (inputName && inputEmail) {
            const loginUser = new User(inputName, inputEmail)
            return loginUser
        }
        return undefined
    }

    public cartHTMLElement = (): HTMLDivElement => {
        const div: HTMLDivElement = document.createElement('div')
        const cartItemStyle: Partial<CSSStyleDeclaration> = {
            width: "100%",
            padding: "10px"
        }
        for (let cartItem of this.cart) {
            let itemLine: HTMLDivElement = document.createElement('div')
            let itemNameH3: HTMLElement = document.createElement('h3') 
            let itemQtyP: HTMLElement = document.createElement('p') 
            let itemPriceP: HTMLElement = document.createElement('p') 
            let btnRmAll: HTMLElement = document.createElement('button')
            let btnRmOne: HTMLElement = document.createElement('button')
            itemLine.className = "itemLine"
            itemNameH3.innerText = cartItem.name
            itemQtyP.innerText = "Qty: 1"
            itemPriceP.innerText = `$${cartItem.price.toString()}`
            btnRmAll.id = `btnRmAll-${cartItem.id}`
            btnRmAll.innerText = "Remove All"
            btnRmOne.id = `btnRmOne-${cartItem.id}`
            btnRmOne.innerText = "Remove One"
            btnRmAll.addEventListener('click', (e): void => {
                e.preventDefault()
                this.removeFromCart(cartItem)
            })
            btnRmOne.addEventListener('click', (e): void => {
                e.preventDefault()
                this.removeQuantityFromCart(cartItem, 1)
            })
            itemLine.append(itemNameH3, itemQtyP, itemPriceP, btnRmAll, btnRmOne)
            Object.assign(itemLine.style, cartItemStyle)
            div.appendChild(itemLine)
        }
        const cartContainer2Style: Partial<CSSStyleDeclaration> = {
            width: "100%"
        }
        Object.assign(div.style, cartContainer2Style)
        return div
    }

    // Class Methods 
    public addToCart = (item: Item): void => {
        this.cart.push(item)
        Shop.refreshCart()
        console.log(`Added 1 ${item.name} to cart.`)
    }

    public removeFromCart = (item: Item): void => {
        let countItems: number = 0
        this.cart.forEach(e => e == item ? countItems++ : '')
        for (let i = 0; i < countItems; i++) {
            let pc = this.cart.indexOf(item)
            this.cart.splice(pc, 1)
        }
        Shop.refreshCart()
        console.log(`Removed all (${countItems}) ${item.name} from Cart.`)
    }
    public removeQuantityFromCart = (item: Item, qtyRemove: number): void => {
        for (let i = 0; i < qtyRemove; i++) {
            let pc = this.cart.indexOf(item)
            this.cart.splice(pc, 1)
        }
        Shop.refreshCart()
        console.log(`Removed ${qtyRemove} ${item.name} from Cart.`)
    }
    public cartTotal = (): number => {
        let totalCart: number = 0
        for (let item of this.cart) {
            totalCart += item.price
        }
        
        console.log(`Cart Total: ${formatterUSD.format(totalCart)}`)
        //console.log(`Cart Total: ${totalCart}`)
        return totalCart
    }
    public printCart = (): void => {
        // plantCost interface imported from types.ts 
        let cartItems: plantCost = {}
        for (let cartItem of this.cart) {
            if (cartItem.name in cartItems) {
                cartItems[cartItem.name] += 1
            } else {
                cartItems[cartItem.name] = 1
            }
        }
        console.log("Cart:", cartItems)
    }
}