let is_ok = true;

const products = [
    {
      title: "Sal rosa de Himalaya",
      id: "1",
      category: 'Especias', 
      description: "Sal fina rosada pura",
      price: "$300",
      stock: "50",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_924213-MLA49795322475_042022-O.webp"
    },
    {
      title: "Mix Frutos Secos",
      category: 'Legumbres', 
      id: "2",
      description: "Almendras, nueces, castañas y avellanas",
      price: "$1000",
      stock: "20",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_943804-MLA45752281354_042021-O.webp"
    },
    {
      title: "Fideos de Arroz",
      category: 'Pastas', 
      id: "3",
      description: "Fideos sin gluten sabor Morrón",
      price: "$260",
      stock: "40",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_700261-MLA46331583948_062021-O.webp"
    }
];

export const getProducts =()=>{
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(products)
      }, 2000)
  })
}

export const getProductById = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      }, 2000)
  })
}

export const getProductsByCategory = (cat) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === cat));
    }, 2000);
  });
};
