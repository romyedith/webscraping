document.addEventListener('DOMContentLoaded', function() {
  Papa.parse("amazon_data.csv", {
      download: true,
      header: true,
      complete: function(results) {
          let dataHTML = "<table>";
          dataHTML += "<tr><th>Nombre del Producto</th><th>Precio</th></tr>";
          results.data.forEach(function(row) {
            
            dataHTML += `<tr><td>${row["producto"]}</td><td>${row["precio"]}</td></tr>`;
          });
          dataHTML += "</table>";
          document.getElementById("productos").innerHTML = dataHTML;
      }
  });
});
