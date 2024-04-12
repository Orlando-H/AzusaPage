// Define la URL del archivo JSON que contiene los productos.
const jsonUrl = './products.json';

// Selecciona el contenedor donde se mostrarán los productos en tu página.
const productContainer = document.querySelector('.product-container');

// Utiliza fetch para obtener los datos del archivo JSON.
fetch(jsonUrl)
  .then(response => {
    // Convierte la respuesta en un objeto JSON.
    return response.json();
  })
  .then(data => {
    // Verifica si los datos contienen la clave 'products'.
    if (data.products) {
      // Recorre los productos y genera el HTML para cada uno.
      data.products.forEach(product => {
        // Crea un elemento div para la tarjeta del producto.
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // Crea el elemento img para la imagen del producto.
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        // Crea el elemento h4 para el nombre del producto.
        const productName = document.createElement('h4');
        productName.textContent = product.name;

        // Crea un elemento div para contener el precio y el botón.
        const productDetails = document.createElement('div');

        // Crea un span para mostrar el precio del producto.
        const productPrice = document.createElement('span');
        productPrice.textContent = product.price;

        // Crea un botón para agregar el producto.
        const addButton = document.createElement('button');
        addButton.textContent = product.button;

        // Agrega el span y el botón al div de detalles.
        productDetails.appendChild(productPrice);
        productDetails.appendChild(addButton);

        // Agrega la imagen, el nombre y los detalles a la tarjeta del producto.
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productDetails);

        // Agrega la tarjeta del producto al contenedor de productos en el DOM.
        productContainer.appendChild(productCard);
      });
    } else {
      console.error('No se encontró la clave "products" en los datos JSON.');
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos del archivo JSON:', error);
  });
