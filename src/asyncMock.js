
const products = [
    {
        id: "1",
        name: "Samsung A15",
        price: 1000,
        category: "gabinetes",
        img:"https://polipapel.vteximg.com.br/arquivos/ids/168273-1000-1000/O13974.png?v=637844435519430000",
        stock: 25,
        description: "Descripcion de Samsung A15"
    },
    { 
        id: "2",
        name: "Samsung S21",
        price: 800,
        category: "notebooks",
        img:"https://storage.comprasmartphone.com/smartphones/samsung-galaxy-a53-5g.png",
        stock: 15,
        description: "Descripcion de Samsung S21"},
    { 
        id: "3",
        name: "Samsung Note 10",
        price:1200,
        category: "perifericos",
        img:"https://ctc.com.mx/wp-content/uploads/2019/09/samsung.png",
        stock: 18,
        description: "Descripcion de Samsung Note 10"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}