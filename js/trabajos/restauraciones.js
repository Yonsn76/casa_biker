// Datos de trabajos de restauración
const restauracionesData = {
  category: 'Restauraciones',
  description: 'Devolvemos a su gloria original motos clásicas y vintage',
  projects: [
    {
      id: "r001",
      name: "Honda CB750 Four 1975",
      description: "Restauración completa a estado original",
      client: "Eduardo Vargas",
      date: "Septiembre 2023",
      location: "Lima, Perú",
      image: "honda-cb750-restored.jpg",
      featured: true,
      details: "Restauración completa de una Honda CB750 Four de 1975 a su estado original. Reconstrucción del motor, sistema eléctrico nuevo, cromados restaurados y pintura original según catálogo.",
      beforeAfter: true,
      gallery: ["honda-cb750-1.jpg", "honda-cb750-2.jpg", "honda-cb750-3.jpg", "honda-cb750-4.jpg"]
    },
    {
      id: "r002",
      name: "Vespa 150 Super 1965",
      description: "Restauración de scooter clásico italiano",
      client: "María Rodríguez",
      date: "Julio 2023",
      location: "Huánuco, Perú",
      image: "vespa-restored.jpg",
      featured: true,
      details: "Restauración meticulosa de una Vespa 150 Super de 1965. Reconstrucción de chasis, motor revisado completamente y acabado en pintura original con técnicas de la época.",
      beforeAfter: true,
      gallery: ["vespa-1.jpg", "vespa-2.jpg", "vespa-3.jpg"]
    },
    {
      id: "r003",
      name: "BMW R75/5 1972",
      description: "Restauración de moto alemana clásica",
      client: "Francisco Morales",
      date: "Mayo 2023",
      location: "Huánuco, Perú",
      image: "bmw-r75-restored.jpg",
      featured: false,
      details: "Restauración de una BMW R75/5 de 1972 respetando todas las especificaciones originales. Reconstrucción del motor boxer, sistema eléctrico actualizado manteniendo la estética original.",
      beforeAfter: true,
      gallery: ["bmw-r75-1.jpg", "bmw-r75-2.jpg", "bmw-r75-3.jpg"]
    },
    {
      id: "r004",
      name: "Yamaha RD350 1980",
      description: "Restauración de legendaria dos tiempos",
      client: "Javier Mendoza",
      date: "Marzo 2023",
      location: "Lima, Perú",
      image: "yamaha-rd350-restored.jpg",
      featured: false,
      details: "Restauración completa de una Yamaha RD350 de 1980. Reconstrucción del motor de dos tiempos, carburadores ajustados a especificaciones originales y pintura exacta según catálogo.",
      beforeAfter: true,
      gallery: ["yamaha-rd350-1.jpg", "yamaha-rd350-2.jpg", "yamaha-rd350-3.jpg"]
    },
    {
      id: "r005",
      name: "Triumph Bonneville 1969",
      description: "Restauración de clásica británica",
      client: "Alejandro Fuentes",
      date: "Enero 2023",
      location: "Huánuco, Perú",
      image: "triumph-bonneville-restored.jpg",
      featured: false,
      details: "Restauración meticulosa de una Triumph Bonneville de 1969. Motor reconstruido, componentes originales restaurados o reemplazados por piezas de época cuando fue necesario.",
      beforeAfter: true,
      gallery: ["triumph-1.jpg", "triumph-2.jpg", "triumph-3.jpg"]
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.restauracionesData = restauracionesData;