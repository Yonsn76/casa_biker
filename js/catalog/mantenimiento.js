// Datos de la categoría de mantenimiento
const mantenimientoData = {
  category: "Mantenimiento",
  description: "Todo lo que necesitas para mantener tu moto en perfecto estado: aceites, filtros, herramientas y productos de limpieza.",
  products: [
    {
      id: "mt001",
      name: "Motul 7100 10W40",
      description: "Aceite motor sintético 4T",
      price: 59.95,
      image: "products/mantenimiento1.png",
      featured: true,
      details: "Aceite de motor 100% sintético Motul 7100 para motos de 4 tiempos. Proporciona una lubricación óptima incluso en condiciones extremas, mejorando el rendimiento y la protección del motor."
    },
    {
      id: "mt002",
      name: "Beta Juego Herramientas",
      description: "Kit herramientas para moto",
      price: 149.95,
      image: "products/mantenimiento2.png",
      featured: true,
      details: "Juego completo de herramientas Beta específico para motocicletas. Incluye llaves, destornilladores y alicates de alta calidad en un estuche compacto ideal para llevar en viaje."
    },
    {
      id: "mt003",
      name: "Muc-Off Kit Limpieza",
      description: "Kit completo de limpieza",
      price: 49.95,
      image: "products/mantenimiento3.png",
      featured: true,
      details: "Kit completo Muc-Off para la limpieza y mantenimiento de tu moto. Incluye limpiador, desengrasante, abrillantador y protector para todas las superficies de la motocicleta."
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.mantenimientoData = mantenimientoData;


