function showFlowchart(id, event) {
  // Esconder todos os fluxogramas
  const flowcharts = document.querySelectorAll(".flowchart");
  flowcharts.forEach((chart) => chart.classList.remove("active"));

  // Mostrar o fluxograma selecionado
  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add("active");
  }

  // Atualizar botões de navegação
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  if (event && event.target) {
    event.target.classList.add("active");
  }

  // Scroll suave para o topo do conteúdo
  document.querySelector(".content").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
