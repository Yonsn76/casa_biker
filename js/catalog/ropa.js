// Datos de la categoría de ropa
const ropaData = {
  category: 'Ropa',
  description: 'Equipamiento de alta calidad para protección y confort en cualquier condición',
  products: [
    {
      id: "c001",
      name: "Alpinestars GP Plus R V3",
      description: "Chaqueta de cuero deportiva",
      price: 499.95,
      image: "products/ropa1.png",
      featured: true,
      details: "La chaqueta Alpinestars GP Plus R V3 está fabricada en cuero premium con protecciones homologadas en hombros y codos. Diseño deportivo con excelente ajuste y ventilación para uso en carretera."
    },
    {
      id: "c003",
      name: "TCX RT-Race Pro Air",
      description: "Botas racing ventiladas",
      price: 259.95,
      image: "products/ropa2.png",
      featured: true,
      details: "Las botas TCX RT-Race Pro Air combinan protección racing con un sistema de ventilación avanzado. Ideales para uso deportivo en climas cálidos con excelente sujeción del tobillo."
    },
    {
      id: "c005",
      name: "Rukka Nivala Gore-Tex",
      description: "Traje touring impermeable",
      price: 1499.95,
      image: "products/ropa3.png",
      featured: true,
      details: "El traje Rukka Nivala con membrana Gore-Tex ofrece impermeabilidad y transpirabilidad garantizadas. Ideal para viajes largos en cualquier condición climática con máximo confort."
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.ropaData = ropaData;




