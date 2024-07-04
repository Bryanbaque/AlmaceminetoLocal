document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío del formulario

    // Obtener los valores de los campos del formulario
    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    let isValid = true;  // Variable para verificar si el formulario es válido

    // Validación de cédula (Ejemplo: 10 dígitos)
    if (!/^\d{10}$/.test(cedula)) {
        isValid = false;
        document.getElementById('cedulaError').textContent = 'La cédula debe tener 10 dígitos.';
        document.getElementById('cedulaError').style.display = 'block';
    } else {
        document.getElementById('cedulaError').style.display = 'none';
    }

    // Validación de apellidos y nombres (Solo letras)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(apellidos)) {
        isValid = false;
        document.getElementById('apellidosError').textContent = 'Los apellidos solo deben contener letras.';
        document.getElementById('apellidosError').style.display = 'block';
    } else {
        document.getElementById('apellidosError').style.display = 'none';
    }
    
    if (!nameRegex.test(nombres)) {
        isValid = false;
        document.getElementById('nombresError').textContent = 'Los nombres solo deben contener letras.';
        document.getElementById('nombresError').style.display = 'block';
    } else {
        document.getElementById('nombresError').style.display = 'none';
    }

    // Validación de dirección (No vacía)
    if (direccion.trim() === '') {
        isValid = false;
        document.getElementById('direccionError').textContent = 'La dirección no puede estar vacía.';
        document.getElementById('direccionError').style.display = 'block';
    } else {
        document.getElementById('direccionError').style.display = 'none';
    }

    // Validación de teléfono (Ejemplo: 9 o 10 dígitos)
    if (!/^\d{9,10}$/.test(telefono)) {
        isValid = false;
        document.getElementById('telefonoError').textContent = 'El teléfono debe tener 9 o 10 dígitos.';
        document.getElementById('telefonoError').style.display = 'block';
    } else {
        document.getElementById('telefonoError').style.display = 'none';
    }

    // Validación de correo electrónico (HTML5 lo valida automáticamente, pero podemos agregar una validación adicional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'El correo electrónico no es válido.';
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Si todas las validaciones son correctas
    if (isValid) {
        // Obtener los clientes almacenados en localStorage o inicializar un arreglo vacío
        const Clientes = JSON.parse(localStorage.getItem('Clientes')) || [];
        // Verificar si el cliente ya está registrado usando la cédula
        const isClienteRegistered = Clientes.find(cliente => cliente.cedula === cedula);

        if (isClienteRegistered) {
            alert('El cliente ya está registrado');
        } else {
            // Agregar el nuevo cliente al arreglo
            Clientes.push({ cedula, apellidos, nombres, direccion, telefono, email });
            // Almacenar el arreglo actualizado en localStorage
            localStorage.setItem('Clientes', JSON.stringify(Clientes));
            alert('Registro exitoso');
            // Redirigir a la página principal (index.html)
            window.location.href = 'index.html';
        }
    }
});
