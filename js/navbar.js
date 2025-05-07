// Función para cargar la barra de navegación en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si Font Awesome ya está cargado
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }

    // Obtener la ruta actual para resaltar el enlace activo
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop();

    // Contenido del header con la barra de navegación
    const headerContent = `
<header class="bg-biker-black text-white shadow-md relative">
    <style>
        .logo-glow {
            filter: drop-shadow(0 0 5px rgba(227, 6, 19, 0.5));
            transition: all 0.5s ease;
        }
        .logo-glow:hover {
            filter: drop-shadow(0 0 12px rgba(227, 6, 19, 0.9));
            animation: pulse-red 1.5s infinite, rotate-subtle 7s infinite;
            transform-origin: center center;
        }
        @keyframes pulse-red {
            0% { filter: drop-shadow(0 0 5px rgba(227, 6, 19, 0.5)); }
            50% { filter: drop-shadow(0 0 18px rgba(255, 50, 50, 0.9)); }
            100% { filter: drop-shadow(0 0 5px rgba(227, 6, 19, 0.5)); }
        }
        @keyframes rotate-subtle {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(1deg) scale(1.02); }
            50% { transform: rotate(0deg) scale(1.04); }
            75% { transform: rotate(-1deg) scale(1.02); }
            100% { transform: rotate(0deg) scale(1); }
        }
    </style>
    <div class="container mx-auto px-4 py-0">
        <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
                <a href="index.html" class="flex items-center relative">
                    <img src="images/logo.png" alt="Zona Biker 15 Logo" class="h-44 mr-2 -mt-14 -mb-14 logo-glow">
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-white focus:outline-none">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-4 ml-auto">
                <a href="index.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'index.html' || pageName === '' ? 'text-biker-red' : ''}">
                    <i class="fas fa-home mr-1"></i> Inicio
                </a>
                <a href="about.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'about.html' ? 'text-biker-red' : ''}">
                    <i class="fas fa-users mr-1"></i> Nosotros
                </a>
                <a href="services.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'services.html' ? 'text-biker-red' : ''}">
                    <i class="fas fa-tools mr-1"></i> Servicios
                </a>
                <a href="brands.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'brands.html' ? 'text-biker-red' : ''}">
                    <i class="fas fa-tags mr-1"></i> Marcas
                </a>
                <a href="portfolio.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'portfolio.html' ? 'text-biker-red' : ''}">
                    <i class="fas fa-images mr-1"></i> Trabajos
                </a>
                <a href="events.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'events.html' ? 'text-biker-red' : ''}">
                    <i class="fas fa-calendar-alt mr-1"></i> Eventos
                </a>
                <a href="catalog.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'catalog.html' ? 'text-biker-red' : ''}">
                    <i class="fas fa-shopping-cart mr-1"></i> Catálogo
                </a>
                <a href="contact.html" class="text-white hover:text-biker-red transition duration-300 text-sm font-bold flex items-center ${pageName === 'contact.html' ? 'text-biker-red' : ''}">
                    <i class="fas fa-envelope mr-1"></i> Contacto
                </a>
            </nav>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden hidden mt-1 pb-1">
            <a href="index.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'index.html' || pageName === '' ? 'text-biker-red' : ''}">
                <i class="fas fa-home mr-2"></i> Inicio
            </a>
            <a href="about.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'about.html' ? 'text-biker-red' : ''}">
                <i class="fas fa-users mr-2"></i> Nosotros
            </a>
            <a href="services.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'services.html' ? 'text-biker-red' : ''}">
                <i class="fas fa-tools mr-2"></i> Servicios
            </a>
            <a href="brands.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'brands.html' ? 'text-biker-red' : ''}">
                <i class="fas fa-tags mr-2"></i> Marcas
            </a>
            <a href="portfolio.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'portfolio.html' ? 'text-biker-red' : ''}">
                <i class="fas fa-images mr-2"></i> Trabajos
            </a>
            <a href="events.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'events.html' ? 'text-biker-red' : ''}">
                <i class="fas fa-calendar-alt mr-2"></i> Eventos
            </a>
            <a href="catalog.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'catalog.html' ? 'text-biker-red' : ''}">
                <i class="fas fa-shopping-cart mr-2"></i> Catálogo
            </a>
            <a href="contact.html" class="block py-1 text-white hover:text-biker-red font-bold flex items-center ${pageName === 'contact.html' ? 'text-biker-red' : ''}">
                <i class="fas fa-envelope mr-2"></i> Contacto
            </a>
        </div>
    </div>
</header>
`;

    // Contenido del footer
    const footerContent = `
    <footer class="bg-biker-black text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <img src="images/logo.png" alt="Zona Biker 15 Logo" class="h-32 mr-2 logo-glow">
                    </div>
                    <p class="mb-4">Tu tienda especializada en motos y accesorios. Ofrecemos los mejores productos y servicios para los amantes de las dos ruedas.</p>
                    <!-- Redes sociales con CSS puro -->
                    <div class="footer-social-icons">
                        <a href="https://wa.me/51917025103" target="_blank" class="footer-social-icon footer-whatsapp-icon">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=61572324423621" target="_blank" class="footer-social-icon footer-facebook-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.tiktok.com/@zona15lacasadelbiker?is_from_webapp=1&sender_device=pc" target="_blank" class="footer-social-icon footer-tiktok-icon">
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4 text-biker-red">Enlaces Rápidos</h3>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="hover:text-biker-red transition duration-300">Inicio</a></li>
                        <li><a href="about.html" class="hover:text-biker-red transition duration-300">Nosotros</a></li>
                        <li><a href="services.html" class="hover:text-biker-red transition duration-300">Servicios</a></li>
                        <li><a href="catalog.html" class="hover:text-biker-red transition duration-300">Catálogo</a></li>
                        <li><a href="portfolio.html" class="hover:text-biker-red transition duration-300">Trabajos</a></li>
                        <li><a href="brands.html" class="hover:text-biker-red transition duration-300">Marcas</a></li>
                        <li><a href="contact.html" class="hover:text-biker-red transition duration-300">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4 text-biker-red">Contacto</h3>
                    <p class="mb-2">Huánuco, Peru</p>
                    <p class="mb-2">Teléfono: 917 025 103</p>
                    <p class="mb-4">Email: Gsegurityaslam@gmail.com</p>

                    <!-- Sección de Síguenos con CSS puro -->
                    <h3 class="text-xl font-bold mb-4 text-biker-red">Síguenos</h3>
                    <div class="footer-social-icons">
                        <a href="mailto:Gsegurityaslam@gmail.com" class="footer-social-icon footer-gmail-icon">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="https://wa.me/51917025103" target="_blank" class="footer-social-icon footer-whatsapp-icon">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=61572324423621" target="_blank" class="footer-social-icon footer-facebook-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.tiktok.com/@zona15lacasadelbiker?is_from_webapp=1&sender_device=pc" target="_blank" class="footer-social-icon footer-tiktok-icon">
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                <p>&copy; 2023 Zona Biker 15. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    `;

    // Insertar el header y footer en las páginas
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) {
        headerContainer.innerHTML = headerContent;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerContent;
    }

    // Inicializar el menú móvil después de cargar el contenido
    setTimeout(() => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }, 100);
});

// Agregar el botón flotante de WhatsApp después de cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Eliminar cualquier botón social existente para evitar duplicados
    const existingButton = document.getElementById('floating-social');
    if (existingButton) {
        existingButton.remove();
    }

    // Agregar el botón flotante de WhatsApp con verde sólido
    const whatsappButton = document.createElement('div');
    whatsappButton.innerHTML = `
    <div id="floating-social" class="fixed bottom-6 right-6 z-40">
        <a href="https://wa.me/51917025103" target="_blank" style="background-color: #25D366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); border: 3px solid white;">
          <i class="fab fa-whatsapp" style="font-size: 30px;"></i>
        </a>
    </div>
    `;

    document.body.appendChild(whatsappButton);
    
    // Agregar el botón flotante del carrito encima del botón de WhatsApp
    const cartButton = document.createElement('div');
    cartButton.innerHTML = `
    <div class="cart-toggle" id="cart-toggle" style="bottom: 150px; right: 20px; position: fixed; width: 60px; height: 60px; border-radius: 50%; background-color: #e53e3e; color: white; display: none; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); cursor: pointer; z-index: 40; transition: all 0.3s ease;">
        <i class="fas fa-shopping-cart" style="font-size: 24px;"></i>
        <span class="cart-count-badge" id="cart-count-badge" style="position: absolute; top: -5px; right: -5px; background-color: #2b6cb0; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2px solid white;">0</span>
    </div>
    `;
    
    document.body.appendChild(cartButton);
    
    // Agregar el overlay y el modal del carrito si no existen
    if (!document.getElementById('cart-overlay')) {
        const cartOverlay = document.createElement('div');
        cartOverlay.id = 'cart-overlay';
        cartOverlay.className = 'cart-overlay';
        document.body.appendChild(cartOverlay);
    }
    
    if (!document.getElementById('cart-modal')) {
        const cartModal = document.createElement('div');
        cartModal.id = 'cart-modal';
        cartModal.className = 'cart-modal';
        cartModal.innerHTML = `
            <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 class="text-xl font-bold text-biker-black">Tu Carrito de Compras</h2>
                <button id="close-cart" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <!-- Mensaje de carrito vacío -->
            <div id="empty-cart-message" class="hidden p-8 text-center">
                <i class="fas fa-shopping-cart text-5xl text-gray-300 mb-4"></i>
                <h2 class="text-xl font-bold mb-4">Tu carrito está vacío</h2>
                <p class="text-gray-600 mb-6">Parece que aún no has añadido productos a tu carrito.</p>
                <a href="catalog.html" class="bg-biker-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Explorar Catálogo
                </a>
            </div>

            <!-- Contenedor de items del carrito -->
            <div id="cart-items" class="p-4 space-y-4">
                <!-- Los items del carrito se cargarán aquí dinámicamente -->
            </div>

            <!-- Resumen del carrito -->
            <div id="cart-summary" class="p-4 bg-gray-50 border-t border-gray-200">
                <!-- El resumen se cargará aquí dinámicamente -->
            </div>

            <!-- Sección de checkout -->
            <div id="checkout-section" class="p-4 bg-gray-50 border-t border-gray-200">
                <h3 class="text-lg font-bold mb-4 text-biker-black">Finalizar Pedido</h3>
                
                <div class="space-y-3">
                    <button class="send-order-btn whatsapp-button w-full py-2 px-4" data-method="whatsapp">
                        <i class="fab fa-whatsapp"></i> Enviar por WhatsApp
                    </button>
                    
                    <button class="send-order-btn email-button w-full py-2 px-4" data-method="email">
                        <i class="fas fa-envelope"></i> Enviar por Email
                    </button>
                    
                    <button id="share-cart-btn" class="w-full bg-biker-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                        <i class="fas fa-share-alt mr-1"></i> Compartir carrito
                    </button>
                </div>
                
                <div class="text-center pt-4">
                    <button id="clear-cart" class="text-red-500 hover:text-red-700 font-medium transition duration-300">
                        <i class="fas fa-trash mr-1"></i> Vaciar carrito
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(cartModal);
        
        // Agregar estilos para el carrito si no existen
        if (!document.getElementById('cart-styles')) {
            const cartStyles = document.createElement('style');
            cartStyles.id = 'cart-styles';
            cartStyles.textContent = `
                .cart-modal {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    max-width: 450px;
                    height: 100vh;
                    background-color: white;
                    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                    overflow-y: auto;
                    transform: translateX(100%);
                    transition: transform 0.3s ease-in-out;
                }
                
                .cart-modal.active {
                    transform: translateX(0);
                }
                
                .cart-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
                }
                
                .cart-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }
                
                .whatsapp-button {
                    background-color: #25D366;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.5rem;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    border: none;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .whatsapp-button:hover {
                    background-color: #128C7E;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
                }
                
                .whatsapp-button i {
                    margin-right: 0.5rem;
                    font-size: 1.25rem;
                }
                
                .email-button {
                    background-color: #4285F4;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.5rem;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    border: none;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .email-button:hover {
                    background-color: #3367D6;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
                }
                
                .email-button i {
                    margin-right: 0.5rem;
                    font-size: 1.25rem;
                }
            `;
            document.head.appendChild(cartStyles);
        }
    }
    
    // Inicializar el carrito flotante
    const cartToggle = document.getElementById('cart-toggle');
    const cartModal = document.getElementById('cart-modal');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart');
    
    // Actualizar contador del carrito
    updateCartCountBadge();
    
    // Mostrar carrito al hacer clic en el botón
    if (cartToggle) {
        cartToggle.addEventListener('click', function() {
            openCart();
        });
    }
    
    // Cerrar carrito al hacer clic en el botón de cerrar
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            closeCartModal();
        });
    }
    
    // Cerrar carrito al hacer clic en el overlay
    if (cartOverlay) {
        cartOverlay.addEventListener('click', function() {
            closeCartModal();
        });
    }
    
    // Configurar botones de enviar pedido
    const sendOrderButtons = document.querySelectorAll('.send-order-btn');
    if (sendOrderButtons) {
        sendOrderButtons.forEach(button => {
            button.addEventListener('click', function() {
                const method = this.getAttribute('data-method');
                if (method === 'whatsapp') {
                    sendWhatsAppDirectly();
                } else {
                    sendOrderByMethod(method);
                }
            });
        });
    }
    
    // Configurar botón de vaciar carrito
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que quieres vaciar tu carrito?')) {
                clearCart();
            }
        });
    }
    
    // Configurar botón de compartir carrito
    const shareCartButton = document.getElementById('share-cart-btn');
    if (shareCartButton) {
        shareCartButton.addEventListener('click', function() {
            // Crear modal de opciones para compartir
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white rounded-lg p-6 max-w-sm w-full">
                    <h3 class="text-lg font-bold mb-4 text-biker-black">Compartir carrito</h3>
                    <p class="text-gray-600 mb-4">Selecciona cómo quieres compartir tu lista de productos:</p>
                    
                    <div class="space-y-3">
                        <button id="share-whatsapp" class="whatsapp-button w-full py-2 px-4">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </button>
                        
                        <button id="share-email" class="email-button w-full py-2 px-4">
                            <i class="fas fa-envelope"></i> Email
                        </button>
                    </div>
                    
                    <button id="close-modal" class="mt-4 w-full border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
                        Cancelar
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Configurar botones
            document.getElementById('share-whatsapp').addEventListener('click', function() {
                shareCartByMethod('whatsapp');
                modal.remove();
            });
            
            document.getElementById('share-email').addEventListener('click', function() {
                shareCartByMethod('email');
                modal.remove();
            });
            
            document.getElementById('close-modal').addEventListener('click', function() {
                modal.remove();
            });
        });
    }
    
    // Cargar contenido del carrito
    displayFloatingCart();
});

// Función para abrir el carrito
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartModal && cartOverlay) {
        cartModal.classList.add('active');
        cartOverlay.classList.add('active');
        
        // Actualizar contenido del carrito
        displayFloatingCart();
    }
}

// Función para cerrar el carrito
function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartModal && cartOverlay) {
        cartModal.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

// Función para actualizar el contador del carrito
function updateCartCountBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountBadge = document.getElementById('cart-count-badge');
    const cartToggle = document.getElementById('cart-toggle');
    
    // Calcular el total de items
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    // Actualizar el contador
    if (cartCountBadge) {
        cartCountBadge.textContent = totalItems;
    }
    
    // Mostrar u ocultar el botón del carrito según si hay productos
    if (cartToggle) {
        if (totalItems > 0) {
            cartToggle.style.display = 'flex'; // Mostrar si hay productos
        } else {
            cartToggle.style.display = 'none'; // Ocultar si no hay productos
        }
    }
}

// Función para mostrar el carrito flotante
function displayFloatingCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutSection = document.getElementById('checkout-section');
    
    if (!cartItems) return;
    
    // Obtener el carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Mostrar mensaje si el carrito está vacío
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.classList.remove('hidden');
        if (cartSummary) cartSummary.classList.add('hidden');
        if (checkoutSection) checkoutSection.classList.add('hidden');
        cartItems.innerHTML = '';
        return;
    }
    
    // Ocultar mensaje de carrito vacío y mostrar resumen
    if (emptyCartMessage) emptyCartMessage.classList.add('hidden');
    if (cartSummary) cartSummary.classList.remove('hidden');
    if (checkoutSection) checkoutSection.classList.remove('hidden');
    
    // Limpiar el contenedor
    cartItems.innerHTML = '';
    
    // Variables para el total
    let subtotal = 0;
    
    // Mostrar cada item del carrito
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item flex justify-between items-center p-3 mb-3 bg-white rounded-lg shadow-sm border border-gray-100';
        
        cartItem.innerHTML = `
            <div class="flex items-center">
                <div class="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
                    <img src="images/${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-bold text-sm">${item.name}</h3>
                    <p class="text-gray-600 text-xs">${item.description.substring(0, 30)}${item.description.length > 30 ? '...' : ''}</p>
                    <p class="text-biker-red font-bold text-sm">S/ ${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center">
                <div class="flex items-center mr-2">
                    <button class="decrease-quantity bg-gray-200 px-2 py-1 rounded-l text-sm" data-index="${index}">-</button>
                    <span class="px-2 py-1 bg-gray-100 text-sm">${quantity}</span>
                    <button class="increase-quantity bg-gray-200 px-2 py-1 rounded-r text-sm" data-index="${index}">+</button>
                </div>
                <button class="remove-item text-red-500 hover:text-red-700" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Actualizar el contador del carrito
    updateCartCountBadge();
    
    // Configurar eventos para los botones de cantidad
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const removeButtons = document.querySelectorAll('.remove-item');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            decreaseQuantity(index);
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            increaseQuantity(index);
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeItem(index);
        });
    });
    
    // Actualizar el resumen del carrito
    updateCartSummary(subtotal);
}

// Función para actualizar el resumen del carrito
function updateCartSummary(subtotal) {
    const cartSummary = document.getElementById('cart-summary');
    if (!cartSummary) return;
    
    cartSummary.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-biker-black">Subtotal</h3>
            <p class="text-lg font-bold text-biker-red">S/ ${subtotal.toFixed(2)}</p>
        </div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-biker-black">Envío</h3>
            <p class="text-lg font-bold text-biker-red">S/ 0.00</p>
        </div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-biker-black">Total</h3>
            <p class="text-lg font-bold text-biker-red">S/ ${subtotal.toFixed(2)}</p>
        </div>
    `;
}

// Función para aumentar la cantidad de un item
function increaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index >= 0 && index < cart.length) {
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayFloatingCart();
        updateCartCountBadge();
    }
}

// Función para disminuir la cantidad de un item
function decreaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index >= 0 && index < cart.length && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayFloatingCart();
        updateCartCountBadge();
    }
}

// Función para eliminar un item del carrito
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index >= 0 && index < cart.length) {
        const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
        localStorage.setItem('cart', JSON.stringify(newCart));
        displayFloatingCart();
        updateCartCountBadge();
    }
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem('cart');
    displayFloatingCart();
}

// Función para enviar el carrito por WhatsApp
function sendWhatsAppDirectly() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Tu carrito está vacío. No se puede enviar.');
        return;
    }

    let message = 'Hola! Me interesa realizar el siguiente pedido en Zona Biker 15:\n\n';
    
    // Listar productos
    let subtotal = 0;
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        
        message += `${index + 1}. ${item.name}\n`;
        message += `   Cantidad: ${quantity}\n`;
        message += `   Precio: S/ ${item.price.toFixed(2)}\n`;
        message += `   Subtotal: S/ ${itemTotal.toFixed(2)}\n\n`;
    });
    
    // Calcular total con envío
    const shipping = 10;
    const total = subtotal + shipping;
    
    message += "Resumen:\n";
    message += `Subtotal: S/ ${subtotal.toFixed(2)}\n`;
    message += `Envío: S/ ${shipping.toFixed(2)}\n`;
    message += `TOTAL: S/ ${total.toFixed(2)}\n\n`;
    
    message += "Me gustaría saber:\n";
    message += "- Qué métodos de pago aceptan (transferencia, efectivo, Yape, etc.)\n";
    message += "- Cuánto tiempo tardaría en recibir mi pedido\n";
    message += "- Si todos los productos están disponibles\n\n";
    
    message += "Por favor, contáctame para confirmar mi pedido y coordinar el pago y entrega. ¡Gracias!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51917025103?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Función para calcular el total del carrito
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
}

// Función para enviar el carrito por email
function sendOrderByMethod(method) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Tu carrito está vacío. No se puede enviar.');
        return;
    }

    let message = 'Hola! Me interesa realizar el siguiente pedido en Zona Biker 15:\n\n';
    
    // Listar productos
    let subtotal = 0;
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        
        message += `${index + 1}. ${item.name}\n`;
        message += `   Cantidad: ${quantity}\n`;
        message += `   Precio: S/ ${item.price.toFixed(2)}\n`;
        message += `   Subtotal: S/ ${itemTotal.toFixed(2)}\n\n`;
    });
    
    // Calcular total con envío
    const shipping = 10;
    const total = subtotal + shipping;
    
    message += "Resumen:\n";
    message += `Subtotal: S/ ${subtotal.toFixed(2)}\n`;
    message += `Envío: S/ ${shipping.toFixed(2)}\n`;
    message += `TOTAL: S/ ${total.toFixed(2)}\n\n`;
    
    message += "Me gustaría saber:\n";
    message += "- Qué métodos de pago aceptan (transferencia, efectivo, Yape, etc.)\n";
    message += "- Cuánto tiempo tardaría en recibir mi pedido\n";
    message += "- Si todos los productos están disponibles\n\n";
    
    message += "Por favor, contáctame para confirmar mi pedido y coordinar el pago y entrega. ¡Gracias!";

    if (method === 'email') {
        const emailBody = encodeURIComponent(message);
        const emailUrl = `mailto:Gsegurityaslam@gmail.com?subject=Pedido%20de%20Zona%20Biker%2015&body=${emailBody}`;
        window.open(emailUrl, '_blank');
    }
}

// Función para compartir el carrito
function shareCartByMethod(method) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Tu carrito está vacío. No se puede compartir.');
        return;
    }

    let message = 'Hola! Me gustaría compartir mi carrito de compras en Zona Biker 15:\n\n';
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - S/ ${item.price.toFixed(2)}\n`;
    });
    message += `\nTotal: S/ ${calculateTotal(cart).toFixed(2)}`;

    if (method === 'whatsapp') {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/51917025103?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    } else if (method === 'email') {
        const emailBody = encodeURIComponent(message);
        const emailUrl = `mailto:Gsegurityaslam@gmail.com?subject=Compartir%20carrito%20de%20Zona%20Biker%2015&body=${emailBody}`;
        window.open(emailUrl, '_blank');
    }
}

// Agregar estilos CSS para redes sociales en el footer
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si los estilos ya existen
    if (!document.getElementById('social-icons-styles')) {
        const socialStyles = document.createElement('style');
        socialStyles.id = 'social-icons-styles';
        socialStyles.textContent = `
            .footer-social-icons {
                display: flex;
                gap: 15px;
            }
            
            .footer-social-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                text-decoration: none;
                transition: all 0.3s ease;
            }
            
            .footer-social-icon:hover {
                transform: translateY(-5px);
                color: var(--biker-red) !important;
            }
            
            .footer-facebook-icon {
                background-color: #1877F2;
            }
            
            .footer-gmail-icon {
                background-color: #EA4335;
            }
            
            .footer-tiktok-icon {
                background-color: #000000;
            }
            
            .footer-whatsapp-icon {
                background-color: #25D366;
            }
        `;
        document.head.appendChild(socialStyles);
    }
});

// Inicializar el estado del botón del carrito (oculto por defecto)
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay productos en el carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const cartToggle = document.getElementById('cart-toggle');
    
    // Mostrar el botón solo si hay productos
    if (cartToggle && totalItems > 0) {
        cartToggle.style.display = 'flex';
    }
});










