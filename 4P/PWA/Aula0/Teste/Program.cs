using MinhaDLL;

var nome = "fernando";
var disciplina = "PWA";

// MeuConsole.EscrevaLinha("{0}, seja bem-vindo à disciplina {1}!", nome, disciplina);
"{0}, seja bem-vindo à disciplina {1}!".EscrevaLinha(nome.InicialMaiscula(), disciplina);