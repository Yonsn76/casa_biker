// Datos de trabajos de personalización
const personalizacionesData = {
  category: 'Personalizaciones',
  description: 'Transformaciones estéticas para darle un estilo único a tu moto',
  projects: [
    {
      id: "p001",
      name: "Personalización Honda CBR",
      description: "Transformación completa con pintura personalizada",
      client: "Carlos Mendoza",
      date: "Octubre 2023",
      location: "Huánuco, Perú",
      image: "honda-cbr-custom.jpg",
      featured: true,
      details: "Transformación completa de una Honda CBR con pintura personalizada, escape Akrapovič y suspensiones Öhlins. El cliente buscaba un diseño único que reflejara su personalidad.",
      beforeAfter: true,
      gallery: ["honda-cbr-1.jpg", "honda-cbr-2.jpg", "honda-cbr-3.jpg", "honda-cbr-4.jpg"]
    },
    {
      id: "p002",
      name: "Harley-Davidson Sportster Café Racer",
      description: "Conversión a estilo café racer",
      client: "Roberto Sánchez",
      date: "Agosto 2023",
      location: "Lima, Perú",
      image: "harley-cafe-racer.jpg",
      featured: true,
      details: "Transformación de una Harley-Davidson Sportster en una auténtica café racer. Incluye manillar clip-on, asiento monoplaza, escape personalizado y pintura metalizada.",
      beforeAfter: true,
      gallery: ["harley-cafe-1.jpg", "harley-cafe-2.jpg", "harley-cafe-3.jpg"]
    },
    {
      id: "p003",
      name: "Yamaha MT-07 Street Fighter",
      description: "Personalización estilo street fighter",
      client: "Ana Gutiérrez",
      date: "Julio 2023",
      location: "Huánuco, Perú",
      image: "yamaha-streetfighter.jpg",
      featured: false,
      details: "Conversión de una Yamaha MT-07 a un agresivo estilo street fighter con colín recortado, faro LED personalizado y gráficos exclusivos diseñados por nuestro equipo.",
      beforeAfter: true,
      gallery: ["yamaha-mt07-1.jpg", "yamaha-mt07-2.jpg", "yamaha-mt07-3.jpg"]
    },
    {
      id: "p004",
      name: "Suzuki GN125 Scrambler",
      description: "Transformación a estilo scrambler",
      client: "Miguel Torres",
      date: "Mayo 2023",
      location: "Huánuco, Perú",
      image: "suzuki-scrambler.jpg",
      featured: false,
      details: "Conversión de una Suzuki GN125 a estilo scrambler con neumáticos de tacos, guardabarros elevado, manillar ancho y escape alto. Perfecta para uso urbano y escapadas off-road ligeras.",
      beforeAfter: true,
      gallery: ["suzuki-gn125-1.jpg", "suzuki-gn125-2.jpg", "suzuki-gn125-3.jpg"]
    },
    {
      id: "p005",
      name: "Kawasaki Vulcan Bobber",
      description: "Transformación estilo bobber minimalista",
      client: "Jorge Ramírez",
      date: "Marzo 2023",
      location: "Tingo María, Perú",
      image: "kawasaki-bobber.jpg",
      featured: false,
      details: "Conversión de una Kawasaki Vulcan a estilo bobber con asiento monoplaza, guardabarros recortados y acabado en negro mate con detalles en cobre envejecido.",
      beforeAfter: true,
      gallery: ["kawasaki-vulcan-1.jpg", "kawasaki-vulcan-2.jpg", "kawasaki-vulcan-3.jpg"]
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.personalizacionesData = personalizacionesData;