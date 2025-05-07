// Datos de trabajos de mejoras de rendimiento
const mejorasRendimientoData = {
  category: 'Mejoras de Rendimiento',
  description: 'Optimizaciones técnicas para aumentar las prestaciones de tu moto',
  projects: [
    {
      id: "m001",
      name: "Ducati Panigale V4 Track Prep",
      description: "Preparación para circuito",
      client: "Ricardo Montoya",
      date: "Octubre 2023",
      location: "Lima, Perú",
      image: "ducati-track.jpg",
      featured: true,
      details: "Preparación completa para circuito de una Ducati Panigale V4. Instalación de escape completo Akrapovič, suspensiones Öhlins, frenos Brembo GP4-RX y mapeado personalizado con aumento de 15HP.",
      beforeAfter: false,
      gallery: ["ducati-v4-1.jpg", "ducati-v4-2.jpg", "ducati-v4-3.jpg", "ducati-v4-4.jpg"]
    },
    {
      id: "m002",
      name: "BMW R1250GS Adventure Prep",
      description: "Preparación para off-road extremo",
      client: "Daniel Paredes",
      date: "Agosto 2023",
      location: "Huánuco, Perú",
      image: "bmw-gs-offroad.jpg",
      featured: true,
      details: "Preparación off-road de una BMW R1250GS Adventure. Suspensiones mejoradas, protecciones completas, escape Arrow, mapeado optimizado y neumáticos especiales para terrenos difíciles.",
      beforeAfter: false,
      gallery: ["bmw-gs-1.jpg", "bmw-gs-2.jpg", "bmw-gs-3.jpg"]
    },
    {
      id: "m003",
      name: "Kawasaki Z900 Street Performance",
      description: "Mejora de rendimiento para uso urbano",
      client: "Laura Vega",
      date: "Julio 2023",
      location: "Huánuco, Perú",
      image: "kawasaki-z900-perf.jpg",
      featured: false,
      details: "Optimización de rendimiento para una Kawasaki Z900. Instalación de escape SC-Project, filtro de aire K&N, Power Commander V con mapeado personalizado y embrague reforzado.",
      beforeAfter: false,
      gallery: ["kawasaki-z900-1.jpg", "kawasaki-z900-2.jpg", "kawasaki-z900-3.jpg"]
    },
    {
      id: "m004",
      name: "Honda CRF450 Rally Prep",
      description: "Preparación para rally off-road",
      client: "Martín Soto",
      date: "Mayo 2023",
      location: "Tingo María, Perú",
      image: "honda-crf-rally.jpg",
      featured: false,
      details: "Preparación completa para rally de una Honda CRF450. Depósito de combustible ampliado, suspensiones recalibradas, protecciones completas y motor optimizado para mayor fiabilidad.",
      beforeAfter: false,
      gallery: ["honda-crf-1.jpg", "honda-crf-2.jpg", "honda-crf-3.jpg"]
    },
    {
      id: "m005",
      name: "Yamaha MT-09 Turbo",
      description: "Instalación de turbocompresor",
      client: "Sergio Ramos",
      date: "Marzo 2023",
      location: "Lima, Perú",
      image: "yamaha-mt09-turbo.jpg",
      featured: false,
      details: "Proyecto especial de instalación de turbocompresor en una Yamaha MT-09. Modificación completa del motor con componentes reforzados, gestión electrónica personalizada y aumento de potencia de 115HP a 180HP.",
      beforeAfter: false,
      gallery: ["yamaha-mt09-1.jpg", "yamaha-mt09-2.jpg", "yamaha-mt09-3.jpg"]
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.mejorasRendimientoData = mejorasRendimientoData;