// Función para leer un archivo CSV y devolver un array de objetos
function leerCSV(archivo) {
    const datos = [];
    const reader = new FileReader();
  
    reader.onload = function() {
      const lines = reader.result.split('\n');
      for (let i = 1; i < lines.length; i++) {
        const linea = lines[i].split(',');
        const producto = linea[0];
        const precio = linea[1];
        datos.push({ producto, precio });
      }
    };
  
    reader.readAsText(archivo);
  
    return datos;
  }
  
  // Función para cargar los datos en las tablas
  function cargarDatos(datosAmazon, datosMercado) {
    const tablaAmazon = document.querySelector('.tabla-izquierda tbody');
    const tablaMercado = document.querySelector('.tabla-derecha tbody');
  
    for (const dato of datosAmazon) {
      const fila = document.createElement('tr');
      const celdaProducto = document.createElement('td');
      const celdaPrecio = document.createElement('td');
  
      celdaProducto.textContent = dato.producto;
      celdaPrecio.textContent = dato.precio;
  
      fila.appendChild(celdaProducto);
      fila.appendChild(celdaPrecio);
  
      tablaAmazon.appendChild(fila);
    }
  
    for (const dato of datosMercado) {
      const fila = document.createElement('tr');
      const celdaProducto = document.createElement('td');
      const celdaPrecio = document.createElement('td');
  
      celdaProducto.textContent = dato.producto;
      celdaPrecio.textContent = dato.precio;
  
      fila.appendChild(celdaProducto);
      fila.appendChild(celdaPrecio);
  
      tablaMercado.appendChild(fila);
    }
  }
  
  // Seleccionar los elementos HTML para los archivos de entrada
  const archivoAmazon = document.querySelector('#archivo-amazon');
  const archivoMercado = document.querySelector('#archivo-mercado');
  
  // Leer los archivos CSV
  const datosAmazon = leerCSV(archivoAmazon.files[0]);
  const datosMercado = leerCSV(archivoMercado.files[0]);
  
  // Cargar los datos en las tablas
  cargarDatos(datosAmazon, datosMercado);
  