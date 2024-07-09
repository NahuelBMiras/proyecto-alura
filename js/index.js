function hayTexto() {
  const form = document.querySelector('form');
  const textArea = document.querySelector('.text_a_encriptar_desencriptar');
  const encriptarText = document.querySelector(
    '.encriptar__desencriptar__text'
  );
  const textNoEncontrado = document.querySelectorAll('.text_no_encontrado');
  const botonCopiar = document.querySelector('.boton__copiar');

  encriptarText.classList.add('sin_texto');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const textAreaValue = textArea.value.trim();

    if (textAreaValue === '') {
      encriptarText.classList.add('sin_texto');
      textNoEncontrado.forEach((element) => {
        element.classList.remove('con_texto');
      });
      botonCopiar.style.display = 'none';
    } else {
      encriptarText.classList.remove('sin_texto');
      textNoEncontrado.forEach((element) => {
        element.classList.add('con_texto');
      });
      botonCopiar.style.display = 'block';
    }

    return textAreaValue;
  });
}

function textoEncriptado(texto) {
  let encryptedText = '';
  for (let i = 0; i < texto.length; i++) {
    encryptedText += String.fromCharCode(texto.charCodeAt(i) + 3);
  }
  return encryptedText;
}

function textoDesencriptado(texto) {
  let decryptedText = '';
  for (let i = 0; i < texto.length; i++) {
    decryptedText += String.fromCharCode(texto.charCodeAt(i) - 3);
  }
  return decryptedText;
}

document.addEventListener('DOMContentLoaded', () => {
  hayTexto();

  const botonEncriptar = document.querySelector('.boton__encriptar');
  const botonDesencriptar = document.querySelector('.boton__desencriptar');
  const encriptarText = document.querySelector(
    '.encriptar__desencriptar__text'
  );
  const botonCopiar = document.querySelector('.boton__copiar');

  botonEncriptar.addEventListener('click', () => {
    const textAreaValue = document
      .querySelector('.text_a_encriptar_desencriptar')
      .value.trim();
    if (textAreaValue !== '') {
      encriptarText.textContent = textoEncriptado(textAreaValue);
      botonCopiar.dataset.texto = encriptarText.textContent;
    }
  });

  botonDesencriptar.addEventListener('click', () => {
    const textAreaValue = document
      .querySelector('.text_a_encriptar_desencriptar')
      .value.trim();
    if (textAreaValue !== '') {
      encriptarText.textContent = textoDesencriptado(textAreaValue);
      botonCopiar.dataset.texto = encriptarText.textContent;
    }
  });

  botonCopiar.addEventListener('click', () => {
    const textoEncriptado = encriptarText.textContent;
    navigator.clipboard
      .writeText(textoEncriptado)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al intentar copiar el texto:', err);
        alert('Error al intentar copiar el texto');
      });
  });
});
