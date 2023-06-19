import { v4 as uuidv4 } from "uuid"
import { Shop } from "./index"

export default class Item {
    constructor(
        private _name: string,
        private _price: number,
        private _desc: string,
        private _id: string = uuidv4()
    ){}
    public get desc(): string {
        return this._desc
    }
    public set desc(value: string) {
        this._desc = value
    }
    public get price(): number {
        return this._price
    }
    public set price(value: number) {
        this._price = value
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

    // Methods

    public itemElement = (item: Item): HTMLDivElement => {
        const div: HTMLDivElement = document.createElement('div')!

        let itemNameH3: HTMLElement = document.createElement('h3') 
        let itemDesc: HTMLElement = document.createElement('p') 
        let itemPriceP: HTMLElement = document.createElement('p') 
        let addToCart: HTMLElement = document.createElement('button')
        itemNameH3.innerText = item.name
        itemDesc.innerText = item.desc
        itemPriceP.innerText = `$${item.price.toString()}`
        addToCart.id = `btnAddToCart-${item.id}`
        addToCart.innerText = "Add to Cart"
        div.append(itemNameH3, itemDesc, itemPriceP, addToCart)
        // @ts-ignore
        addToCart.addEventListener('click', (e): void => {
            e.preventDefault()
            console.log(Shop.myUser)
            if (Shop.myUser !== undefined) {
                Shop.myUser.addToCart(item)
            } else { 
                console.log("Can't addEventListener to AddToCart button")
            }
        })
        const productStyle: Partial<CSSStyleDeclaration> = {
            width: "100%",
            padding: "10px"
        }
        Object.assign(div.style, productStyle)
        return div
    }



}