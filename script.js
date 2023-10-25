function verificar() {
  var result = document.getElementById("txtrespo");
  var res = document.getElementById("res");
  var audio = document.querySelector("audio");
  var audio2 = document.getElementById("audio2");

  var resp = result.value;
  res.innerHTML = `Você disse <strong>${resp}</strong> para a resposta`;

  var img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (resp == "Sim" || resp == "sim") {
    res.innerHTML = `Meu amor eu também te amo &#128525; `;
    img.setAttribute("src", "JuLu.png");
    audio.currentTime = 0.9;
    audio.play();
    document.body.style.background = "#c40b23";
  } else if (resp == "Não" || resp == "não" || resp == "nao") {
    res.innerHTML = `Você não me ama? Que tristeza &#128532;`;
    img.setAttribute("src", "chorando.png");
    document.body.style.background = "#436cf5";
    audio2.play();
  } else if (resp == "Claro que sim") {
    res.innerHTML = ` AAAAAAAAAAAA VOCÊ É INCRÍVEl `;
  } else {
    window.alert((resp = "[ERRO] Essa resposta não vale"));
  }
  res.appendChild(img);
}
