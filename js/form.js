(function () {
  const form = document.getElementById("reservaForm");
  const button = document.getElementById("btnReservar");
  const toastEl = document.getElementById("reservaToast");
  const hotelSelect = document.getElementById("hotel");
  const fechaEntrada = document.getElementById("fechaEntrada");
  const fechaSalida = document.getElementById("fechaSalida");
  const personasInput = document.getElementById("personas");
  const totalInput = document.getElementById("totalReserva");

  const precios = {
    "Hotel Jurásico": 3999.99,
    "Cabañas Prehistóricas": 2499.99,
    "Glamping Dinosaurio": 1799.99,
  };

  function calcularTotal() {
    const hotel = hotelSelect.value;
    const personas = Math.min(Number(personasInput.value) || 0, 10);
    const entrada = new Date(fechaEntrada.value);
    const salida = new Date(fechaSalida.value);
    let noches = (salida - entrada) / (1000 * 60 * 60 * 24);
    if (isNaN(noches) || noches < 1) noches = 0;

    const precioNoche = precios[hotel] || 0;
    const total = precioNoche * noches * personas;
    totalInput.value = `$${total.toFixed(2)}`;
  }

  // Actualizar total y habilitar botón dinámicamente
  form.addEventListener("input", () => {
    button.disabled = !form.checkValidity();
    calcularTotal();
  });

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    const toast = new bootstrap.Toast(toastEl);
    toastEl.querySelector(".toast-body").textContent =
      "¡Reserva recibida! Un asesor se comunicará contigo por correo o llamada para confirmar.";
    toast.show();

    form.reset();
    totalInput.value = "$0.00";
    button.disabled = true;
    form.classList.remove("was-validated");
  });
})();
