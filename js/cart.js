// Funciones para el carrito de compras
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrito
    updateCartCount();
    
    // Mostrar el carrito si estamos en la página de carrito
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
    
    // Agregar listener para el botón de enviar pedido
    const sendOrderButtons = document.querySelectorAll('.send-order-btn');
    if (sendOrderButtons) {
        sendOrderButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const method = e.target.dataset.method;
                sendOrderByMethod(method);
            });
        });
    }
});

// Función para agregar un producto al carrito
function addToCart(product) {
    // Obtener el carrito actual del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
        // Si el producto ya existe, aumentar la cantidad
        cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
        // Si el producto no existe, agregarlo con cantidad 1
        product.quantity = 1;
        cart.push(product);
    }
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Actualizar el contador del carrito
    updateCartCount();
    
    // Mostrar notificación de producto agregado
    showAddToCartNotification(product.name);
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('.cart-count');
    const cartCountBadge = document.getElementById('cart-count-badge');
    const cartToggle = document.getElementById('cart-toggle');
    
    // Calcular el total de items
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    // Actualizar todos los contadores
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
    
    // Actualizar también el badge del carrito flotante
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

// Función para mostrar notificación de producto agregado
function showAddToCartNotification(productName) {
    // Crear elemento de notificación simple
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center';
    notification.innerHTML = `
        <i class="fas fa-check-circle mr-2"></i>
        <span>${productName} agregado</span>
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Eliminar después de 2 segundos
    setTimeout(() => {
        notification.remove();
    }, 2000);
    
    // Asegurarse de que el botón del carrito esté visible cuando hay productos
    const cartToggle = document.getElementById('cart-toggle');
    if (cartToggle) {
        cartToggle.style.display = 'flex';
    }
}

// Función para mostrar el carrito en la página de carrito
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutSection = document.getElementById('checkout-section');
    
    if (!cartContainer) return;
    
    // Obtener el carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Mostrar mensaje si el carrito está vacío
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.classList.remove('hidden');
        if (cartSummary) cartSummary.classList.add('hidden');
        if (checkoutSection) checkoutSection.classList.add('hidden');
        cartContainer.innerHTML = '';
        return;
    }
    
    // Ocultar mensaje de carrito vacío y mostrar resumen
    if (emptyCartMessage) emptyCartMessage.classList.add('hidden');
    if (cartSummary) cartSummary.classList.remove('hidden');
    if (checkoutSection) checkoutSection.classList.remove('hidden');
    
    // Limpiar el contenedor
    cartContainer.innerHTML = '';
    
    // Variables para el total
    let subtotal = 0;
    
    // Mostrar cada item del carrito
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'flex flex-col sm:flex-row justify-between items-center p-4 mb-4 bg-white rounded-lg shadow';
        
        cartItem.innerHTML = `
            <div class="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
                <div class="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden mr-0 sm:mr-4 mb-4 sm:mb-0">
                    <img src="images/${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-bold text-lg">${item.name}</h3>
                    <p class="text-gray-600">${item.description}</p>
                    <p class="text-biker-red font-bold">S/ ${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center">
                <div class="flex items-center mr-4">
                    <button class="decrease-quantity bg-gray-200 px-3 py-1 rounded-l" data-index="${index}">-</button>
                    <span class="px-4 py-1 bg-gray-100">${quantity}</span>
                    <button class="increase-quantity bg-gray-200 px-3 py-1 rounded-r" data-index="${index}">+</button>
                </div>
                <button class="remove-item text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartContainer.appendChild(cartItem);
    });
    
    // Actualizar el resumen del carrito
    if (cartSummary) {
        const shipping = 10; // Costo fijo de envío
        const total = subtotal + shipping;
        
        cartSummary.innerHTML = `
            <div class="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>S/ ${subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span>Envío:</span>
                <span>S/ ${shipping.toFixed(2)}</span>
            </div>
            <div class="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>S/ ${total.toFixed(2)}</span>
            </div>
        `;
    }
    
    // Configurar botones de incremento/decremento
    setupQuantityButtons();
    
    // Configurar botones de eliminar
    setupRemoveButtons();
}

// Configurar botones de cantidad
function setupQuantityButtons() {
    // Botones de disminuir cantidad
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            updateItemQuantity(index, -1);
        });
    });
    
    // Botones de aumentar cantidad
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            updateItemQuantity(index, 1);
        });
    });
}

// Configurar botones de eliminar
function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            removeCartItem(index);
        });
    });
}

// Actualizar cantidad de un item
function updateItemQuantity(index, change) {
    // Obtener el carrito
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar que el índice es válido
    if (index >= 0 && index < cart.length) {
        // Obtener la cantidad actual
        const currentQuantity = cart[index].quantity || 1;
        
        // Calcular nueva cantidad
        const newQuantity = currentQuantity + change;
        
        // Si la nueva cantidad es 0 o menos, eliminar el item
        if (newQuantity <= 0) {
            removeCartItem(index);
            return;
        }
        
        // Actualizar la cantidad
        cart[index].quantity = newQuantity;
        
        // Guardar el carrito actualizado
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Actualizar la visualización
        displayCart();
        updateCartCount();
    }
}

// Eliminar un item del carrito
function removeCartItem(index) {
    // Obtener el carrito
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar que el índice es válido
    if (index >= 0 && index < cart.length) {
        // Eliminar el item
        cart.splice(index, 1);
        
        // Guardar el carrito actualizado
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Actualizar la visualización
        displayCart();
        updateCartCount();
    }
}

// Función para enviar el pedido por WhatsApp o Email
function sendOrderByMethod(method) {
    // Obtener el carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si hay productos en el carrito
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de enviar tu pedido.');
        return;
    }
    
    // Calcular totales
    let subtotal = 0;
    const shipping = 10; // Costo fijo de envío
    
    // Crear mensaje con los detalles del pedido
    let message = "🏍️ PEDIDO ZONA BIKER 15 🏍️\n\n";
    message += "Hola, me interesa realizar el siguiente pedido:\n\n";
    message += "Productos:\n";
    
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        
        message += `${index + 1}. ${item.name}\n`;
        message += `   Cantidad: ${quantity}\n`;
        message += `   Precio: S/ ${item.price.toFixed(2)}\n`;
        message += `   Subtotal: S/ ${itemTotal.toFixed(2)}\n\n`;
    });
    
    const total = subtotal + shipping;
    
    message += "Resumen:\n";
    message += `Subtotal: S/ ${subtotal.toFixed(2)}\n`;
    message += `Envío: S/ ${shipping.toFixed(2)}\n`;
    message += `TOTAL: S/ ${total.toFixed(2)}\n\n`;
    
    message += "Me gustaría saber:\n";
    message += "✅ Métodos de pago disponibles (transferencia, efectivo, Yape, etc.)\n";
    message += "✅ Tiempo estimado de entrega\n";
    message += "✅ Si hay disponibilidad de todos los productos\n\n";
    
    message += "Por favor, contáctame para confirmar mi pedido y coordinar el pago y entrega. ¡Gracias!";
    
    // Enviar según el método seleccionado
    if (method === 'whatsapp') {
        try {
            // Número de WhatsApp de Zona Biker 15
            const phoneNumber = "51917025103";
            
            // Codificar el mensaje para URL (simplificado, sin caracteres especiales)
            const encodedMessage = encodeURIComponent(message);
            
            // Crear el enlace de WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Mostrar la URL en la consola para depuración
            console.log("URL de WhatsApp:", whatsappUrl);
            
            // Abrir WhatsApp en una nueva pestaña
            window.open(whatsappUrl, '_blank');
            
            // Mostrar mensaje de confirmación
            setTimeout(() => {
                alert('Tu pedido ha sido enviado por WhatsApp. ¡Gracias por tu compra!');
            }, 1000);
        } catch (error) {
            console.error("Error al enviar por WhatsApp:", error);
            alert('Hubo un problema al enviar tu pedido por WhatsApp. Por favor, intenta de nuevo.');
        }
    } 
    else if (method === 'email') {
        try {
            // Dirección de correo de Zona Biker 15
            const email = "Gsegurityaslam@gmail.com";
            
            // Asunto del correo
            const subject = encodeURIComponent("Nuevo pedido - Zona Biker 15");
            
            // Cuerpo del correo (versión plana sin formato)
            const emailBody = encodeURIComponent(message.replace(/\n/g, '%0D%0A'));
            
            // Crear el enlace mailto
            const mailtoUrl = `mailto:${email}?subject=${subject}&body=${emailBody}`;
            
            // Abrir el cliente de correo predeterminado
            window.location.href = mailtoUrl;
            
            // Mostrar mensaje de confirmación
            setTimeout(() => {
                alert('Tu pedido ha sido enviado por email. ¡Gracias por tu compra!');
            }, 1000);
        } catch (error) {
            console.error("Error al enviar por email:", error);
            alert('Hubo un problema al enviar tu pedido por email. Por favor, intenta de nuevo.');
        }
    }
}

// Función alternativa para enviar por WhatsApp (método directo)
function sendWhatsAppDirectly() {
    // Obtener el carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si hay productos en el carrito
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de enviar tu pedido.');
        return;
    }
    
    // Calcular totales
    let subtotal = 0;
    const shipping = 10; // Costo fijo de envío
    
    // Crear mensaje simple sin emojis ni formato especial
    let message = "PEDIDO ZONA BIKER 15\n\n";
    message += "Hola, me interesa realizar el siguiente pedido:\n\n";
    message += "Productos:\n";
    
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        
        message += (index + 1) + ". " + item.name + "\n";
        message += "   Cantidad: " + quantity + "\n";
        message += "   Precio: S/ " + item.price.toFixed(2) + "\n";
        message += "   Subtotal: S/ " + itemTotal.toFixed(2) + "\n\n";
    });
    
    const total = subtotal + shipping;
    
    message += "Resumen:\n";
    message += "Subtotal: S/ " + subtotal.toFixed(2) + "\n";
    message += "Envío: S/ " + shipping.toFixed(2) + "\n";
    message += "TOTAL: S/ " + total.toFixed(2) + "\n\n";
    
    message += "Me gustaría saber:\n";
    message += "- Qué métodos de pago aceptan (transferencia, efectivo, Yape, etc.)\n";
    message += "- Cuánto tiempo tardaría en recibir mi pedido\n";
    message += "- Si todos los productos están disponibles\n\n";
    
    message += "Por favor, contáctame para confirmar mi pedido y coordinar el pago y entrega. ¡Gracias!";
    
    // Número de WhatsApp de Zona Biker 15
    const phoneNumber = "51917025103";
    
    // Codificar el mensaje para URL (simplificado)
    const encodedMessage = encodeURIComponent(message);
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
}

// Limpiar el carrito después de enviar el pedido
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
    
    alert('¡Gracias por tu pedido! Tu carrito ha sido vaciado.');
}

// Función para compartir el carrito
function shareCartByMethod(method) {
    // Obtener el carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si hay productos en el carrito
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de compartir.');
        return;
    }
    
    // Crear mensaje con los productos
    let message = "Lista de productos de Zona Biker 15:\n\n";
    
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        message += `${index + 1}. ${item.name} (${quantity} unidad/es) - S/ ${item.price.toFixed(2)}\n`;
    });
    
    message += "\nVisita nuestra tienda en https://zonabiker15.com";
    
    // Compartir según el método seleccionado
    if (method === 'whatsapp') {
        try {
            // Usar la API Web Share si está disponible (permite seleccionar múltiples contactos)
            if (navigator.share) {
                navigator.share({
                    title: 'Mi carrito de Zona Biker 15',
                    text: message
                }).catch(error => {
                    console.log('Error al compartir:', error);
                    // Fallback a método tradicional
                    fallbackWhatsAppShare(message);
                });
            } else {
                // Método tradicional como fallback
                fallbackWhatsAppShare(message);
            }
        } catch (error) {
            console.error("Error al compartir:", error);
            fallbackWhatsAppShare(message);
        }
    } 
    else if (method === 'email') {
        // Asunto del correo
        const subject = encodeURIComponent("Productos de Zona Biker 15");
        
        // Cuerpo del correo
        const emailBody = encodeURIComponent(message);
        
        // Crear el enlace mailto
        const mailtoUrl = `mailto:?subject=${subject}&body=${emailBody}`;
        
        // Abrir el cliente de correo predeterminado
        window.location.href = mailtoUrl;
    }
}

// Función de respaldo para compartir por WhatsApp
function fallbackWhatsAppShare(message) {
    const encodedMessage = encodeURIComponent(message);
    
    // Intentar primero con la API de WhatsApp Web
    const whatsappUrl = `https://web.whatsapp.com/send?text=${encodedMessage}`;
    
    // En dispositivos móviles, usar la app de WhatsApp
    if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {
        window.open(`whatsapp://send?text=${encodedMessage}`, '_blank');
    } else {
        window.open(whatsappUrl, '_blank');
    }
}

// Función para agregar un producto al carrito desde cualquier página
function addProductToCart(product) {
    // Obtener el carrito actual del localStorage o crear uno nuevo
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Comprobar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
        // Incrementar cantidad si ya existe
        cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
        // Añadir nuevo producto al carrito
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Guardar el carrito actualizado
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Actualizar contador del carrito
    updateCartCount();
    
    return true;
}














