const empty = (input) => input.value = "";

const check = (input) => (input.value.length < 7 || input.value.length > 20) && alert("La contraseña debe tener entre 7 y 20 caracteres")