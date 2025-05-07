// Datos de la categoría de accesorios
const accesoriosData = {
  category: 'Accesorios',
  description: 'Complementos esenciales para mejorar tu experiencia en moto',
  products: [
    {
      id: "a001",
      name: "Rizoma Retrovisores",
      description: "Espejos premium de aluminio",
      price: 429.95,
      image: "products/accesorio1.png",
      featured: true,
      details: "Los retrovisores Rizoma están fabricados en aluminio de alta calidad con acabado CNC. Diseño elegante y funcional que mejora la estética de tu moto manteniendo una excelente visibilidad."
    },
    {
      id: "a002",
      name: "Givi Baúl Trekker",
      description: "Maleta trasera 52L",
      price: 849.95,
      image: "products/accesorio2.png",
      featured: true,
      details: "El baúl Givi Trekker de 52 litros ofrece gran capacidad de almacenamiento para tus viajes. Fabricado en aluminio resistente a impactos y condiciones climáticas adversas, ideal para las diversas rutas peruanas."
    },
    {
      id: "a003",
      name: "Barkbusters Protectores",
      description: "Protectores de manillar",
      price: 399.95,
      image: "products/accesorio3.png",
      featured: true,
      details: "Los protectores de manillar Barkbusters ofrecen protección tanto para tus manos como para las manetas de freno y embrague en caso de caída o impacto con ramas, perfectos para rutas off-road en la sierra peruana."
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.accesoriosData = accesoriosData;


