document.addEventListener('DOMContentLoaded', function() {

  // Carga datos de Amazon
  Papa.parse("amazon_data.csv", {
      download: true,
      header: true,
      complete: function(amazonResults) {
          let dataHTML = "<table>";
          dataHTML += "<tr><th>Nombre del Producto</th><th>Precio</th></tr>";
          amazonResults.data.forEach(function(row) {
            dataHTML += `<tr><td>${row["producto"]}</td><td>${row["precio"]}</td></tr>`;
          });
          dataHTML += "</table>";
          document.getElementById("productos-amazon").innerHTML = dataHTML;
      }
  });

  // Carga datos de Mercado Libre
  Papa.parse("mercado_data.csv", {
      download: true,
      header: true,
      complete: function(mercadoLibreResults) {
          let dataHTML = "<table>";
          dataHTML += "<tr><th>Nombre del Producto</th><th>Precio</th></tr>";

          // **Solución al problema de "undefined"**
          // Se verifica si la columna "nombre" existe en los datos de Mercado Libre
          if (mercadoLibreResults.data[0].hasOwnProperty("producto")) {
              mercadoLibreResults.data.forEach(function(row) {
                  dataHTML += `<tr><td>${row["producto"]}</td><td>${row["valor"]}</td></tr>`;
              });
          } else {
              // Si la columna "nombre" no existe, se muestra un mensaje de error
              dataHTML += "<tr><td colspan='2'>Error: No se encontró la columna 'nombre' en el archivo CSV de Mercado Libre.</td></tr>";
          }

          dataHTML += "</table>";
          document.getElementById("mercado-libre").innerHTML = dataHTML;
      }
  });
});
