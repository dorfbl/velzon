export const GlobalComponent = {
    // Api Calling
    // API_URL : 'https://api-node.themesbrand.website/',
    API_URL : 'http://10.10.100.10:3000/',
    headerToken : {'Authorization': `Bearer ${sessionStorage.getItem('token')}`},

    // Auth Api
    // AUTH_API:"https://api-node.themesbrand.website/auth/",
    AUTH_API:"http://10.10.100.10:3000/",

    // Products Api
    product:'api/product',
    productDelete:'api/product/',

    // Orders Api
    order:'api/order',
    orderId:'api/order/',

    // Customers Api
    customer:'users/',
   
}