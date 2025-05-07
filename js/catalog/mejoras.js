// Datos de la categoría de mejoras
const mejorasData = {
  category: 'Mejoras',
  description: 'Componentes de alto rendimiento para mejorar las prestaciones de tu moto',
  products: [
    {
      id: "p001",
      name: "Akrapovič Evolution",
      description: "Sistema de escape completo",
      price: 1299.95,
      image: "akrapovic.jpg",
      featured: true,
      details: "El sistema de escape Akrapovič Evolution está fabricado en titanio de alta calidad. Reduce el peso, aumenta la potencia y ofrece un sonido característico que mejora la experiencia de conducción."
    },
    {
      id: "p002",
      name: "Öhlins TTX GP",
      description: "Amortiguador trasero",
      price: 899.95,
      image: "ohlins-shock.jpg",
      featured: true,
      details: "El amortiguador Öhlins TTX GP ofrece un rendimiento de competición con ajustes precisos de compresión y rebote. Mejora significativamente el comportamiento dinámico de la moto."
    },
    {
      id: "p003",
      name: "Brembo GP4-RX",
      description: "Pinzas de freno radiales",
      price: 699.95,
      image: "brembo-calipers.jpg",
      featured: true,
      details: "Las pinzas Brembo GP4-RX ofrecen una potencia de frenado excepcional con excelente modulación. Fabricadas en aluminio mecanizado con pistones de acero inoxidable para máxima durabilidad."
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.mejorasData = mejorasData;

