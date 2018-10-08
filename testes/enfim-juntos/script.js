// ============
//CONFIGURAR LEGENDAS DE GRÁFICOS, UNIDADES, PORCENTAGENS, ETC
// LIMPAR ESSE JS, NOMES DE VAR, CONSOLE, ETC
// COMENTAR CÓDIGO
// VIRAR NOMES "ESTUDANTES" E "EQUIPE" NAS LABELS
// DIZER EM QUAL SEDE ESTÁ NA PÁGINA DO DASHBOARD
// INSERIR INFOS QUADRADINHOS
// ============


var localMenu = document.getElementById("local-menu");
var generationMenu = document.getElementById("generation-menu");

window.onload = loadMenuLocal();
localMenu.addEventListener("change", loadMenuGeneration);
generationMenu.addEventListener("change", drawBasic);

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(notas);
google.charts.setOnLoadCallback(notas1);
google.charts.setOnLoadCallback(enrollment);
google.charts.setOnLoadCallback(studentsSatisfaction);
google.charts.setOnLoadCallback(netPromoterScore);
google.charts.setOnLoadCallback(meanMentors);
google.charts.setOnLoadCallback(meanJedi);



function loadMenuLocal(){
  var dropMenu = document.getElementById("local-menu");
  dropMenu.innerHTML = "";
  var name = document.createElement("option");
  name.innerHTML = "Sede";
  name.value = "name";
  dropMenu.appendChild(name);
  for(place in data){
    var itemMenu = document.createElement("option");
    console.log(place);
    itemMenu.value = place;
    itemMenu.innerHTML = place;
    dropMenu.appendChild(itemMenu);
  }
}

function loadMenuGeneration(){
  var place = localMenu.value;
  var dropMenu = document.getElementById("generation-menu");
  dropMenu.innerHTML = "";
  var name = document.createElement("option");
  name.innerHTML = "Turma";
  name.value = "name";
  dropMenu.appendChild(name);
  for(generation in data[place]){
    // var group = data[place][generation];
    console.log(place, generation);
    var itemMenu = document.createElement("option");
    itemMenu.value = generation;
    itemMenu.innerHTML = generation;
    dropMenu.appendChild(itemMenu);
  }
}

function notas() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]['students'];
  // console.log(students);
  var array = [];
  var studentsTechAverages = [];
  var expectedTechAverage = 1260;
  var totalStudents = 0;
  var studentsAboveAverage = 0;
  for (student in students) {
    // console.log(students[student].name);
    var sprints = students[student]['sprints'];
    var sumTech = 0;
    var sumHse = 0;
    for (sprint in sprints) {
      var techMark = sprints[sprint]['score']['tech'];
      sumTech += techMark;
      // console.log(techMark);
    }
    // console.log(sumTech);
    // console.log(sprints.length); 
    var techAverage = Math.ceil(sumTech / sprints.length);
    // console.log(techAverage); 
    studentsTechAverages.push([students[student].name, techAverage]);
    if (techAverage >= 1260) {
      studentsAboveAverage += 1;
    }
  }
  totalStudents += students.length;
  console.log(studentsTechAverages);
  // console.log(studentsAboveAvaragePerGeneration);
  console.log(studentsAboveAverage);
  console.log(totalStudents);
  var percentual = Math.round((studentsAboveAverage * 100) / totalStudents);
  console.log(percentual);
  // var notas = document.createElement("p");
  // notas.textContent = percentual;
  // testePrint.append(notas);
  return studentsTechAverages;
}

function notas1() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var students = data[place][generation]['students'];
  // console.log(students);
  var array = [];
  var studentsHseAverages = [];
  var expectedHseAverage = 840;
  var totalStudents = 0;
  var studentsAboveAverage = 0;
  for (student in students) {
    // console.log(students[student].name);
    var sprints = students[student]['sprints'];
    var sumHse = 0;
    for (sprint in sprints) {
      var hseMark = sprints[sprint]['score']['hse'];
      sumHse += hseMark;
      // console.log(hseMark);
    }
    // console.log(sprints.length); 
    var hseAverage = Math.ceil(sumHse / sprints.length);
    // console.log(hseAverage); 
    studentsHseAverages.push([students[student].name, hseAverage]);
    if (hseAverage >= 840) {
      studentsAboveAverage += 1;
    }
  }
  totalStudents += students.length;
  console.log(studentsHseAverages);
  // console.log(studentsAboveAvaragePerGeneration);
  console.log(studentsAboveAverage);
  console.log(totalStudents);
  var percentual = Math.round((studentsAboveAverage * 100) / totalStudents);
  console.log(percentual);
  // var notas = document.createElement("p");
  // notas.textContent = percentual;
  // testePrint.append(notas);
  return studentsHseAverages;
}

function enrollment() {
  var place = localMenu.value;
  var generation = generationMenu.value;
  var seatEnrollment = [];
  var students = data[place][generation]['students'];
  console.log(students);
  var activeStudents = 0;
  var inactiveStudents = 0;
  var activity = [];
  var inactivity = [];
  var generationEnrollment = [];
  console.log(generation);
  for (student in students) {
    var totalStudents = students.length;
    console.log(students[student].name);
    console.log(students[student].active);
    if (students[student].active === true) {
      activeStudents += 1;
      activity.push(students[student].name);
    } else {
      inactiveStudents += 1;
      inactivity.push(students[student].name);
    }
    generationEnrollment = [activeStudents, inactiveStudents];
  }
  console.log(totalStudents);
  console.log(activity);
  console.log(inactivity);
  console.log(activeStudents);
  var array = [["concluintes", activeStudents], ["desistentes", inactiveStudents]];
  console.log(array);
  console.log(inactiveStudents);
  console.log(generationEnrollment);
  seatEnrollment.push(generationEnrollment);
  return array;
}


// ============
// FALTA UM GRÁFICO AQUI
// ============



function studentsSatisfaction(){
  var place = localMenu.value;
  var generation = generationMenu.value;

  var ratings = data[place][generation]['ratings'];
  var noCumpleAll = [];
  var cumpleAll = [];
  var superaAll = [];
  var satisfaction = [];
  var sumNoCumple = 0;
  var sumCumple = 0;
  var sumSupera = 0;
  var sumCumplePlusSupera = 0;

  for(r in ratings){
    var student = ratings[r]['student'];
    for(s in student){
    var noCumple = student['no-cumple'];
    var cumple = student['cumple'];
    var supera = student['supera'];
    }
    noCumpleAll.push(noCumple);
    cumpleAll.push(cumple);
    superaAll.push(supera);
    console.log(generation, student);
  }
  console.log(generation, "noCumple", noCumpleAll);
  console.log(generation, "cumple", cumpleAll);
  console.log(generation, "supera", superaAll);

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
  satisfaction.push(["Satisfeitas", sumCumplePlusSupera], ["Insatisfeitas", sumNoCumple]);

  console.log(generation, "sum noCumple", sumNoCumple);
  console.log(generation, "sum cumple", sumCumple);
  console.log(generation, "sum supera", sumSupera);
  console.log(generation, "cumple+supera nocumple", satisfaction);
  return satisfaction;
}


function netPromoterScore(){
  var place = localMenu.value;
  var generation = generationMenu.value;

  var ratings = data[place][generation]['ratings'];
  var promotersAll = [];
  var passiveAll = [];
  var detractorsAll = [];
  var sprintNPS = [];
  var sprintCountNPS = [];

  for(r in ratings){
    var netPromoterScores = ratings[r]['nps'];
    var sprint = ratings[r]['sprint'];
  

    for(n in netPromoterScores){
      var promoters = netPromoterScores['promoters'];
      var passive = netPromoterScores['passive'];
      var detractors = netPromoterScores['detractors'];
      var countNPS = promoters - detractors;
    }
    promotersAll.push(promoters);
    passiveAll.push(passive);
    detractorsAll.push(detractors);
    sprintNPS.push(countNPS);
    sprintCountNPS.push(["Sprint " + sprint.toString(), countNPS]);
  }
  // console.log(generation, "NPS Por Sprint", sprintCountNPS);

  var sumPromoters = 0;
  var sumPassive = 0;
  var sumDetractors = 0;
  var sumAll = 0;
  var meanNPS = 0;
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
  meanNPS = totalNPS / sprintNPS.length;

  percentagePromoters = (sumPromoters * 100) / sumAll;
  percentagePassive = (sumPassive * 100) / sumAll;
  percentageDetractors = (sumDetractors * 100) / sumAll;

  return sprintCountNPS;

  // console.log(generation, "sum promoters", sumPromoters);
  // console.log(generation, "sum passive", sumPassive);
  // console.log(generation, "sum detractors", sumDetractors);
  // console.log(generation, "sumAll", sumAll);
  // console.log(generation, "nps: promoters - detractors", totalNPS);
  // console.log(generation, "meanNPS", meanNPS);
  //
  // console.log(generation, "ppercentage promoters", percentagePromoters);
  // console.log(generation, "percentage passive", percentagePassive);
  // console.log(generation, "percentage detractors", percentageDetractors);
}


function meanMentors(){
  var place = localMenu.value;
  var generation = generationMenu.value;
  var ratings = data[place][generation]['ratings'];
  var result = [];
  var entry = [];
  var sprints = [];
  var points = [];
  var generationMean = [];
  var placeMentorsEntrys = [];
  var placeMentorsMean = [];

  for(r in ratings){
    var mentors = ratings[r]['teacher'];
    var sprint = ratings[r]['sprint'];
    entry.push(mentors);
    sprints.push(sprint);
    points.push(["Sprint " + sprint.toString(), mentors]);
  }

  var sum = 0;
  var mean = 0;
  for (scores in entry) {
    sum += entry[scores];
    mean = sum / entry.length;
  }

  for (p of points) {
  result.push(p);
  }

  generationMean.push(Number(mean.toFixed(1)));
  placeMentorsEntrys.push(generation, entry);
  placeMentorsMean.push([generation, mean]);

  console.log(place, generation, result);
  return result;
}


function meanJedi(){
  var place = localMenu.value;
  var generation = generationMenu.value;
  var ratings = data[place][generation]['ratings'];
  var result = [];
  var entry = [];
  var sprints = [];
  var points = [];
  var generationMean = [];
  var placeJediEntrys = [];
  var placeJediMean = [];

  for(r in ratings){
    var jedi = ratings[r]['jedi'];
    var sprint = ratings[r]['sprint'];
    entry.push(jedi.toFixed(1));
    sprints.push(sprint);
    points.push(["Sprint " + sprint.toString(), jedi]);
  }

  var sum = 0;
  var mean = 0;
  for (scores in entry) {
    sum += entry[scores];
    mean = sum / entry.length;
  }

  for (p of points) {
  result.push(p);
  }

  generationMean.push(Number(mean.toFixed(1)));
  placeJediEntrys.push(generation, entry);
  placeJediMean.push([generation, mean]);

  console.log(place, generation, result);
  return result;
}


function drawBasic() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'aluna');
  data.addColumn('number', 'notas');
  data.addRows(notas());
  var options = {
    'title': 'Alunas acima da média em todos os sprints',
    'legend': { position: 'end', maxLines: 2 },
    'chartArea': {top: 50, width:'60%',height:'60%'},
    'hAxis': {
      title: 'alunas',
      minValue: 0,
      // maxValue: 20,
    },
    'vAxis': {
      title: 'notas',
      minValue: 0,
      maxValue: 15,
      // ticks: [0,2,4,6,8,10,12,14,16], 
      gridlines: {count: 10}
    },
    'width': 400,
    'height': 300, 
    'colors': ['#FCC9E2']
  };

  var chart = new google.visualization.ColumnChart(
  document.getElementById('tech-skills'));
  chart.draw(data, options);



  var data1 = new google.visualization.DataTable();
  data1.addColumn('string', 'aluna');
  data1.addColumn('number', 'notas');
  data1.addRows(notas1());
  var options1 = {
    'title': 'Alunas acima da média em todos os sprints',
    'legend': { position: 'end', maxLines: 2 },
    'chartArea': {top: 50, width:'60%',height:'60%'},
    'hAxis': {
      title: 'alunas',
      minValue: 0,
      // maxValue: 20,
    },
    'vAxis': {
      title: 'notas',
      minValue: 0,
      maxValue: 15,
      // ticks: [0,2,4,6,8,10,12,14,16], 
      gridlines: {count: 10}
    },
    'width': 400,
    'height': 300, 
    'colors': ['#FCC9E2']
  };
  var chart1 = new google.visualization.ColumnChart(
  document.getElementById('hse-skills'));
  chart1.draw(data1, options1);



  var data2 = new google.visualization.DataTable();
  data2.addColumn('string','situação');
  data2.addColumn('number','quantidade');
  data2.addRows(enrollment());
  var options2 = {
    'title': 'Envolvimento',
    'pieHole': 0.4,
    'pieSliceText': 'percentage',
    'pieSliceTextStyle': {color: '#404040', fontSize: 15 },
    'width': 280,
    'height': 160, 
    'colors': ['#FCFF83', '#FCC9E2']
  };
  var chart2 = new google.visualization.PieChart(document.getElementById('enrollment'));
  chart2.draw(data2, options2);



// ============
// FALTA UM GRÁFICO AQUI
// ============


  var data4 = new google.visualization.DataTable();
  data4.addColumn('string','sprint');
  data4.addColumn('number','entry');
  data4.addRows(studentsSatisfaction());

  // Set chart options
  var options4 = {
    'title': 'Satisfação das Alunas',
    'pieHole': 0.4,
    'pieSliceText': 'percentage',
    'pieSliceTextStyle': {color: '#000', fontSize: 11},
    'legend': {alignment: 'center', position: 'bottom'},
    'titleTextStyle': {fontSize:18},
    'colors': ['#FCFF83', '#FCC9E2'],
    'width': 280,
    'height': 130
  };
  // Instantiate and draw our chart, passing in some options.
  var chart4 = new google.visualization.PieChart(document.getElementById('students-satisfaction'));
  chart4.draw(data4, options4);



  var data5 = new google.visualization.DataTable();
  data5.addColumn('string','sprint');
  data5.addColumn('number','Nota');
  data5.addRows(netPromoterScore());

  // Set chart options
  var options5 = {
    'title': 'Net Promoter Score',
    // 'legend': 'none',
    'bar': {groupWidth: '30%'},
    'legend': {alignment: 'center', position: 'bottom'},
    'titleTextStyle': {fontSize:18},
    'width': 280,
    'height': 130,
    'colors': ['#FCFF83', '#FCC9E2'],
    'vAxis': {title: 'Valor das Notas', ticks: [0,20,40,60,80,100], maxValue: 100}
  };
  // Instantiate and draw our chart, passing in some options.
  var chart5 = new google.visualization.ColumnChart(document.getElementById('net-promoter-score'));
  chart5.draw(data5, options5);



  var data6 = new google.visualization.DataTable();
  data6.addColumn('string','sprint');
  data6.addColumn('number','Nota');
  data6.addRows(meanMentors());

  // Set chart options
  var options6 = {
    'title': 'Pontuação dos Jedi\'s',
    // 'legend': 'none',
    'bar': {groupWidth: '30%'},
    'legend': {alignment: 'center', position: 'bottom'},
    'titleTextStyle': {fontSize:18},
    'width': 280,
    'height': 130,
    'colors': ['#FCFF83', '#FCC9E2'],
    'vAxis': {title: 'Valor das Notas', ticks: [0,1,2,3,4,5], maxValue: 5}
  };
  // Instantiate and draw our chart, passing in some options.
  var chart6 = new google.visualization.ColumnChart(document.getElementById('teaching-rating'));
  chart6.draw(data6, options6);




  var data7 = new google.visualization.DataTable();
  data7.addColumn('string','sprint');
  data7.addColumn('number','Nota');
  data7.addRows(meanJedi());

  // Set chart options
  var options7 = {
    'title': 'Pontuação dos Jedi\'s',
    // 'legend': 'none',
    'bar': {groupWidth: '30%'},
    'legend': {alignment: 'center', position: 'bottom'},
    'titleTextStyle': {fontSize:18},
    'width': 280,
    'height': 130,
    'colors': ['#FCFF83', '#FCC9E2'],
    'vAxis': {title: 'Valor das Notas', ticks: [0,1,2,3,4,5], maxValue: 5}
  };
  // Instantiate and draw our chart, passing in some options.
  var chart7 = new google.visualization.ColumnChart(document.getElementById('jedi-rating'));
  chart7.draw(data7, options7);
}


