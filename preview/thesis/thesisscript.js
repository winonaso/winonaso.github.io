google.charts.load("current", {packages:["corechart", "bar"]});
      google.charts.setOnLoadCallback(drawsmartphoneChart);
      google.charts.setOnLoadCallback(drawsnapchatChart);
      google.charts.setOnLoadCallback(drawfaceChart);
      google.charts.setOnLoadCallback(drawwhattowearChart);
      google.charts.setOnLoadCallback(drawpeopledidinlineChart);



      function drawsmartphoneChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Percent of Responses'],
          ['Read articles/websites on my phone', 18],
          ['Browse social media', 31],
          ['Play phone games', 3],
          ['SMS/Messaging friends', 35],
          ['Take photos', 2],
          ['Other', 9]
        ]);

        var options = {
          title: 'What do you normally use your Smartphone for?',
          pieHole: 0.4,
          backgroundColor: '#ecf0f1',
        };

        var chart = new google.visualization.PieChart(document.getElementById('smartphoneuse'));
        chart.draw(data, options);
      }
      function drawsnapchatChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Percent of Responses'],
          ['Uses Bitmoji & Snapchat', 34],
          ['Uses Snapchat only', 33],
          ['Does not use either', 33],
        ]);

        var options = {
          title: 'Snapchat and Bitmoji Usage',
          pieHole: 0.4,
          backgroundColor: '#ecf0f1',
        };

        var chart = new google.visualization.PieChart(document.getElementById('snapchatuse'));
        chart.draw(data, options);
      }
      function drawfaceChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Percent of Responses'],
          ['Ideal facial features', 0],
          ['Replicate my own facial features', 95],
          ['Random/for fun', 0],
          ['Other', 5],
        ]);

        var options = {
          title: 'How did you decide how your face would look like?',
          pieHole: 0.4,
          backgroundColor: '#ecf0f1',
        };

        var chart = new google.visualization.PieChart(document.getElementById('facechart'));
        chart.draw(data, options);
      }
      function drawwhattowearChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Percent of Responses'],
          ['Look through all clothing options', 37],
          ['Think about personal style and look for something similar', 79],
          ['Random/for fun', 16],
          ['Other', 5],
        ]);

        var options = {
          title: 'How did you decide what to wear?',
          pieHole: 0.4,
          backgroundColor: '#ecf0f1',
        };

        var chart = new google.visualization.PieChart(document.getElementById('whattowearchart'));
        chart.draw(data, options);
      }
      function drawpeopledidinlineChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Percent of Responses'],
          ['Phone', 37],
          ['Railings', 14],
          ['Watching instructional video', 12],
          ['Self-created entertainment', 10],
          ['Park scenery/props/characters', 9],
          ['Eating', 5],
          ['Resting', 5],
          ['Playing with objects', 5],
          ['Paper map', 3]
        ]);

        var options = {
          title: 'What did people do in line?',
          pieHole: 0.4,
          backgroundColor: '#ecf0f1',
        };

        var chart = new google.visualization.PieChart(document.getElementById('whatpeopledidchart'));
        chart.draw(data, options);
      }