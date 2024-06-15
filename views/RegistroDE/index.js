async function fetchAllReports() {

try {
    const response = await axios('/api/reports'); // Verifica que esta ruta coincida con la configuración en tu backend
    if (!response.ok) {
      throw new Error('Error al obtener los datos de los informes');
    }
      const reports = await response.json();
      
      // Itera sobre cada informe y muestra sus datos en el HTML
      reports.forEach(report => {
        const reportInfo = document.createElement('div');
        reportInfo.innerHTML = `
          <div class="bg-neutral-200 p-4 w-full border-red-700 border-s-4 flex flex-col items-center">
            <p class="mb-2">Fecha: ${report.date}</p>
            <p>Tipo: ${report.type}</p>
            <p>Cantidad de víctimas: ${report.victimCount}</p>
            <p>Distrito: ${report.district}</p>
            <p>¿Uso de arma?: ${report.weaponUsed ? 'Sí' : 'No'}</p>
            <p>¿Uso de motocicleta?: ${report.motorcycleUsed ? 'Sí' : 'No'}</p>
          </div>
        `;
        document.getElementById('reports-container').appendChild(reportInfo);
      });
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Llama a la función para obtener y mostrar todos los informes
  fetchAllReports();