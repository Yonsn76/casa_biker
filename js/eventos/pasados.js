// Datos de eventos pasados
const pasadosEventosData = {
  category: 'Eventos Pasados',
  description: 'Eventos anteriores en los que hemos participado',
  events: [
    {
      id: "past001",
      name: "Evento Zona Biker 2025",
      description: "Presentación de nuestra nueva línea de accesorios exclusivos",
      date: "20 Oct 2025",
      location: "Lima, Perú",
      image: "evento1.png",
      type: "past",
      details: "Presentamos nuestra nueva línea de accesorios exclusivos y realizamos demostraciones de instalación en vivo para el mercado peruano."
    }
  ]
};

// Exponer los datos al ámbito global para que sean accesibles desde el HTML
window.pasadosEventosData = pasadosEventosData;
