var localMenu = document.getElementById("local-menu");
var generationMenu = document.getElementById("generation-menu");

window.onload = loadMenuLocal();
localMenu.addEventListener("change", loadMenuGeneration);
generationMenu.addEventListener("change", drawBasic);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(studentsSatisfaction);


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


function drawBasic() {
  var data = new google.visualization.DataTable();
  data.addColumn('string','sprint');
  data.addColumn('number','entry');
  data.addRows(studentsSatisfaction());

// Set chart options
  var options = {'title': 'Satisfação das Alunas',
                'pieHole': 0.4,
                'pieSliceText': 'percentage',
                'pieSliceTextStyle': {color: '#000', fontSize: 11},
                'legend': {alignment: 'center', position: 'bottom'},
                'titleTextStyle': {fontSize:18},
                'colors': ['#FCFF83', '#FCC9E2'],
                'width': 450,
                'height': 300};
// Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('students-satisfaction'));
  chart.draw(data, options);
}
