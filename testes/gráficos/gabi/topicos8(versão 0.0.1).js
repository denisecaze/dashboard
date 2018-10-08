var localMenu = document.getElementById("local-menu");
var generationMenu = document.getElementById("generation-menu");

window.onload = loadMenuLocal();
localMenu.addEventListener("change", loadMenuGeneration);
generationMenu.addEventListener("change", drawBasic);

google.charts.load('current', {packages: ['corechart', 'bar']});
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
  data.addColumn('string','sprint');
  data.addColumn('number','Nota');
  data.addRows(meanJedi());

// Set chart options
  var options = {'title': 'Pontuação dos Jedi\'s',
                // 'legend': 'none',
                'bar': {groupWidth: '30%'},
                'legend': {alignment: 'center', position: 'bottom'},
                'titleTextStyle': {fontSize:18},
                'width': 450,
                'height': 300,
                'colors': ['#FCFF83', '#FCC9E2'],
                vAxis: {title: 'Valor das Notas', ticks: [0,1,2,3,4,5], maxValue: 5}
              };
// Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('jedi-rating'));
  chart.draw(data, options);
}
