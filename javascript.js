const opcionesContainer = document.getElementById('opcionesContainer');
    document.getElementById('dropdownMenuButton').addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento se propague y se cierre la barra de navegación
        if (opcionesContainer.style.display === 'block') {
            opcionesContainer.style.display = 'none';
        } else {
            opcionesContainer.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id !== 'dropdownMenuButton') {
            opcionesContainer.style.display = 'none';
        }
    });