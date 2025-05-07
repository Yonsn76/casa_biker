// Datos de la categoría de modelos
const modelosData = {
  category: "Modelos",
  description: "Réplicas a escala de las mejores motos del mundo con acabados de alta calidad",
  products: [
    {
      id: "m001",
      name: "Ducati Panigale V4R",
      description: "Modelo escala 1:12",
      price: 169.95,
      image: "products/regalo1.png",
      featured: true,
      details: "Réplica exacta de la Ducati Panigale V4R a escala 1:12 con acabados de alta calidad. Incluye caballete y detalles precisos tanto en carrocería como en componentes mecánicos."
    },
    {
      id: "m002",
      name: "Honda RC213V Marc Márquez",
      description: "Modelo MotoGP escala 1:18",
      price: 39.95,
      image: "products/regalo2.png",
      featured: true,
      details: "Modelo oficial de la Honda RC213V del equipo Repsol Honda pilotada por Marc Márquez. Incluye todos los detalles y decoración de la temporada actual de MotoGP."
    },
    {
      id: "m003",
      name: "BMW R1250GS Adventure",
      description: "Modelo trail escala 1:10",
      price: 59.95,
      image: "products/regalo3.png",
      featured: true,
      details: "Réplica detallada de la BMW R1250GS Adventure con partes móviles y accesorios. Perfecto para coleccionistas y entusiastas de las motos trail."
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.modelosData = modelosData;


