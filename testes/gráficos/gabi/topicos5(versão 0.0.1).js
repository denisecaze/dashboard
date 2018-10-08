var localMenu = document.getElementById("local-menu");
var generationMenu = document.getElementById("generation-menu");

window.onload = loadMenuLocal();
localMenu.addEventListener("change", loadMenuGeneration);
generationMenu.addEventListener("change", drawBasic);

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(netPromoterScore);


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


function drawBasic() {
  var data = new google.visualization.DataTable();
  data.addColumn('string','sprint');
  data.addColumn('number','Nota');
  data.addRows(netPromoterScore());

// Set chart options
  var options = {'title': 'Net Promoter Score',
                // 'legend': 'none',
                'bar': {groupWidth: '30%'},
                'legend': {alignment: 'center', position: 'bottom'},
                'titleTextStyle': {fontSize:18},
                'width': 450,
                'height': 300,
                'colors': ['#FCFF83', '#FCC9E2'],
                vAxis: {title: 'Valor das Notas', ticks: [0,20,40,60,80,100], maxValue: 100}
              };
// Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('net-promoter-score'));
  chart.draw(data, options);
}
