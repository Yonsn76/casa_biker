// Datos de la categoría de cascos
const cascosData = {
  category: 'Cascos',
  description: 'Protección y estilo para tu cabeza con los mejores cascos del mercado',
  products: [
    {
      id: "h001",
      name: "Shoei NXR2",
      description: "Casco integral premium",
      price: 1999.95,
      image: "products/casco1.png",
      featured: true,
      details: "El Shoei NXR2 es un casco integral de gama alta que ofrece la máxima protección y comodidad. Fabricado con materiales de primera calidad y tecnología avanzada para reducir el ruido y mejorar la aerodinámica."
    },
    {
      id: "h002",
      name: "AGV K6",
      description: "Casco deportivo ligero",
      price: 1699.95,
      image: "products/casco2.png",
      featured: true,
      details: "El AGV K6 es un casco deportivo ultraligero diseñado para ofrecer el máximo rendimiento en carretera. Su estructura de carbono-aramida proporciona una excelente protección con un peso mínimo."
    },
    {
      id: "h003",
      name: "HJC RPHA 11",
      description: "Casco racing profesional",
      price: 1499.95,
      image: "products/casco3.png",
      featured: true,
      details: "El HJC RPHA 11 es un casco racing de alto rendimiento utilizado por pilotos profesionales. Ofrece una excelente ventilación, visibilidad y aerodinámica para uso en circuito o carretera."
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.cascosData = cascosData;


