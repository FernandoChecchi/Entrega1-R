const products = [
  { id: 1, name: "Antonieta Esoumante Brut Nature", description: "Espumante brut nature, burbujas finas y sabor seco.", stock: 10, image: "/image/antonieta-esoumante-brut-nature.png", price: 1200, category: "espumante" },
  { id: 2, name: "Benjamin Chardonnay", description: "Chardonnay fresco, ideal para pescados y mariscos.", stock: 15, image: "/image/benjamin-chardonnay.png", price: 900, category: "blanco" },
  { id: 3, name: "Benjamin Malbec", description: "Malbec joven, frutado y suave.", stock: 20, image: "/image/benjamin-malbec.png", price: 950, category: "tinto" },
  { id: 4, name: "Cordero Con Piel De Lobo Rose", description: "Rosado vibrante, fresco y frutal, ideal para maridar con ensaladas y pescados.", stock: 8, image: "/image/cordero-con-piel-de-lobo-rose.png", price: 1800, category: "rosado" },
  { id: 5, name: "Bianchi IV Generacion", description: "Vino de autor, notas a frutos rojos y especias.", stock: 7, image: "/image/bianchi-iv-generacion.png", price: 1700, category: "tinto" },
  { id: 6, name: "Bosco Lambrusco", description: "Lambrusco italiano, espumante suave y dulce.", stock: 12, image: "/image/bosco-lambrusco.png", price: 1100, category: "tinto" },
  { id: 7, name: "Botella Entera 135 Aniversario", description: "Edición especial aniversario, vino premium.", stock: 5, image: "/image/botella-entera-135-aniversario.png", price: 2500, category: "tinto" },
  { id: 8, name: "Cafayate Torrontes", description: "Torrontés salteño, aromático y fresco.", stock: 14, image: "/image/cafayate-torrontes.png", price: 1000, category: "blanco" },
  { id: 9, name: "Callia Chardonnay", description: "Chardonnay de Callia, notas cítricas y florales.", stock: 10, image: "/image/callia-chardonnay.png", price: 950, category: "blanco" },
  { id: 10, name: "Callia Extra Brut", description: "Espumante extra brut, ideal para celebraciones.", stock: 9, image: "/image/callia-extra-brut.png", price: 1150, category: "espumante" },
  { id: 11, name: "Cordero Con Piel De Lobo Malbec", description: "Malbec intenso, perfecto para carnes rojas.", stock: 13, image: "/image/cordero-con-piel-de-lobo-malbec.png", price: 1050, category: "tinto" },
  { id: 12, name: "Doña Paula Estate Malbec", description: "Estate Malbec, elegante y equilibrado.", stock: 11, image: "/image/dona-paula-estate-malbec.png", price: 1300, category: "tinto" },
  { id: 13, name: "El Bautismo Malbec", description: "Malbec de Mendoza, suave y frutado.", stock: 16, image: "/image/el-bautismo-malbec.png", price: 980, category: "tinto" },
  { id: 14, name: "Emilia Dulce Blanco", description: "Blanco dulce, ideal para postres.", stock: 18, image: "/image/emilia-dulce-blanco.png", price: 950, category: "blanco" },
  { id: 15, name: "Espumante Salentein Brut Rose", description: "Espumante rosé, fresco y elegante.", stock: 10, image: "/image/espumante-salentein-brut-rose.png", price: 1200, category: "espumante" },
  { id: 16, name: "Familia Gascon Malbec", description: "Malbec Gascon, clásico y robusto.", stock: 12, image: "/image/familia-gascon-malbec-2022.png", price: 1100, category: "tinto" },
  { id: 17, name: "Indama Rosado", description: "Rosado fresco, ideal para aperitivos.", stock: 15, image: "/image/indama-rosado.png", price: 1000, category: "rosado" },
  { id: 18, name: "Julia Dulce Natural", description: "Dulce natural, suave y aromático.", stock: 14, image: "/image/julia-dulce-natural.png", price: 950, category: "blanco" },
  { id: 19, name: "Lagarde Malbec", description: "Malbec Lagarde, elegante y profundo.", stock: 10, image: "/image/lagarde-malbec.png", price: 1200, category: "tinto" },
  { id: 20, name: "Las Perdices Malbec", description: "Malbec de Las Perdices, intenso y frutado.", stock: 13, image: "/image/las-perdices-malbec.png", price: 1150, category: "tinto" },
  { id: 21, name: "Latitud 33 Dulce", description: "Vino dulce, ideal para postres y aperitivos.", stock: 17, image: "/image/latitud-33-dulce.png", price: 900, category: "blanco" },
  { id: 22, name: "Luigi Bosca Sauvignon Blanc Reserve", description: "Sauvignon Blanc reserva, fresco y aromático.", stock: 8, image: "/image/luigi-bosca-sauvignon-blanc-reserve.png", price: 1400, category: "blanco" },
  { id: 23, name: "Numina Malbec", description: "Malbec Numina, complejo y elegante.", stock: 7, image: "/image/numina-malbec.png", price: 1600, category: "tinto" },
  { id: 24, name: "Pyros Appellation Chardonnay", description: "Chardonnay Pyros, notas a frutas tropicales.", stock: 10, image: "/image/pyros-appellation-chardonnay.png", price: 1200, category: "blanco" },
  { id: 25, name: "Rutini Coleccion Cabernet Malbec", description: "Colección Rutini, blend cabernet-malbec.", stock: 6, image: "/image/rutini-coleccion-cabernet-malbec.png", price: 2000, category: "tinto" },
  { id: 26, name: "Santa Julia Varietal Chenin Dulce Natural", description: "Chenin dulce natural, suave y fresco.", stock: 12, image: "/image/santa-julia-varietal-chenin-dulce-natural.png", price: 950, category: "blanco" },
  { id: 27, name: "Santa Julia Varietal Dulce Tinto", description: "Tinto dulce, ideal para postres.", stock: 10, image: "/image/santa-julia-varietal-dulce-tinto.png", price: 900, category: "tinto" },
  { id: 28, name: "Santa Julia Varietal Rose", description: "Rosé Santa Julia, fresco y frutal.", stock: 14, image: "/image/santa-julia-varietal-rose.png", price: 1000, category: "rosado" },
  { id: 29, name: "Santa Julia Varietal Sauvignonblanc", description: "Sauvignon Blanc Santa Julia, cítrico y refrescante.", stock: 11, image: "/image/santa-julia-varietal-sauvignonblanc.png", price: 950, category: "blanco" },
  { id: 30, name: "Tension Malbec Petit Verdot", description: "Blend Malbec-Petit Verdot, intenso y especiado.", stock: 9, image: "/image/tension-malbec-petit-verdot.png", price: 1300, category: "tinto" },
  { id: 31, name: "Tomero Rose", description: "Rosé Tomero, suave y aromático.", stock: 13, image: "/image/tomero-rose.png", price: 1100, category: "rosado" },
  { id: 32, name: "Trumpeter Malbec", description: "Malbec Trumpeter, clásico y robusto.", stock: 10, image: "/image/trumpeter-malbec.png", price: 1200, category: "tinto" },
  { id: 33, name: "Trumpeter Reserve Malbec", description: "Malbec Trumpeter Reserve, elegante y complejo.", stock: 8, image: "/image/trumpeter-reserve-malbec.png", price: 1500, category: "tinto" }
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(productId));
      resolve(product);
    }, 2000);
  });
};
