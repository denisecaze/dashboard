// CARREGAMENTO DOS MENUS
var localMenu = document.getElementById("local-menu");
var generationMenu = document.getElementById("generation-menu");
window.onload = loadMenuLocal();

// VARIÁVEIS PARA MENU E SECTIONS
var menu = document.querySelector(".menu");
var selectorMenu = document.querySelector("group-menu")
var overviewPage = document.querySelector(".main");
var studentsPage = document.querySelector(".student-container");
var studentsLink = document.querySelector(".student-local");
var dashboardLink = document.querySelector("#local");
var insertInfo = document.querySelector(".student-container");
var groupLocal = document.querySelector(".group-local");


// EVENTOS
localMenu.addEventListener("change", loadMenuGeneration);
localMenu.addEventListener("change", clearSections);
generationMenu.addEventListener("change", drawChart);
generationMenu.addEventListener("change", placeName);
generationMenu.addEventListener("change", infoStudents);
dashboardLink.addEventListener("click", clearSections);
studentsLink.addEventListener("click", infoStudents);
studentsLink.addEventListener("click", changeToStudents);

// EVENTOS PARA GRÁFICOS
google.charts.load("current", {packages: ["corechart", "bar"]});
google.charts.setOnLoadCallback(techSkills);
google.charts.setOnLoadCallback(techPercentage);
google.charts.setOnLoadCallback(hseSkills);
google.charts.setOnLoadCallback(hsePercentage);
google.charts.setOnLoadCallback(enrollment);
google.charts.setOnLoadCallback(achievement);
google.charts.setOnLoadCallback(studentsSatisfaction);
google.charts.setOnLoadCallback(netPromoterScore);
google.charts.setOnLoadCallback(ratingMentors);
google.charts.setOnLoadCallback(ratingJedi);

// FUNÇÕES DE MENU
// FUNÇÃO DO MENU DE SEDE
function loadMenuLocal() {
 var dropMenu = document.getElementById("local-menu");
 dropMenu.innerHTML = "";
 var name = document.createElement("option");
 name.innerHTML = "Selecione uma sede";
 name.value = "name";
 dropMenu.appendChild(name);
 for (place in data) {
   var itemMenu = document.createElement("option");
   itemMenu.value = place;
   if (place === 'AQP') {
     itemMenu.innerHTML = "Arequipa";
   } else if (place === 'CDMX') {
     itemMenu.innerHTML = "Cidade do México";
   } else if (place === 'LIM') {
     itemMenu.innerHTML = "Lima";
   } else {
     itemMenu.innerHTML = "Santiago";
   }
   dropMenu.appendChild(itemMenu);
 }
}

// FUNÇÃO DE MENU DE GERAÇÃO
function loadMenuGeneration() {
  var place = localMenu.value;
  var dropMenu = document.getElementById("generation-menu");
  dropMenu.innerHTML = "";
  var name = document.createElement("option");
  name.innerHTML = "Selecione uma turma";
  name.value = "name";
  dropMenu.appendChild(name);
  for(generation in data[place]){
    var itemMenu = document.createElement("option");
    itemMenu.value = generation;
    itemMenu.innerHTML = generation;
    dropMenu.appendChild(itemMenu);
  }
}

// FUNÇÃO DO TITULO
function placeName() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var dashboardLink = document.querySelector('#local');
  if (place === 'AQP' && generation === '2016-2') {
    dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>AREQUIPA 2016-2</a>";
    studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'AQP' && generation === '2017-1') {
      dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>AREQUIPA 2017-1</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'CDMX' && generation === '2017-1') {
      dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>CIDADE DO MÉXICO 2017-1</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'CDMX' && generation === '2017-2') {
      dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>CIDADE DO MÉXICO 2017-2</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'LIM' && generation ==='2016-2') {
      dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>LIMA 2016-2</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'LIM' && generation ==='2017-1') {
      dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>LIMA 2017-1</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'LIM' && generation ==='2017-2') {
     dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>LIMA 2017-2</a>";
     studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'SCL' && generation === '2016-2') {
      dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>SANTIAGO 2016-2</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'SCL' && generation === '2017-1') {
     dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>SANTIAGO 2017-1</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  } else if (place === 'SCL' && generation === '2017-2') {
      dashboardLink.innerHTML = "<a href='#dashboard' class='dash-local'>SANTIAGO 2017-2</a>";
      studentsLink.innerHTML = "<button class='student-local-btn'><a class='student-local-link'href='#student-container'>ACESSAR PERFIL DAS ALUNAS</a></button>";
  }
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


// FUNÇÕES DE DADOS
// FUNÇÃO DAS NOTAS TECH
function techSkills() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]["students"];
  var studentsTechAverages = [];
  var expectedTechAverage = 1260;
  var totalStudents = 0;
  var studentsAboveAverage = 0;
  for (student in students) {
    if (Object.keys(students[student]).length !== 0) {
      var sprints = students[student]["sprints"];
      var sumTech = 0;
      var sumHse = 0;
      for (sprint in sprints) {
        var techMark = sprints[sprint]["score"]["tech"];
        sumTech += techMark;
      }
      var techAverage = Math.round(sumTech / sprints.length);
      studentsTechAverages.push([students[student].name, techAverage]);
      if (techAverage >= 1260) {
        studentsAboveAverage += 1;
      }
    }
  }
  totalStudents += students.length;
  var percentual = Math.round((studentsAboveAverage * 100) / totalStudents);
  return studentsTechAverages;
}

// FUNÇÃO DE APROVAÇÃO DE NOTAS TECH
function techPercentage() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]["students"];
  var studentsTechAverages = [];
  var expectedTechAverage = 1260;
  var totalStudents = 0;
  var studentsAboveAverage = 0;
  for (student in students) {
    if (Object.keys(students[student]).length !== 0) {
      var sprints = students[student]["sprints"];
      var sumTech = 0;
      var sumHse = 0;
      for (sprint in sprints) {
        var techMark = sprints[sprint]["score"]["tech"];
        sumTech += techMark;
      }
      var techAverage = Math.round(sumTech / sprints.length);
      studentsTechAverages.push([students[student].name, techAverage]);
      if (techAverage >= 1260) {
        studentsAboveAverage += 1;
      }
    }
  }
  totalStudents += students.length;
  var studentsBellowAverage = totalStudents - studentsAboveAverage;
  var array = [];
  array.push(["aprovadas", studentsAboveAverage], ["reprovadas", studentsBellowAverage]);
  var techPercentage = Math.round((studentsAboveAverage * 100) / totalStudents);
  // CRIANDO E PRINTANDO INFORMAÇÕES NA TELA
  var newPTextTotalStudents = document.querySelector('.tech1');
  newPTextTotalStudents.textContent = "de um total de";
  var newPTotalStudents = document.querySelector('.tech2');
  newPTotalStudents.textContent = totalStudents;
  var newPTextTotalAbove = document.querySelector('.tech3');
  newPTextTotalAbove.textContent = "atingiram a meta";
  var newPTotalAbove = document.querySelector('.tech4');
  newPTotalAbove.textContent = studentsAboveAverage;
  return array;
}

// FUNÇÃO DAS NOTAS HSE
function hseSkills() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]["students"];
  var studentsHseAverages = [];
  var expectedHseAverage = 840;
  var totalStudents = 0;
  var studentsAboveAverage = 0;
  for (student in students) {
    if (Object.keys(students[student]).length !== 0) {
      var sprints = students[student]["sprints"];
      var sumHse = 0;
      for (sprint in sprints) {
        var hseMark = sprints[sprint]["score"]["hse"];
        sumHse += hseMark;
      }
      var hseAverage = Math.round(sumHse / sprints.length);
      studentsHseAverages.push([students[student].name, hseAverage]);
      if (hseAverage >= 840) {
        studentsAboveAverage += 1;
      }
    }
  }
  totalStudents += students.length;
  var percentual = Math.round((studentsAboveAverage * 100) / totalStudents);
  return studentsHseAverages;
}

// FUNÇÃO DE APROVAÇÃO DE NOTAS HSE
function hsePercentage() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]["students"];
  var studentsHseAverages = [];
  var expectedHseAverage = 840;
  var totalStudents = 0;
  var studentsAboveAverage = 0;
  for (student in students) {
    if (Object.keys(students[student]).length !== 0) {
      var sprints = students[student]["sprints"];
      var sumHse = 0;
      for (sprint in sprints) {
        var hseMark = sprints[sprint]["score"]["hse"];
        sumHse += hseMark;
      }
      var hseAverage = Math.round(sumHse / sprints.length);
      studentsHseAverages.push([students[student].name, hseAverage]);
      if (hseAverage >= 840) {
        studentsAboveAverage += 1;
      }
    }
  }
  totalStudents += students.length;
  var studentsBellowAverage = totalStudents - studentsAboveAverage;
  var array = [];
  array.push(["aprovadas", studentsAboveAverage], ["reprovadas", studentsBellowAverage]);
  var hsePercentage = Math.round((studentsAboveAverage * 100) / totalStudents);
  // CRIANDO E PRINTANDO INFORMAÇÕES NA TELA
    var newPTextTotalStudents = document.querySelector(".hse1");
    newPTextTotalStudents.textContent = "de um total de";
    var newPTotalStudents = document.querySelector(".hse2");
    newPTotalStudents.textContent = totalStudents;
    var newPTextTotalAbove = document.querySelector(".hse3");
    newPTextTotalAbove.textContent = "atingiram a meta";
    var newPTotalAbove = document.querySelector(".hse4");
    newPTotalAbove.textContent = studentsAboveAverage;
  return array;
}

// FUNÇÃO DE QUANTAS ALUNAS ESTÃO ATIVAS E INATIVAS
function enrollment() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var placeEnrollment = [];
  var students = data[place][generation]["students"];
  var activeStudents = 0;
  var inactiveStudents = 0;
  var activity = [];
  var inactivity = [];
  var generationEnrollment = [];
  for (student in students) {
    if (Object.keys(students[student]).length !== 0) {
      var totalStudents = students.length;
      if (students[student].active === true) {
        activeStudents += 1;
        activity.push(students[student].name);
      } else {
        inactiveStudents += 1;
        inactivity.push(students[student].name);
      }
      generationEnrollment = [activeStudents, inactiveStudents];
    }
  }
  var array = [["ativas", activeStudents], ["desistentes", inactiveStudents]];
  placeEnrollment.push(generationEnrollment);
  var dropOutPercentage = Math.round((inactiveStudents * 100) / totalStudents);
  // CRIANDO E PRINTANDO INFORMAÇÕES NA TELA
  var newPTextTotalStudents = document.querySelector(".enrollment1");
  newPTextTotalStudents.textContent = "de um total de";
  var newPTotalStudents = document.querySelector(".enrollment2");
  newPTotalStudents.textContent = totalStudents;
  var newPTextTotalAbove = document.querySelector(".enrollment3");
  newPTextTotalAbove.textContent = "desistiram";
  var newPTotalAbove = document.querySelector(".enrollment4");
  newPTotalAbove.textContent = dropOutPercentage.toFixed(1) + "%";
  return array;
}

// FUNÇÃO DE META dos 70% TECH E HSE
function achievement() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]['students'];
  var expectedTechAverage = 1260;
  var expectedHseAverage = 840;
  var studentsPerPlace = 0;
  var totalStudentsAboveAverage = 0;
  var studentsAboveAvarage = 0;
  var studentsUnderAvarage = 0;
  var array = [[], [], [], []];
  var studentsTechHseAverages = [];
  for (student in students) {
    if (Object.keys(students[student]).length !== 0) {
      var totalStudentsAboveAverage = 0;
      var sprints = students[student]['sprints'];
      var sumTech = 0;
      var sumHse = 0;
      for (sprint in sprints) {
        if (sprints[sprint].length !== 0) {
          var numberSprint = sprints[sprint]['number'];
          var techMark = sprints[sprint]['score']['tech'];
          var hseMark = sprints[sprint]['score']['hse'];
          sumTech += techMark;
          sumHse += hseMark;
            if (students[student].sprints[sprint]['score']['tech'] >= expectedTechAverage && students[student].sprints[sprint]['score']['hse'] >= expectedHseAverage) {
              array[sprint].push(students[student].name);
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
    studentsTechHseAverages.push([students[student].name, techAverage, hseAverage]);
    if (techAverage >= expectedTechAverage && hseAverage >= expectedHseAverage) {
      studentsAboveAvarage += 1;
    }
  }
  studentsPerPlace += students.length;
  totalStudentsAboveAverage += studentsAboveAvarage;
  studentsUnderAvarage = studentsPerPlace - studentsAboveAvarage;
  var percentual = Math.round((totalStudentsAboveAverage * 100) / studentsPerPlace);
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
  var place = localMenu.value;
  var generation = generationMenu.value;
  var studentsPlace = data[place][generation]['students'];
  var ratings = data[place][generation]["ratings"];
  var noCumpleAll = [];
  var cumpleAll = [];
  var superaAll = [];
  var satisfaction = [];
  var sumNoCumple = 0;
  var sumCumple = 0;
  var sumSupera = 0;
  var sumCumplePlusSupera = 0;
  var sumAll = 0;
  var percentageSatisfaction = 0;
  var sprintTotal = [];
  var convertToStudentsSupera = 0;
  var convertToStudentsNoCumple = 0;
  for (studentPlace in studentsPlace) {
  var totalStudents = studentsPlace.length;
  }
  for (rating in ratings) {
    var sprint = ratings[rating]['sprint'];
    sprintTotal.push(sprint);
    var students = ratings[rating]["student"];
    for (student in students) {
    var noCumple = students["no-cumple"];
    var cumple = students["cumple"];
    var supera = students["supera"];
    }
    noCumpleAll.push(noCumple);
    cumpleAll.push(cumple);
    superaAll.push(supera);
  }
  for (scores in noCumpleAll) {
    sumNoCumple += noCumpleAll[scores];
  }
  for (scores in cumpleAll) {
    sumCumple += cumpleAll[scores];
  }
  for (scores in superaAll) {
    sumSupera += superaAll[scores];
  }
  sumCumplePlusSupera = sumCumple + sumSupera;
  sumAll = sumNoCumple + sumCumple + sumSupera;
  convertToStudentsSupera = (sumCumplePlusSupera * totalStudents) / (sprintTotal.length * 100);
  convertToStudentsNoCumple = (sumNoCumple * totalStudents) / (sprintTotal.length * 100);
  var convertStudensSuperaRound = Math.round(convertToStudentsSupera);
  var convertStudensNoCumpleRound = Math.round(convertToStudentsNoCumple);
  percentageSatisfaction = (Math.round(convertToStudentsSupera) * 100) / totalStudents;
  satisfaction.push(["satisfeitas", convertStudensSuperaRound], ["insatisfeitas", convertStudensNoCumpleRound]);
  // PRINTANDO INFORMAÇÕES NA TELA
  var newPTextSatisfactionCumple = document.querySelector(".satisfaction1");
  newPTextSatisfactionCumple.textContent = "satisfeitas ou excedem";
  var newPPercentageSatisfaction = document.querySelector(".satisfaction2");
  newPPercentageSatisfaction.textContent = percentageSatisfaction.toFixed(1) +"%";
  return satisfaction;
}

// FUNÇÃO DE NET PROMOTER SCORE
function netPromoterScore() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var ratings = data[place][generation]["ratings"];
  var promotersAll = [];
  var passiveAll = [];
  var detractorsAll = [];
  var sprintNps = [];
  var sprintCountNps = [];
  for (rating in ratings) {
    var nps = ratings[rating]["nps"];
    var sprint = ratings[rating]["sprint"];
    for (n in nps) {
      var promoters = nps["promoters"];
      var passive = nps["passive"];
      var detractors = nps["detractors"];
      var countNPS = promoters - detractors;
    }
    promotersAll.push(promoters);
    passiveAll.push(passive);
    detractorsAll.push(detractors);
    sprintNps.push(countNPS);
    sprintCountNps.push(["Sprint " + sprint.toString(), countNPS]);
  }
  var sumPromoters = 0;
  var sumPassive = 0;
  var sumDetractors = 0;
  var sumAll = 0;
  var averageNps = 0;
  var totalNPS = 0;
  var percentagePromoters = 0;
  var percentagePassive = 0;
  var percentageDetractors = 0;
  for (scores in promotersAll) {
    sumPromoters += promotersAll[scores];
  }
  for (scores in passiveAll) {
    sumPassive += passiveAll[scores];
  }
  for (scores in detractorsAll) {
    sumDetractors += detractorsAll[scores];
  }
  sumAll = (sumPromoters + sumPassive + sumDetractors);
  totalNPS = sumPromoters - sumDetractors;
  averageNps = totalNPS / sprintNps.length;
  percentagePromoters = (sumPromoters * 100) / sumAll;
  percentagePassive = (sumPassive * 100) / sumAll;
  percentageDetractors = (sumDetractors * 100) / sumAll;
  percentageNPS = (totalNPS * 100) / sumAll;
  // PRINTANDO INFORMAÇÕES NA TELA
  var newPTextAverageNPS = document.querySelector(".nps1");
  newPTextAverageNPS.textContent = "média total de";
  var newPAverageNPS = document.querySelector(".nps2");
  newPAverageNPS.textContent = averageNps.toFixed(1);
  var newPTextPercentagePromoters = document.querySelector(".nps3");
  newPTextPercentagePromoters.textContent = percentagePromoters.toFixed(1) + "% promoters";
  var newPPercentagePassive = document.querySelector(".nps4");
  newPPercentagePassive.textContent = percentagePassive.toFixed(1) + "% passives";
  var newPPercentageDetractors = document.querySelector(".nps5");
  newPPercentageDetractors.textContent = percentageDetractors.toFixed(1) + "% detractors";
  return sprintCountNps;
}

// FUNÇÃO DE MÉDIA DOS MENTORES
function ratingMentors() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var ratings = data[place][generation]["ratings"];
  var resultMentors = [];
  var marks = [];
  var sprints = [];
  var scores = [];
  var generationAverage = [];
  var placeMentorsMarks = [];
  for (rating in ratings) {
    var mentors = ratings[rating]["teacher"];
    var sprint = ratings[rating]["sprint"];
    marks.push(mentors);
    sprints.push(sprint);
    scores.push(["Sprint " + sprint.toString(), mentors]);
  }
  var sumMentorScore = 0;
  var averageMentorScore = 0;
  var percentageAverageMentor = 0;
  for (mark in marks) {
    sumMentorScore += marks[mark];
    averageMentorScore = sumMentorScore / marks.length;
  }
  percentageAverageMentor = (averageMentorScore * 100) / 5;
  for (score of scores) {
  resultMentors.push(score);
  }
  generationAverage.push(Number(averageMentorScore.toFixed(1)));
  placeMentorsMarks.push(generation, marks);
  // PRINTANDO INFORMAÇÕES NA TELA
  var newPTextAverageMentor = document.querySelector(".teacher1");
  newPTextAverageMentor.textContent = "média total de";
  var newPAverageMentor = document.querySelector(".teacher2");
  newPAverageMentor.textContent = averageMentorScore.toFixed(1);
  var newPTextPercentageMentor = document.querySelector(".teacher3");
  newPTextPercentageMentor.textContent = "representa";
  var newPPercentageMentor = document.querySelector(".teacher4");
  newPPercentageMentor.textContent = percentageAverageMentor.toFixed(1) + "%";
  return resultMentors;
}

// FUNÇÃO DE MÉDIA DOS JEDI'S
function ratingJedi(){
  var place = localMenu.value;
  var generation = generationMenu.value;
  var ratings = data[place][generation]["ratings"];
  var resultJedi = [];
  var marks = [];
  var sprints = [];
  var scores = [];
  var generationAverage = [];
  var placeJediMarks = [];
  for (rating in ratings) {
    var jedi = ratings[rating]["jedi"];
    var sprint = ratings[rating]["sprint"];
    marks.push(jedi);
    sprints.push(sprint);
    scores.push(["Sprint " + sprint.toString(), jedi]);
  }
  var sumJediScore = 0;
  var averageJediScore = 0;
  var percentageAverageJedi = 0;

  for (mark in marks) {
    sumJediScore += marks[mark];
    averageJediScore = sumJediScore / marks.length;
  }
  percentageAverageJedi = (averageJediScore * 100) / 5;
  for (score of scores) {
  resultJedi.push(score);
  }
  generationAverage.push(Number(averageJediScore.toFixed(1)));
  placeJediMarks.push(generation, marks);
  // PRINTANDO INFORMAÇÕES NA TELA
  var newPTextAverageJedi = document.querySelector(".jedi1");
  newPTextAverageJedi.textContent = "média total de";
  var newPAverageJedi = document.querySelector(".jedi2");
  newPAverageJedi.textContent = averageJediScore.toFixed(1);
  var newPTextPercentageJedi = document.querySelector(".jedi3");
  newPTextPercentageJedi.textContent = "representa";
  var newPPercentageJedi = document.querySelector(".jedi4");
  newPPercentageJedi.textContent = percentageAverageJedi.toFixed(1) + "%";
  return resultJedi;
}





function infoStudents(){
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]["students"];
  var insertInfo = document.querySelector(".student-container");
  insertInfo.innerHTML="";

  for (student of students) {
    var statusStudent = student.active;
    var boxProfile = document.createElement("div");
    var setPhoto = document.createElement("img");
    var boxInfo = document.createElement("div");
    var setName = document.createElement("h3");
    var statusTitle = document.createElement("h5");
    var statusValue = document.createElement("p");
    var addInfo = document.createElement("h5");
    var addInfoText = document.createElement("p");
    var boxScores = document.createElement("div");
    var boxTech = document.createElement("div");
    var techTitle = document.createElement("h5");
    var techText = document.createElement("p");
    var boxHSE = document.createElement("div");
    var hseTitle = document.createElement("h5");
    var hseText = document.createElement("p");

    var scoreTech = 0;
    var averageTech = 0;
    var scoreHSE = 0;
    var averageHSE = 0;
    var sprintLength = student.sprints.length;

    for (sprint of student.sprints) {
      scoreTech += sprint.score.tech;
      scoreHSE += sprint.score.hse;
    }

    averageTech = scoreTech / sprintLength;
    averageHSE = scoreHSE / sprintLength;
    var percentageTech = (averageTech / 1800) * 100;
    var percentageHSE;

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
    if (statusStudent == true) {
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








// INÍCIO DOS GRÁFICOS
function drawChart() {
// GRÁFICO DA MÉDIA DOS SPRINTS TECH
  var data = new google.visualization.DataTable();
  data.addColumn("string", "aluna");
  data.addColumn("number", "nota");
  data.addRows(techSkills());
  var options = {
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
  };
  var chart = new google.visualization.ColumnChart(
  document.getElementById("tech-skills"));
  chart.draw(data, options);

// GRÁFICO DA APROVAÇÃO DOS SPRINTS TECH
  var data1 = new google.visualization.DataTable();
  data1.addColumn("string","situação");
  data1.addColumn("number","quantidade");
  data1.addRows(techPercentage());
  var options1 = {
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
  };
  var chart1 = new google.visualization.PieChart(document.getElementById("tech-percentage"));
  chart1.draw(data1, options1);

// GRÁFICO DA MÉDIA DOS SPRINTS HSE
  var data2 = new google.visualization.DataTable();
  data2.addColumn("string", "aluna");
  data2.addColumn("number", "nota");
  data2.addRows(hseSkills());
  var options2 = {
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
  };
  var chart2 = new google.visualization.ColumnChart(
  document.getElementById("hse-skills"));
  chart2.draw(data2, options2);

// GRÁFICO DA APROVAÇÃO DOS SPRINTS TECH
  var data3 = new google.visualization.DataTable();
  data3.addColumn("string","situação");
  data3.addColumn("number","quantidade");
  data3.addRows(hsePercentage());
  var options3 = {
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
  };
  var chart3 = new google.visualization.PieChart(document.getElementById("hse-percentage"));
  chart3.draw(data3, options3);

// GRÁFICO DA QUANTIDADE DE ALUNAS ATIVAS E INATIVAS
  var data4 = new google.visualization.DataTable();
  data4.addColumn("string","situação");
  data4.addColumn("number","quantidade");
  data4.addRows(enrollment());
  var options4 = {
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
  };
  var chart4 = new google.visualization.PieChart(document.getElementById("enrollment"));
  chart4.draw(data4, options4);

// GRÁFICO DA META 70% TECH E HSE
  var data5 = new google.visualization.DataTable();
  data5.addColumn('string', 'sprint');
  data5.addColumn('number', 'alunas aprovadas');
  data5.addRows(achievement());
  var options5 = {
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
  };
  var chart5 = new google.visualization.ColumnChart(
  document.getElementById('achievement'));
  chart5.draw(data5, options5);

// GRÁFICO DA SATISFAÇÃO DAS ALUNAS
  var data6 = new google.visualization.DataTable();
  data6.addColumn("string","turma");
  data6.addColumn("number","quantidade");
  data6.addRows(studentsSatisfaction());
  var options6 = {
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
  };
  var chart6 = new google.visualization.PieChart(document.getElementById("students-satisfaction"));
  chart6.draw(data6, options6);

// GRÁFICO DO NET PROMOTER SCORE
  var data7 = new google.visualization.DataTable();
  data7.addColumn("string","sprint");
  data7.addColumn("number","média nps");
  data7.addRows(netPromoterScore());
  var options7 = {
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
  };
  var chart7 = new google.visualization.ColumnChart(document.getElementById("net-promoter-score"));
  chart7.draw(data7, options7);

// GRÁFICO DO DESEMPENHO DOS MENTORES
  var data8 = new google.visualization.DataTable();
  data8.addColumn("string","sprint");
  data8.addColumn("number","nota");
  data8.addRows(ratingMentors());
  var options8 = {
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
  };
  var chart8 = new google.visualization.ColumnChart(document.getElementById("teaching-rating"));
  chart8.draw(data8, options8);

// GRÁFICO DO DESEMPENHO DOS JEDI'S
  var data9 = new google.visualization.DataTable();
  data9.addColumn("string","sprint");
  data9.addColumn("number","nota");
  data9.addRows(ratingJedi());
  var options9 = {
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
  };
  var chart9 = new google.visualization.ColumnChart(document.getElementById("jedi-rating"));
  chart9.draw(data9, options9);
}
