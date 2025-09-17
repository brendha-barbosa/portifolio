function goToHome() {
  document.getElementById('intro').style.display = 'none';  // Esconde introdução
  document.getElementById('home').style.display = 'block';  // Mostra página inicial
}

function goToIntro() {
  document.getElementById('intro').style.display = 'flex';  // Mostra introdução
  document.getElementById('home').style.display = 'none';   // Esconde página inicial
}
