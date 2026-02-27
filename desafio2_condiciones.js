// ======== EJERCICIO 1 - Borde con click ========
const imagen = document.getElementById('imagen-borde');

imagen.addEventListener('click', function() {
  if (imagen.classList.contains('con-borde')) {
    imagen.classList.remove('con-borde');
  } else {
    imagen.classList.add('con-borde');
  }
});


// ======== EJERCICIO 2 - Stickers ========
const btnVerificar = document.getElementById('btn-verificar-stickers');
const resultadoStickers = document.getElementById('resultado-stickers');

btnVerificar.addEventListener('click', function() {
  const s1 = parseInt(document.getElementById('sticker1').value) || 0;
  const s2 = parseInt(document.getElementById('sticker2').value) || 0;
  const s3 = parseInt(document.getElementById('sticker3').value) || 0;
  const total = s1 + s2 + s3;

  if (total <= 10) {
    resultadoStickers.textContent = 'Llevas ' + total + ' stickers';
    resultadoStickers.style.color = 'green';
  } else {
    resultadoStickers.textContent = 'Llevas demasiados stickers';
    resultadoStickers.style.color = 'red';
  }
});


// ======== EJERCICIO 3 - Password con Select ========
const btnIngresar = document.getElementById('btn-ingresar');
const resultadoPassword = document.getElementById('resultado-password');

btnIngresar.addEventListener('click', function() {
  const d1 = document.getElementById('digito1').value;
  const d2 = document.getElementById('digito2').value;
  const d3 = document.getElementById('digito3').value;
  const password = d1 + d2 + d3;

  if (password === '911') {
    resultadoPassword.textContent = 'password 1 correcto';
    resultadoPassword.style.color = 'green';
  } else if (password === '714') {
    resultadoPassword.textContent = 'password 2 es correcto';
    resultadoPassword.style.color = 'green';
  } else {
    resultadoPassword.textContent = 'password incorrecto';
    resultadoPassword.style.color = 'red';
  }
});