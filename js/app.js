// CARREGAMENTO DOS MENUS
const localMenu = document.getElementById("local-menu");
const generationMenu = document.getElementById("generation-menu");
window.onload = loadMenuLocal();

// VARIÁVEIS PARA MENU E SECTIONS
const overviewPage = document.querySelector(".main");
const studentsPage = document.querySelector(".student-container");
const studentsLink = document.querySelector(".student-local");
const dashboardLink = document.querySelector("#local");
const insertInfo = document.querySelector(".student-container");

// EVENTOS
localMenu.addEventListener("change", loadMenuGeneration);
localMenu.addEventListener("change", clearSections);
generationMenu.addEventListener("change", drawChart);
generationMenu.addEventListener("change", placeName);
generationMenu.addEventListener("change", showDashboard);
generationMenu.addEventListener("change", infoStudents);
dashboardLink.addEventListener("click", clearSections);
studentsLink.addEventListener("click", infoStudents);
studentsLink.addEventListener("click", changeToStudents);

// FUNÇÃO DO MENU DE SEDE
function loadMenuLocal() {
  localMenu.innerHTML = "";
  const name = document.createElement("option");
  name.innerHTML = "Selecione uma sede";
  localMenu.appendChild(name);
  for (place in data) {
    const itemMenu = document.createElement("option");
    itemMenu.value = place;
    if (place === "AQP") {
     itemMenu.innerHTML = "Arequipa";
    } else if (place === "CDMX") {
     itemMenu.innerHTML = "Cidade do México";
    } else if (place === "LIM") {
     itemMenu.innerHTML = "Lima";
    } else {
     itemMenu.innerHTML = "Santiago";
    }
    localMenu.appendChild(itemMenu);
  }
}

// FUNÇÃO DE MENU DE GERAÇÃO
function loadMenuGeneration() {
  const place = localMenu.value;
  generationMenu.innerHTML = "";
  const name = document.createElement("option");
  name.innerHTML = "Selecione uma turma";
  generationMenu.appendChild(name);
  for (generation in data[place]) {
    const itemMenu = document.createElement("option");
    itemMenu.value = generation;
    itemMenu.innerHTML = generation;
    generationMenu.appendChild(itemMenu);
  }
}

// FUNÇÃO DO TITULO
function placeName() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const dashboardLink = document.querySelector("#local");
  if (place === "AQP" && generation === "2016-2") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">AREQUIPA 2016-2</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "AQP" && generation === "2017-1") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">AREQUIPA 2017-1</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "CDMX" && generation === "2017-1") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">CIDADE DO MÉXICO 2017-1</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "CDMX" && generation === "2017-2") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">CIDADE DO MÉXICO 2017-2</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "LIM" && generation ==="2016-2") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">LIMA 2016-2</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "LIM" && generation ==="2017-1") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">LIMA 2017-1</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "LIM" && generation ==="2017-2") {
   dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">LIMA 2017-2</a>`;
   studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "SCL" && generation === "2016-2") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">SANTIAGO 2016-2</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "SCL" && generation === "2017-1") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">SANTIAGO 2017-1</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  } else if (place === "SCL" && generation === "2017-2") {
    dashboardLink.innerHTML = `<a href="#dashboard" class="dash-local">SANTIAGO 2017-2</a>`;
    studentsLink.innerHTML = `<a class="student-local-link student-local-btn" href="#student-container">ACESSAR PERFIL DAS ALUNAS</a>`;
  }
}

// FUNÇÃO PARA APARECER O MAIN
function showDashboard() {
  overviewPage.classList.remove("none");
}

// FUNÇÃO PARA LIMPAR A TELA
function clearSections() {
  insertInfo.innerHTML = "";
  overviewPage.removeAttribute("style");
  localMenu.removeAttribute("style");
  generationMenu.removeAttribute("style");
  studentsLink.removeAttribute("style");
  studentsPage.classList.add("none");
  dashboardLink.removeAttribute("style");
}

// FUNÇÃO PARA CARREGAR PÁGINA DE ALUNAS
function changeToStudents() {
  overviewPage.style.display = "none" ;
  studentsPage.classList.remove("none");
  localMenu.style.visibility = "hidden";
  generationMenu.style.visibility = "hidden";
  studentsLink.style.visibility = "hidden";
  dashboardLink.style.textDecoration = "underline";
}

// FUNÇÃO DAS NOTAS TECH
function techSkills() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const students = data[place][generation]["students"];
  const expectedTechAverage = 1260;
  let studentsTechAverages = [];
  let studentsAboveAverage = 0;
  for (student of students) {
    if (Object.keys(student).length !== 0) {
      const sprints = student["sprints"];
      let sumTech = 0;
      for (sprint of sprints) {
        let techMark = sprint["score"]["tech"];
        sumTech += techMark;
      }
      const techAverage = Math.round(sumTech / sprints.length);
      studentsTechAverages.push([student.name, techAverage]);
      if (techAverage >= expectedTechAverage) {
        studentsAboveAverage += 1;
      }
    }
  }
  return studentsTechAverages;
}

// FUNÇÃO DE APROVAÇÃO DE NOTAS TECH
function techPercentage() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const students = data[place][generation]["students"];
  const expectedTechAverage = 1260;
  let studentsTechAverages = [];
  let totalStudents = 0;
  let studentsAboveAverage = 0;
  for (student of students) {
    if (Object.keys(student).length !== 0) {
      const sprints = student["sprints"];
      let sumTech = 0;
      for (sprint of sprints) {
        const techMark = sprint["score"]["tech"];
        sumTech += techMark;
      }
      const techAverage = Math.round(sumTech / sprints.length);
      studentsTechAverages.push([student.name, techAverage]);
      if (techAverage >= expectedTechAverage) {
        studentsAboveAverage += 1;
      }
    }
  }
  let studentsBellowAverage = (totalStudents += students.length) - studentsAboveAverage;
  let array = [];
  array.push(["aprovadas", studentsAboveAverage], ["reprovadas", studentsBellowAverage]);
  // CRIANDO E PRINTANDO INFORMAÇÕES NA TELA
  const newPTextTotalStudents = document.querySelector(".tech1");
  newPTextTotalStudents.textContent = "de um total de";
  const newPTotalStudents = document.querySelector(".tech2");
  newPTotalStudents.textContent = totalStudents;
  const newPTextTotalAbove = document.querySelector(".tech3");
  newPTextTotalAbove.textContent = "atingiram a meta";
  const newPTotalAbove = document.querySelector(".tech4");
  newPTotalAbove.textContent = studentsAboveAverage;
  return array;
}

// FUNÇÃO DAS NOTAS HSE
function hseSkills() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const students = data[place][generation]["students"];
  const expectedHseAverage = 840;
  let studentsHseAverages = [];
  let studentsAboveAverage = 0;
  for (student of students) {
    if (Object.keys(student).length !== 0) {
      const sprints = student["sprints"];
      let sumHse = 0;
      for (sprint of sprints) {
        const hseMark = sprint["score"]["hse"];
        sumHse += hseMark;
      }
      const hseAverage = Math.round(sumHse / sprints.length);
      studentsHseAverages.push([student.name, hseAverage]);
      if (hseAverage >= expectedHseAverage) {
        studentsAboveAverage += 1;
      }
    }
  }
  return studentsHseAverages;
}

// FUNÇÃO DE APROVAÇÃO DE NOTAS HSE
function hsePercentage() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const students = data[place][generation]["students"];
  const expectedHseAverage = 840;
  let studentsHseAverages = [];
  let totalStudents = 0;
  let studentsAboveAverage = 0;
  for (student of students) {
    if (Object.keys(student).length !== 0) {
      const sprints = student["sprints"];
      let sumHse = 0;
      for (sprint of sprints) {
        let hseMark = sprint["score"]["hse"];
        sumHse += hseMark;
      }
      const hseAverage = Math.round(sumHse / sprints.length);
      studentsHseAverages.push([student.name, hseAverage]);
      if (hseAverage >= expectedHseAverage) {
        studentsAboveAverage += 1;
      }
    }
  }
  let studentsBellowAverage = (totalStudents += students.length) - studentsAboveAverage;
  let array = [];
  array.push(["aprovadas", studentsAboveAverage], ["reprovadas", studentsBellowAverage]);
  // CRIANDO E PRINTANDO INFORMAÇÕES NA TELA
    const newPTextTotalStudents = document.querySelector(".hse1");
    newPTextTotalStudents.textContent = "de um total de";
    const newPTotalStudents = document.querySelector(".hse2");
    newPTotalStudents.textContent = totalStudents;
    const newPTextTotalAbove = document.querySelector(".hse3");
    newPTextTotalAbove.textContent = "atingiram a meta";
    const newPTotalAbove = document.querySelector(".hse4");
    newPTotalAbove.textContent = studentsAboveAverage;
  return array;
}

// FUNÇÃO DE QUANTAS ALUNAS ESTÃO ATIVAS E INATIVAS
function enrollment() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const students = data[place][generation]["students"];
  let generationEnrollment = [];
  let placeEnrollment = [];
  let inactivity = [];
  let activity = [];
  let activeStudents = 0;
  let inactiveStudents = 0;
  for (student of students) {
    if (Object.keys(student).length !== 0) {
      var totalStudents = students.length;
      if (student.active) {
        activeStudents += 1;
        activity.push(student.name);
      } else {
        inactiveStudents += 1;
        inactivity.push(student.name);
      }
      generationEnrollment = [activeStudents, inactiveStudents];
    }
  }
  let array = [["ativas", activeStudents], ["desistentes", inactiveStudents]];
  placeEnrollment.push(generationEnrollment);
  let dropOutPercentage = Math.round((inactiveStudents * 100) / totalStudents);
  // CRIANDO E PRINTANDO INFORMAÇÕES NA TELA
  const newPTextTotalStudents = document.querySelector(".enrollment1");
  newPTextTotalStudents.textContent = "de um total de";
  const newPTotalStudents = document.querySelector(".enrollment2");
  newPTotalStudents.textContent = totalStudents;
  const newPTextTotalAbove = document.querySelector(".enrollment3");
  newPTextTotalAbove.textContent = "desistiram";
  const newPTotalAbove = document.querySelector(".enrollment4");
  newPTotalAbove.textContent = dropOutPercentage.toFixed(1) + "%";
  return array;
}

// FUNÇÃO DE META DOS 70% TECH E HSE
function achievement() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]["students"];
  var expectedTechAverage = 1260;
  var expectedHseAverage = 840;
  var studentsPerPlace = 0;
  var totalStudentsAboveAverage = 0;
  var studentsAboveAvarage = 0;
  var array = [[], [], [], []];
  var studentsTechHseAverages = [];
  for (student of students) {
    if (Object.keys(student).length !== 0) {
      var sprints = student["sprints"];
      var sumTech = 0;
      var sumHse = 0;
      for (index in sprints) {
        if (sprints[index].length !== 0) {
          var techMark = sprints[index]["score"]["tech"];
          var hseMark = sprints[index]["score"]["hse"];
          sumTech += techMark;
          sumHse += hseMark;
          if (student.sprints[index]["score"]["tech"] >= expectedTechAverage && student.sprints[index]["score"]["hse"] >= expectedHseAverage) {
              array[index].push(student.name);
            }
            var result = [];
            for (var i = 0; i < array.length; i++) {
              if (array[i].length !== 0) {
              result.push(["Sprint " + (i+1).toString(), array[i].length]);
            }
          }
        }
      }
    }
    var techAverage = Math.round(sumTech / sprints.length);
    var hseAverage = Math.round(sumHse / sprints.length);
    studentsTechHseAverages.push([student.name, techAverage, hseAverage]);
    if (techAverage >= expectedTechAverage && hseAverage >= expectedHseAverage) {
      studentsAboveAvarage += 1;
    }
  }
  var percentual = Math.round(((totalStudentsAboveAverage += studentsAboveAvarage) * 100) / (studentsPerPlace += students.length));
  // PRINTANDO INFORMAÇÕES NA TELA
  var newPTextTotalStudents = document.querySelector(".achievment1");
  newPTextTotalStudents.textContent = "de um total de";
  var newPPercentualStudents = document.querySelector(".achievment2");
  newPPercentualStudents.textContent = studentsPerPlace;
  var newPTextPercentualStudents = document.querySelector(".achievment3");
  newPTextPercentualStudents.textContent = "atingiram a meta em pelo menos um sprint";
  var newPPercentualStudents = document.querySelector(".achievment4");
  newPPercentualStudents.textContent = percentual.toFixed(1) +"%";
  return result;
}

// FUNÇÃO DE SATISFAÇÃO DAS ALUNAS
function studentsSatisfaction() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const studentsPlace = data[place][generation]["students"];
  const ratings = data[place][generation]["ratings"];
  let noCumpleAll = [];
  let cumpleAll = [];
  let superaAll = [];
  let satisfaction = [];
  let sumNoCumple = 0;
  let sumCumple = 0;
  let sumSupera = 0;
  let percentageSatisfaction = 0;
  let sprintTotal = [];
  const totalStudents = studentsPlace.length;
  for (rating of ratings) {
    const students = rating["student"];
    sprintTotal.push(rating["sprint"]);
    noCumpleAll.push(students["no-cumple"]);
    cumpleAll.push(students["cumple"]);
    superaAll.push(students["supera"]);
  }
  for (noCumple of noCumpleAll) {
    sumNoCumple += noCumple;
  }
  for (cumple of cumpleAll) {
    sumCumple += cumple;
  }
  for (supera of superaAll) {
    sumSupera += supera;
  }
  let sumCumplePlusSupera = sumCumple + sumSupera;
  let convertToStudentsSupera = (sumCumplePlusSupera * totalStudents) / (sprintTotal.length * 100);
  let convertToStudentsNoCumple = (sumNoCumple * totalStudents) / (sprintTotal.length * 100);
  const convertStudensSuperaRound = Math.round(convertToStudentsSupera);
  const convertStudensNoCumpleRound = Math.round(convertToStudentsNoCumple);
  percentageSatisfaction = (Math.round(convertToStudentsSupera) * 100) / totalStudents;
  satisfaction.push(["satisfeitas", convertStudensSuperaRound], ["insatisfeitas", convertStudensNoCumpleRound]);
  // PRINTANDO INFORMAÇÕES NA TELA
  const newPTextSatisfactionCumple = document.querySelector(".satisfaction1");
  newPTextSatisfactionCumple.textContent = "satisfeitas ou excedem";
  const newPPercentageSatisfaction = document.querySelector(".satisfaction2");
  newPPercentageSatisfaction.textContent = percentageSatisfaction.toFixed(1) +"%";
  return satisfaction;
}

// FUNÇÃO DE NET PROMOTER SCORE
function netPromoterScore() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const ratings = data[place][generation]["ratings"];
  let promotersAll = [];
  let passiveAll = [];
  let detractorsAll = [];
  let sprintNps = [];
  let sprintCountNps = [];
  for (rating of ratings) {
    var nps = rating["nps"];
    var sprint = rating["sprint"];
    var countNPS = nps["promoters"] - nps["detractors"];
    promotersAll.push(nps["promoters"]);
    passiveAll.push(nps["passive"]);
    detractorsAll.push(nps["detractors"]);
    sprintNps.push(countNPS);
    sprintCountNps.push(["Sprint " + sprint.toString(), countNPS]);
  }
  let sumPromoters = 0;
  let sumPassive = 0;
  let sumDetractors = 0;
  for (promoter of promotersAll) {
    sumPromoters += promoter;
  }
  for (passive of passiveAll) {
    sumPassive += passive;
  }
  for (detractor of detractorsAll) {
    sumDetractors += detractor;
  }
  let sumAll = (sumPromoters + sumPassive + sumDetractors);
  let totalNPS = sumPromoters - sumDetractors;
  let averageNps = totalNPS / sprintNps.length;
  let percentagePromoters = (sumPromoters * 100) / sumAll;
  let percentagePassive = (sumPassive * 100) / sumAll;
  let percentageDetractors = (sumDetractors * 100) / sumAll;
  // PRINTANDO INFORMAÇÕES NA TELA
  const newPTextAverageNPS = document.querySelector(".nps1");
  newPTextAverageNPS.textContent = "média total de";
  const newPAverageNPS = document.querySelector(".nps2");
  newPAverageNPS.textContent = averageNps.toFixed(1);
  const newPTextPercentagePromoters = document.querySelector(".nps3");
  newPTextPercentagePromoters.textContent = percentagePromoters.toFixed(1) + "% promoters";
  const newPPercentagePassive = document.querySelector(".nps4");
  newPPercentagePassive.textContent = percentagePassive.toFixed(1) + "% passives";
  const newPPercentageDetractors = document.querySelector(".nps5");
  newPPercentageDetractors.textContent = percentageDetractors.toFixed(1) + "% detractors";
  return sprintCountNps;
}

// FUNÇÃO DE MÉDIA DOS MENTORES
function ratingMentors() {
  const place = localMenu.value;
  const generation = generationMenu.value;
  const ratings = data[place][generation]["ratings"];
  let resultMentors = [];
  let marks = [];
  let sprints = [];
  let scores = [];
  let generationAverage = [];
  let placeMentorsMarks = [];
  for (rating of ratings) {
    marks.push(rating["teacher"]);
    sprints.push(rating["sprint"]);
    scores.push(["Sprint " + rating["sprint"].toString(), rating["teacher"]]);
  }
  let sumMentorScore = 0;
  let averageMentorScore = 0;
  for (mark of marks) {
    averageMentorScore = (sumMentorScore += mark) / marks.length;
  }
  let percentageAverageMentor = (averageMentorScore * 100) / 5;
  for (score of scores) {
    resultMentors.push(score);
  }
  generationAverage.push(Number(averageMentorScore.toFixed(1)));
  placeMentorsMarks.push(generation, marks);
  // PRINTANDO INFORMAÇÕES NA TELA
  const newPTextAverageMentor = document.querySelector(".teacher1");
  newPTextAverageMentor.textContent = "média total de";
  const newPAverageMentor = document.querySelector(".teacher2");
  newPAverageMentor.textContent = averageMentorScore.toFixed(1);
  const newPTextPercentageMentor = document.querySelector(".teacher3");
  newPTextPercentageMentor.textContent = "representa";
  const newPPercentageMentor = document.querySelector(".teacher4");
  newPPercentageMentor.textContent = percentageAverageMentor.toFixed(1) + "%";
  return resultMentors;
}

// FUNÇÃO DE MÉDIA DOS JEDI"S
function ratingJedi(){
  const place = localMenu.value;
  const generation = generationMenu.value;
  const ratings = data[place][generation]["ratings"];
  let resultJedi = [];
  let marks = [];
  let sprints = [];
  let scores = [];
  let generationAverage = [];
  let placeJediMarks = [];
  for (rating of ratings) {
    marks.push(rating["jedi"]);
    sprints.push(rating["sprint"]);
    scores.push(["Sprint " + rating["sprint"].toString(), rating["jedi"]]);
  }
  let sumJediScore = 0;
  let averageJediScore = 0;
  for (mark of marks) {
    averageJediScore = (sumJediScore += mark) / marks.length;
  }
  let percentageAverageJedi = (averageJediScore * 100) / 5;
  for (score of scores) {
    resultJedi.push(score);
  }
  generationAverage.push(Number(averageJediScore.toFixed(1)));
  placeJediMarks.push(generation, marks);
  // PRINTANDO INFORMAÇÕES NA TELA
  const newPTextAverageJedi = document.querySelector(".jedi1");
  newPTextAverageJedi.textContent = "média total de";
  const newPAverageJedi = document.querySelector(".jedi2");
  newPAverageJedi.textContent = averageJediScore.toFixed(1);
  const newPTextPercentageJedi = document.querySelector(".jedi3");
  newPTextPercentageJedi.textContent = "representa";
  const newPPercentageJedi = document.querySelector(".jedi4");
  newPPercentageJedi.textContent = percentageAverageJedi.toFixed(1) + "%";
  return resultJedi;
}

// FUNÇÃO PARA EXIBIR INFOS INDIVIDUAIS DAS ESTUDANTES
function infoStudents(){
  const place = localMenu.value;
  const generation = generationMenu.value;
  const students = data[place][generation]["students"];
  const insertInfo = document.querySelector(".student-container");
  insertInfo.innerHTML="";

  for (student of students) {
    const statusStudent = student.active;
    const boxProfile = document.createElement("div");
    const setPhoto = document.createElement("img");
    const boxInfo = document.createElement("div");
    const setName = document.createElement("h3");
    const statusTitle = document.createElement("h5");
    const statusValue = document.createElement("p");
    const addInfo = document.createElement("h5");
    const addInfoText = document.createElement("p");
    const boxScores = document.createElement("div");
    const boxTech = document.createElement("div");
    const techTitle = document.createElement("h5");
    const techText = document.createElement("p");
    const boxHSE = document.createElement("div");
    const hseTitle = document.createElement("h5");
    const hseText = document.createElement("p");

    let scoreTech = 0;
    let averageTech = 0;
    let scoreHSE = 0;
    let averageHSE = 0;
    let sprintLength = student.sprints.length;

    for (sprint of student.sprints) {
      scoreTech += sprint.score.tech;
      scoreHSE += sprint.score.hse;
    }

    averageTech = scoreTech / sprintLength;
    averageHSE = scoreHSE / sprintLength;
    let percentageTech = (averageTech / 1800) * 100;
    let percentageHSE;

    if (isNaN(averageHSE)) {
      percentageHSE = 0;
    } else {
      percentageHSE = (averageHSE / 1200) * 100;
    }

    if (isNaN(averageTech)) {
      percentageTech = 0;
    } else {
      percentageTech = (averageTech / 1800) * 100;
    }

    setPhoto.src = student.photo;
    setName.innerHTML = student.name;
    statusTitle.innerHTML = "STATUS";
    if (statusStudent) {
      statusValue.innerHTML = "Ativa";
    } else {
      statusValue.innerHTML = "Inativa";
    }
    addInfo.innerHTML = "OBSERVAÇÕES";
    addInfoText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    techTitle.innerHTML = "MÉDIA TECH";
    techText.innerHTML = percentageTech.toFixed(1) +"%";
    hseTitle.innerHTML = "MÉDIA HSE";
    hseText.innerHTML = percentageHSE.toFixed(1) +"%";

    boxProfile.classList.add("box-profile");
    setPhoto.classList.add("student-photo");
    boxScores.classList.add("box-scores");
    boxInfo.classList.add("box-info");

    boxProfile.appendChild(setPhoto);
    boxInfo.appendChild(setName);
    boxInfo.appendChild(statusTitle);
    boxInfo.appendChild(statusValue);
    boxInfo.appendChild(addInfo);
    boxInfo.appendChild(addInfoText);
    boxProfile.appendChild(boxInfo);
    boxTech.appendChild(techTitle);
    boxTech.appendChild(techText);
    boxScores.appendChild(boxTech);
    boxHSE.appendChild(hseTitle);
    boxHSE.appendChild(hseText);
    boxScores.appendChild(boxHSE);
    boxProfile.appendChild(boxScores);
    insertInfo.appendChild(boxProfile);
  }
}

// EVENTO PARA GRÁFICOS
google.charts.load("current", {packages: ["corechart", "bar"]});

// INÍCIO DOS GRÁFICOS
function drawChart() {
// GRÁFICO DA MÉDIA DOS SPRINTS TECH
  const data = new google.visualization.DataTable();
  data.addColumn("string", "aluna");
  data.addColumn("number", "nota");
  data.addRows(techSkills());
  const options = {
    "title": "Média de todos sprints",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend":  {position: "end", maxLines: 2},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"60%", height:"60%"},
    "vAxis": {
      title: "média (pts.)",
      titleTextStyle: {fontSize: 11, color: "#444242", fontName: "Montserrat"},
      minValue: 0,
      maxValue: 15,
      gridlines: {count: 10}
    },
    "width": 430,
    "height": 270,
    "colors": ["#FCC9E2"]
  }
  const chart = new google.visualization.ColumnChart(
  document.getElementById("tech-skills"));
  chart.draw(data, options);

// GRÁFICO DA APROVAÇÃO DOS SPRINTS TECH
  const data1 = new google.visualization.DataTable();
  data1.addColumn("string","situação");
  data1.addColumn("number","quantidade");
  data1.addRows(techPercentage());
  const options1 = {
    "title": "Aprovação Tech",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "center", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"70%", height:"50%"},
    "pieHole": 0.4,
    "pieSliceText": "percentage",
    "pieSliceTextStyle": {fontSize: 9, color: "#444242", fontName: "Montserrat"},
    "width": 190,
    "height": 190,
    "colors": ["#FCFF83", "#FCC9E2"]
  }
  const chart1 = new google.visualization.PieChart(document.getElementById("tech-percentage"));
  chart1.draw(data1, options1);

// GRÁFICO DA MÉDIA DOS SPRINTS HSE
  const data2 = new google.visualization.DataTable();
  data2.addColumn("string", "aluna");
  data2.addColumn("number", "nota");
  data2.addRows(hseSkills());
  const options2 = {
    "title": "Média de todos sprints",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {position: "end", maxLines: 2},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"60%",height:"60%"},
    "vAxis": {
      title: "média (pts.)",
      titleTextStyle: {fontSize: 11, color: "#444242", fontName: "Montserrat"},
      minValue: 0,
      maxValue: 15,
      gridlines: {count: 10}
    },
    "width": 430,
    "height": 260,
    "colors": ["#FCC9E2"]
  }
  const chart2 = new google.visualization.ColumnChart(
  document.getElementById("hse-skills"));
  chart2.draw(data2, options2);

// GRÁFICO DA APROVAÇÃO DOS SPRINTS TECH
  const data3 = new google.visualization.DataTable();
  data3.addColumn("string","situação");
  data3.addColumn("number","quantidade");
  data3.addRows(hsePercentage());
  const options3 = {
    "title": "Aprovação HSE",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "center", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"70%", height:"50%"},
    "pieHole": 0.4,
    "pieSliceText": "percentage",
    "pieSliceTextStyle": {fontSize: 9, color: "#444242", fontName: "Montserrat"},
    "width": 220,
    "height": 190,
    "colors": ["#FCFF83", "#FCC9E2"]
  }
  const chart3 = new google.visualization.PieChart(document.getElementById("hse-percentage"));
  chart3.draw(data3, options3);

// GRÁFICO DA QUANTIDADE DE ALUNAS ATIVAS E INATIVAS
  const data4 = new google.visualization.DataTable();
  data4.addColumn("string","situação");
  data4.addColumn("number","quantidade");
  data4.addRows(enrollment());
  const options4 = {
    "title": "Matrículas",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "center", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"90%", height:"50%"},
    "pieHole": 0.4,
    "pieSliceText": "percentage",
    "pieSliceTextStyle": {fontSize: 9, color: "#444242", fontName: "Montserrat"},
    "width": 180,
    "height": 190,
    "colors": ["#FCFF83", "#FCC9E2"]
  }
  const chart4 = new google.visualization.PieChart(document.getElementById("enrollment"));
  chart4.draw(data4, options4);

// GRÁFICO DA META 70% TECH E HSE
  const data5 = new google.visualization.DataTable();
  data5.addColumn("string", "sprint");
  data5.addColumn("number", "alunas aprovadas");
  data5.addRows(achievement());
  const options5 = {
    "title": "Atingiram a meta",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "start", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"70%", height:"50%"},
    "bar": {groupWidth: "50%"},
    "width": 230,
    "height": 190,
    "colors": ["#FCC9E2"],
    "vAxis": {
      title: "quantidade (un.)",
      titleTextStyle: {fontSize: 11, color: "#444242", fontName: "Montserrat"},
      minValue: 0,
      maxValue: 15,
    }
  }
  const chart5 = new google.visualization.ColumnChart(
  document.getElementById("achievement"));
  chart5.draw(data5, options5);

// GRÁFICO DA SATISFAÇÃO DAS ALUNAS
  const data6 = new google.visualization.DataTable();
  data6.addColumn("string","turma");
  data6.addColumn("number","quantidade");
  data6.addRows(studentsSatisfaction());
  const options6 = {
    "title": "Satisfação das Alunas",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "center", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"90%", height:"50%"},
    "pieHole": 0.4,
    "pieSliceText": "value",
    "pieSliceTextStyle": {fontSize: 9, color: "#444242", fontName: "Montserrat"},
    "width": 190,
    "height": 190,
    "colors": ["#FCFF83", "#FCC9E2"]
  }
  const chart6 = new google.visualization.PieChart(document.getElementById("students-satisfaction"));
  chart6.draw(data6, options6);

// GRÁFICO DO NET PROMOTER SCORE
  const data7 = new google.visualization.DataTable();
  data7.addColumn("string","sprint");
  data7.addColumn("number","média nps");
  data7.addRows(netPromoterScore());
  const options7 = {
    "title": "Net Promoter Score",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "start", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"73%", height:"50%"},
    "bar": {groupWidth: "40%"},
    "width": 235,
    "height": 160,
    "colors": ["#FCFF83"],
    "vAxis": {
      title: "média (pts.)",
      titleTextStyle: {fontSize: 11, color: "#444242", fontName: "Montserrat"},
      ticks: [0,20,40,60,80,100],
      maxValue: 100
    }
  }
  const chart7 = new google.visualization.ColumnChart(document.getElementById("net-promoter-score"));
  chart7.draw(data7, options7);

// GRÁFICO DO DESEMPENHO DOS MENTORES
  const data8 = new google.visualization.DataTable();
  data8.addColumn("string","sprint");
  data8.addColumn("number","nota");
  data8.addRows(ratingMentors());
  const options8 = {
    "title": "Desempenho Mentores",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "start", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"80%", height:"50%"},
    "bar": {groupWidth: "40%"},
    "width": 225,
    "height": 160,
    "colors": ["#FCFF83"],
    "vAxis": {
      title: "nota (pts.)",
      titleTextStyle: {fontSize: 11, color: "#444242", fontName: "Montserrat"},
      ticks: [0,1,2,3,4,5],
      maxValue: 5
    }
  }
  const chart8 = new google.visualization.ColumnChart(document.getElementById("teaching-rating"));
  chart8.draw(data8, options8);

// GRÁFICO DO DESEMPENHO DOS JEDI"S
  const data9 = new google.visualization.DataTable();
  data9.addColumn("string","sprint");
  data9.addColumn("number","nota");
  data9.addRows(ratingJedi());
  const options9 = {
    "title": "Desempenho Jedi's",
    "titleTextStyle": {fontSize: 14, color: "#444242", fontName: "Montserrat", bold: true},
    "legend": {alignment: "start", position: "bottom"},
    "legend.textStyle": {fontName: "Montserrat"},
    "chartArea": {top: 50, width:"80%", height:"50%"},
    "bar": {groupWidth: "40%"},
    "width": 225,
    "height": 160,
    "colors": ["#FCFF83"],
    "vAxis": {
      title: "nota (pts.)",
      titleTextStyle: {fontSize: 11, color: "#444242", fontName: "Montserrat"},
      ticks: [0,1,2,3,4,5],
      maxValue: 5
    }
  }
  const chart9 = new google.visualization.ColumnChart(document.getElementById("jedi-rating"));
  chart9.draw(data9, options9);
}