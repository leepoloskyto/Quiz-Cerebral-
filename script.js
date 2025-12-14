const questions = [
  { q: "Quantos 'F' existem em: OFICIALMENTE O ELEFANTE FOI FELIZ?", a: ["2","3","4","5"], c: 1 },
  { q: "Clique na resposta errada", a: ["Errada","Errada","Errada","Certa"], c: 3 },
  { q: "Qual número vem depois do 5?", a: ["6","Sete","5","Nenhum"], c: 3 },
  { q: "Essa pergunta não tem resposta correta. Qual você escolhe?", a: ["Essa","Aquela","Nenhuma","Todas"], c: 2 },
  { q: "Quantos meses têm 28 dias?", a: ["1","2","12","Depende"], c: 2 },
  { q: "Se errar perde, se acertar perde. O que faz?", a: ["Responde","Não responde","Fecha","Espera"], c: 3, wait: true },
  { q: "Qual palavra está escrita errado?", a: ["Errado","Certo","Escrita","Errado"], c: 0 },
  { q: "Clique no botão invisível", a: [], invisible: true },
  { q: "Qual é maior?", a: ["1","2","10","Todos iguais"], c: 2 },
  { q: "Qual alternativa NÃO deve ser clicada?", a: ["Essa","Aquela","Nenhuma","Todas"], c: 2 },
  { q: "Essa pergunta vale zero pontos. Quanto ganha?", a: ["0","1","-1","Nenhum"], c: 0 },
  { q: "2 - 4 - 8 - ?", a: ["10","12","16","Nenhum"], c: 2 },
  { q: "Qual resposta é falsa?", a: ["Essa é verdadeira","Essa é falsa","Nenhuma","Todas"], c: 1 },
  { q: "Não clique em nada", a: [], wait: true },
  { q: "Qual letra vem depois do Z?", a: ["A","Nada","AA","Z"], c: 1 },
  { q: "Qual alternativa está correta?", a: ["Nenhuma","Todas","Essa","Aquela"], c: 2 },
  { q: "Essa pergunta é a número...", a: ["17","Dezessete","Ambas","Nenhuma"], c: 2 },
  { q: "Quanto é 1 + 1 × 0?", a: ["0","1","2","10"], c: 1 },
  { q: "Clique na alternativa que não existe", a: ["A","B","C","—"], c: 3 },
  { q: "Você chegou ao final. Qual botão encerra?", a: ["Sair","Reiniciar","Nenhum","Todos"], c: 2 }
];

let current = 0;

const menu = document.getElementById("menu");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const message = document.getElementById("message");

document.getElementById("startBtn").onclick = () => {
  menu.classList.add("hidden");
  quiz.classList.remove("hidden");
  loadQuestion();
};

function loadQuestion() {
  answersEl.innerHTML = "";
  const q = questions[current];
  questionEl.textContent = q.q;

  if (q.wait) {
    setTimeout(() => next(), 3000);
    return;
  }

  if (q.invisible) {
    const btn = document.createElement("button");
    btn.style.opacity = "0";
    btn.textContent = "Invisível";
    btn.onclick = next;
    answersEl.appendChild(btn);
    return;
  }

  q.a.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => {
      if (i === q.c) next();
      else gameOver();
    };
    answersEl.appendChild(btn);
  });
}

function next() {
  current++;
  if (current >= questions.length) {
    quiz.classList.add("hidden");
    message.classList.remove("hidden");
    message.textContent = "Seu cérebro sobreviveu 🧠";
  } else {
    loadQuestion();
  }
}

function gameOver() {
  alert("Errou 😈");
  location.reload();
    }
