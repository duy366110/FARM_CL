const environement = {
    URL: {
        DEV: 'http://localhost:8080/v1/api/',
        PRO: 'https://farm-z112.onrender.com/v1/api/'
    },
    PRODUCT: {
        root: "client/product",
        products: "client/product/all"
    },
    CART: {
        root: "client/cart"
    },
    MODEL: 'DEV' // PRO
}
export default environement;