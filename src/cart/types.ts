interface idxSign {
    [key: string]: number
}

const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export { idxSign, formatterUSD }